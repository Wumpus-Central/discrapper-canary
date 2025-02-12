n.d(t, { Z: () => _ });
var i = n(200651),
    l = n(192379),
    a = n(691324),
    r = n(331650),
    s = n(278724),
    o = n(652844),
    c = n(747906),
    d = n(40851),
    u = n(628581),
    h = n(44315),
    p = n(861254),
    m = n(378441),
    f = n(871499),
    g = n(981631);
function _(e) {
    let { selfMute: t, serverMute: n, suppress: _, centerButton: C = !1, awaitingRemote: x, onMouseEnter: v, onMouseLeave: E, ...I } = e,
        { mode: b } = (0, p.ZP)({ location: 'MicButton' }),
        Z = t || n || _,
        N = C ? f.d : f.Z,
        T = (0, u.Z)(t, n, _, x, b === p.BK.GroupedButtonsRedMic),
        S = (0, o.O)(Z ? 'unmute' : 'mute'),
        j = (0, c.P)(Z ? 'unmute' : 'mute'),
        { activeVoice: y } = (0, m.o)(),
        A = null != y ? j : S,
        { events: P, play: R } = A;
    l.useEffect(() => () => R(), [R, Z]);
    let M = A.Component;
    (0, d.bp)() === g.IlC.POPOUT && (M = Z ? s.n : r.S);
    let L = b === p.BK.GroupedButtonsRedMic && Z ? (0, h.Lq)(a.I.RED_400) : void 0,
        k = b !== p.BK.GroupedButtonsRedMic;
    return (0, i.jsx)(N, {
        isActive: !!k && !Z,
        iconComponent: M,
        iconColor: L,
        label: T,
        onMouseEnter: (e) => {
            null == v || v(e), P.onMouseEnter();
        },
        onMouseLeave: (e) => {
            null == E || E(e), P.onMouseLeave();
        },
        ...I
    });
}
