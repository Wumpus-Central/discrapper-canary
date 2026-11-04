var r = n(582128),
    a = n(855986),
    i = n(468450),
    l = n(101058),
    u = n(696451),
    o = n(352413),
    s = n(45837);
n.d(
    t,
    {},
    {
        A: function (e) {
            let { user: t, guildId: n, size: A, showPending: d = !1, animateOnHover: c = !1, avatarOverride: v } = e,
                { onMouseEnter: E, onMouseLeave: f, shouldAnimate: g } = (0, s.A)(c),
                { pendingAvatar: p } = (0, o.A)({ guildId: null === n ? void 0 : n }),
                R = d && null != t ? (0, l.V7)({ userId: t.id, image: p, canAnimate: g, size: A }) : void 0,
                m =
                    void 0 === v
                        ? R
                        : null === v || "string" == typeof v
                          ? v
                          : null != t
                            ? (0, l.V7)({ userId: t.id, image: v, canAnimate: g, size: A })
                            : void 0,
                T = (0, a.bG)([u.Ay], () => (null != n && null != t ? u.Ay.getMember(n, t.id) : null));
            return {
                avatarSrc: r.useMemo(
                    () => (null != t ? (0, i.sv)(m, T, t, { canAnimate: g, size: A }) : void 0),
                    [m, T, t, g, A],
                ),
                isAvatarAnimating: g,
                eventHandlers: { onMouseEnter: E, onMouseLeave: f },
            };
        },
    },
);
