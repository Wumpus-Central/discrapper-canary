let i, r;
n.d(t, { A: () => I, U: () => u }), n(321073);
var a,
    s = n(247775),
    l = n(17928),
    o = n(228366),
    d = n(252919),
    c = n(111613);
n(573879);
var u =
    (((a = {})[(a.INVALID = 0)] = "INVALID"), (a[(a.VALIDATING = 1)] = "VALIDATING"), (a[(a.VALID = 2)] = "VALID"), a);
let _ = [];
function E(e) {
    (_ = _.filter((t) => {
        let { id: n } = t;
        return n !== e;
    })),
        s.removeToken(e);
}
function A(e, t) {
    let n = _.slice(),
        i = n.find((t) => {
            let { id: n } = t;
            return n === e;
        });
    null != i && ((i.tokenStatus = t), (_ = n));
}
class h extends l.Ay.PersistedStore {
    static displayName = "MultiAccountStore";
    static persistKey = "MultiAccountStore";
    static migrations = [
        (e) =>
            null != e
                ? { users: e.users ?? [], canUseMultiAccountMobile: !1 }
                : { users: [], canUseMultiAccountMobile: !1 },
    ];
    initialize(e) {
        null != e && ((_ = e.users ?? []), (r = e.canUseMultiAccountMobile));
    }
    getCanUseMultiAccountMobile() {
        return r;
    }
    getState() {
        return { users: _, canUseMultiAccountMobile: r };
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
}
let I = new h(o.h, {
    CONNECTION_OPEN: function (e) {
        let { user: t } = e;
        (i = t.id), !r && (0, d.A)(t) && (r = !0);
        let n = _.slice(),
            a = n.findIndex((e) => {
                let { id: n } = e;
                return n === t.id;
            });
        a > -1
            ? ((_[a].avatar = t.avatar),
              (_[a].username = t.username),
              (_[a].discriminator = t.discriminator),
              (_[a].tokenStatus = 2))
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
        e.isSwitchingAccount ||
            (_ = _.filter((e) => {
                let { id: t } = e;
                return t !== i;
            })),
            (i = null);
    },
    MULTI_ACCOUNT_VALIDATE_TOKEN_REQUEST: (e) => A(e.userId, 1),
    MULTI_ACCOUNT_VALIDATE_TOKEN_SUCCESS: (e) => A(e.userId, 2),
    MULTI_ACCOUNT_VALIDATE_TOKEN_FAILURE: (e) => A(e.userId, 0),
    MULTI_ACCOUNT_REMOVE_ACCOUNT: (e) => E(e.userId),
    MULTI_ACCOUNT_MOVE_ACCOUNT: function (e) {
        let { from: t, to: n } = e;
        _ = (0, c.E8)(_, t, n);
    },
    CURRENT_USER_UPDATE: function (e) {
        let { user: t } = e,
            n = _.slice(),
            i = n.find((e) => {
                let { id: n } = e;
                return n === t.id;
            });
        null != i && ((i.avatar = t.avatar), (i.username = t.username), (i.discriminator = t.discriminator), (_ = n));
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
