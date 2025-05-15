n.d(t, {
    In: () => b,
    Lr: () => m,
    PR: () => E,
    Sr: () => y,
    k: () => h,
    mB: () => g
}),
    n(997841);
var r = n(512722),
    i = n.n(r),
    a = n(525769),
    o = n(259443),
    s = n(544891),
    l = n(570140),
    c = n(881052),
    u = n(598077),
    d = n(594174),
    f = n(573261),
    _ = n(981631);
let p = new o.Yd('UserProfileModalActionCreators');
function h() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        { withAnalyticsToken: t = !1 } = e;
    return s.tn
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
                new u.Z(e.body)
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
    i()(null != n, 'setFlag: user cannot be undefined');
    let r = t ? n.flags | e : n.flags & ~e;
    return s.tn.patch({
        url: _.ANM.ME,
        oldFormErrors: !0,
        body: { flags: r },
        rejectWithError: !1
    });
}
function E(e) {
    let t = d.default.getUser(e);
    return null != t
        ? Promise.resolve(t)
        : s.tn
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
async function b(e) {
    let { type: t, friendToken: n, withMutualGuilds: r, withMutualFriendsCount: i, withMutualFriends: a, guildId: o, connectionsRoleId: u, joinRequestId: d, abortSignal: f } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        h = arguments.length > 2 ? arguments[2] : void 0,
        m = Date.now();
    l.Z.dispatch({
        type: 'USER_PROFILE_FETCH_START',
        userId: e,
        guildId: o,
        withMutualFriends: a
    });
    try {
        let c = await s.tn.get({
            url: _.ANM.USER_PROFILE(e),
            query: {
                type: t,
                friend_token: n,
                with_mutual_guilds: r,
                with_mutual_friends: a,
                with_mutual_friends_count: i && (null == a || !a),
                guild_id: o,
                connections_role_id: u,
                join_request_id: d
            },
            signal: f,
            rejectWithError: !0
        });
        null == h || h(c.body, o),
            l.Z.dispatch({
                type: 'USER_UPDATE',
                user: c.body.user
            }),
            l.Z.dispatch({
                type: 'USER_PROFILE_FETCH_SUCCESS',
                userProfile: c.body,
                fetchStartedAt: m
            }),
            null != o &&
                null != c.body.guild_member &&
                l.Z.dispatch({
                    type: 'GUILD_MEMBER_PROFILE_UPDATE',
                    guildId: o,
                    guildMember: c.body.guild_member
                });
    } catch (t) {
        throw (
            (null != t && (null == t ? void 0 : t.body) != null && p.warn('fetchProfile error: '.concat(t.body.code, ' - ').concat(t.body.message)),
            l.Z.dispatch({
                type: 'USER_PROFILE_FETCH_FAILURE',
                apiError: new c.Hx(t),
                fetchStartedAt: m,
                userId: e,
                guildId: o
            }),
            t)
        );
    }
}
async function y(e, t) {
    l.Z.dispatch({
        type: 'MUTUAL_FRIENDS_FETCH_START',
        userId: e
    });
    try {
        let n = await s.tn.get({
            url: _.ANM.USER_RELATIONSHIPS(e),
            oldFormErrors: !0,
            signal: t,
            rejectWithError: !1
        });
        l.Z.dispatch({
            type: 'MUTUAL_FRIENDS_FETCH_SUCCESS',
            userId: e,
            mutualFriends: n.body
        });
    } catch (t) {
        throw (
            ((null == t ? void 0 : t.body) != null && p.warn('fetchMutualFriends error: '.concat(t.body.code, ' - ').concat(t.body.message)),
            l.Z.dispatch({
                type: 'MUTUAL_FRIENDS_FETCH_FAILURE',
                userId: e
            }),
            t)
        );
    }
}
