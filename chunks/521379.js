n.d(t, { Z: () => d }), n(301563), n(757143);
var r,
    i = n(200651),
    o = n(192379),
    a = n(442837),
    l = n(388905),
    s = n(108427),
    c = n(559786);
function u(e, t, n) {
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
a.ZP.initialize();
class d extends (r = o.PureComponent) {
    componentDidMount() {
        (0, s.e)('account_revert');
    }
    render() {
        let { token: e } = this.props.match.params;
        return (0, i.jsx)(l.ZP, {
            style: { padding: 0 },
            children: (0, i.jsx)(
                c.Z,
                (function (e) {
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
                                u(e, t, n[t]);
                            });
                    }
                    return e;
                })(
                    {
                        width: 464,
                        token: e
                    },
                    this.props
                )
            )
        });
    }
}
u(d, 'defaultProps', {
    transitionTo: (e) => n.g.location.assign(e),
    replaceWith: (e) => n.g.location.replace(e)
});
