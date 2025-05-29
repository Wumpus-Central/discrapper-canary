n.d(t, { Z: () => u });
var r,
    i = n(442837),
    l = n(570140);
function o(e, t, n) {
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
let s = {
        userTenureRewardStatusByRewardId: {},
        lastFetchTimeMs: null,
        fetchState: 0
    },
    a = s;
class c extends (r = i.ZP.PersistedStore) {
    initialize(e) {
        a = (function (e) {
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
                        o(e, t, n[t]);
                    });
            }
            return e;
        })({}, a, null != e ? e : {});
    }
    getState() {
        return a;
    }
    getFetchState() {
        return a.fetchState;
    }
    getTenureRewardStatusForRewardId(e) {
        return a.userTenureRewardStatusByRewardId[e];
    }
}
o(c, 'displayName', 'TenureRewardStore'), o(c, 'persistKey', 'TenureRewardStore');
let u = new c(l.Z, {
    USER_TENURE_REWARD_SYNC_START: function () {
        a.fetchState = 1;
    },
    USER_TENURE_REWARD_SYNC_SUCCESS: function (e) {
        let { userTenureRewardStatus: t } = e;
        if (null != t) {
            let e = {};
            t.forEach((t) => {
                null != t.next_tenure_reward_id && (e[t.next_tenure_reward_id] = t);
            }),
                (a.userTenureRewardStatusByRewardId = e);
        } else a.userTenureRewardStatusByRewardId = s.userTenureRewardStatusByRewardId;
        (a.lastFetchTimeMs = Date.now()), (a.fetchState = 2);
    },
    USER_TENURE_REWARD_STATUS_RESET: function () {
        a.userTenureRewardStatusByRewardId = s.userTenureRewardStatusByRewardId;
    },
    USER_TENURE_REWARD_STATUS_DELETE: function (e) {
        let { tenureRewardIds: t } = e;
        t.forEach((e) => {
            delete a.userTenureRewardStatusByRewardId[e];
        });
    },
    LOGOUT: function () {
        a = s;
    }
});
