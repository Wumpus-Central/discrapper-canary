var r = n(582128),
    a = n(855986),
    l = n(778712),
    s = n(45837),
    i = n(46653),
    c = n(101058),
    o = n(595535);
n.d(
    t,
    {},
    {
        A: function (e) {
            let { avatarId: t, storageHash: n, size: u } = e,
                { onMouseEnter: d, onMouseLeave: h, shouldAnimate: A } = (0, s.A)(),
                m = (0, a.bG)([i.default], () => i.default.getId());
            return {
                avatarSrc: r.useMemo(
                    () =>
                        (0, c.Xp)({ userId: m, avatarId: t, storageHash: n, canAnimate: A, size: (0, l.FT)(u ?? o.q) }),
                    [m, t, n, A, u],
                ),
                isAvatarAnimating: A,
                eventHandlers: { onMouseEnter: d, onMouseLeave: h },
            };
        },
    },
);
