n.d(t, { Z: () => _ });
var i = n(200651),
    l = n(192379),
    a = n(609784),
    r = n(782877),
    s = n(331650),
    o = n(278724),
    c = n(652844),
    d = n(747906),
    u = n(40851),
    h = n(628581),
    p = n(861254),
    m = n(378441),
    f = n(871499),
    g = n(981631);
function _(e) {
    let { selfMute: t, serverMute: n, suppress: _, centerButton: C = !1, awaitingRemote: x, onMouseEnter: v, onMouseLeave: N, ...E } = e,
        { mode: I } = (0, p.ZP)({ location: 'MicButton' }),
        b = t || n || _,
        Z = C ? f.d : f.Z,
        T = (0, h.Z)(t, n, _, x, I === p.BK.GroupedButtonsRedMic),
        S = (0, c.O)(b ? 'unmute' : 'mute'),
        j = (0, d.P)(b ? 'unmute' : 'mute'),
        { activeVoice: A } = (0, m.o)(),
        y = null != A,
        P = y ? j : S,
        { events: R, play: M } = P;
    l.useEffect(() => () => M(), [M, b]);
    let L = P.Component;
    (0, u.bp)() === g.IlC.POPOUT && (L = y ? (b ? r.T : a.x) : b ? o.n : s.S);
    let k = I === p.BK.GroupedButtonsRedMic && b ? 'red' : void 0,
        O = I !== p.BK.GroupedButtonsRedMic;
    return (0, i.jsx)(Z, {
        isActive: !!O && !b,
        iconComponent: L,
        ignoreColorForCaret: !0,
        color: k,
        label: T,
        onMouseEnter: (e) => {
            null == v || v(e), R.onMouseEnter();
        },
        onMouseLeave: (e) => {
            null == N || N(e), R.onMouseLeave();
        },
        ...E
    });
}
