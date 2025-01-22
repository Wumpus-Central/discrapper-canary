r.r(n),
    r.d(n, {
        closeUserProfileModal: function () {
            return E;
        },
        openUserProfileModal: function () {
            return g;
        }
    });
var i = r(259443),
    a = r(481060),
    o = r(570140),
    s = r(232567),
    l = r(911284),
    u = r(314897),
    c = r(594174),
    d = r(9161),
    f = r(456644),
    p = r(484459);
let h = (0, a.getAvatarSize)(a.AvatarSizes.SIZE_120),
    _ = new i.Yd('UserProfileModalActionCreators'),
    m = async (e) => {
        let n = u.default.getId() === e,
            { recentActivityTabEnabled: r } = (0, d.x)({ location: 'UserProfileModalActionCreators' }),
            { recentActivityEnabled: i } = (0, f.G)({ location: 'UserProfileModalActionCreators' });
        if (!!r || !!i || !!n)
            try {
                await (0, l.Z)(e);
            } catch (n) {
                _.log('Failed to fetch content inventory outbox for '.concat(e, ':'), n);
            }
    };
async function g(e) {
    let { userId: n, guildId: r, channelId: i, messageId: a, roleId: l, sessionId: u, joinRequestId: d, section: f, subsection: _, friendToken: g, showGuildProfile: E, analyticsLocation: v, sourceAnalyticsLocations: y } = e,
        b = c.default.getUser(n);
    m(n),
        null == b
            ? await (0, s.In)(n, {
                  guildId: E && null != r ? r : void 0,
                  withMutualGuilds: !0,
                  withMutualFriends: !0,
                  friendToken: g,
                  joinRequestId: d
              })
            : (0, p.Z)(b.id, b.getAvatarURL(void 0, h), {
                  guildId: E && null != r ? r : void 0,
                  withMutualGuilds: !0,
                  withMutualFriends: !0,
                  friendToken: g,
                  joinRequestId: d
              }),
        o.Z.dispatch({
            type: 'USER_PROFILE_MODAL_OPEN',
            userId: n,
            guildId: null != r ? r : void 0,
            channelId: null != i ? i : void 0,
            messageId: null != a ? a : void 0,
            roleId: null != l ? l : void 0,
            sessionId: null != u ? u : void 0,
            section: f,
            subsection: _,
            friendToken: g,
            showGuildProfile: E,
            analyticsLocation: v,
            sourceAnalyticsLocations: y
        });
}
function E() {
    o.Z.dispatch({ type: 'USER_PROFILE_MODAL_CLOSE' });
}
