n.d(t, { Z: () => c }), n(47120), n(411104);
var r = n(200651),
    i = n(192379),
    o = n(902704),
    a = n(250919);
function s(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function l(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                s(e, t, n[t]);
            });
    }
    return e;
}
let c = function (e, t, n) {
    return null != n && n.forwardRef ? d(e, t) : f(e, t);
};
function u(e) {
    var t, n;
    return null != (n = null != (t = e.displayName) ? t : e.name) ? n : '<Unknown>';
}
function d(e, t) {
    return (n) => {
        var c;
        let d = 'FluxContainer('.concat(u(n), ')');
        class f extends (c = i.Component) {
            componentDidMount() {
                this.listener.attach(d);
            }
            componentWillUnmount() {
                this.listener.detach(), this.memoizedGetStateFromStores.clear();
            }
            render() {
                let { forwardedConnectStoresRef: e, childProps: t } = this.props,
                    i = this.memoizedGetStateFromStores(t);
                return (0, r.jsx)(n, l({ ref: e }, t, i));
            }
            constructor(...n) {
                super(...n),
                    s(this, 'memoizedGetStateFromStores', _(t)),
                    s(
                        this,
                        'listener',
                        new a.F(e, () => {
                            let e = this.memoizedGetStateFromStores.getCachedResult(this.props.childProps);
                            (null != e && (this.memoizedGetStateFromStores.clear(), (0, o.Z)(this.memoizedGetStateFromStores(this.props.childProps), e))) || this.forceUpdate();
                        })
                    );
            }
        }
        s(f, 'displayName', d);
        let p = i.forwardRef((e, t) =>
            (0, r.jsx)(f, {
                childProps: e,
                forwardedConnectStoresRef: t
            })
        );
        return (p.displayName = 'ForwardRef('.concat(d, ')')), p;
    };
}
function f(e, t) {
    return (n) => {
        var c;
        let d = 'FluxContainer('.concat(u(n), ')');
        class f extends (c = i.Component) {
            componentDidMount() {
                this.listener.attach(d);
            }
            componentWillUnmount() {
                this.listener.detach(), this.memoizedGetStateFromStores.clear();
            }
            render() {
                let e = this.memoizedGetStateFromStores(this.props);
                return (0, r.jsx)(n, l({}, this.props, e));
            }
            constructor(...n) {
                super(...n),
                    s(this, 'memoizedGetStateFromStores', _(t)),
                    s(
                        this,
                        'listener',
                        new a.F(e, () => {
                            let e = this.memoizedGetStateFromStores.getCachedResult(this.props);
                            (null != e && (this.memoizedGetStateFromStores.clear(), (0, o.Z)(this.memoizedGetStateFromStores(this.props), e))) || this.forceUpdate();
                        })
                    );
            }
        }
        return s(f, 'displayName', d), f;
    };
}
function _(e) {
    let t = null,
        n = null,
        r = (e) => (null != t && null != n && (0, o.Z)(t, e) ? n : null != t && null != n && (0, o.Z)(t, e) ? ((t = e), n) : null),
        i = (i) => {
            let o = r(i);
            return null != o ? o : (n = e((t = i)));
        };
    return (
        (i.getCachedResult = r),
        (i.clear = () => {
            (t = null), (n = null);
        }),
        i
    );
}
