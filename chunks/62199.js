a.d(r, { A: () => c });
var n = a(64700),
    t = a(17928),
    l = a(252732),
    i = a(101058),
    o = a(696451),
    s = a(352413),
    u = a(45837);
function c(e) {
    let { user: r, guildId: a, size: c, showPending: p = !1, animateOnHover: d = !1, avatarOverride: m } = e,
        { onMouseEnter: f, onMouseLeave: v, shouldAnimate: g } = (0, u.A)(d),
        { pendingAvatar: A } = (0, s.A)({ guildId: null === a ? void 0 : a }),
        _ = p && null != r ? (0, i.V7)({ userId: r.id, image: A, canAnimate: g, size: c }) : void 0,
        b = void 0 !== m ? m : _,
        E = (0, t.bG)([o.Ay], () => (null != a && null != r ? o.Ay.getMember(a, r.id) : null));
    return {
        avatarSrc: n.useMemo(
            () => (null != r ? (0, l.sv)(b, E, r, { canAnimate: g, size: c }) : void 0),
            [b, E, r, g, c],
        ),
        isAvatarAnimating: g,
        eventHandlers: { onMouseEnter: f, onMouseLeave: v },
    };
}
