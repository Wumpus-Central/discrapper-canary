t.d(r, { A: () => c });
var a = t(64700),
    n = t(17928),
    l = t(252732),
    i = t(101058),
    o = t(696451),
    s = t(352413),
    u = t(45837);
function c(e) {
    let { user: r, guildId: t, size: c, showPending: p = !1, animateOnHover: d = !1, avatarOverride: f } = e,
        { onMouseEnter: v, onMouseLeave: m, shouldAnimate: _ } = (0, u.A)(d),
        { pendingAvatar: A } = (0, s.A)({ guildId: null === t ? void 0 : t }),
        g = p && null != r ? (0, i.V7)({ userId: r.id, image: A, canAnimate: _, size: c }) : void 0,
        b = void 0 !== f ? f : g,
        E = (0, n.bG)([o.Ay], () => (null != t && null != r ? o.Ay.getMember(t, r.id) : null));
    return {
        avatarSrc: a.useMemo(
            () => (null != r ? (0, l.sv)(b, E, r, { canAnimate: _, size: c }) : void 0),
            [b, E, r, _, c],
        ),
        isAvatarAnimating: _,
        eventHandlers: { onMouseEnter: v, onMouseLeave: m },
    };
}
