r.d(n, {
    M: function () {
        return i;
    }
});
var i,
    a,
    o = r(442837),
    s = r(570140);
function l(e, n, r) {
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
    (e[(e.NOT_FETCHED = 0)] = 'NOT_FETCHED'), (e[(e.FETCHING = 1)] = 'FETCHING'), (e[(e.FETCHED = 2)] = 'FETCHED');
})(i || (i = {}));
let u = {
        userTenureRewardStatusByRewardId: {},
        lastFetchTimeMs: null,
        fetchState: 0
    },
    c = u;
function d() {
    c.fetchState = 1;
}
function f(e) {
    let { userTenureRewardStatus: n } = e;
    if (null != n) {
        let e = {};
        n.forEach((n) => {
            null != n.next_tenure_reward_id && (e[n.next_tenure_reward_id] = n);
        }),
            (c.userTenureRewardStatusByRewardId = e);
    } else c.userTenureRewardStatusByRewardId = u.userTenureRewardStatusByRewardId;
    (c.lastFetchTimeMs = Date.now()), (c.fetchState = 2);
}
function p() {
    c.userTenureRewardStatusByRewardId = u.userTenureRewardStatusByRewardId;
}
function h(e) {
    let { tenureRewardIds: n } = e;
    n.forEach((e) => {
        delete c.userTenureRewardStatusByRewardId[e];
    });
}
function _() {
    c = u;
}
class m extends (a = o.ZP.PersistedStore) {
    initialize(e) {
        c = {
            ...c,
            ...(null != e ? e : {})
        };
    }
    getState() {
        return c;
    }
    getFetchState() {
        return c.fetchState;
    }
    getTenureRewardStatusForRewardId(e) {
        return c.userTenureRewardStatusByRewardId[e];
    }
}
l(m, 'displayName', 'TenureRewardStore'),
    l(m, 'persistKey', 'TenureRewardStore'),
    (n.Z = new m(s.Z, {
        USER_TENURE_REWARD_SYNC_START: d,
        USER_TENURE_REWARD_SYNC_SUCCESS: f,
        USER_TENURE_REWARD_STATUS_RESET: p,
        USER_TENURE_REWARD_STATUS_DELETE: h,
        LOGOUT: _
    }));
