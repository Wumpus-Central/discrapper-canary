n.d(t, {
    A: () => c,
}),
    n(896048),
    n(65821);
var r = n(627968),
    i = n(64700),
    a = n(52133),
    s = n(968441);

function o(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}

function l(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                o(e, t, n[t]);
            });
    }
    return e;
}
let c = function (e, t, n) {
    return null != n && n.forwardRef ? d(e, t) : f(e, t);
};

function u(e) {
    var t, n;
    return null != (t = null != (n = e.displayName) ? n : e.name) ? t : "<Unknown>";
}

function d(e, t) {
    return (n) => {
        var c;
        let d = "FluxContainer(".concat(u(n), ")");
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
                return (0, r.jsx)(
                    n,
                    l(
                        {
                            ref: e,
                        },
                        t,
                        i,
                    ),
                );
            }
            constructor(...n) {
                super(...n),
                    o(this, "memoizedGetStateFromStores", p(t)),
                    o(
                        this,
                        "listener",
                        new s.r(e, () => {
                            let e = this.memoizedGetStateFromStores.getCachedResult(this.props.childProps);
                            (null != e &&
                                (this.memoizedGetStateFromStores.clear(),
                                (0, a.A)(this.memoizedGetStateFromStores(this.props.childProps), e))) ||
                                this.forceUpdate();
                        }),
                    );
            }
        }
        o(f, "displayName", d);
        let _ = i.forwardRef((e, t) =>
            (0, r.jsx)(f, {
                childProps: e,
                forwardedConnectStoresRef: t,
            }),
        );
        return (_.displayName = "ForwardRef(".concat(d, ")")), _;
    };
}

function f(e, t) {
    return (n) => {
        var c;
        let d = "FluxContainer(".concat(u(n), ")");
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
                    o(this, "memoizedGetStateFromStores", p(t)),
                    o(
                        this,
                        "listener",
                        new s.r(e, () => {
                            let e = this.memoizedGetStateFromStores.getCachedResult(this.props);
                            (null != e &&
                                (this.memoizedGetStateFromStores.clear(),
                                (0, a.A)(this.memoizedGetStateFromStores(this.props), e))) ||
                                this.forceUpdate();
                        }),
                    );
            }
        }
        return o(f, "displayName", d), f;
    };
}

function p(e) {
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
