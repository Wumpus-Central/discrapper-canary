"use strict";
n.d(t, { A: () => o });
var r = n(627968),
    i = n(64700),
    a = n(52133),
    s = n(968441);
let o = function (e, t, n) {
    return null != n && n.forwardRef ? u(e, t) : c(e, t);
};
function l(e) {
    return e.displayName ?? e.name ?? "<Unknown>";
}
function u(e, t) {
    return (n) => {
        let o = `FluxContainer(${l(n)})`;
        class u extends i.Component {
            static displayName = o;
            memoizedGetStateFromStores = d(t);
            listener = new s.r(e, () => {
                let e = this.memoizedGetStateFromStores.getCachedResult(this.props.childProps);
                (null != e &&
                    (this.memoizedGetStateFromStores.clear(),
                    (0, a.A)(this.memoizedGetStateFromStores(this.props.childProps), e))) ||
                    this.forceUpdate();
            });
            componentDidMount() {
                this.listener.attach(o);
            }
            componentWillUnmount() {
                this.listener.detach(), this.memoizedGetStateFromStores.clear();
            }
            render() {
                let { forwardedConnectStoresRef: e, childProps: t } = this.props,
                    i = this.memoizedGetStateFromStores(t);
                return (0, r.jsx)(n, { ref: e, ...t, ...i });
            }
        }
        let c = i.forwardRef((e, t) => (0, r.jsx)(u, { childProps: e, forwardedConnectStoresRef: t }));
        return (c.displayName = `ForwardRef(${o})`), c;
    };
}
function c(e, t) {
    return (n) => {
        let o = `FluxContainer(${l(n)})`;
        class u extends i.Component {
            static displayName = o;
            memoizedGetStateFromStores = d(t);
            listener = new s.r(e, () => {
                let e = this.memoizedGetStateFromStores.getCachedResult(this.props);
                (null != e &&
                    (this.memoizedGetStateFromStores.clear(),
                    (0, a.A)(this.memoizedGetStateFromStores(this.props), e))) ||
                    this.forceUpdate();
            });
            componentDidMount() {
                this.listener.attach(o);
            }
            componentWillUnmount() {
                this.listener.detach(), this.memoizedGetStateFromStores.clear();
            }
            render() {
                let e = this.memoizedGetStateFromStores(this.props);
                return (0, r.jsx)(n, { ...this.props, ...e });
            }
        }
        return u;
    };
}
function d(e) {
    let t = null,
        n = null,
        r = (e) =>
            null != t && null != n && (0, a.A)(t, e)
                ? n
                : null != t && null != n && (0, a.A)(t, e)
                  ? ((t = e), n)
                  : null,
        i = (i) => {
            let a = r(i);
            return null != a ? a : (n = e((t = i)));
        };
    return (
        (i.getCachedResult = r),
        (i.clear = () => {
            (t = null), (n = null);
        }),
        i
    );
}
