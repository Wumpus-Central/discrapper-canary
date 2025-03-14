n.r(t),
    n.d(t, {
        closeUserProfileModal: () => m,
        openUserProfileModal: () => h
    });
var r = n(259443),
    i = n(481060),
    o = n(570140),
    a = n(232567),
    s = n(911284),
    l = n(314897),
    c = n(594174),
    u = n(9161),
    d = n(484459);
let f = (0, i.pxk)(i.EFr.SIZE_120),
    _ = new r.Yd('UserProfileModalActionCreators'),
    p = async (e) => {
        let t = l.default.getId() === e,
            { recentActivityTabEnabled: n } = (0, u.x)({ location: 'UserProfileModalActionCreators' });
        if (n || t)
            try {
                await (0, s.Z)(e);
            } catch (t) {
                _.log('Failed to fetch content inventory outbox for '.concat(e, ':'), t);
            }
    };
async function h(e) {
    let { userId: t, guildId: n, channelId: r, messageId: i, roleId: s, sessionId: l, joinRequestId: u, section: _, subsection: h, friendToken: m, showGuildProfile: g, analyticsLocation: E, sourceAnalyticsLocations: v, appContext: b, customStatusPrompt: y = null } = e,
        O = c.default.getUser(t);
    p(t),
        null == O
            ? await (0, a.In)(t, {
                  type: 'modal',
                  guildId: g && null != n ? n : void 0,
                  withMutualGuilds: !0,
                  withMutualFriends: !0,
                  friendToken: m,
                  joinRequestId: u
              })
            : (0, d.Z)(O.id, O.getAvatarURL(void 0, f), {
                  type: 'modal',
                  guildId: g && null != n ? n : void 0,
                  withMutualGuilds: !0,
                  withMutualFriends: !0,
                  friendToken: m,
                  joinRequestId: u
              }),
        o.Z.dispatch({
            type: 'USER_PROFILE_MODAL_OPEN',
            userId: t,
            guildId: null != n ? n : void 0,
            channelId: null != r ? r : void 0,
            messageId: null != i ? i : void 0,
            roleId: null != s ? s : void 0,
            sessionId: null != l ? l : void 0,
            customStatusPrompt: y,
            section: _,
            subsection: h,
            friendToken: m,
            showGuildProfile: g,
            analyticsLocation: E,
            sourceAnalyticsLocations: v,
            appContext: b
        });
}
function m() {
    o.Z.dispatch({ type: 'USER_PROFILE_MODAL_CLOSE' });
}
