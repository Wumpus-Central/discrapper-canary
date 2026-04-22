n.d(t, { A: () => u });
var a = n(64700),
    r = n(311907),
    l = n(385612),
    i = n(101058),
    o = n(696451),
    s = n(352413),
    c = n(45837);
function u(e) {
    let { user: t, guildId: n, size: u, showPending: d = !1, animateOnHover: p = !1, avatarOverride: A } = e,
        { onMouseEnter: g, onMouseLeave: _, shouldAnimate: v } = (0, c.A)(p),
        { pendingAvatar: f } = (0, s.A)({ guildId: null === n ? void 0 : n }),
        m = d && null != t ? (0, i.V7)({ userId: t.id, image: f, canAnimate: v, size: u }) : void 0,
        E = void 0 !== A ? A : m,
        b = (0, r.bG)([o.Ay], () => (null != n && null != t ? o.Ay.getMember(n, t.id) : null));
    return {
        avatarSrc: a.useMemo(
            () => (null != t ? (0, l.sv)(E, b, t, { canAnimate: v, size: u }) : void 0),
            [E, b, t, v, u],
        ),
        isAvatarAnimating: v,
        eventHandlers: { onMouseEnter: g, onMouseLeave: _ },
    };
}
