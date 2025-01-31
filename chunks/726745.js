let i, r;
n.d(t, {
    Z: () => N,
    q: () => _
}),
    n(653041);
var a,
    s = n(213919),
    o = n(442837),
    l = n(570140),
    u = n(990492),
    c = n(988965),
    d = n(71509);
function f(e, t, n) {
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
var _ = (function (e) {
    return (e[(e.INVALID = 0)] = 'INVALID'), (e[(e.VALIDATING = 1)] = 'VALIDATING'), (e[(e.VALID = 2)] = 'VALID'), e;
})({});
let p = [],
    h = !1;
function m(e) {
    let { user: t } = e;
    (i = t.id), (h = !1);
    let n = p.slice(),
        r = n.findIndex((e) => {
            let { id: n } = e;
            return n === t.id;
        });
    r > -1
        ? ((p[r].avatar = t.avatar), (p[r].username = t.username), (p[r].discriminator = t.discriminator), (p[r].tokenStatus = 2))
        : n.push({
              id: t.id,
              avatar: t.avatar,
              username: t.username,
              discriminator: t.discriminator,
              tokenStatus: 2,
              pushSyncToken: null
          }),
        (p = n).length > d.$H &&
            p.splice(d.$H).forEach((e) => {
                let { id: t } = e;
                E(t);
            });
}
function g(e) {
    (h = !!e.isSwitchingAccount),
        e.isSwitchingAccount ||
            (p = p.filter((e) => {
                let { id: t } = e;
                return t !== i;
            })),
        (i = null);
}
function E(e) {
    (p = p.filter((t) => {
        let { id: n } = t;
        return n !== e;
    })),
        s.removeToken(e);
}
function v(e) {
    let { user: t } = e,
        n = p.slice(),
        i = n.find((e) => {
            let { id: n } = e;
            return n === t.id;
        });
    null != i && ((i.avatar = t.avatar), (i.username = t.username), (i.discriminator = t.discriminator), (p = n));
}
function y(e, t) {
    let n = p.slice(),
        i = n.find((t) => {
            let { id: n } = t;
            return n === e;
        });
    null != i && ((i.tokenStatus = t), (p = n));
}
function I(e) {
    let { from: t, to: n } = e;
    p = (0, u.aB)(p, t, n);
}
function b(e) {
    let { multiAccountMobileExperimentEnabled: t } = e;
    r = t;
}
function T(e) {
    let { userId: t, pushSyncToken: n } = e;
    p = p.map((e) =>
        e.id === t
            ? {
                  ...e,
                  pushSyncToken: n
              }
            : e
    );
}
function S(e) {
    let { invalidPushSyncTokens: t } = e;
    p = p.map((e) =>
        null != e.pushSyncToken && t.includes(e.pushSyncToken)
            ? {
                  ...e,
                  pushSyncToken: null
              }
            : e
    );
}
class A extends (a = o.ZP.PersistedStore) {
    initialize(e) {
        if (null != e) {
            var t;
            (p = null !== (t = e.users) && void 0 !== t ? t : []), (r = e.canUseMultiAccountMobile);
        }
    }
    getCanUseMultiAccountMobile() {
        return r;
    }
    getState() {
        return {
            users: p,
            canUseMultiAccountMobile: r
        };
    }
    getUsers() {
        return p;
    }
    getValidUsers() {
        return p.filter((e) => {
            let { tokenStatus: t } = e;
            return 0 !== t;
        });
    }
    getHasLoggedInAccounts() {
        return p.length > 0;
    }
    getIsValidatingUsers() {
        return p.some((e) => {
            let { tokenStatus: t } = e;
            return 1 === t;
        });
    }
    get canUseMultiAccountNotifications() {
        return this.getCanUseMultiAccountMobile() && c.N.getCurrentConfig({ location: '09e468_1' }, { autoTrackExposure: !1 }).isMultiAccountMobileNotificationsEnabled;
    }
    get isSwitchingAccount() {
        return h;
    }
}
f(A, 'displayName', 'MultiAccountStore'),
    f(A, 'persistKey', 'MultiAccountStore'),
    f(A, 'migrations', [
        (e) => {
            if (null != e) {
                var t;
                return {
                    users: null !== (t = e.users) && void 0 !== t ? t : [],
                    canUseMultiAccountMobile: !1
                };
            }
            return {
                users: [],
                canUseMultiAccountMobile: !1
            };
        }
    ]);
let N = new A(l.Z, {
    CONNECTION_OPEN: m,
    LOGOUT: g,
    MULTI_ACCOUNT_VALIDATE_TOKEN_REQUEST: (e) => y(e.userId, 1),
    MULTI_ACCOUNT_VALIDATE_TOKEN_SUCCESS: (e) => y(e.userId, 2),
    MULTI_ACCOUNT_VALIDATE_TOKEN_FAILURE: (e) => y(e.userId, 0),
    MULTI_ACCOUNT_REMOVE_ACCOUNT: (e) => E(e.userId),
    MULTI_ACCOUNT_MOVE_ACCOUNT: I,
    CURRENT_USER_UPDATE: v,
    MULTI_ACCOUNT_MOBILE_EXPERIMENT_UPDATE: b,
    MULTI_ACCOUNT_UPDATE_PUSH_SYNC_TOKEN: T,
    MULTI_ACCOUNT_INVALIDATE_PUSH_SYNC_TOKENS: S
});
