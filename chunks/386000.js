n.d(t, { Z: () => C });
var r = n(200651),
    i = n(192379),
    l = n(609784),
    o = n(782877),
    a = n(331650),
    s = n(278724),
    c = n(652844),
    u = n(747906),
    d = n(40851),
    p = n(906732),
    h = n(628581),
    f = n(522651),
    m = n(861254),
    g = n(221241),
    b = n(378441),
    y = n(871499),
    _ = n(981631);
function C(e) {
    var { selfMute: t, serverMute: n, suppress: C, centerButton: x = !1, awaitingRemote: v, onMouseEnter: j, onMouseLeave: O, onClick: E } = e,
        N = (function (e, t) {
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
    let { parentAnalyticsLocation: I } = (0, p.ZP)(),
        { mode: P } = (0, m.ZP)({ location: 'MicButton' }),
        { squareButtonsEnabled: S, coloredIconsEnabled: Z } = (0, g.Z)({ location: 'MuteButton' }),
        T = t || n || C,
        A = x ? y.d : y.Z,
        w = (0, h.Z)(t, n, C, v, P === m.BK.GroupedButtonsRedMic || S),
        R = (0, c.O)(T ? 'unmute' : 'mute'),
        k = (0, u.P)(T ? 'unmute' : 'mute'),
        { activeVoice: M } = (0, b.o)(),
        L = null != M,
        D = L ? k : R,
        { events: W, play: U } = D;
    i.useEffect(() => () => U(), [U, T]);
    let B = D.Component;
    (0, d.bp)() === _.IlC.POPOUT && (B = L ? (T ? o.T : l.x) : T ? s.n : a.S);
    let G = (S || P === m.BK.GroupedButtonsRedMic) && T ? 'red' : void 0,
        F = P !== m.BK.GroupedButtonsRedMic && !S;
    return (0, r.jsx)(
        A,
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
                isActive: !!F && !T,
                iconComponent: B,
                caretColor: Z && T ? 'red' : 'primaryDark',
                color: G,
                label: w,
                onMouseEnter: (e) => {
                    null == j || j(e), W.onMouseEnter();
                },
                onMouseLeave: (e) => {
                    null == O || O(e), W.onMouseLeave();
                },
                onClick: (e) => {
                    null == E || E(e), (0, f.v)(I, f.d.MIC, t);
                }
            },
            N
        )
    );
}
