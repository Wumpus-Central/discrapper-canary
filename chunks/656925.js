a.d(t, { A: () => u });
var n = a(64700),
    l = a(17928),
    s = a(778712),
    r = a(45837),
    i = a(495544),
    c = a(101058),
    o = a(595535);
function u(e) {
    let { avatarId: t, storageHash: a, size: u } = e,
        { onMouseEnter: d, onMouseLeave: A, shouldAnimate: h } = (0, r.A)(),
        f = (0, l.bG)([i.default], () => i.default.getId());
    return {
        avatarSrc: n.useMemo(
            () => (0, c.Xp)({ userId: f, avatarId: t, storageHash: a, canAnimate: h, size: (0, s.FT)(u ?? o.q) }),
            [f, t, a, h, u],
        ),
        isAvatarAnimating: h,
        eventHandlers: { onMouseEnter: d, onMouseLeave: A },
    };
}
