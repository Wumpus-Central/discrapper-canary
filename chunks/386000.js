n.d(t, { Z: () => b });
var r = n(255367),
    i = n(73800),
    l = n(652844),
    o = n(747906),
    a = n(481060),
    s = n(40851),
    c = n(906732),
    u = n(628581),
    d = n(522651),
    p = n(861254),
    h = n(221241),
    f = n(378441),
    m = n(871499),
    g = n(981631);
function b(e) {
    var { selfMute: t, serverMute: n, suppress: b, centerButton: _ = !1, awaitingRemote: y, onMouseEnter: C, onMouseLeave: x, onClick: v } = e,
        j = (function (e, t) {
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
    let { parentAnalyticsLocation: O } = (0, c.ZP)(),
        { mode: E } = (0, p.ZP)({ location: 'MicButton' }),
        { squareButtonsEnabled: I, coloredIconsEnabled: P } = (0, h.Z)({ location: 'MuteButton' }),
        S = t || n || b,
        Z = _ ? m.d : m.Z,
        N = (0, u.Z)(t, n, b, y, E === p.BK.GroupedButtonsRedMic || I),
        T = (0, l.O)(S ? 'unmute' : 'mute'),
        A = (0, o.P)(S ? 'unmute' : 'mute'),
        { activeVoice: w } = (0, f.o)(),
        R = null != w,
        k = R ? A : T,
        { events: M, play: L } = k;
    i.useEffect(() => () => L(), [L, S]);
    let D = k.Component;
    (0, s.bp)() === g.IlC.POPOUT && (D = R ? (S ? a.TYr : a.x8H) : S ? a.nRN : a.S6n);
    let U = (I || E === p.BK.GroupedButtonsRedMic) && S ? 'red' : void 0,
        B = E !== p.BK.GroupedButtonsRedMic && !I;
    return (0, r.jsx)(
        Z,
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
                isActive: !!B && !S,
                iconComponent: D,
                caretColor: P && S ? 'red' : 'primaryDark',
                color: U,
                label: N,
                onMouseEnter: (e) => {
                    null == C || C(e), M.onMouseEnter();
                },
                onMouseLeave: (e) => {
                    null == x || x(e), M.onMouseLeave();
                },
                onClick: (e) => {
                    null == v || v(e), (0, d.v)(O, d.d.MIC, t);
                }
            },
            j
        )
    );
}
