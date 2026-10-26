(n.r(t), n.d(t, { openUserProfileModal: () => I }));
var i = n(778712),
    r = n(73153),
    a = n(803306),
    s = n(927813),
    l = n(86070),
    o = n(517164);
let d = s.A.Millis.MINUTE;
var c = n(626584),
    u = n(287809);
let _ = (0, n(945810).mj)({
    name: "2026-09-profile-link-fetch",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
});
var E = n(903209);
let A = (0, i.FT)(i._3.SIZE_120),
    h = new c.A("UserProfileModalActionCreators");
async function f(e) {
    try {
        await (function (e) {
            if (o.A.isFetchingUserOutbox(e)) return;
            let t = o.A.getUserOutbox(e)?.lastFetched ?? 0;
            if (!(Date.now() - t < d)) return (0, l.r7)(e, void 0);
        })(e);
    } catch (t) {
        h.log(`Failed to fetch content inventory outbox for ${e}:`, t);
    }
}
async function I(e) {
    let {
            userId: t,
            guildId: n,
            originGuildId: i,
            channelId: s,
            messageId: l,
            roleId: o,
            sessionId: d,
            joinRequestId: c,
            tabSection: I,
            scrollTarget: p,
            hideRestrictedProfile: T,
            sourceAnalyticsLocations: m,
            appContext: g,
            customStatusPrompt: S = null,
            onModalOpen: N,
            onModalClose: C,
        } = e,
        O = Date.now(),
        R = u.default.getUser(t);
    if ((f(t), null == R))
        try {
            await (0, a.eO)(t, {
                type: "modal",
                guildId: n ?? void 0,
                withMutualFriendsCount: !0,
                withMutualFriends: !1,
                withMutualGuilds: !0,
                joinRequestId: c,
            });
        } catch (e) {
            if (
                (h.log(`Failed to fetch profile for ${t}:`, e),
                (function (e) {
                    let { enabled: t } = _.getConfig({ location: e });
                    return t;
                })("UserProfileModalActionCreators"))
            )
                try {
                    await (0, a.wz)(t);
                } catch (e) {
                    h.log(`Failed to fetch user ${t}:`, e);
                }
        }
    else
        (0, E.A)(R.id, R.getAvatarURL(void 0, A), {
            type: "modal",
            guildId: n ?? void 0,
            withMutualFriendsCount: !R.bot,
            withMutualFriends: !1,
            withMutualGuilds: !0,
            joinRequestId: c,
        }).catch((e) => {
            h.log(`Failed to fetch profile for ${t}:`, e);
        });
    r.h.dispatch({
        type: "USER_PROFILE_MODAL_OPEN",
        userId: t,
        guildId: n ?? void 0,
        originGuildId: i ?? void 0,
        channelId: s ?? void 0,
        messageId: l ?? void 0,
        roleId: o ?? void 0,
        sessionId: d ?? void 0,
        openedAt: O,
        customStatusPrompt: S,
        tabSection: I,
        scrollTarget: p,
        hideRestrictedProfile: T,
        sourceAnalyticsLocations: m,
        appContext: g,
        onModalOpen: N,
        onModalClose: C,
    });
}
