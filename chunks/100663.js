n.d(t, { openUserProfileModal: () => f });
var i = n(778712),
    r = n(73153),
    a = n(803306),
    s = n(927813),
    l = n(86070),
    o = n(517164);
let d = s.A.Millis.MINUTE;
var c = n(626584),
    u = n(287809),
    _ = n(917445);
let E = (0, i.FT)(i._3.SIZE_120),
    A = new c.A("UserProfileModalActionCreators");
async function f(e) {
    let {
            userId: t,
            guildId: n,
            originGuildId: i,
            channelId: s,
            messageId: c,
            roleId: f,
            sessionId: h,
            joinRequestId: I,
            tabSection: p,
            scrollTarget: m,
            hideRestrictedProfile: g,
            sourceAnalyticsLocations: T,
            appContext: S,
            customStatusPrompt: N = null,
            onModalOpen: C,
            onModalClose: O,
        } = e,
        R = Date.now(),
        L = u.default.getUser(t);
    if (
        (!(async function (e) {
            try {
                await (function (e) {
                    if (o.A.isFetchingUserOutbox(e)) return;
                    let t = o.A.getUserOutbox(e)?.lastFetched ?? 0;
                    if (!(Date.now() - t < d)) return (0, l.r7)(e, void 0);
                })(e);
            } catch (t) {
                A.log(`Failed to fetch content inventory outbox for ${e}:`, t);
            }
        })(t),
        null == L)
    )
        try {
            await (0, a.eO)(t, {
                type: "modal",
                guildId: n ?? void 0,
                withMutualFriendsCount: !0,
                withMutualFriends: !1,
                withMutualGuilds: !0,
                joinRequestId: I,
            });
        } catch (e) {
            A.log(`Failed to fetch profile for ${t}:`, e);
            try {
                await (0, a.wz)(t);
            } catch (e) {
                A.log(`Failed to fetch user ${t}:`, e);
            }
        }
    else
        (0, _.A)(L.id, L.getAvatarURL(void 0, E), {
            type: "modal",
            guildId: n ?? void 0,
            withMutualFriendsCount: !L.bot,
            withMutualFriends: !1,
            withMutualGuilds: !0,
            joinRequestId: I,
        }).catch((e) => {
            A.log(`Failed to fetch profile for ${t}:`, e);
        });
    r.h.dispatch({
        type: "USER_PROFILE_MODAL_OPEN",
        userId: t,
        guildId: n ?? void 0,
        originGuildId: i ?? void 0,
        channelId: s ?? void 0,
        messageId: c ?? void 0,
        roleId: f ?? void 0,
        sessionId: h ?? void 0,
        openedAt: R,
        customStatusPrompt: N,
        tabSection: p,
        scrollTarget: m,
        hideRestrictedProfile: g,
        sourceAnalyticsLocations: T,
        appContext: S,
        onModalOpen: C,
        onModalClose: O,
    });
}
