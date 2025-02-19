n.d(t, {
    In: () => y,
    Lr: () => E,
    PR: () => b,
    k: () => g,
    mB: () => v
}),
    n(789020);
var r = n(512722),
    i = n.n(r),
    o = n(525769),
    a = n(259443),
    s = n(544891),
    l = n(570140),
    c = n(881052),
    u = n(598077),
    d = n(594174),
    f = n(573261),
    p = n(981631);
function _(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function h(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                _(e, t, n[t]);
            });
    }
    return e;
}
let m = new a.Yd('UserProfileModalActionCreators');
function g() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        { withAnalyticsToken: t = !1 } = e;
    return s.tn
        .get({
            url: p.ANM.ME,
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
function E() {
    let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
        t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
    return f.Z.patch({
        url: p.ANM.USER_AGREEMENTS,
        trackedActionData: { event: o.a.USER_ACCEPT_AGREEMENTS },
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
function v(e, t) {
    let n = d.default.getCurrentUser();
    i()(null != n, 'setFlag: user cannot be undefined');
    let r = t ? n.flags | e : n.flags & ~e;
    return s.tn.patch({
        url: p.ANM.ME,
        oldFormErrors: !0,
        body: { flags: r },
        rejectWithError: !1
    });
}
function b(e) {
    let t = d.default.getUser(e);
    return null != t
        ? Promise.resolve(t)
        : s.tn
              .get({
                  url: p.ANM.USER(e),
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
async function y(e) {
    let { friendToken: t, withMutualGuilds: n, withMutualFriendsCount: r, withMutualFriends: i, guildId: o, connectionsRoleId: a, joinRequestId: u, abortSignal: d } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        f = arguments.length > 2 ? arguments[2] : void 0;
    l.Z.dispatch({
        type: 'USER_PROFILE_FETCH_START',
        userId: e,
        guildId: o
    });
    try {
        let c = await s.tn.get({
            url: p.ANM.USER_PROFILE(e),
            query: {
                friend_token: t,
                with_mutual_guilds: n,
                with_mutual_friends: i,
                with_mutual_friends_count: r && (null == i || !i),
                guild_id: o,
                connections_role_id: a,
                join_request_id: u
            },
            signal: d,
            rejectWithError: !0
        });
        return (
            null == f || f(c.body, o),
            l.Z.dispatch({
                type: 'USER_UPDATE',
                user: c.body.user
            }),
            l.Z.dispatch(h({ type: 'USER_PROFILE_FETCH_SUCCESS' }, c.body)),
            null != o &&
                null != c.body.guild_member &&
                l.Z.dispatch({
                    type: 'GUILD_MEMBER_PROFILE_UPDATE',
                    guildId: o,
                    guildMember: c.body.guild_member
                }),
            c.body
        );
    } catch (t) {
        throw (
            (null != t && (null == t ? void 0 : t.body) != null && m.warn('fetchProfile error: '.concat(t.body.code, ' - ').concat(t.body.message)),
            l.Z.dispatch({
                type: 'USER_PROFILE_FETCH_FAILURE',
                apiError: new c.Hx(t),
                userId: e,
                guildId: o
            }),
            t)
        );
    }
}
