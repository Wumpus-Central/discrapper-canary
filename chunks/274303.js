"use strict";
let i, r;
n.d(t, { A: () => g, U: () => u }), n(321073);
var s,
    a = n(247775),
    o = n(17928),
    l = n(228366),
    d = n(252919),
    _ = n(111613);
n(573879);
var u =
    (((s = {})[(s.INVALID = 0)] = "INVALID"), (s[(s.VALIDATING = 1)] = "VALIDATING"), (s[(s.VALID = 2)] = "VALID"), s);
let c = [],
    E = !1;
function h(e) {
    (c = c.filter((t) => {
        let { id: n } = t;
        return n !== e;
    })),
        a.removeToken(e);
}
function m(e, t) {
    let n = c.slice(),
        i = n.find((t) => {
            let { id: n } = t;
            return n === e;
        });
    null != i && ((i.tokenStatus = t), (c = n));
}
class f extends o.Ay.PersistedStore {
    static displayName = "MultiAccountStore";
    static persistKey = "MultiAccountStore";
    static migrations = [
        (e) =>
            null != e
                ? { users: e.users ?? [], canUseMultiAccountMobile: !1 }
                : { users: [], canUseMultiAccountMobile: !1 },
    ];
    initialize(e) {
        null != e && ((c = e.users ?? []), (r = e.canUseMultiAccountMobile));
    }
    getCanUseMultiAccountMobile() {
        return r;
    }
    getState() {
        return { users: c, canUseMultiAccountMobile: r };
    }
    getUsers() {
        return c;
    }
    getValidUsers() {
        return c.filter((e) => {
            let { tokenStatus: t } = e;
            return 0 !== t;
        });
    }
    getHasLoggedInAccounts() {
        return c.length > 0;
    }
    getIsValidatingUsers() {
        return c.some((e) => {
            let { tokenStatus: t } = e;
            return 1 === t;
        });
    }
    get canUseMultiAccountNotifications() {
        return this.getCanUseMultiAccountMobile();
    }
    get isSwitchingAccount() {
        return E;
    }
}
let g = new f(l.h, {
    CONNECTION_OPEN: function (e) {
        let { user: t } = e;
        (i = t.id), (E = !1), !r && (0, d.A)(t) && (r = !0);
        let n = c.slice(),
            s = n.findIndex((e) => {
                let { id: n } = e;
                return n === t.id;
            });
        s > -1
            ? ((c[s].avatar = t.avatar),
              (c[s].username = t.username),
              (c[s].discriminator = t.discriminator),
              (c[s].tokenStatus = 2))
            : n.push({
                  id: t.id,
                  avatar: t.avatar,
                  username: t.username,
                  discriminator: t.discriminator,
                  tokenStatus: 2,
                  pushSyncToken: null,
              }),
            (c = n).length > 5 &&
                c.splice(5).forEach((e) => {
                    let { id: t } = e;
                    h(t);
                });
    },
    LOGOUT: function (e) {
        (E = !!e.isSwitchingAccount),
            e.isSwitchingAccount ||
                (c = c.filter((e) => {
                    let { id: t } = e;
                    return t !== i;
                })),
            (i = null);
    },
    MULTI_ACCOUNT_VALIDATE_TOKEN_REQUEST: (e) => m(e.userId, 1),
    MULTI_ACCOUNT_VALIDATE_TOKEN_SUCCESS: (e) => m(e.userId, 2),
    MULTI_ACCOUNT_VALIDATE_TOKEN_FAILURE: (e) => m(e.userId, 0),
    MULTI_ACCOUNT_REMOVE_ACCOUNT: (e) => h(e.userId),
    MULTI_ACCOUNT_MOVE_ACCOUNT: function (e) {
        let { from: t, to: n } = e;
        c = (0, _.E8)(c, t, n);
    },
    CURRENT_USER_UPDATE: function (e) {
        let { user: t } = e,
            n = c.slice(),
            i = n.find((e) => {
                let { id: n } = e;
                return n === t.id;
            });
        null != i && ((i.avatar = t.avatar), (i.username = t.username), (i.discriminator = t.discriminator), (c = n));
    },
    MULTI_ACCOUNT_UPDATE_PUSH_SYNC_TOKEN: function (e) {
        let { userId: t, pushSyncToken: n } = e;
        c = c.map((e) => (e.id === t ? { ...e, pushSyncToken: n } : e));
    },
    MULTI_ACCOUNT_INVALIDATE_PUSH_SYNC_TOKENS: function (e) {
        let { invalidPushSyncTokens: t } = e;
        c = c.map((e) => (null != e.pushSyncToken && t.includes(e.pushSyncToken) ? { ...e, pushSyncToken: null } : e));
    },
});
