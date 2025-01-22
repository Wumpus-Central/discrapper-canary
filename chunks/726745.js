let i, a;
r.d(n, {
    q: function () {
        return o;
    }
});
var o,
    s,
    l = r(653041);
var u = r(213919),
    c = r(442837),
    d = r(570140),
    f = r(990492),
    p = r(988965),
    h = r(71509);
function _(e, n, r) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = r),
        e
    );
}
!(function (e) {
    (e[(e.INVALID = 0)] = 'INVALID'), (e[(e.VALIDATING = 1)] = 'VALIDATING'), (e[(e.VALID = 2)] = 'VALID');
})(o || (o = {}));
let m = [],
    g = !1;
function E(e) {
    let { user: n } = e;
    (i = n.id), (g = !1);
    let r = m.slice(),
        a = r.findIndex((e) => {
            let { id: r } = e;
            return r === n.id;
        });
    a > -1
        ? ((m[a].avatar = n.avatar), (m[a].username = n.username), (m[a].discriminator = n.discriminator), (m[a].tokenStatus = 2))
        : r.push({
              id: n.id,
              avatar: n.avatar,
              username: n.username,
              discriminator: n.discriminator,
              tokenStatus: 2,
              pushSyncToken: null
          }),
        (m = r).length > h.$H &&
            m.splice(h.$H).forEach((e) => {
                let { id: n } = e;
                y(n);
            });
}
function v(e) {
    (g = !!e.isSwitchingAccount),
        !e.isSwitchingAccount &&
            (m = m.filter((e) => {
                let { id: n } = e;
                return n !== i;
            })),
        (i = null);
}
function y(e) {
    (m = m.filter((n) => {
        let { id: r } = n;
        return r !== e;
    })),
        u.removeToken(e);
}
function b(e) {
    let { user: n } = e,
        r = m.slice(),
        i = r.find((e) => {
            let { id: r } = e;
            return r === n.id;
        });
    null != i && ((i.avatar = n.avatar), (i.username = n.username), (i.discriminator = n.discriminator), (m = r));
}
function I(e, n) {
    let r = m.slice(),
        i = r.find((n) => {
            let { id: r } = n;
            return r === e;
        });
    null != i && ((i.tokenStatus = n), (m = r));
}
function T(e) {
    let { from: n, to: r } = e;
    m = (0, f.aB)(m, n, r);
}
function S(e) {
    let { multiAccountMobileExperimentEnabled: n } = e;
    a = n;
}
function A(e) {
    let { userId: n, pushSyncToken: r } = e;
    m = m.map((e) =>
        e.id === n
            ? {
                  ...e,
                  pushSyncToken: r
              }
            : e
    );
}
function C(e) {
    let { invalidPushSyncTokens: n } = e;
    m = m.map((e) =>
        null != e.pushSyncToken && n.includes(e.pushSyncToken)
            ? {
                  ...e,
                  pushSyncToken: null
              }
            : e
    );
}
class N extends (s = c.ZP.PersistedStore) {
    initialize(e) {
        if (null != e) {
            var n;
            (m = null !== (n = e.users) && void 0 !== n ? n : []), (a = e.canUseMultiAccountMobile);
        }
    }
    getCanUseMultiAccountMobile() {
        return a;
    }
    getState() {
        return {
            users: m,
            canUseMultiAccountMobile: a
        };
    }
    getUsers() {
        return m;
    }
    getValidUsers() {
        return m.filter((e) => {
            let { tokenStatus: n } = e;
            return 0 !== n;
        });
    }
    getHasLoggedInAccounts() {
        return m.length > 0;
    }
    getIsValidatingUsers() {
        return m.some((e) => {
            let { tokenStatus: n } = e;
            return 1 === n;
        });
    }
    get canUseMultiAccountNotifications() {
        return this.getCanUseMultiAccountMobile() && p.N.getCurrentConfig({ location: '09e468_1' }, { autoTrackExposure: !1 }).isMultiAccountMobileNotificationsEnabled;
    }
    get isSwitchingAccount() {
        return g;
    }
}
_(N, 'displayName', 'MultiAccountStore'),
    _(N, 'persistKey', 'MultiAccountStore'),
    _(N, 'migrations', [
        (e) => {
            if (null != e) {
                var n;
                return {
                    users: null !== (n = e.users) && void 0 !== n ? n : [],
                    canUseMultiAccountMobile: !1
                };
            }
            return {
                users: [],
                canUseMultiAccountMobile: !1
            };
        }
    ]),
    (n.Z = new N(d.Z, {
        CONNECTION_OPEN: E,
        LOGOUT: v,
        MULTI_ACCOUNT_VALIDATE_TOKEN_REQUEST: (e) => I(e.userId, 1),
        MULTI_ACCOUNT_VALIDATE_TOKEN_SUCCESS: (e) => I(e.userId, 2),
        MULTI_ACCOUNT_VALIDATE_TOKEN_FAILURE: (e) => I(e.userId, 0),
        MULTI_ACCOUNT_REMOVE_ACCOUNT: (e) => y(e.userId),
        MULTI_ACCOUNT_MOVE_ACCOUNT: T,
        CURRENT_USER_UPDATE: b,
        MULTI_ACCOUNT_MOBILE_EXPERIMENT_UPDATE: S,
        MULTI_ACCOUNT_UPDATE_PUSH_SYNC_TOKEN: A,
        MULTI_ACCOUNT_INVALIDATE_PUSH_SYNC_TOKENS: C
    }));
