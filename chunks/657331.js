"use strict";
n.r(t), n.d(t, { closeUserProfileModal: () => E, openUserProfileModal: () => f });
var r = n(778712),
    i = n(73153),
    s = n(803306),
    a = n(993327),
    o = n(626584),
    l = n(287809),
    u = n(576622);
let d = (0, r.FT)(r._3.SIZE_120),
    c = new o.A("UserProfileModalActionCreators"),
    _ = async (e) => {
        try {
            await (0, a.A)(e);
        } catch (t) {
            c.log(`Failed to fetch content inventory outbox for ${e}:`, t);
        }
    };
async function f(e) {
    let {
            userId: t,
            guildId: n,
            originGuildId: r,
            channelId: a,
            messageId: o,
            roleId: c,
            sessionId: f,
            joinRequestId: E,
            tabSection: h,
            scrollTarget: p,
            hideRestrictedProfile: m,
            sourceAnalyticsLocations: g,
            appContext: A,
            customStatusPrompt: I = null,
        } = e,
        T = Date.now(),
        S = l.default.getUser(t);
    _(t),
        null == S
            ? await (0, s.eO)(t, {
                  type: "modal",
                  guildId: n ?? void 0,
                  withMutualFriendsCount: !0,
                  withMutualFriends: !1,
                  withMutualGuilds: !0,
                  joinRequestId: E,
              })
            : (0, u.A)(S.id, S.getAvatarURL(void 0, d), {
                  type: "modal",
                  guildId: n ?? void 0,
                  withMutualFriendsCount: !S.bot,
                  withMutualFriends: !1,
                  withMutualGuilds: !0,
                  joinRequestId: E,
              }),
        i.h.dispatch({
            type: "USER_PROFILE_MODAL_OPEN",
            userId: t,
            guildId: n ?? void 0,
            originGuildId: r ?? void 0,
            channelId: a ?? void 0,
            messageId: o ?? void 0,
            roleId: c ?? void 0,
            sessionId: f ?? void 0,
            openedAt: T,
            customStatusPrompt: I,
            tabSection: h,
            scrollTarget: p,
            hideRestrictedProfile: m,
            sourceAnalyticsLocations: g,
            appContext: A,
        });
}
function E() {
    i.h.dispatch({ type: "USER_PROFILE_MODAL_CLOSE" });
}
