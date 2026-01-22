r.d(t, {
    A: () => u,
});
var n = r(64700),
    l = r(311907),
    a = r(397927),
    i = r(45837),
    s = r(961350),
    o = r(101058),
    c = r(595535);

function u(e) {
    let { avatarId: t, storageHash: r, size: u } = e,
        { onMouseEnter: f, onMouseLeave: d, shouldAnimate: p } = (0, i.A)(),
        g = (0, l.bG)([s.default], () => s.default.getId());
    return {
        avatarSrc: n.useMemo(
            () =>
                (0, o.Xp)({
                    userId: g,
                    avatarId: t,
                    storageHash: r,
                    canAnimate: p,
                    size: (0, a.FT9)(null != u ? u : c.q),
                }),
            [g, t, r, p, u],
        ),
        isAvatarAnimating: p,
        eventHandlers: {
            onMouseEnter: f,
            onMouseLeave: d,
        },
    };
}
