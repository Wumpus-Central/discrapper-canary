"use strict";
n.d(t, { A: () => g, S: () => f });
var i = n(627968),
    r = n(64700),
    s = n(17928),
    a = n(778712),
    o = n(922016),
    l = n(335180),
    u = n(287809),
    c = n(454719),
    d = n(589022),
    _ = n(518477),
    h = n(818348);
let f = (0, a.FT)(a._3.SIZE_80),
    p = { onMouseDown: h.tE, onClick: h.tE, onKeyDown: h.tE, "aria-controls": void 0, "aria-expanded": !1 },
    E = { isShown: !1, position: void 0 };
function m(e) {
    let {
            children: t,
            user: n,
            currentUser: s,
            guildId: a,
            channelId: u,
            messageId: h,
            roleId: p,
            disableUserProfileLink: E,
            newAnalyticsLocations: m,
            appContext: g,
            avatarUrl: A,
            preload: I,
            renderPopout: T,
            onRequestOpen: S,
            onRequestClose: y,
            onClosePopout: C,
            shouldShow: N,
            shouldPreload: v = !0,
            ignoreModalClicks: R = !0,
            ...O
        } = e,
        b = r.useRef(void 0),
        D = r.useCallback(
            () =>
                null != I
                    ? I()
                    : (0, c.A)(n.id, A ?? n.getAvatarURL(a, f), {
                          type: "popout",
                          withMutualGuilds: n.id !== s.id,
                          withMutualFriends: !n.bot && n.id !== s.id,
                          guildId: a,
                          channelId: u,
                      }),
            [I, s, n, A, a, u],
        ),
        L = r.useCallback(
            (e) =>
                ((b.current = Date.now()), null != T)
                    ? T(e, b.current)
                    : (0, i.jsx)(d.A, {
                          ...e,
                          user: n,
                          currentUser: s,
                          guildId: a,
                          channelId: u,
                          roleId: p,
                          messageId: h,
                          disableUserProfileLink: E,
                          newAnalyticsLocations: m,
                          appContext: g,
                          openedAt: b.current,
                          closePopout: () => {
                              e.closePopout(), C?.();
                          },
                      }),
            [n, s, T, a, u, p, h, E, m, g, C],
        );
    return (0, i.jsx)(o.Y, {
        popoutKey: _.KM,
        shouldShow: N,
        preload: v ? D : void 0,
        loadingComponent: (0, l.Zm)(),
        renderPopout: L,
        onRequestOpen: S,
        onRequestClose: y,
        ignoreModalClicks: R,
        ...O,
        children: t,
    });
}
let g = r.memo(function (e) {
    let { children: t, userId: n, user: r, ...a } = e,
        o = (0, s.bG)([u.default], () => u.default.getCurrentUser()),
        l = (0, s.bG)([u.default], () => r ?? u.default.getUser(n));
    return null == l || null == o ? t(p, E) : (0, i.jsx)(m, { ...a, user: l, currentUser: o, children: t });
});
