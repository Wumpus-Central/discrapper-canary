n.d(t, { Z: () => P }), n(388685);
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
    h = n(165299),
    m = n(474936);
function g(e, t, n) {
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
let E = 86400000,
    b = 30000,
    y = 3600000,
    O = new c.j({ ttlMs: E });
function v() {
    let e = O.getValue();
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
function S() {
    (0, d.QI)(f.default.getCurrentUser()) ? O.setTtl(b) : v() ? O.setTtl(y) : O.setTtl(E);
}
function I() {
    O.setLoading();
}
function T(e) {
    let { programRewards: t } = e;
    if (!O.isLoading()) return !1;
    let n = new Map();
    t.forEach((e) => {
        n.set(e.reward_program, e);
    }),
        O.setValue(n),
        S();
}
function C() {
    if (!O.isLoading()) return !1;
    O.setError();
}
function A() {
    O.clear();
}
class N extends (r = s.ZP.PersistedStore) {
    initialize(e) {
        if ((this.waitFor(f.default), (null == e ? void 0 : e.cache) != null)) {
            let t = new Map(e.cache.value);
            O.restore({
                value: t,
                fetchedAt: e.cache.fetchedAt,
            });
        }
        S();
    }
    getState() {
        let e = O.serialize();
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
    hasNecessaryPremiumSubscriptionStatus() {
        return (0, _.M5)(f.default.getCurrentUser(), m.PremiumTypes.TIER_2);
    }
    isInProperTreatments() {
        let { isInTreatment: e } = (0, u.f3)("ProgramRewardsStore");
        return e;
    }
    isFetching() {
        return O.isLoading();
    }
    isFetched() {
        return O.isValid();
    }
    hasCachedValue() {
        return null != O.getValue();
    }
    isReady() {
        return (
            !this.isFetching() &&
            (this.hasCachedValue() ||
                !this.isInProperTreatments() ||
                this.isError() ||
                !this.hasNecessaryPremiumSubscriptionStatus())
        );
    }
    shouldFetch() {
        return !!this.isInProperTreatments() && !!this.hasNecessaryPremiumSubscriptionStatus() && O.shouldFetch();
    }
    isError() {
        return O.isError();
    }
    getStatus() {
        return O.getStatus();
    }
    getRewardForProgram(e) {
        var t;
        return null == (t = O.getValue()) ? void 0 : t.get(e);
    }
    forceExpire() {
        O.forceExpire();
    }
}
g(N, "displayName", "ProgramRewardsStore"), g(N, "persistKey", "ProgramRewardsStore");
let P = new N(l.Z, {
    LOGOUT: A,
    PROGRAM_REWARDS_FETCH: I,
    PROGRAM_REWARDS_FETCH_SUCCESS: T,
    PROGRAM_REWARDS_FETCH_FAILURE: C,
    CURRENT_USER_UPDATE: S,
    CONNECTION_OPEN: S,
});
