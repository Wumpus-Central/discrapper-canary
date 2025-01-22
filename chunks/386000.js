n.d(t, {
    Z: function () {
        return f;
    }
});
var i = n(200651),
    l = n(192379),
    r = n(691324),
    a = n(331650),
    s = n(278724),
    o = n(652844),
    c = n(40851),
    d = n(628581),
    u = n(44315),
    h = n(861254),
    p = n(871499),
    m = n(981631);
function f(e) {
    let { selfMute: t, serverMute: n, suppress: f, centerButton: g = !1, awaitingRemote: C, onMouseEnter: x, onMouseLeave: v, ..._ } = e,
        { mode: I } = (0, h.ZP)({ location: 'MicButton' }),
        E = t || n || f,
        b = g ? p.d : p.Z,
        Z = (0, d.Z)(t, n, f, C, I === h.BK.GroupedButtonsRedMic),
        { Component: N, play: S, events: T } = (0, o.O)(E ? 'unmute' : 'mute');
    l.useEffect(() => () => S(), [S, E]);
    let j = (0, c.bp)() === m.IlC.POPOUT ? (E ? s.n : a.S) : N,
        A = I === h.BK.GroupedButtonsRedMic && E ? (0, u.Lq)(r.I.RED_400) : void 0,
        y = I !== h.BK.GroupedButtonsRedMic;
    return (0, i.jsx)(b, {
        isActive: !!y && !E,
        iconComponent: j,
        iconColor: A,
        label: Z,
        onMouseEnter: (e) => {
            null == x || x(e), T.onMouseEnter();
        },
        onMouseLeave: (e) => {
            null == v || v(e), T.onMouseLeave();
        },
        ..._
    });
}
