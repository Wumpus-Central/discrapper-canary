n.d(t, {
    M: () => l,
    Z: () => g
});
var r,
    i = n(442837),
    o = n(570140);
function a(e, t, n) {
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
function s(e) {
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
                a(e, t, n[t]);
            });
    }
    return e;
}
var l = (function (e) {
    return (e[(e.NOT_FETCHED = 0)] = 'NOT_FETCHED'), (e[(e.FETCHING = 1)] = 'FETCHING'), (e[(e.FETCHED = 2)] = 'FETCHED'), e;
})({});
let c = {
        userTenureRewardStatusByRewardId: {},
        lastFetchTimeMs: null,
        fetchState: 0
    },
    u = c;
function d() {
    u.fetchState = 1;
}
function f(e) {
    let { userTenureRewardStatus: t } = e;
    if (null != t) {
        let e = {};
        t.forEach((t) => {
            null != t.next_tenure_reward_id && (e[t.next_tenure_reward_id] = t);
        }),
            (u.userTenureRewardStatusByRewardId = e);
    } else u.userTenureRewardStatusByRewardId = c.userTenureRewardStatusByRewardId;
    (u.lastFetchTimeMs = Date.now()), (u.fetchState = 2);
}
function _() {
    u.userTenureRewardStatusByRewardId = c.userTenureRewardStatusByRewardId;
}
function p(e) {
    let { tenureRewardIds: t } = e;
    t.forEach((e) => {
        delete u.userTenureRewardStatusByRewardId[e];
    });
}
function h() {
    u = c;
}
class m extends (r = i.ZP.PersistedStore) {
    initialize(e) {
        u = s({}, u, null != e ? e : {});
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
a(m, 'displayName', 'TenureRewardStore'), a(m, 'persistKey', 'TenureRewardStore');
let g = new m(o.Z, {
    USER_TENURE_REWARD_SYNC_START: d,
    USER_TENURE_REWARD_SYNC_SUCCESS: f,
    USER_TENURE_REWARD_STATUS_RESET: _,
    USER_TENURE_REWARD_STATUS_DELETE: p,
    LOGOUT: h
});
