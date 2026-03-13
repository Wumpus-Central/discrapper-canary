"use strict";
n.r(t), n.d(t, { closeUserProfileModal: () => m, openUserProfileModal: () => h });
var r = n(397927),
    i = n(73153),
    s = n(803306),
    a = n(993327),
    o = n(626584),
    l = n(961350),
    u = n(287809),
    c = n(840907),
    d = n(576622);
let _ = (0, r.FT9)(r._3J.SIZE_120),
    f = new o.A("UserProfileModalActionCreators"),
    p = async (e) => {
        let t = l.default.getId() === e,
            { recentActivityTabEnabled: n } = (0, c.f)({ location: "UserProfileModalActionCreators" });
        if (n || t)
            try {
                await (0, a.A)(e);
            } catch (t) {
                f.log(`Failed to fetch content inventory outbox for ${e}:`, t);
            }
    };
async function h(e) {
    let {
            userId: t,
            guildId: n,
            channelId: r,
            messageId: a,
            roleId: o,
            sessionId: l,
            joinRequestId: c,
            tabSection: f,
            scrollTarget: h,
            showGuildProfile: m,
            hideRestrictedProfile: E,
            sourceAnalyticsLocations: g,
            appContext: A,
            customStatusPrompt: I = null,
        } = e,
        T = u.default.getUser(t);
    p(t),
        null == T
            ? await (0, s.eO)(t, {
                  type: "modal",
                  guildId: m && null != n ? n : void 0,
                  withMutualFriendsCount: !0,
                  withMutualFriends: !1,
                  withMutualGuilds: !0,
                  joinRequestId: c,
              })
            : (0, d.A)(T.id, T.getAvatarURL(void 0, _), {
                  type: "modal",
                  guildId: m && null != n ? n : void 0,
                  withMutualFriendsCount: !T.bot,
                  withMutualFriends: !1,
                  withMutualGuilds: !0,
                  joinRequestId: c,
              }),
        i.h.dispatch({
            type: "USER_PROFILE_MODAL_OPEN",
            userId: t,
            guildId: n ?? void 0,
            channelId: r ?? void 0,
            messageId: a ?? void 0,
            roleId: o ?? void 0,
            sessionId: l ?? void 0,
            customStatusPrompt: I,
            tabSection: f,
            scrollTarget: h,
            showGuildProfile: m,
            hideRestrictedProfile: E,
            sourceAnalyticsLocations: g,
            appContext: A,
        });
}
function m() {
    i.h.dispatch({ type: "USER_PROFILE_MODAL_CLOSE" });
}
