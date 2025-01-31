n.d(t, {
    M: () => o,
    Z: () => m
});
var i,
    r = n(442837),
    a = n(570140);
function s(e, t, n) {
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
var o = (function (e) {
    return (e[(e.NOT_FETCHED = 0)] = 'NOT_FETCHED'), (e[(e.FETCHING = 1)] = 'FETCHING'), (e[(e.FETCHED = 2)] = 'FETCHED'), e;
})({});
let l = {
        userTenureRewardStatusByRewardId: {},
        lastFetchTimeMs: null,
        fetchState: 0
    },
    u = l;
function c() {
    u.fetchState = 1;
}
function d(e) {
    let { userTenureRewardStatus: t } = e;
    if (null != t) {
        let e = {};
        t.forEach((t) => {
            null != t.next_tenure_reward_id && (e[t.next_tenure_reward_id] = t);
        }),
            (u.userTenureRewardStatusByRewardId = e);
    } else u.userTenureRewardStatusByRewardId = l.userTenureRewardStatusByRewardId;
    (u.lastFetchTimeMs = Date.now()), (u.fetchState = 2);
}
function f() {
    u.userTenureRewardStatusByRewardId = l.userTenureRewardStatusByRewardId;
}
function _(e) {
    let { tenureRewardIds: t } = e;
    t.forEach((e) => {
        delete u.userTenureRewardStatusByRewardId[e];
    });
}
function p() {
    u = l;
}
class h extends (i = r.ZP.PersistedStore) {
    initialize(e) {
        u = {
            ...u,
            ...(null != e ? e : {})
        };
    }
    getState() {
        return u;
    }
    getFetchState() {
        return u.fetchState;
    }
    getTenureRewardStatusForRewardId(e) {
        return u.userTenureRewardStatusByRewardId[e];
    }
}
s(h, 'displayName', 'TenureRewardStore'), s(h, 'persistKey', 'TenureRewardStore');
let m = new h(a.Z, {
    USER_TENURE_REWARD_SYNC_START: c,
    USER_TENURE_REWARD_SYNC_SUCCESS: d,
    USER_TENURE_REWARD_STATUS_RESET: f,
    USER_TENURE_REWARD_STATUS_DELETE: _,
    LOGOUT: p
});
