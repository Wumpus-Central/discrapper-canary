"use strict";
let r, i;
n.d(t, { A: () => m, U: () => c }), n(321073);
var s,
    a = n(247775),
    o = n(311907),
    l = n(73153),
    u = n(252919),
    d = n(111613);
n(573879);
var c =
    (((s = {})[(s.INVALID = 0)] = "INVALID"), (s[(s.VALIDATING = 1)] = "VALIDATING"), (s[(s.VALID = 2)] = "VALID"), s);
let _ = [],
    f = !1;
function E(e) {
    (_ = _.filter((t) => {
        let { id: n } = t;
        return n !== e;
    })),
        a.removeToken(e);
}
function h(e, t) {
    let n = _.slice(),
        r = n.find((t) => {
            let { id: n } = t;
            return n === e;
        });
    null != r && ((r.tokenStatus = t), (_ = n));
}
class p extends o.Ay.PersistedStore {
    static displayName = "MultiAccountStore";
    static persistKey = "MultiAccountStore";
    static migrations = [
        (e) =>
            null != e
                ? { users: e.users ?? [], canUseMultiAccountMobile: !1 }
                : { users: [], canUseMultiAccountMobile: !1 },
    ];
    initialize(e) {
        null != e && ((_ = e.users ?? []), (i = e.canUseMultiAccountMobile));
    }
    getCanUseMultiAccountMobile() {
        return i;
    }
    getState() {
        return { users: _, canUseMultiAccountMobile: i };
    }
    getUsers() {
        return _;
    }
    getValidUsers() {
        return _.filter((e) => {
            let { tokenStatus: t } = e;
            return 0 !== t;
        });
    }
    getHasLoggedInAccounts() {
        return _.length > 0;
    }
    getIsValidatingUsers() {
        return _.some((e) => {
            let { tokenStatus: t } = e;
            return 1 === t;
        });
    }
    get canUseMultiAccountNotifications() {
        return this.getCanUseMultiAccountMobile();
    }
    get isSwitchingAccount() {
        return f;
    }
}
let m = new p(l.h, {
    CONNECTION_OPEN: function (e) {
        let { user: t } = e;
        (r = t.id), (f = !1), !i && (0, u.A)(t) && (i = !0);
        let n = _.slice(),
            s = n.findIndex((e) => {
                let { id: n } = e;
                return n === t.id;
            });
        s > -1
            ? ((_[s].avatar = t.avatar),
              (_[s].username = t.username),
              (_[s].discriminator = t.discriminator),
              (_[s].tokenStatus = 2))
            : n.push({
                  id: t.id,
                  avatar: t.avatar,
                  username: t.username,
                  discriminator: t.discriminator,
                  tokenStatus: 2,
                  pushSyncToken: null,
              }),
            (_ = n).length > 5 &&
                _.splice(5).forEach((e) => {
                    let { id: t } = e;
                    E(t);
                });
    },
    LOGOUT: function (e) {
        (f = !!e.isSwitchingAccount),
            e.isSwitchingAccount ||
                (_ = _.filter((e) => {
                    let { id: t } = e;
                    return t !== r;
                })),
            (r = null);
    },
    MULTI_ACCOUNT_VALIDATE_TOKEN_REQUEST: (e) => h(e.userId, 1),
    MULTI_ACCOUNT_VALIDATE_TOKEN_SUCCESS: (e) => h(e.userId, 2),
    MULTI_ACCOUNT_VALIDATE_TOKEN_FAILURE: (e) => h(e.userId, 0),
    MULTI_ACCOUNT_REMOVE_ACCOUNT: (e) => E(e.userId),
    MULTI_ACCOUNT_MOVE_ACCOUNT: function (e) {
        let { from: t, to: n } = e;
        _ = (0, d.E8)(_, t, n);
    },
    CURRENT_USER_UPDATE: function (e) {
        let { user: t } = e,
            n = _.slice(),
            r = n.find((e) => {
                let { id: n } = e;
                return n === t.id;
            });
        null != r && ((r.avatar = t.avatar), (r.username = t.username), (r.discriminator = t.discriminator), (_ = n));
    },
    MULTI_ACCOUNT_UPDATE_PUSH_SYNC_TOKEN: function (e) {
        let { userId: t, pushSyncToken: n } = e;
        _ = _.map((e) => (e.id === t ? { ...e, pushSyncToken: n } : e));
    },
    MULTI_ACCOUNT_INVALIDATE_PUSH_SYNC_TOKENS: function (e) {
        let { invalidPushSyncTokens: t } = e;
        _ = _.map((e) => (null != e.pushSyncToken && t.includes(e.pushSyncToken) ? { ...e, pushSyncToken: null } : e));
    },
});
