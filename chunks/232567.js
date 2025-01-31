n.d(t, {
    In: () => v,
    Lr: () => m,
    PR: () => E,
    k: () => h,
    mB: () => g
}),
    n(789020);
var i = n(512722),
    r = n.n(i),
    a = n(525769),
    s = n(259443),
    o = n(544891),
    l = n(570140),
    u = n(881052),
    c = n(598077),
    d = n(594174),
    f = n(573261),
    _ = n(981631);
let p = new s.Yd('UserProfileModalActionCreators');
function h() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        { withAnalyticsToken: t = !1 } = e;
    return o.tn
        .get({
            url: _.ANM.ME,
            query: { with_analytics_token: t },
            oldFormErrors: !0,
            rejectWithError: !1
        })
        .then(
            (e) => (
                l.Z.dispatch({
                    type: 'CURRENT_USER_UPDATE',
                    user: e.body,
                    analyticsToken: t ? e.body.analytics_token : void 0
                }),
                new c.Z(e.body)
            )
        );
}
function m() {
    let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
        t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
    return f.Z.patch({
        url: _.ANM.USER_AGREEMENTS,
        trackedActionData: { event: a.a.USER_ACCEPT_AGREEMENTS },
        body: {
            terms: e,
            privacy: t
        },
        oldFormErrors: !0,
        rejectWithError: !1
    }).then(
        () => !0,
        () => !1
    );
}
function g(e, t) {
    let n = d.default.getCurrentUser();
    r()(null != n, 'setFlag: user cannot be undefined');
    let i = t ? n.flags | e : n.flags & ~e;
    return o.tn.patch({
        url: _.ANM.ME,
        oldFormErrors: !0,
        body: { flags: i },
        rejectWithError: !1
    });
}
function E(e) {
    let t = d.default.getUser(e);
    return null != t
        ? Promise.resolve(t)
        : o.tn
              .get({
                  url: _.ANM.USER(e),
                  oldFormErrors: !0,
                  rejectWithError: !1
              })
              .then(
                  (t) => (
                      l.Z.dispatch({
                          type: 'USER_UPDATE',
                          user: t.body
                      }),
                      d.default.getUser(e)
                  )
              );
}
async function v(e) {
    let { friendToken: t, withMutualGuilds: n, withMutualFriendsCount: i, withMutualFriends: r, guildId: a, connectionsRoleId: s, joinRequestId: c, abortSignal: d } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        f = arguments.length > 2 ? arguments[2] : void 0;
    l.Z.dispatch({
        type: 'USER_PROFILE_FETCH_START',
        userId: e,
        guildId: a
    });
    try {
        let u = await o.tn.get({
            url: _.ANM.USER_PROFILE(e),
            query: {
                friend_token: t,
                with_mutual_guilds: n,
                with_mutual_friends: r,
                with_mutual_friends_count: i && (null == r || !r),
                guild_id: a,
                connections_role_id: s,
                join_request_id: c
            },
            signal: d,
            rejectWithError: !0
        });
        return (
            null == f || f(u.body, a),
            l.Z.dispatch({
                type: 'USER_UPDATE',
                user: u.body.user
            }),
            l.Z.dispatch({
                type: 'USER_PROFILE_FETCH_SUCCESS',
                ...u.body
            }),
            null != a &&
                null != u.body.guild_member &&
                l.Z.dispatch({
                    type: 'GUILD_MEMBER_PROFILE_UPDATE',
                    guildId: a,
                    guildMember: u.body.guild_member
                }),
            u.body
        );
    } catch (t) {
        throw (
            (null != t && (null == t ? void 0 : t.body) != null && p.warn('fetchProfile error: '.concat(t.body.code, ' - ').concat(t.body.message)),
            l.Z.dispatch({
                type: 'USER_PROFILE_FETCH_FAILURE',
                apiError: new u.Hx(t),
                userId: e,
                guildId: a
            }),
            t)
        );
    }
}
