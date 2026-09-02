i.d(t, { A: () => A, S: () => x });
var s = i(477900),
    n = i(582128),
    r = i(17928),
    a = i(778712),
    l = i(922016),
    c = i(335180),
    o = i(287809),
    d = i(454719),
    h = i(589022),
    u = i(518477),
    j = i(818348);
let x = (0, a.FT)(a._3.SIZE_80),
    v = { onMouseDown: j.tE, onClick: j.tE, onKeyDown: j.tE, "aria-controls": void 0, "aria-expanded": !1 },
    f = { isShown: !1, position: void 0 };
function m(e) {
    let {
            children: t,
            user: i,
            currentUser: r,
            guildId: a,
            channelId: o,
            messageId: j,
            roleId: v,
            disableUserProfileLink: f,
            newAnalyticsLocations: m,
            appContext: A,
            avatarUrl: N,
            preload: g,
            renderPopout: p,
            onRequestOpen: C,
            onRequestClose: E,
            onClosePopout: I,
            shouldShow: S,
            shouldPreload: _ = !0,
            ignoreModalClicks: T = !0,
            ...w
        } = e,
        F = n.useRef(void 0),
        P = n.useCallback(
            () =>
                null != g
                    ? g()
                    : (0, d.A)(i.id, N ?? i.getAvatarURL(a, x), {
                          type: "popout",
                          withMutualGuilds: i.id !== r.id,
                          withMutualFriends: !i.bot && i.id !== r.id,
                          guildId: a,
                          channelId: o,
                      }),
            [g, r, i, N, a, o],
        ),
        y = n.useCallback(
            (e) =>
                ((F.current = Date.now()), null != p)
                    ? p(e, F.current)
                    : (0, s.jsx)(h.A, {
                          ...e,
                          user: i,
                          currentUser: r,
                          guildId: a,
                          channelId: o,
                          roleId: v,
                          messageId: j,
                          disableUserProfileLink: f,
                          newAnalyticsLocations: m,
                          appContext: A,
                          openedAt: F.current,
                          closePopout: () => {
                              e.closePopout(), I?.();
                          },
                      }),
            [i, r, p, a, o, v, j, f, m, A, I],
        );
    return (0, s.jsx)(l.Y, {
        popoutKey: u.KM,
        shouldShow: S,
        preload: _ ? P : void 0,
        loadingComponent: (0, c.Zm)(),
        renderPopout: y,
        onRequestOpen: C,
        onRequestClose: E,
        ignoreModalClicks: T,
        ...w,
        children: t,
    });
}
let A = n.memo(function (e) {
    let { children: t, userId: i, user: n, ...a } = e,
        l = (0, r.bG)([o.default], () => o.default.getCurrentUser()),
        c = (0, r.bG)([o.default], () => n ?? o.default.getUser(i));
    return null == c || null == l ? t(v, f) : (0, s.jsx)(m, { ...a, user: c, currentUser: l, children: t });
});
