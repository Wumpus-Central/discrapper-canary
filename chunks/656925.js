a.d(t, { A: () => u });
var l = a(64700),
    n = a(17928),
    r = a(778712),
    i = a(45837),
    s = a(495544),
    c = a(101058),
    o = a(595535);
function u(e) {
    let { avatarId: t, storageHash: a, size: u } = e,
        { onMouseEnter: d, onMouseLeave: h, shouldAnimate: A } = (0, i.A)(),
        g = (0, n.bG)([s.default], () => s.default.getId());
    return {
        avatarSrc: l.useMemo(
            () => (0, c.Xp)({ userId: g, avatarId: t, storageHash: a, canAnimate: A, size: (0, r.FT)(u ?? o.q) }),
            [g, t, a, A, u],
        ),
        isAvatarAnimating: A,
        eventHandlers: { onMouseEnter: d, onMouseLeave: h },
    };
}
