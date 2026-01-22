n.d(t, {
    A: () => h,
}),
    n(747238);
var r,
    i = n(627968),
    s = n(64700),
    l = n(311907),
    a = n(854378),
    o = n(976860),
    c = n(210714),
    u = n(58013);

function d(e, t, n) {
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
l.Ay.initialize();
class h extends (r = s.PureComponent) {
    componentDidMount() {
        (0, c.d)("account_revert");
    }
    render() {
        let { token: e } = this.props.match.params;
        return (0, i.jsx)(a.Ay, {
            style: {
                padding: 0,
            },
            children: (0, i.jsx)(
                u.A,
                (function (e) {
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
                                d(e, t, n[t]);
                            });
                    }
                    return e;
                })(
                    {
                        width: 464,
                        token: e,
                    },
                    this.props,
                ),
            ),
        });
    }
}
d(h, "defaultProps", {
    transitionTo: o.pX,
    replaceWith: o.bG,
});
