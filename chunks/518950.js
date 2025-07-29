n.d(t, { Z: () => u });
var r = n(73800),
    i = n(442837),
    a = n(481060),
    o = n(1585),
    s = n(125988),
    l = n(594174),
    c = n(287008);
function u(e) {
    let { userId: t, guildId: n, size: u, showPending: d = !1, showTryItOut: _ = !1, animateOnHover: f = !1, avatarDecorationOverride: p, avatarOverride: h } = e,
        m = (0, i.e7)([l.default], () => l.default.getUser(t)),
        {
            avatarSrc: g,
            isAvatarAnimating: E,
            eventHandlers: b
        } = (0, c.Z)({
            user: m,
            guildId: n,
            size: (0, a.pxk)(u),
            showPending: d,
            animateOnHover: f,
            avatarOverride: h
        }),
        {
            avatarPlaceholderSrc: y,
            avatarDecorationSrc: O,
            eventHandlers: v
        } = (0, s.Z)({
            user: m,
            guildId: null != n ? n : void 0,
            size: (0, o.y9)(u),
            showPending: d,
            onlyAnimateOnHover: f,
            avatarDecorationOverride: p,
            showTryItOut: _
        });
    return {
        avatarPlaceholderSrc: y,
        avatarDecorationSrc: O,
        avatarSrc: g,
        isAnimating: E,
        eventHandlers: {
            onMouseEnter: r.useCallback(() => {
                (b.onMouseEnter(), v.onMouseEnter());
            }, [b, v]),
            onMouseLeave: r.useCallback(() => {
                (b.onMouseLeave(), v.onMouseLeave());
            }, [b, v])
        }
    };
}
