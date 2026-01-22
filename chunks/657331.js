n.r(t),
    n.d(t, {
        closeUserProfileModal: () => m,
        openUserProfileModal: () => h,
    });
var r = n(397927),
    i = n(73153),
    a = n(803306),
    s = n(993327),
    o = n(626584),
    l = n(961350),
    c = n(287809),
    u = n(840907),
    d = n(576622);
let f = (0, r.FT9)(r._3J.SIZE_120),
    p = new o.A("UserProfileModalActionCreators"),
    _ = async (e) => {
        let t = l.default.getId() === e,
            { recentActivityTabEnabled: n } = (0, u.f)({ location: "UserProfileModalActionCreators" });
        if (n || t)
            try {
                await (0, s.A)(e);
            } catch (t) {
                p.log("Failed to fetch content inventory outbox for ".concat(e, ":"), t);
            }
    };
async function h(e) {
    let {
            userId: t,
            guildId: n,
            channelId: r,
            messageId: s,
            roleId: o,
            sessionId: l,
            joinRequestId: u,
            tabSection: p,
            scrollTarget: h,
            showGuildProfile: m,
            hideRestrictedProfile: g,
            sourceAnalyticsLocations: E,
            appContext: b,
            customStatusPrompt: y = null,
            disableActionsForPreview: O = !1,
        } = e,
        A = c.default.getUser(t);
    _(t),
        null == A
            ? await (0, a.eO)(t, {
                  type: "modal",
                  guildId: m && null != n ? n : void 0,
                  withMutualFriendsCount: !0,
                  withMutualFriends: !1,
                  withMutualGuilds: !0,
                  joinRequestId: u,
              })
            : (0, d.A)(A.id, A.getAvatarURL(void 0, f), {
                  type: "modal",
                  guildId: m && null != n ? n : void 0,
                  withMutualFriendsCount: !A.bot,
                  withMutualFriends: !1,
                  withMutualGuilds: !0,
                  joinRequestId: u,
              }),
        i.h.dispatch({
            type: "USER_PROFILE_MODAL_OPEN",
            userId: t,
            guildId: null != n ? n : void 0,
            channelId: null != r ? r : void 0,
            messageId: null != s ? s : void 0,
            roleId: null != o ? o : void 0,
            sessionId: null != l ? l : void 0,
            openedAt: Date.now(),
            customStatusPrompt: y,
            tabSection: p,
            scrollTarget: h,
            showGuildProfile: m,
            hideRestrictedProfile: g,
            sourceAnalyticsLocations: E,
            appContext: b,
            disableActionsForPreview: O,
        });
}
function m() {
    i.h.dispatch({ type: "USER_PROFILE_MODAL_CLOSE" });
}
