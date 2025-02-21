n.d(t, { Z: () => _ });
var r = n(200651),
    i = n(192379),
    l = n(609784),
    o = n(782877),
    a = n(331650),
    s = n(278724),
    c = n(652844),
    u = n(747906),
    d = n(40851),
    p = n(628581),
    h = n(861254),
    f = n(221241),
    m = n(378441),
    g = n(871499),
    b = n(981631);
function _(e) {
    var { selfMute: t, serverMute: n, suppress: _, centerButton: C = !1, awaitingRemote: v, onMouseEnter: y, onMouseLeave: x } = e,
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
        })(e, ['selfMute', 'serverMute', 'suppress', 'centerButton', 'awaitingRemote', 'onMouseEnter', 'onMouseLeave']);
    let { mode: O } = (0, h.ZP)({ location: 'MicButton' }),
        { squareButtons: N } = (0, f.Z)({ location: 'MuteButton' }),
        E = t || n || _,
        P = C ? g.d : g.Z,
        I = (0, p.Z)(t, n, _, v, O === h.BK.GroupedButtonsRedMic),
        S = (0, c.O)(E ? 'unmute' : 'mute'),
        Z = (0, u.P)(E ? 'unmute' : 'mute'),
        { activeVoice: T } = (0, m.o)(),
        A = null != T,
        w = A ? Z : S,
        { events: R, play: k } = w;
    i.useEffect(() => () => k(), [k, E]);
    let M = w.Component;
    (0, d.bp)() === b.IlC.POPOUT && (M = A ? (E ? o.T : l.x) : E ? s.n : a.S);
    let L = (N || O === h.BK.GroupedButtonsRedMic) && E ? 'red' : void 0,
        D = O !== h.BK.GroupedButtonsRedMic && !N;
    return (0, r.jsx)(
        P,
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
                isActive: !!D && !E,
                iconComponent: M,
                caretColor: 'primaryDark',
                color: L,
                label: I,
                onMouseEnter: (e) => {
                    null == y || y(e), R.onMouseEnter();
                },
                onMouseLeave: (e) => {
                    null == x || x(e), R.onMouseLeave();
                }
            },
            j
        )
    );
}
