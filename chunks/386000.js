n.d(t, { Z: () => u });
var r = n(255367),
    i = n(73800),
    l = n(906732),
    o = n(628581),
    a = n(522651),
    s = n(8404),
    c = n(871499);
function u(e) {
    var { selfMute: t, serverMute: n, suppress: u, centerButton: d = !1, awaitingRemote: p, onMouseEnter: h, onMouseLeave: f, onClick: m } = e,
        g = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                i = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        r,
                        i = {},
                        l = Object.keys(e);
                    for (r = 0; r < l.length; r++) ((n = l[r]), t.indexOf(n) >= 0 || (i[n] = e[n]));
                    return i;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var l = Object.getOwnPropertySymbols(e);
                for (r = 0; r < l.length; r++) ((n = l[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]));
            }
            return i;
        })(e, ['selfMute', 'serverMute', 'suppress', 'centerButton', 'awaitingRemote', 'onMouseEnter', 'onMouseLeave', 'onClick']);
    let { parentAnalyticsLocation: b } = (0, l.ZP)(),
        _ = t || n || u,
        y = d ? c.d : c.Z,
        C = (0, o.Z)(t, n, u, p),
        { events: x, play: v, Component: j } = (0, s.b)(_);
    return (
        i.useEffect(() => () => v(), [v, _]),
        (0, r.jsx)(
            y,
            (function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    ('function' == typeof Object.getOwnPropertySymbols &&
                        (r = r.concat(
                            Object.getOwnPropertySymbols(n).filter(function (e) {
                                return Object.getOwnPropertyDescriptor(n, e).enumerable;
                            })
                        )),
                        r.forEach(function (t) {
                            var r;
                            ((r = n[t]),
                                t in e
                                    ? Object.defineProperty(e, t, {
                                          value: r,
                                          enumerable: !0,
                                          configurable: !0,
                                          writable: !0
                                      })
                                    : (e[t] = r));
                        }));
                }
                return e;
            })(
                {
                    iconComponent: j,
                    isTrayButton: !0,
                    caretColor: _ ? 'red' : 'primaryDark',
                    color: _ ? 'red' : void 0,
                    label: C,
                    onMouseEnter: (e) => {
                        (null == h || h(e), x.onMouseEnter());
                    },
                    onMouseLeave: (e) => {
                        (null == f || f(e), x.onMouseLeave());
                    },
                    onClick: (e) => {
                        (null == m || m(e), (0, a.v)(b, a.d.MIC, t));
                    }
                },
                g
            )
        )
    );
}
