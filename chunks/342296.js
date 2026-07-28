"use strict";
n.d(t, { A: () => p, S: () => A });
var i = n(477900),
    r = n(582128),
    a = n(17928),
    s = n(778712),
    l = n(922016),
    o = n(335180),
    d = n(287809),
    c = n(454719),
    u = n(589022),
    _ = n(518477),
    E = n(818348);
let A = (0, s.FT)(s._3.SIZE_80),
    h = { onMouseDown: E.tE, onClick: E.tE, onKeyDown: E.tE, "aria-controls": void 0, "aria-expanded": !1 },
    I = { isShown: !1, position: void 0 };
function f(e) {
    let {
            children: t,
            user: n,
            currentUser: a,
            guildId: s,
            channelId: d,
            messageId: E,
            roleId: h,
            disableUserProfileLink: I,
            newAnalyticsLocations: f,
            appContext: p,
            avatarUrl: T,
            preload: m,
            renderPopout: g,
            onRequestOpen: S,
            onRequestClose: N,
            onClosePopout: C,
            shouldShow: O,
            shouldPreload: R = !0,
            ignoreModalClicks: L = !0,
            ...y
        } = e,
        D = r.useRef(void 0),
        v = r.useCallback(
            () =>
                null != m
                    ? m()
                    : (0, c.A)(n.id, T ?? n.getAvatarURL(s, A), {
                          type: "popout",
                          withMutualGuilds: n.id !== a.id,
                          withMutualFriends: !n.bot && n.id !== a.id,
                          guildId: s,
                          channelId: d,
                      }),
            [m, a, n, T, s, d],
        ),
        b = r.useCallback(
            (e) =>
                ((D.current = Date.now()), null != g)
                    ? g(e, D.current)
                    : (0, i.jsx)(u.A, {
                          ...e,
                          user: n,
                          currentUser: a,
                          guildId: s,
                          channelId: d,
                          roleId: h,
                          messageId: E,
                          disableUserProfileLink: I,
                          newAnalyticsLocations: f,
                          appContext: p,
                          openedAt: D.current,
                          closePopout: () => {
                              e.closePopout(), C?.();
                          },
                      }),
            [n, a, g, s, d, h, E, I, f, p, C],
        );
    return (0, i.jsx)(l.Y, {
        popoutKey: _.KM,
        shouldShow: O,
        preload: R ? v : void 0,
        loadingComponent: (0, o.Zm)(),
        renderPopout: b,
        onRequestOpen: S,
        onRequestClose: N,
        ignoreModalClicks: L,
        ...y,
        children: t,
    });
}
let p = r.memo(function (e) {
    let { children: t, userId: n, user: r, ...s } = e,
        l = (0, a.bG)([d.default], () => d.default.getCurrentUser()),
        o = (0, a.bG)([d.default], () => r ?? d.default.getUser(n));
    return null == o || null == l ? t(h, I) : (0, i.jsx)(f, { ...s, user: o, currentUser: l, children: t });
});
