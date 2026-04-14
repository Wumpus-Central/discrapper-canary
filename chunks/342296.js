"use strict";
n.r(t), n.d(t, { USER_PROFILE_POPOUT_AVATAR_SIZE: () => _, default: () => E });
var r = n(627968),
    i = n(64700),
    s = n(311907),
    a = n(397927),
    o = n(287809),
    l = n(454719),
    u = n(589022),
    c = n(518477),
    d = n(818348);
let _ = (0, a.FT9)(a._3J.SIZE_80),
    f = { onMouseDown: d.tE, onClick: d.tE, onKeyDown: d.tE, "aria-controls": void 0, "aria-expanded": !1 },
    h = { isShown: !1, position: void 0 };
function p(e) {
    let {
            children: t,
            user: n,
            currentUser: s,
            guildId: o,
            channelId: d,
            messageId: f,
            roleId: h,
            disableUserProfileLink: p,
            newAnalyticsLocations: m,
            appContext: E,
            avatarUrl: g,
            preload: A,
            renderPopout: I,
            onRequestOpen: T,
            onRequestClose: S,
            onClosePopout: y,
            shouldShow: v,
            shouldPreload: C = !0,
            ...N
        } = e,
        R = i.useCallback(
            () =>
                null != A
                    ? A()
                    : (0, l.A)(n.id, g ?? n.getAvatarURL(o, _), {
                          type: "popout",
                          withMutualGuilds: n.id !== s.id,
                          withMutualFriends: !n.bot && n.id !== s.id,
                          guildId: o,
                          channelId: d,
                      }),
            [A, s, n, g, o, d],
        ),
        b = i.useCallback(
            (e) =>
                null != I
                    ? I(e)
                    : (0, r.jsx)(u.default, {
                          ...e,
                          user: n,
                          currentUser: s,
                          guildId: o,
                          channelId: d,
                          roleId: h,
                          messageId: f,
                          disableUserProfileLink: p,
                          newAnalyticsLocations: m,
                          appContext: E,
                          closePopout: () => {
                              e.closePopout(), y?.();
                          },
                      }),
            [n, s, I, o, d, h, f, p, m, E, y],
        );
    return (0, r.jsx)(a.YNO, {
        popoutKey: c.KM,
        shouldShow: v,
        preload: C ? R : void 0,
        renderPopout: b,
        onRequestOpen: T,
        onRequestClose: S,
        ...N,
        children: t,
    });
}
function m(e) {
    let { children: t, userId: n, user: i, ...a } = e,
        l = (0, s.bG)([o.default], () => o.default.getCurrentUser()),
        u = (0, s.bG)([o.default], () => i ?? o.default.getUser(n));
    return null == u || null == l ? t(f, h) : (0, r.jsx)(p, { ...a, user: u, currentUser: l, children: t });
}
let E = i.memo(m);
