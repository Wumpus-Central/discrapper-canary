n.d(t, { Z: () => m });
var r = n(255367),
    i = n(73800),
    l = n(652844),
    a = n(747906),
    o = n(481060),
    s = n(40851),
    c = n(906732),
    u = n(628581),
    d = n(522651),
    p = n(378441),
    h = n(871499),
    f = n(981631);
function m(e) {
    var { selfMute: t, serverMute: n, suppress: m, centerButton: g = !1, awaitingRemote: b, onMouseEnter: _, onMouseLeave: C, onClick: x } = e,
        y = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                i = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        r,
                        i = {},
                        l = Object.keys(e);
                    for (r = 0; r < l.length; r++) (n = l[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
                    return i;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var l = Object.getOwnPropertySymbols(e);
                for (r = 0; r < l.length; r++) (n = l[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
            }
            return i;
        })(e, ['selfMute', 'serverMute', 'suppress', 'centerButton', 'awaitingRemote', 'onMouseEnter', 'onMouseLeave', 'onClick']);
    let { parentAnalyticsLocation: v } = (0, c.ZP)(),
        j = t || n || m,
        O = g ? h.d : h.Z,
        E = (0, u.Z)(t, n, m, b),
        I = (0, l.O)(j ? 'unmute' : 'mute'),
        S = (0, a.P)(j ? 'unmute' : 'mute'),
        { activeVoice: P } = (0, p.o)(),
        Z = null != P,
        N = Z ? S : I,
        { events: T, play: A } = N;
    i.useEffect(() => () => A(), [A, j]);
    let w = N.Component;
    return (
        (0, s.bp)() === f.IlC.POPOUT && (w = Z ? (j ? o.TYr : o.x8H) : j ? o.nRN : o.S6n),
        (0, r.jsx)(
            O,
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
                            var r;
                            (r = n[t]),
                                t in e
                                    ? Object.defineProperty(e, t, {
                                          value: r,
                                          enumerable: !0,
                                          configurable: !0,
                                          writable: !0
                                      })
                                    : (e[t] = r);
                        });
                }
                return e;
            })(
                {
                    iconComponent: w,
                    isTrayButton: !0,
                    caretColor: j ? 'red' : 'primaryDark',
                    color: j ? 'red' : void 0,
                    label: E,
                    onMouseEnter: (e) => {
                        null == _ || _(e), T.onMouseEnter();
                    },
                    onMouseLeave: (e) => {
                        null == C || C(e), T.onMouseLeave();
                    },
                    onClick: (e) => {
                        null == x || x(e), (0, d.v)(v, d.d.MIC, t);
                    }
                },
                y
            )
        )
    );
}
