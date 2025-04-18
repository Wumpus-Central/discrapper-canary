n.r(t),
    n.d(t, {
        closeUserProfileModal: () => g,
        openUserProfileModal: () => m
    });
var r = n(259443),
    i = n(481060),
    a = n(570140),
    o = n(232567),
    s = n(911284),
    l = n(314897),
    c = n(594174),
    u = n(9161),
    d = n(212321),
    f = n(484459);
let _ = (0, i.pxk)(i.EFr.SIZE_120),
    p = new r.Yd('UserProfileModalActionCreators'),
    h = async (e) => {
        let t = l.default.getId() === e,
            { recentActivityTabEnabled: n } = (0, u.x)({ location: 'UserProfileModalActionCreators' });
        if (n || t)
            try {
                await (0, s.Z)(e);
            } catch (t) {
                p.log('Failed to fetch content inventory outbox for '.concat(e, ':'), t);
            }
    };
async function m(e) {
    let { userId: t, guildId: n, channelId: r, messageId: i, roleId: s, sessionId: l, joinRequestId: u, section: p, subsection: m, friendToken: g, showGuildProfile: E, hideRestrictedProfile: b, analyticsLocation: y, sourceAnalyticsLocations: v, appContext: O, customStatusPrompt: I = null } = e,
        S = c.default.getUser(t);
    h(t);
    let { withMutualFriendsCount: T } = (0, d.R)({ location: 'openUserProfileModal' });
    null == S
        ? await (0, o.In)(t, {
              type: 'modal',
              guildId: E && null != n ? n : void 0,
              withMutualFriendsCount: T,
              withMutualFriends: !T,
              withMutualGuilds: !0,
              friendToken: g,
              joinRequestId: u
          })
        : (0, f.Z)(S.id, S.getAvatarURL(void 0, _), {
              type: 'modal',
              guildId: E && null != n ? n : void 0,
              withMutualFriendsCount: !S.bot && T,
              withMutualFriends: !S.bot && !T,
              withMutualGuilds: !0,
              friendToken: g,
              joinRequestId: u
          }),
        a.Z.dispatch({
            type: 'USER_PROFILE_MODAL_OPEN',
            userId: t,
            guildId: null != n ? n : void 0,
            channelId: null != r ? r : void 0,
            messageId: null != i ? i : void 0,
            roleId: null != s ? s : void 0,
            sessionId: null != l ? l : void 0,
            openedAt: Date.now(),
            customStatusPrompt: I,
            section: p,
            subsection: m,
            friendToken: g,
            showGuildProfile: E,
            hideRestrictedProfile: b,
            analyticsLocation: y,
            sourceAnalyticsLocations: v,
            appContext: O
        });
}
function g() {
    a.Z.dispatch({ type: 'USER_PROFILE_MODAL_CLOSE' });
}
