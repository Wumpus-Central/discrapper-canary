n.d(t, { Z: () => b });
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
    f = n(378441),
    m = n(871499),
    g = n(981631);
function b(e) {
    var { selfMute: t, serverMute: n, suppress: b, centerButton: _ = !1, awaitingRemote: C, onMouseEnter: v, onMouseLeave: y } = e,
        x = (function (e, t) {
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
    let { mode: j } = (0, h.ZP)({ location: 'MicButton' }),
        O = t || n || b,
        N = _ ? m.d : m.Z,
        E = (0, p.Z)(t, n, b, C, j === h.BK.GroupedButtonsRedMic),
        P = (0, c.O)(O ? 'unmute' : 'mute'),
        I = (0, u.P)(O ? 'unmute' : 'mute'),
        { activeVoice: S } = (0, f.o)(),
        Z = null != S,
        T = Z ? I : P,
        { events: A, play: w } = T;
    i.useEffect(() => () => w(), [w, O]);
    let R = T.Component;
    (0, d.bp)() === g.IlC.POPOUT && (R = Z ? (O ? o.T : l.x) : O ? s.n : a.S);
    let k = j === h.BK.GroupedButtonsRedMic && O ? 'red' : void 0,
        M = j !== h.BK.GroupedButtonsRedMic;
    return (0, r.jsx)(
        N,
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
                isActive: !!M && !O,
                iconComponent: R,
                ignoreColorForCaret: !0,
                color: k,
                label: E,
                onMouseEnter: (e) => {
                    null == v || v(e), A.onMouseEnter();
                },
                onMouseLeave: (e) => {
                    null == y || y(e), A.onMouseLeave();
                }
            },
            x
        )
    );
}
