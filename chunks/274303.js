"use strict";
let r, i;
n.d(t, { A: () => y, U: () => c }), n(321073);
var a = n(247775),
    s = n(311907),
    o = n(73153),
    l = n(252919),
    u = n(111613);
n(573879);
var c = (function (e) {
    return (e[(e.INVALID = 0)] = "INVALID"), (e[(e.VALIDATING = 1)] = "VALIDATING"), (e[(e.VALID = 2)] = "VALID"), e;
})({});
let d = [],
    _ = !1;
function f(e) {
    let { user: t } = e;
    (r = t.id), (_ = !1), !i && (0, l.A)(t) && (i = !0);
    let n = d.slice(),
        a = n.findIndex((e) => {
            let { id: n } = e;
            return n === t.id;
        });
    a > -1
        ? ((d[a].avatar = t.avatar),
          (d[a].username = t.username),
          (d[a].discriminator = t.discriminator),
          (d[a].tokenStatus = 2))
        : n.push({
              id: t.id,
              avatar: t.avatar,
              username: t.username,
              discriminator: t.discriminator,
              tokenStatus: 2,
              pushSyncToken: null,
          }),
        (d = n).length > 5 &&
            d.splice(5).forEach((e) => {
                let { id: t } = e;
                h(t);
            });
}
function p(e) {
    (_ = !!e.isSwitchingAccount),
        e.isSwitchingAccount ||
            (d = d.filter((e) => {
                let { id: t } = e;
                return t !== r;
            })),
        (r = null);
}
function h(e) {
    (d = d.filter((t) => {
        let { id: n } = t;
        return n !== e;
    })),
        a.removeToken(e);
}
function m(e) {
    let { user: t } = e,
        n = d.slice(),
        r = n.find((e) => {
            let { id: n } = e;
            return n === t.id;
        });
    null != r && ((r.avatar = t.avatar), (r.username = t.username), (r.discriminator = t.discriminator), (d = n));
}
function g(e, t) {
    let n = d.slice(),
        r = n.find((t) => {
            let { id: n } = t;
            return n === e;
        });
    null != r && ((r.tokenStatus = t), (d = n));
}
function E(e) {
    let { from: t, to: n } = e;
    d = (0, u.E8)(d, t, n);
}
function A(e) {
    let { userId: t, pushSyncToken: n } = e;
    d = d.map((e) => (e.id === t ? { ...e, pushSyncToken: n } : e));
}
function I(e) {
    let { invalidPushSyncTokens: t } = e;
    d = d.map((e) => (null != e.pushSyncToken && t.includes(e.pushSyncToken) ? { ...e, pushSyncToken: null } : e));
}
class T extends s.Ay.PersistedStore {
    static displayName = "MultiAccountStore";
    static persistKey = "MultiAccountStore";
    static migrations = [
        (e) =>
            null != e
                ? { users: e.users ?? [], canUseMultiAccountMobile: !1 }
                : { users: [], canUseMultiAccountMobile: !1 },
    ];
    initialize(e) {
        null != e && ((d = e.users ?? []), (i = e.canUseMultiAccountMobile));
    }
    getCanUseMultiAccountMobile() {
        return i;
    }
    getState() {
        return { users: d, canUseMultiAccountMobile: i };
    }
    getUsers() {
        return d;
    }
    getValidUsers() {
        return d.filter((e) => {
            let { tokenStatus: t } = e;
            return 0 !== t;
        });
    }
    getHasLoggedInAccounts() {
        return d.length > 0;
    }
    getIsValidatingUsers() {
        return d.some((e) => {
            let { tokenStatus: t } = e;
            return 1 === t;
        });
    }
    get canUseMultiAccountNotifications() {
        return this.getCanUseMultiAccountMobile();
    }
    get isSwitchingAccount() {
        return _;
    }
}
let y = new T(o.h, {
    CONNECTION_OPEN: f,
    LOGOUT: p,
    MULTI_ACCOUNT_VALIDATE_TOKEN_REQUEST: (e) => g(e.userId, 1),
    MULTI_ACCOUNT_VALIDATE_TOKEN_SUCCESS: (e) => g(e.userId, 2),
    MULTI_ACCOUNT_VALIDATE_TOKEN_FAILURE: (e) => g(e.userId, 0),
    MULTI_ACCOUNT_REMOVE_ACCOUNT: (e) => h(e.userId),
    MULTI_ACCOUNT_MOVE_ACCOUNT: E,
    CURRENT_USER_UPDATE: m,
    MULTI_ACCOUNT_UPDATE_PUSH_SYNC_TOKEN: A,
    MULTI_ACCOUNT_INVALIDATE_PUSH_SYNC_TOKENS: I,
});
