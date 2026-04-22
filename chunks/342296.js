"use strict";
n.d(t, { A: () => g, S: () => E });
var r = n(627968),
    i = n(64700),
    s = n(311907),
    a = n(778712),
    o = n(265872),
    l = n(335180),
    u = n(287809),
    d = n(454719),
    c = n(589022),
    _ = n(518477),
    f = n(818348);
let E = (0, a.FT)(a._3.SIZE_80),
    h = { onMouseDown: f.tE, onClick: f.tE, onKeyDown: f.tE, "aria-controls": void 0, "aria-expanded": !1 },
    p = { isShown: !1, position: void 0 };
function m(e) {
    let {
            children: t,
            user: n,
            currentUser: s,
            guildId: a,
            channelId: u,
            messageId: f,
            roleId: h,
            disableUserProfileLink: p,
            newAnalyticsLocations: m,
            appContext: g,
            avatarUrl: A,
            preload: I,
            renderPopout: T,
            onRequestOpen: S,
            onRequestClose: y,
            onClosePopout: N,
            shouldShow: O,
            shouldPreload: R = !0,
            ...v
        } = e,
        C = i.useRef(void 0),
        b = i.useCallback(
            () =>
                null != I
                    ? I()
                    : (0, d.A)(n.id, A ?? n.getAvatarURL(a, E), {
                          type: "popout",
                          withMutualGuilds: n.id !== s.id,
                          withMutualFriends: !n.bot && n.id !== s.id,
                          guildId: a,
                          channelId: u,
                      }),
            [I, s, n, A, a, u],
        ),
        D = i.useCallback(
            (e) =>
                ((C.current = Date.now()), null != T)
                    ? T(e, C.current)
                    : (0, r.jsx)(c.A, {
                          ...e,
                          user: n,
                          currentUser: s,
                          guildId: a,
                          channelId: u,
                          roleId: h,
                          messageId: f,
                          disableUserProfileLink: p,
                          newAnalyticsLocations: m,
                          appContext: g,
                          openedAt: C.current,
                          closePopout: () => {
                              e.closePopout(), N?.();
                          },
                      }),
            [n, s, T, a, u, h, f, p, m, g, N],
        );
    return (0, r.jsx)(o.Y, {
        popoutKey: _.KM,
        shouldShow: O,
        preload: R ? b : void 0,
        loadingComponent: (0, l.Zm)(),
        renderPopout: D,
        onRequestOpen: S,
        onRequestClose: y,
        ...v,
        children: t,
    });
}
let g = i.memo(function (e) {
    let { children: t, userId: n, user: i, ...a } = e,
        o = (0, s.bG)([u.default], () => u.default.getCurrentUser()),
        l = (0, s.bG)([u.default], () => i ?? u.default.getUser(n));
    return null == l || null == o ? t(h, p) : (0, r.jsx)(m, { ...a, user: l, currentUser: o, children: t });
});
