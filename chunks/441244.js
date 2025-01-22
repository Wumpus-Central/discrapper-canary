var i = r(47120);
var a = r(411104);
var o = r(200651),
    s = r(192379),
    l = r(902704),
    u = r(250919);
function c(e, n, r) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = r),
        e
    );
}
function d(e, n, r) {
    return null != r && r.forwardRef ? p(e, n) : h(e, n);
}
function f(e) {
    var n, r;
    return null !== (r = null !== (n = e.displayName) && void 0 !== n ? n : e.name) && void 0 !== r ? r : '<Unknown>';
}
function p(e, n) {
    return (r) => {
        var i;
        let a = 'FluxContainer('.concat(f(r), ')');
        class d extends (i = s.Component) {
            componentDidMount() {
                this.listener.attach(a);
            }
            componentWillUnmount() {
                this.listener.detach(), this.memoizedGetStateFromStores.clear();
            }
            render() {
                let { forwardedConnectStoresRef: e, childProps: n } = this.props,
                    i = this.memoizedGetStateFromStores(n);
                return (0, o.jsx)(r, {
                    ref: e,
                    ...n,
                    ...i
                });
            }
            constructor(...r) {
                super(...r),
                    c(this, 'memoizedGetStateFromStores', _(n)),
                    c(
                        this,
                        'listener',
                        new u.F(e, () => {
                            let e = this.memoizedGetStateFromStores.getCachedResult(this.props.childProps);
                            if (!(null != e && (this.memoizedGetStateFromStores.clear(), (0, l.Z)(this.memoizedGetStateFromStores(this.props.childProps), e)))) this.forceUpdate();
                        })
                    );
            }
        }
        c(d, 'displayName', a);
        let p = s.forwardRef((e, n) =>
            (0, o.jsx)(d, {
                childProps: e,
                forwardedConnectStoresRef: n
            })
        );
        return (p.displayName = 'ForwardRef('.concat(a, ')')), p;
    };
}
function h(e, n) {
    return (r) => {
        var i;
        let a = 'FluxContainer('.concat(f(r), ')');
        class d extends (i = s.Component) {
            componentDidMount() {
                this.listener.attach(a);
            }
            componentWillUnmount() {
                this.listener.detach(), this.memoizedGetStateFromStores.clear();
            }
            render() {
                let e = this.memoizedGetStateFromStores(this.props);
                return (0, o.jsx)(r, {
                    ...this.props,
                    ...e
                });
            }
            constructor(...r) {
                super(...r),
                    c(this, 'memoizedGetStateFromStores', _(n)),
                    c(
                        this,
                        'listener',
                        new u.F(e, () => {
                            let e = this.memoizedGetStateFromStores.getCachedResult(this.props);
                            if (!(null != e && (this.memoizedGetStateFromStores.clear(), (0, l.Z)(this.memoizedGetStateFromStores(this.props), e)))) this.forceUpdate();
                        })
                    );
            }
        }
        return c(d, 'displayName', a), d;
    };
}
function _(e) {
    let n = null,
        r = null,
        i = (e) => (null != n && null != r && (0, l.Z)(n, e) ? r : null != n && null != r && (0, l.Z)(n, e) ? ((n = e), r) : null),
        a = (a) => {
            let o = i(a);
            return null != o ? o : (r = e((n = a)));
        };
    return (
        (a.getCachedResult = i),
        (a.clear = () => {
            (n = null), (r = null);
        }),
        a
    );
}
n.Z = d;
