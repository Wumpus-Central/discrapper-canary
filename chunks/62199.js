n.d(t, { A: () => A });
var r = n(582128),
    a = n(17928),
    i = n(252732),
    l = n(101058),
    u = n(696451),
    o = n(352413),
    s = n(45837);
function A(e) {
    let { user: t, guildId: n, size: A, showPending: c = !1, animateOnHover: d = !1, avatarOverride: g } = e,
        { onMouseEnter: E, onMouseLeave: v, shouldAnimate: f } = (0, s.A)(d),
        { pendingAvatar: p } = (0, o.A)({ guildId: null === n ? void 0 : n }),
        m = c && null != t ? (0, l.V7)({ userId: t.id, image: p, canAnimate: f, size: A }) : void 0,
        R = void 0 !== g ? g : m,
        I = (0, a.bG)([u.Ay], () => (null != n && null != t ? u.Ay.getMember(n, t.id) : null));
    return {
        avatarSrc: r.useMemo(
            () => (null != t ? (0, i.sv)(R, I, t, { canAnimate: f, size: A }) : void 0),
            [R, I, t, f, A],
        ),
        isAvatarAnimating: f,
        eventHandlers: { onMouseEnter: E, onMouseLeave: v },
    };
}
