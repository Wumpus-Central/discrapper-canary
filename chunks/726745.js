let r, i;
n.d(t, {
    Z: () => R,
    q: () => m
}),
    n(653041);
var o,
    a = n(213919),
    s = n(442837),
    l = n(570140),
    c = n(990492),
    u = n(988965),
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
function _(e) {
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
                f(e, t, n[t]);
            });
    }
    return e;
}
function p(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function h(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : p(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
var m = (function (e) {
    return (e[(e.INVALID = 0)] = 'INVALID'), (e[(e.VALIDATING = 1)] = 'VALIDATING'), (e[(e.VALID = 2)] = 'VALID'), e;
})({});
let g = [],
    E = !1;
function b(e) {
    let { user: t } = e;
    (r = t.id), (E = !1);
    let n = g.slice(),
        i = n.findIndex((e) => {
            let { id: n } = e;
            return n === t.id;
        });
    i > -1
        ? ((g[i].avatar = t.avatar), (g[i].username = t.username), (g[i].discriminator = t.discriminator), (g[i].tokenStatus = 2))
        : n.push({
              id: t.id,
              avatar: t.avatar,
              username: t.username,
              discriminator: t.discriminator,
              tokenStatus: 2,
              pushSyncToken: null
          }),
        (g = n).length > d.$H &&
            g.splice(d.$H).forEach((e) => {
                let { id: t } = e;
                v(t);
            });
}
function y(e) {
    (E = !!e.isSwitchingAccount),
        e.isSwitchingAccount ||
            (g = g.filter((e) => {
                let { id: t } = e;
                return t !== r;
            })),
        (r = null);
}
function v(e) {
    (g = g.filter((t) => {
        let { id: n } = t;
        return n !== e;
    })),
        a.removeToken(e);
}
function O(e) {
    let { user: t } = e,
        n = g.slice(),
        r = n.find((e) => {
            let { id: n } = e;
            return n === t.id;
        });
    null != r && ((r.avatar = t.avatar), (r.username = t.username), (r.discriminator = t.discriminator), (g = n));
}
function I(e, t) {
    let n = g.slice(),
        r = n.find((t) => {
            let { id: n } = t;
            return n === e;
        });
    null != r && ((r.tokenStatus = t), (g = n));
}
function S(e) {
    let { from: t, to: n } = e;
    g = (0, c.aB)(g, t, n);
}
function T(e) {
    let { multiAccountMobileExperimentEnabled: t } = e;
    i = t;
}
function N(e) {
    let { userId: t, pushSyncToken: n } = e;
    g = g.map((e) => (e.id === t ? h(_({}, e), { pushSyncToken: n }) : e));
}
function A(e) {
    let { invalidPushSyncTokens: t } = e;
    g = g.map((e) => (null != e.pushSyncToken && t.includes(e.pushSyncToken) ? h(_({}, e), { pushSyncToken: null }) : e));
}
class C extends (o = s.ZP.PersistedStore) {
    initialize(e) {
        if (null != e) {
            var t;
            (g = null != (t = e.users) ? t : []), (i = e.canUseMultiAccountMobile);
        }
    }
    getCanUseMultiAccountMobile() {
        return i;
    }
    getState() {
        return {
            users: g,
            canUseMultiAccountMobile: i
        };
    }
    getUsers() {
        return g;
    }
    getValidUsers() {
        return g.filter((e) => {
            let { tokenStatus: t } = e;
            return 0 !== t;
        });
    }
    getHasLoggedInAccounts() {
        return g.length > 0;
    }
    getIsValidatingUsers() {
        return g.some((e) => {
            let { tokenStatus: t } = e;
            return 1 === t;
        });
    }
    get canUseMultiAccountNotifications() {
        return this.getCanUseMultiAccountMobile() && u.N.getCurrentConfig({ location: '09e468_1' }, { autoTrackExposure: !1 }).isMultiAccountMobileNotificationsEnabled;
    }
    get isSwitchingAccount() {
        return E;
    }
}
f(C, 'displayName', 'MultiAccountStore'),
    f(C, 'persistKey', 'MultiAccountStore'),
    f(C, 'migrations', [
        (e) => {
            if (null != e) {
                var t;
                return {
                    users: null != (t = e.users) ? t : [],
                    canUseMultiAccountMobile: !1
                };
            }
            return {
                users: [],
                canUseMultiAccountMobile: !1
            };
        }
    ]);
let R = new C(l.Z, {
    CONNECTION_OPEN: b,
    LOGOUT: y,
    MULTI_ACCOUNT_VALIDATE_TOKEN_REQUEST: (e) => I(e.userId, 1),
    MULTI_ACCOUNT_VALIDATE_TOKEN_SUCCESS: (e) => I(e.userId, 2),
    MULTI_ACCOUNT_VALIDATE_TOKEN_FAILURE: (e) => I(e.userId, 0),
    MULTI_ACCOUNT_REMOVE_ACCOUNT: (e) => v(e.userId),
    MULTI_ACCOUNT_MOVE_ACCOUNT: S,
    CURRENT_USER_UPDATE: O,
    MULTI_ACCOUNT_MOBILE_EXPERIMENT_UPDATE: T,
    MULTI_ACCOUNT_UPDATE_PUSH_SYNC_TOKEN: N,
    MULTI_ACCOUNT_INVALIDATE_PUSH_SYNC_TOKENS: A
});
