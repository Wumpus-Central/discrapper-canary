(n.d(t, {
    In: () => b,
    Lr: () => m,
    PR: () => E,
    Sr: () => y,
    k: () => h,
    mB: () => g
}),
    n(997841));
var r = n(512722),
    i = n.n(r),
    a = n(525769),
    o = n(544891),
    s = n(570140),
    l = n(881052),
    c = n(710845),
    u = n(598077),
    d = n(594174),
    f = n(573261),
    _ = n(981631);
let p = new c.Z('UserProfileModalActionCreators');
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
                s.Z.dispatch({
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
    return o.tn.patch({
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
        : o.tn
              .get({
                  url: _.ANM.USER(e),
                  oldFormErrors: !0,
                  rejectWithError: !1
              })
              .then(
                  (t) => (
                      s.Z.dispatch({
                          type: 'USER_UPDATE',
                          user: t.body
                      }),
                      d.default.getUser(e)
                  )
              );
}
async function b(e) {
    let { type: t, withMutualGuilds: n, withMutualFriendsCount: r, withMutualFriends: i, guildId: a, connectionsRoleId: c, joinRequestId: u, abortSignal: d } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        f = arguments.length > 2 ? arguments[2] : void 0,
        h = Date.now();
    s.Z.dispatch({
        type: 'USER_PROFILE_FETCH_START',
        userId: e,
        guildId: a,
        withMutualFriends: i
    });
    try {
        let l = await o.tn.get({
            url: _.ANM.USER_PROFILE(e),
            query: {
                type: t,
                with_mutual_guilds: n,
                with_mutual_friends: i,
                with_mutual_friends_count: r && (null == i || !i),
                guild_id: a,
                connections_role_id: c,
                join_request_id: u
            },
            signal: d,
            rejectWithError: !0
        });
        (null == f || f(l.body, a),
            s.Z.dispatch({
                type: 'USER_UPDATE',
                user: l.body.user
            }),
            s.Z.dispatch({
                type: 'USER_PROFILE_FETCH_SUCCESS',
                userProfile: l.body,
                fetchStartedAt: h
            }),
            null != a &&
                null != l.body.guild_member &&
                s.Z.dispatch({
                    type: 'GUILD_MEMBER_PROFILE_UPDATE',
                    guildId: a,
                    guildMember: l.body.guild_member
                }));
    } catch (t) {
        throw (
            null != t && (null == t ? void 0 : t.body) != null && p.warn('fetchProfile error: '.concat(t.body.code, ' - ').concat(t.body.message)),
            s.Z.dispatch({
                type: 'USER_PROFILE_FETCH_FAILURE',
                apiError: new l.Hx(t),
                fetchStartedAt: h,
                userId: e,
                guildId: a
            }),
            t
        );
    }
}
async function y(e, t) {
    s.Z.dispatch({
        type: 'MUTUAL_FRIENDS_FETCH_START',
        userId: e
    });
    try {
        let n = await o.tn.get({
            url: _.ANM.USER_RELATIONSHIPS(e),
            oldFormErrors: !0,
            signal: t,
            rejectWithError: !1
        });
        s.Z.dispatch({
            type: 'MUTUAL_FRIENDS_FETCH_SUCCESS',
            userId: e,
            mutualFriends: n.body
        });
    } catch (t) {
        throw (
            (null == t ? void 0 : t.body) != null && p.warn('fetchMutualFriends error: '.concat(t.body.code, ' - ').concat(t.body.message)),
            s.Z.dispatch({
                type: 'MUTUAL_FRIENDS_FETCH_FAILURE',
                userId: e
            }),
            t
        );
    }
}
