i.d(t, { A: () => N, S: () => x });
var s = i(477900),
    n = i(582128),
    r = i(17928),
    l = i(778712),
    a = i(922016),
    c = i(335180),
    o = i(287809),
    d = i(454719),
    u = i(589022),
    h = i(518477),
    j = i(818348);
let x = (0, l.FT)(l._3.SIZE_80),
    v = { onMouseDown: j.tE, onClick: j.tE, onKeyDown: j.tE, "aria-controls": void 0, "aria-expanded": !1 },
    m = { isShown: !1, position: void 0 };
function f(e) {
    let {
            children: t,
            user: i,
            currentUser: r,
            guildId: l,
            channelId: o,
            messageId: j,
            roleId: v,
            disableUserProfileLink: m,
            newAnalyticsLocations: f,
            appContext: N,
            avatarUrl: A,
            preload: g,
            renderPopout: p,
            onRequestOpen: C,
            onRequestClose: S,
            onClosePopout: I,
            shouldShow: E,
            shouldPreload: T = !0,
            ignoreModalClicks: _ = !0,
            ...y
        } = e,
        w = n.useRef(void 0),
        P = n.useCallback(
            () =>
                null != g
                    ? g()
                    : (0, d.A)(i.id, A ?? i.getAvatarURL(l, x), {
                          type: "popout",
                          withMutualGuilds: i.id !== r.id,
                          withMutualFriends: !i.bot && i.id !== r.id,
                          guildId: l,
                          channelId: o,
                      }),
            [g, r, i, A, l, o],
        ),
        F = n.useCallback(
            (e) =>
                ((w.current = Date.now()), null != p)
                    ? p(e, w.current)
                    : (0, s.jsx)(u.A, {
                          ...e,
                          user: i,
                          currentUser: r,
                          guildId: l,
                          channelId: o,
                          roleId: v,
                          messageId: j,
                          disableUserProfileLink: m,
                          newAnalyticsLocations: f,
                          appContext: N,
                          openedAt: w.current,
                          closePopout: () => {
                              e.closePopout(), I?.();
                          },
                      }),
            [i, r, p, l, o, v, j, m, f, N, I],
        );
    return (0, s.jsx)(a.Y, {
        popoutKey: h.KM,
        shouldShow: E,
        preload: T ? P : void 0,
        loadingComponent: (0, c.Zm)(),
        renderPopout: F,
        onRequestOpen: C,
        onRequestClose: S,
        ignoreModalClicks: _,
        ...y,
        children: t,
    });
}
let N = n.memo(function (e) {
    let { children: t, userId: i, user: n, ...l } = e,
        a = (0, r.bG)([o.default], () => o.default.getCurrentUser()),
        c = (0, r.bG)([o.default], () => n ?? o.default.getUser(i));
    return null == c || null == a ? t(v, m) : (0, s.jsx)(f, { ...l, user: c, currentUser: a, children: t });
});
