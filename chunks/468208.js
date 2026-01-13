n.d(t, { Z: () => C }), n(388685);
var r,
    i = n(995638),
    a = n(442837),
    o = n(570140),
    s = n(26842),
    l = n(375527),
    c = n(168232),
    u = n(594174),
    d = n(70956),
    f = n(165299);
function p(e, t, n) {
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
let _ = 86400000,
    m = 30000,
    h = 300000,
    g = 1,
    E = new s.j({ ttlMs: _ });
function b() {
    let e = E.getValue();
    if (null == e) return !1;
    let t = new Date();
    for (let n of e.values()) {
        let e = new Date(n.next_reward_date);
        if ((0, i.default)(e, t) <= g) return !0;
    }
    return !1;
}
function y() {
    (0, c.QI)(u.default.getCurrentUser()) ? E.setTtl(m) : b() ? E.setTtl(h) : E.setTtl(_);
}
function O() {
    E.setLoading();
}
function v(e) {
    let { programRewards: t } = e;
    if (!E.isLoading()) return !1;
    let n = new Map();
    t.forEach((e) => {
        n.set(e.reward_program, e);
    }),
        E.setValue(n),
        y();
}
function S() {
    if (!E.isLoading()) return !1;
    E.setError();
}
function I() {
    E.clear();
}
class T extends (r = a.ZP.PersistedStore) {
    initialize(e) {
        if ((this.waitFor(u.default), (null == e ? void 0 : e.cache) != null)) {
            let t = new Map(e.cache.value);
            E.restore({
                value: t,
                fetchedAt: e.cache.fetchedAt,
            });
        }
        y();
    }
    getState() {
        let e = E.serialize();
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
    passesGeneralUIInvariant(e) {
        if (!this.isInProperTreatments()) return !1;
        if (e === f.f.NITRO) {
            let t = this.getRewardForProgram(e);
            if (null == t) return !1;
            let n = t.next_reward_date,
                r = t.program_current_state;
            if (null == r) return !1;
            if (null == n || "" === n) {
                if (![f.g.PAYMENT_PROCESSING, f.g.PAYMENT_ERROR].includes(r)) return !1;
            } else {
                let e = new Date(n).getTime();
                if (Number.isNaN(e) || e < Date.now()) return !1;
            }
        }
        return !0;
    }
    passesProgressBarInvariant(e) {
        if (!this.isInProperTreatments()) return !1;
        if (e === f.f.NITRO) {
            let t = this.getRewardForProgram(e);
            if (null == t) return !1;
            let n = t.total_countdown_duration_ms;
            if (null == n || n <= 0) return !1;
            let r = t.next_reward_date;
            if (null == r || "" === r) return !1;
            let a = new Date(r).getTime();
            if (Number.isNaN(a) || a <= Date.now() || (0, i.default)(new Date(r), new Date()) > n / d.Z.Millis.DAY)
                return !1;
        }
        return !0;
    }
    isInProperTreatments() {
        let { isInTreatment: e } = (0, l.f3)("ProgramRewardsStore");
        return e;
    }
    isFetching() {
        return E.isLoading();
    }
    isFetched() {
        return E.isValid();
    }
    hasCachedValue() {
        return null != E.getValue();
    }
    isReady() {
        return !this.isFetching() && (this.hasCachedValue() || !this.isInProperTreatments() || this.isError());
    }
    shouldFetch() {
        return !!this.isInProperTreatments() && E.shouldFetch();
    }
    isError() {
        return E.isError();
    }
    getStatus() {
        return E.getStatus();
    }
    getRewardForProgram(e) {
        var t;
        return null == (t = E.getValue()) ? void 0 : t.get(e);
    }
    forceExpire() {
        E.forceExpire();
    }
}
p(T, "displayName", "ProgramRewardsStore"), p(T, "persistKey", "ProgramRewardsStore");
let C = new T(o.Z, {
    LOGOUT: I,
    PROGRAM_REWARDS_FETCH: O,
    PROGRAM_REWARDS_FETCH_SUCCESS: v,
    PROGRAM_REWARDS_FETCH_FAILURE: S,
    CURRENT_USER_UPDATE: y,
});
