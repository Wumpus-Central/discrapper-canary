a.d(t, { A: () => u });
var r = a(64700),
    n = a(17928),
    l = a(252732),
    o = a(101058),
    i = a(696451),
    s = a(352413),
    c = a(45837);
function u(e) {
    let { user: t, guildId: a, size: u, showPending: p = !1, animateOnHover: d = !1, avatarOverride: _ } = e,
        { onMouseEnter: A, onMouseLeave: v, shouldAnimate: g } = (0, c.A)(d),
        { pendingAvatar: f } = (0, s.A)({ guildId: null === a ? void 0 : a }),
        m = p && null != t ? (0, o.V7)({ userId: t.id, image: f, canAnimate: g, size: u }) : void 0,
        E = void 0 !== _ ? _ : m,
        b = (0, n.bG)([i.Ay], () => (null != a && null != t ? i.Ay.getMember(a, t.id) : null));
    return {
        avatarSrc: r.useMemo(
            () => (null != t ? (0, l.sv)(E, b, t, { canAnimate: g, size: u }) : void 0),
            [E, b, t, g, u],
        ),
        isAvatarAnimating: g,
        eventHandlers: { onMouseEnter: A, onMouseLeave: v },
    };
}
