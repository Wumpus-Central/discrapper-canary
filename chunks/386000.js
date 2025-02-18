n.d(t, { Z: () => f });
var i = n(200651),
    l = n(192379),
    a = n(331650),
    r = n(278724),
    s = n(652844),
    o = n(747906),
    c = n(40851),
    d = n(628581),
    u = n(861254),
    h = n(378441),
    p = n(871499),
    m = n(981631);
function f(e) {
    let { selfMute: t, serverMute: n, suppress: f, centerButton: g = !1, awaitingRemote: _, onMouseEnter: C, onMouseLeave: x, ...v } = e,
        { mode: E } = (0, u.ZP)({ location: 'MicButton' }),
        I = t || n || f,
        b = g ? p.d : p.Z,
        Z = (0, d.Z)(t, n, f, _, E === u.BK.GroupedButtonsRedMic),
        N = (0, s.O)(I ? 'unmute' : 'mute'),
        T = (0, o.P)(I ? 'unmute' : 'mute'),
        { activeVoice: S } = (0, h.o)(),
        j = null != S ? T : N,
        { events: y, play: A } = j;
    l.useEffect(() => () => A(), [A, I]);
    let P = j.Component;
    (0, c.bp)() === m.IlC.POPOUT && (P = I ? r.n : a.S);
    let R = E === u.BK.GroupedButtonsRedMic && I ? 'red' : void 0,
        M = E !== u.BK.GroupedButtonsRedMic;
    return (0, i.jsx)(b, {
        isActive: !!M && !I,
        iconComponent: P,
        ignoreColorForCaret: !0,
        color: R,
        label: Z,
        onMouseEnter: (e) => {
            null == C || C(e), y.onMouseEnter();
        },
        onMouseLeave: (e) => {
            null == x || x(e), y.onMouseLeave();
        },
        ...v
    });
}
