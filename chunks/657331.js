"use strict";
n.r(t), n.d(t, { closeUserProfileModal: () => p, openUserProfileModal: () => f });
var r = n(397927),
    i = n(73153),
    s = n(803306),
    a = n(993327),
    o = n(626584),
    l = n(287809),
    u = n(576622);
let c = (0, r.FT9)(r._3J.SIZE_120),
    d = new o.A("UserProfileModalActionCreators"),
    _ = async (e) => {
        try {
            await (0, a.A)(e);
        } catch (t) {
            d.log(`Failed to fetch content inventory outbox for ${e}:`, t);
        }
    };
async function f(e) {
    let {
            userId: t,
            guildId: n,
            originGuildId: r,
            channelId: a,
            messageId: o,
            roleId: d,
            sessionId: f,
            joinRequestId: p,
            tabSection: h,
            scrollTarget: m,
            hideRestrictedProfile: E,
            sourceAnalyticsLocations: g,
            appContext: A,
            customStatusPrompt: I = null,
        } = e,
        T = l.default.getUser(t);
    _(t),
        null == T
            ? await (0, s.eO)(t, {
                  type: "modal",
                  guildId: n ?? void 0,
                  withMutualFriendsCount: !0,
                  withMutualFriends: !1,
                  withMutualGuilds: !0,
                  joinRequestId: p,
              })
            : (0, u.A)(T.id, T.getAvatarURL(void 0, c), {
                  type: "modal",
                  guildId: n ?? void 0,
                  withMutualFriendsCount: !T.bot,
                  withMutualFriends: !1,
                  withMutualGuilds: !0,
                  joinRequestId: p,
              }),
        i.h.dispatch({
            type: "USER_PROFILE_MODAL_OPEN",
            userId: t,
            guildId: n ?? void 0,
            originGuildId: r ?? void 0,
            channelId: a ?? void 0,
            messageId: o ?? void 0,
            roleId: d ?? void 0,
            sessionId: f ?? void 0,
            customStatusPrompt: I,
            tabSection: h,
            scrollTarget: m,
            hideRestrictedProfile: E,
            sourceAnalyticsLocations: g,
            appContext: A,
        });
}
function p() {
    i.h.dispatch({ type: "USER_PROFILE_MODAL_CLOSE" });
}
