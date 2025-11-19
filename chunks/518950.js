n.d(t, { Z: () => u });
var r = n(473749),
    i = n(442837),
    a = n(481060),
    o = n(1585),
    s = n(125988),
    l = n(594174),
    c = n(287008);
function u(e) {
    let {
            userId: t,
            guildId: n,
            size: u,
            showPending: d = !1,
            animateOnHover: f = !1,
            avatarDecorationOverride: _,
            avatarOverride: p,
        } = e,
        h = (0, i.e7)([l.default], () => l.default.getUser(t)),
        {
            avatarSrc: m,
            isAvatarAnimating: g,
            eventHandlers: E,
        } = (0, c.Z)({
            user: h,
            guildId: n,
            size: (0, a.pxk)(u),
            showPending: d,
            animateOnHover: f,
            avatarOverride: p,
        }),
        {
            avatarPlaceholderSrc: b,
            avatarDecorationSrc: y,
            eventHandlers: O,
        } = (0, s.Z)({
            user: h,
            guildId: n,
            avatarDecorationOverride: _,
            size: (0, o.y9)(u),
            onlyAnimateOnHoverOrFocus: f,
        });
    return {
        avatarPlaceholderSrc: b,
        avatarDecorationSrc: y,
        avatarSrc: m,
        isAnimating: g,
        eventHandlers: {
            onMouseEnter: r.useCallback(() => {
                E.onMouseEnter(), O.onMouseEnter();
            }, [E, O]),
            onMouseLeave: r.useCallback(() => {
                E.onMouseLeave(), O.onMouseLeave();
            }, [E, O]),
        },
    };
}
