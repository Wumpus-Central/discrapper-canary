n.d(t, { Z: () => I }), n(388685);
var r,
    i = n(995638),
    a = n(442837),
    o = n(570140),
    s = n(26842),
    l = n(375527),
    c = n(168232),
    u = n(594174);
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
let f = 86400000,
    p = 30000,
    _ = 300000,
    m = 1,
    h = new s.j({ ttlMs: f });
function g() {
    let e = h.getValue();
    if (null == e) return !1;
    let t = new Date();
    for (let n of e.values()) {
        let e = new Date(n.next_reward_date);
        if ((0, i.default)(e, t) <= m) return !0;
    }
    return !1;
}
function E() {
    (0, c.QI)(u.default.getCurrentUser()) ? h.setTtl(p) : g() ? h.setTtl(_) : h.setTtl(f);
}
function b() {
    h.setLoading();
}
function y(e) {
    let { programRewards: t } = e;
    if (!h.isLoading()) return !1;
    let n = new Map();
    t.forEach((e) => {
        n.set(e.reward_program, e);
    }),
        h.setValue(n),
        E();
}
function O() {
    if (!h.isLoading()) return !1;
    h.setError();
}
function v() {
    h.clear();
}
class S extends (r = a.ZP.PersistedStore) {
    initialize(e) {
        if ((this.waitFor(u.default), (null == e ? void 0 : e.cache) != null)) {
            let t = new Map(e.cache.value);
            h.restore({
                value: t,
                fetchedAt: e.cache.fetchedAt,
            });
        }
        E();
    }
    getState() {
        let e = h.serialize();
        return {
            cache:
                null != e
                    ? {
                          value: Array.from(e.value.entries()),
                          fetchedAt: e.fetchedAt,
                      }
                    : null,
        };
    }
    isInProperTreatments() {
        let { isInTreatment: e } = (0, l.f3)("ProgramRewardsStore");
        return e;
    }
    isFetching() {
        return h.isLoading();
    }
    isFetched() {
        return h.isValid();
    }
    hasCachedValue() {
        return null != h.getValue();
    }
    isReady() {
        return !this.isFetching() && (this.hasCachedValue() || !this.isInProperTreatments() || this.isError());
    }
    shouldFetch() {
        return !!this.isInProperTreatments() && h.shouldFetch();
    }
    isError() {
        return h.isError();
    }
    getStatus() {
        return h.getStatus();
    }
    getRewardForProgram(e) {
        var t;
        return null == (t = h.getValue()) ? void 0 : t.get(e);
    }
    forceExpire() {
        h.forceExpire();
    }
}
d(S, "displayName", "ProgramRewardsStore"), d(S, "persistKey", "ProgramRewardsStore");
let I = new S(o.Z, {
    LOGOUT: v,
    PROGRAM_REWARDS_FETCH: b,
    PROGRAM_REWARDS_FETCH_SUCCESS: y,
    PROGRAM_REWARDS_FETCH_FAILURE: O,
    CURRENT_USER_UPDATE: E,
});
