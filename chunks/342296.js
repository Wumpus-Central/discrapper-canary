i.d(t, { A: () => N, S: () => I });
var E = i(477900),
    s = i(582128),
    n = i(17928),
    r = i(778712),
    l = i(922016),
    a = i(335180),
    _ = i(287809),
    S = i(454719),
    A = i(589022),
    c = i(518477),
    o = i(818348);
let I = (0, r.FT)(r._3.SIZE_80),
    d = { onMouseDown: o.tE, onClick: o.tE, onKeyDown: o.tE, "aria-controls": void 0, "aria-expanded": !1 },
    T = { isShown: !1, position: void 0 };
function R(e) {
    let {
            children: t,
            user: i,
            currentUser: n,
            guildId: r,
            channelId: _,
            messageId: o,
            roleId: d,
            disableUserProfileLink: T,
            newAnalyticsLocations: R,
            appContext: N,
            avatarUrl: u,
            preload: P,
            renderPopout: h,
            onRequestOpen: O,
            onRequestClose: C,
            onClosePopout: D,
            shouldShow: j,
            shouldPreload: L = !0,
            ignoreModalClicks: v = !0,
            ...x
        } = e,
        U = s.useRef(void 0),
        m = s.useCallback(
            () =>
                null != P
                    ? P()
                    : (0, S.A)(i.id, u ?? i.getAvatarURL(r, I), {
                          type: "popout",
                          withMutualGuilds: i.id !== n.id,
                          withMutualFriends: !i.bot && i.id !== n.id,
                          guildId: r,
                          channelId: _,
                      }),
            [P, n, i, u, r, _],
        ),
        f = s.useCallback(
            (e) =>
                ((U.current = Date.now()), null != h)
                    ? h(e, U.current)
                    : (0, E.jsx)(A.A, {
                          ...e,
                          user: i,
                          currentUser: n,
                          guildId: r,
                          channelId: _,
                          roleId: d,
                          messageId: o,
                          disableUserProfileLink: T,
                          newAnalyticsLocations: R,
                          appContext: N,
                          openedAt: U.current,
                          closePopout: () => {
                              e.closePopout(), D?.();
                          },
                      }),
            [i, n, h, r, _, d, o, T, R, N, D],
        );
    return (0, E.jsx)(l.Y, {
        popoutKey: c.KM,
        shouldShow: j,
        preload: L ? m : void 0,
        loadingComponent: (0, a.Zm)(),
        renderPopout: f,
        onRequestOpen: O,
        onRequestClose: C,
        ignoreModalClicks: v,
        ...x,
        children: t,
    });
}
let N = s.memo(function (e) {
    let { children: t, userId: i, user: s, ...r } = e,
        l = (0, n.bG)([_.default], () => _.default.getCurrentUser()),
        a = (0, n.bG)([_.default], () => s ?? _.default.getUser(i));
    return null == a || null == l ? t(d, T) : (0, E.jsx)(R, { ...r, user: a, currentUser: l, children: t });
});
