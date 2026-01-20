n.d(t, { Z: () => N }), n(388685);
var r,
    i = n(599582),
    a = n(995638),
    o = n(197084),
    s = n(442837),
    l = n(570140),
    c = n(26842),
    u = n(375527),
    d = n(168232),
    f = n(594174),
    p = n(70956),
    _ = n(111361),
    h = n(165299);
function m(e, t, n) {
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
let g = 86400000,
    E = 30000,
    b = 3600000,
    y = new c.j({ ttlMs: g });
function O() {
    let e = y.getValue();
    if (null == e) return !1;
    let t = new Date();
    for (let n of e.values()) {
        let e = new Date(n.next_reward_date),
            r = (0, i.default)(e, 1);
        if (
            (0, o.default)(t, {
                start: e,
                end: r,
            })
        )
            return !0;
    }
    return !1;
}
function v() {
    (0, d.QI)(f.default.getCurrentUser()) ? y.setTtl(E) : O() ? y.setTtl(b) : y.setTtl(g);
}
function S() {
    y.setLoading();
}
function I(e) {
    let { programRewards: t } = e;
    if (!y.isLoading()) return !1;
    let n = new Map();
    t.forEach((e) => {
        n.set(e.reward_program, e);
    }),
        y.setValue(n),
        v();
}
function T() {
    if (!y.isLoading()) return !1;
    y.setError();
}
function C() {
    y.clear();
}
class A extends (r = s.ZP.PersistedStore) {
    initialize(e) {
        if ((this.waitFor(f.default), (null == e ? void 0 : e.cache) != null)) {
            let t = new Map(e.cache.value);
            y.restore({
                value: t,
                fetchedAt: e.cache.fetchedAt,
            });
        }
        v();
    }
    getState() {
        let e = y.serialize();
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
        if (e === h.f.NITRO) {
            let t = this.getRewardForProgram(e);
            if (null == t) return !1;
            let n = t.next_reward_date,
                r = t.program_current_state;
            if (null == r) return !1;
            if (null == n || "" === n) {
                if (![h.g.PAYMENT_PROCESSING, h.g.PAYMENT_ERROR].includes(r)) return !1;
            } else {
                let e = new Date(n).getTime();
                if (Number.isNaN(e) || e < Date.now()) return !1;
            }
        }
        return !0;
    }
    passesProgressBarInvariant(e) {
        if (!this.isInProperTreatments()) return !1;
        if (e === h.f.NITRO) {
            let t = this.getRewardForProgram(e);
            if (null == t) return !1;
            let n = t.total_countdown_duration_ms;
            if (null == n || n <= 0) return !1;
            let r = t.next_reward_date;
            if (null == r || "" === r) return !1;
            let i = new Date(r).getTime();
            if (Number.isNaN(i) || i <= Date.now() || (0, a.default)(new Date(r), new Date()) > n / p.Z.Millis.DAY)
                return !1;
        }
        return !0;
    }
    isInProperTreatments() {
        let { isInTreatment: e } = (0, u.f3)("ProgramRewardsStore");
        return e;
    }
    isFetching() {
        return y.isLoading();
    }
    isFetched() {
        return y.isValid();
    }
    hasCachedValue() {
        return null != y.getValue();
    }
    isReady() {
        return (
            !this.isFetching() &&
            (this.hasCachedValue() ||
                !this.isInProperTreatments() ||
                this.isError() ||
                !(0, _.I5)(f.default.getCurrentUser()))
        );
    }
    shouldFetch() {
        return !!this.isInProperTreatments() && !!(0, _.I5)(f.default.getCurrentUser()) && y.shouldFetch();
    }
    isError() {
        return y.isError();
    }
    getStatus() {
        return y.getStatus();
    }
    getRewardForProgram(e) {
        var t;
        return null == (t = y.getValue()) ? void 0 : t.get(e);
    }
    forceExpire() {
        y.forceExpire();
    }
}
m(A, "displayName", "ProgramRewardsStore"), m(A, "persistKey", "ProgramRewardsStore");
let N = new A(l.Z, {
    LOGOUT: C,
    PROGRAM_REWARDS_FETCH: S,
    PROGRAM_REWARDS_FETCH_SUCCESS: I,
    PROGRAM_REWARDS_FETCH_FAILURE: T,
    CURRENT_USER_UPDATE: v,
    CONNECTION_OPEN: v,
});
