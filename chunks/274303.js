let r, i;
n.d(t, {
    A: () => N,
    U: () => h,
}),
    n(321073);
var a,
    s = n(247775),
    o = n(311907),
    l = n(73153),
    c = n(111613),
    u = n(50502);
function d(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function f(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                d(e, t, n[t]);
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
function _(e, t) {
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
n(573879);
var h = (function (e) {
    return (e[(e.INVALID = 0)] = "INVALID"), (e[(e.VALIDATING = 1)] = "VALIDATING"), (e[(e.VALID = 2)] = "VALID"), e;
})({});
let m = [],
    g = !1;
function E(e) {
    let { user: t } = e;
    (r = t.id), (g = !1);
    let n = m.slice(),
        i = n.findIndex((e) => {
            let { id: n } = e;
            return n === t.id;
        });
    i > -1
        ? ((m[i].avatar = t.avatar),
          (m[i].username = t.username),
          (m[i].discriminator = t.discriminator),
          (m[i].tokenStatus = 2))
        : n.push({
              id: t.id,
              avatar: t.avatar,
              username: t.username,
              discriminator: t.discriminator,
              tokenStatus: 2,
              pushSyncToken: null,
          }),
        (m = n).length > 5 &&
            m.splice(5).forEach((e) => {
                let { id: t } = e;
                y(t);
            });
}
function b(e) {
    (g = !!e.isSwitchingAccount),
        e.isSwitchingAccount ||
            (m = m.filter((e) => {
                let { id: t } = e;
                return t !== r;
            })),
        (r = null);
}
function y(e) {
    (m = m.filter((t) => {
        let { id: n } = t;
        return n !== e;
    })),
        s.removeToken(e);
}
function O(e) {
    let { user: t } = e,
        n = m.slice(),
        r = n.find((e) => {
            let { id: n } = e;
            return n === t.id;
        });
    null != r && ((r.avatar = t.avatar), (r.username = t.username), (r.discriminator = t.discriminator), (m = n));
}
function A(e, t) {
    let n = m.slice(),
        r = n.find((t) => {
            let { id: n } = t;
            return n === e;
        });
    null != r && ((r.tokenStatus = t), (m = n));
}
function v(e) {
    let { from: t, to: n } = e;
    m = (0, c.E8)(m, t, n);
}
function S(e) {
    let { multiAccountMobileExperimentEnabled: t } = e;
    i = t;
}
function I(e) {
    let { userId: t, pushSyncToken: n } = e;
    m = m.map((e) => (e.id === t ? _(f({}, e), { pushSyncToken: n }) : e));
}
function T(e) {
    let { invalidPushSyncTokens: t } = e;
    m = m.map((e) =>
        null != e.pushSyncToken && t.includes(e.pushSyncToken) ? _(f({}, e), { pushSyncToken: null }) : e,
    );
}
class C extends (a = o.Ay.PersistedStore) {
    initialize(e) {
        if (null != e) {
            var t;
            (m = null != (t = e.users) ? t : []), (i = e.canUseMultiAccountMobile);
        }
    }
    getCanUseMultiAccountMobile() {
        return i;
    }
    getState() {
        return {
            users: m,
            canUseMultiAccountMobile: i,
        };
    }
    getUsers() {
        return m;
    }
    getValidUsers() {
        return m.filter((e) => {
            let { tokenStatus: t } = e;
            return 0 !== t;
        });
    }
    getHasLoggedInAccounts() {
        return m.length > 0;
    }
    getIsValidatingUsers() {
        return m.some((e) => {
            let { tokenStatus: t } = e;
            return 1 === t;
        });
    }
    get canUseMultiAccountNotifications() {
        return (
            this.getCanUseMultiAccountMobile() &&
            u.w.getCurrentConfig({ location: "09e468_1" }, { autoTrackExposure: !1 })
                .isMultiAccountMobileNotificationsEnabled
        );
    }
    get isSwitchingAccount() {
        return g;
    }
}
d(C, "displayName", "MultiAccountStore"),
    d(C, "persistKey", "MultiAccountStore"),
    d(C, "migrations", [
        (e) => {
            if (null != e) {
                var t;
                return {
                    users: null != (t = e.users) ? t : [],
                    canUseMultiAccountMobile: !1,
                };
            }
            return {
                users: [],
                canUseMultiAccountMobile: !1,
            };
        },
    ]);
let N = new C(l.h, {
    CONNECTION_OPEN: E,
    LOGOUT: b,
    MULTI_ACCOUNT_VALIDATE_TOKEN_REQUEST: (e) => A(e.userId, 1),
    MULTI_ACCOUNT_VALIDATE_TOKEN_SUCCESS: (e) => A(e.userId, 2),
    MULTI_ACCOUNT_VALIDATE_TOKEN_FAILURE: (e) => A(e.userId, 0),
    MULTI_ACCOUNT_REMOVE_ACCOUNT: (e) => y(e.userId),
    MULTI_ACCOUNT_MOVE_ACCOUNT: v,
    CURRENT_USER_UPDATE: O,
    MULTI_ACCOUNT_MOBILE_EXPERIMENT_UPDATE: S,
    MULTI_ACCOUNT_UPDATE_PUSH_SYNC_TOKEN: I,
    MULTI_ACCOUNT_INVALIDATE_PUSH_SYNC_TOKENS: T,
});
