n.r(t),
    n.d(t, {
        closeUserProfileModal: () => g,
        openUserProfileModal: () => m
    });
var r = n(259443),
    i = n(481060),
    o = n(570140),
    a = n(232567),
    s = n(911284),
    l = n(314897),
    c = n(594174),
    u = n(9161),
    d = n(456644),
    f = n(484459);
let p = (0, i.pxk)(i.EFr.SIZE_120),
    _ = new r.Yd('UserProfileModalActionCreators'),
    h = async (e) => {
        let t = l.default.getId() === e,
            { recentActivityTabEnabled: n } = (0, u.x)({ location: 'UserProfileModalActionCreators' }),
            { recentActivityEnabled: r } = (0, d.G)({ location: 'UserProfileModalActionCreators' });
        if (n || r || t)
            try {
                await (0, s.Z)(e);
            } catch (t) {
                _.log('Failed to fetch content inventory outbox for '.concat(e, ':'), t);
            }
    };
async function m(e) {
    let { userId: t, guildId: n, channelId: r, messageId: i, roleId: s, sessionId: l, joinRequestId: u, section: d, subsection: _, friendToken: m, showGuildProfile: g, analyticsLocation: E, sourceAnalyticsLocations: v, appContext: b } = e,
        y = c.default.getUser(t);
    h(t),
        null == y
            ? await (0, a.In)(t, {
                  guildId: g && null != n ? n : void 0,
                  withMutualGuilds: !0,
                  withMutualFriends: !0,
                  friendToken: m,
                  joinRequestId: u
              })
            : (0, f.Z)(y.id, y.getAvatarURL(void 0, p), {
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
            section: d,
            subsection: _,
            friendToken: m,
            showGuildProfile: g,
            analyticsLocation: E,
            sourceAnalyticsLocations: v,
            appContext: b
        });
}
function g() {
    o.Z.dispatch({ type: 'USER_PROFILE_MODAL_CLOSE' });
}
