n.d(t, { A: () => S, S: () => A });
var i = n(627968),
    l = n(64700),
    r = n(17928),
    a = n(778712),
    s = n(922016),
    u = n(335180),
    o = n(287809),
    c = n(454719),
    d = n(589022),
    E = n(518477),
    _ = n(818348);
let A = (0, a.FT)(a._3.SIZE_80),
    p = { onMouseDown: _.tE, onClick: _.tE, onKeyDown: _.tE, "aria-controls": void 0, "aria-expanded": !1 },
    I = { isShown: !1, position: void 0 };
function f(e) {
    let {
            children: t,
            user: n,
            currentUser: r,
            guildId: a,
            channelId: o,
            messageId: _,
            roleId: p,
            disableUserProfileLink: I,
            newAnalyticsLocations: f,
            appContext: S,
            avatarUrl: T,
            preload: m,
            renderPopout: h,
            onRequestOpen: C,
            onRequestClose: L,
            onClosePopout: g,
            shouldShow: R,
            shouldPreload: b = !0,
            ...O
        } = e,
        N = l.useRef(void 0),
        y = l.useCallback(
            () =>
                null != m
                    ? m()
                    : (0, c.A)(n.id, T ?? n.getAvatarURL(a, A), {
                          type: "popout",
                          withMutualGuilds: n.id !== r.id,
                          withMutualFriends: !n.bot && n.id !== r.id,
                          guildId: a,
                          channelId: o,
                      }),
            [m, r, n, T, a, o],
        ),
        D = l.useCallback(
            (e) =>
                ((N.current = Date.now()), null != h)
                    ? h(e, N.current)
                    : (0, i.jsx)(d.A, {
                          ...e,
                          user: n,
                          currentUser: r,
                          guildId: a,
                          channelId: o,
                          roleId: p,
                          messageId: _,
                          disableUserProfileLink: I,
                          newAnalyticsLocations: f,
                          appContext: S,
                          openedAt: N.current,
                          closePopout: () => {
                              e.closePopout(), g?.();
                          },
                      }),
            [n, r, h, a, o, p, _, I, f, S, g],
        );
    return (0, i.jsx)(s.Y, {
        popoutKey: E.KM,
        shouldShow: R,
        preload: b ? y : void 0,
        loadingComponent: (0, u.Zm)(),
        renderPopout: D,
        onRequestOpen: C,
        onRequestClose: L,
        ...O,
        children: t,
    });
}
let S = l.memo(function (e) {
    let { children: t, userId: n, user: l, ...a } = e,
        s = (0, r.bG)([o.default], () => o.default.getCurrentUser()),
        u = (0, r.bG)([o.default], () => l ?? o.default.getUser(n));
    return null == u || null == s ? t(p, I) : (0, i.jsx)(f, { ...a, user: u, currentUser: s, children: t });
});
