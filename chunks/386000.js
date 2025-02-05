n.d(t, { Z: () => f });
var i = n(200651),
    l = n(192379),
    a = n(691324),
    r = n(331650),
    s = n(278724),
    o = n(652844),
    c = n(40851),
    d = n(628581),
    u = n(44315),
    h = n(861254),
    p = n(871499),
    m = n(981631);
function f(e) {
    let { selfMute: t, serverMute: n, suppress: f, centerButton: g = !1, awaitingRemote: _, onMouseEnter: C, onMouseLeave: x, ...v } = e,
        { mode: E } = (0, h.ZP)({ location: 'MicButton' }),
        I = t || n || f,
        b = g ? p.d : p.Z,
        Z = (0, d.Z)(t, n, f, _, E === h.BK.GroupedButtonsRedMic),
        { Component: N, play: T, events: S } = (0, o.O)(I ? 'unmute' : 'mute');
    l.useEffect(() => () => T(), [T, I]);
    let j = (0, c.bp)() === m.IlC.POPOUT ? (I ? s.n : r.S) : N,
        y = E === h.BK.GroupedButtonsRedMic && I ? (0, u.Lq)(a.I.RED_400) : void 0,
        A = E !== h.BK.GroupedButtonsRedMic;
    return (0, i.jsx)(b, {
        isActive: !!A && !I,
        iconComponent: j,
        iconColor: y,
        label: Z,
        onMouseEnter: (e) => {
            null == C || C(e), S.onMouseEnter();
        },
        onMouseLeave: (e) => {
            null == x || x(e), S.onMouseLeave();
        },
        ...v
    });
}
