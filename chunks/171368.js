n.r(t),
    n.d(t, {
        closeUserProfileModal: () => g,
        openUserProfileModal: () => m
    });
var i = n(259443),
    r = n(481060),
    a = n(570140),
    s = n(232567),
    o = n(911284),
    l = n(314897),
    u = n(594174),
    c = n(9161),
    d = n(456644),
    f = n(484459);
let _ = (0, r.pxk)(r.EFr.SIZE_120),
    p = new i.Yd('UserProfileModalActionCreators'),
    h = async (e) => {
        let t = l.default.getId() === e,
            { recentActivityTabEnabled: n } = (0, c.x)({ location: 'UserProfileModalActionCreators' }),
            { recentActivityEnabled: i } = (0, d.G)({ location: 'UserProfileModalActionCreators' });
        if (n || i || t)
            try {
                await (0, o.Z)(e);
            } catch (t) {
                p.log('Failed to fetch content inventory outbox for '.concat(e, ':'), t);
            }
    };
async function m(e) {
    let { userId: t, guildId: n, channelId: i, messageId: r, roleId: o, sessionId: l, joinRequestId: c, section: d, subsection: p, friendToken: m, showGuildProfile: g, analyticsLocation: E, sourceAnalyticsLocations: v } = e,
        y = u.default.getUser(t);
    h(t),
        null == y
            ? await (0, s.In)(t, {
                  guildId: g && null != n ? n : void 0,
                  withMutualGuilds: !0,
                  withMutualFriends: !0,
                  friendToken: m,
                  joinRequestId: c
              })
            : (0, f.Z)(y.id, y.getAvatarURL(void 0, _), {
                  guildId: g && null != n ? n : void 0,
                  withMutualGuilds: !0,
                  withMutualFriends: !0,
                  friendToken: m,
                  joinRequestId: c
              }),
        a.Z.dispatch({
            type: 'USER_PROFILE_MODAL_OPEN',
            userId: t,
            guildId: null != n ? n : void 0,
            channelId: null != i ? i : void 0,
            messageId: null != r ? r : void 0,
            roleId: null != o ? o : void 0,
            sessionId: null != l ? l : void 0,
            section: d,
            subsection: p,
            friendToken: m,
            showGuildProfile: g,
            analyticsLocation: E,
            sourceAnalyticsLocations: v
        });
}
function g() {
    a.Z.dispatch({ type: 'USER_PROFILE_MODAL_CLOSE' });
}
