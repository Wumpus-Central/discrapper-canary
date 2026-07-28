a.d(t, { A: () => u });
var n = a(582128),
    l = a(17928),
    r = a(778712),
    s = a(45837),
    i = a(280450),
    c = a(101058),
    o = a(595535);
function u(e) {
    let { avatarId: t, storageHash: a, size: u } = e,
        { onMouseEnter: d, onMouseLeave: h, shouldAnimate: A } = (0, s.A)(),
        m = (0, l.bG)([i.default], () => i.default.getId());
    return {
        avatarSrc: n.useMemo(
            () => (0, c.Xp)({ userId: m, avatarId: t, storageHash: a, canAnimate: A, size: (0, r.FT)(u ?? o.q) }),
            [m, t, a, A, u],
        ),
        isAvatarAnimating: A,
        eventHandlers: { onMouseEnter: d, onMouseLeave: h },
    };
}
