t.d(a, { A: () => u });
var n = t(64700),
    r = t(17928),
    l = t(252732),
    i = t(101058),
    o = t(696451),
    s = t(352413),
    _ = t(45837);
function u(e) {
    let { user: a, guildId: t, size: u, showPending: A = !1, animateOnHover: c = !1, avatarOverride: E } = e,
        { onMouseEnter: p, onMouseLeave: R, shouldAnimate: d } = (0, _.A)(c),
        { pendingAvatar: g } = (0, s.A)({ guildId: null === t ? void 0 : t }),
        f = A && null != a ? (0, i.V7)({ userId: a.id, image: g, canAnimate: d, size: u }) : void 0,
        m = void 0 !== E ? E : f,
        v = (0, r.bG)([o.Ay], () => (null != t && null != a ? o.Ay.getMember(t, a.id) : null));
    return {
        avatarSrc: n.useMemo(
            () => (null != a ? (0, l.sv)(m, v, a, { canAnimate: d, size: u }) : void 0),
            [m, v, a, d, u],
        ),
        isAvatarAnimating: d,
        eventHandlers: { onMouseEnter: p, onMouseLeave: R },
    };
}
