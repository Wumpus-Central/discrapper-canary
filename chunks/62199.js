a.d(t, { A: () => u });
var r = a(64700),
    n = a(17928),
    l = a(252732),
    o = a(101058),
    i = a(696451),
    s = a(352413),
    c = a(45837);
function u(e) {
    let { user: t, guildId: a, size: u, showPending: _ = !1, animateOnHover: A = !1, avatarOverride: p } = e,
        { onMouseEnter: E, onMouseLeave: d, shouldAnimate: v } = (0, c.A)(A),
        { pendingAvatar: R } = (0, s.A)({ guildId: null === a ? void 0 : a }),
        g = _ && null != t ? (0, o.V7)({ userId: t.id, image: R, canAnimate: v, size: u }) : void 0,
        f = void 0 !== p ? p : g,
        m = (0, n.bG)([i.Ay], () => (null != a && null != t ? i.Ay.getMember(a, t.id) : null));
    return {
        avatarSrc: r.useMemo(
            () => (null != t ? (0, l.sv)(f, m, t, { canAnimate: v, size: u }) : void 0),
            [f, m, t, v, u],
        ),
        isAvatarAnimating: v,
        eventHandlers: { onMouseEnter: E, onMouseLeave: d },
    };
}
