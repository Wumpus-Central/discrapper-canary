n.d(t, { A: () => A });
var r = n(582128),
    a = n(17928),
    l = n(252732),
    i = n(101058),
    u = n(696451),
    o = n(352413),
    s = n(45837);
function A(e) {
    let { user: t, guildId: n, size: A, showPending: d = !1, animateOnHover: c = !1, avatarOverride: v } = e,
        { onMouseEnter: E, onMouseLeave: g, shouldAnimate: f } = (0, s.A)(c),
        { pendingAvatar: p } = (0, o.A)({ guildId: null === n ? void 0 : n }),
        R = d && null != t ? (0, i.V7)({ userId: t.id, image: p, canAnimate: f, size: A }) : void 0,
        m =
            void 0 === v
                ? R
                : null === v || "string" == typeof v
                  ? v
                  : null != t
                    ? (0, i.V7)({ userId: t.id, image: v, canAnimate: f, size: A })
                    : void 0,
        T = (0, a.bG)([u.Ay], () => (null != n && null != t ? u.Ay.getMember(n, t.id) : null));
    return {
        avatarSrc: r.useMemo(
            () => (null != t ? (0, l.sv)(m, T, t, { canAnimate: f, size: A }) : void 0),
            [m, T, t, f, A],
        ),
        isAvatarAnimating: f,
        eventHandlers: { onMouseEnter: E, onMouseLeave: g },
    };
}
