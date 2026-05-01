"use strict";
n.d(t, { V: () => f, A: () => m });
var i,
    r = n(410530),
    s = n(107678),
    a = n(582972),
    o = n(17928),
    l = n(228366),
    u = n(287809),
    c = n(927813),
    d = n(636592),
    _ = n(26508),
    f =
        (((i = {}).NOT_ELIGIBLE_FOR_ANY_PROGRAM_REWARD = "NOT_ELIGIBLE_FOR_ANY_PROGRAM_REWARD"),
        (i.MISSING_NECESSARY_PREMIUM_STATUS = "MISSING_NECESSARY_PREMIUM_STATUS"),
        (i.CACHE_SHOULD_NOT_FETCH = "CACHE_SHOULD_NOT_FETCH"),
        i);
let h = new (class {
    value = null;
    fetchState = "idle";
    fetchedAt = null;
    ttlMs;
    constructor(e = {}) {
        this.ttlMs = e.ttlMs ?? null;
    }
    setTtl(e) {
        this.ttlMs = e;
    }
    setLoading() {
        this.fetchState = "loading";
    }
    setValue(e) {
        (this.value = e), (this.fetchState = "success"), (this.fetchedAt = Date.now());
    }
    setError() {
        this.fetchState = "error";
    }
    clear() {
        (this.value = null), (this.fetchState = "idle"), (this.fetchedAt = null);
    }
    getValue() {
        return this.value;
    }
    getFetchState() {
        return this.fetchState;
    }
    getFetchedAt() {
        return this.fetchedAt;
    }
    forceExpire() {
        this.fetchedAt = null;
    }
    isExpired() {
        return null != this.ttlMs && (null == this.fetchedAt || Date.now() - this.fetchedAt >= this.ttlMs);
    }
    shouldFetch() {
        return "loading" !== this.fetchState && ("idle" === this.fetchState || this.isExpired());
    }
    isLoading() {
        return "loading" === this.fetchState;
    }
    isValid() {
        return "success" === this.fetchState && !this.isExpired();
    }
    isError() {
        return "error" === this.fetchState;
    }
    getStatus() {
        switch (this.fetchState) {
            case "idle":
                return "idle";
            case "loading":
                return "loading";
            case "error":
                return "error";
            case "success":
                return this.isExpired() ? "stale" : "valid";
        }
    }
    getValueWithStatus() {
        return { value: this.value, status: this.getStatus() };
    }
    serialize() {
        return null == this.value || null == this.fetchedAt ? null : { value: this.value, fetchedAt: this.fetchedAt };
    }
    restore(e) {
        null != e && ((this.value = e.value), (this.fetchedAt = e.fetchedAt), (this.fetchState = "success"));
    }
})({ ttlMs: 864e5 });
function p() {
    let { state: e, msUntilReward: t } = (function () {
        let e = h.getValue();
        if (null == e) return { state: "MORE_THAN_24H_BEFORE_REWARD" };
        let t = new Date();
        for (let n of e.values()) {
            let e = new Date(n.next_reward_date);
            if (isNaN(e.getTime())) continue;
            let i = (0, s.default)(e, 10);
            if (t >= i) return { state: "PAST_REWARD_DATE" };
            if (t >= e || t >= (0, r.default)(e, -1))
                return { state: "LESS_THAN_24H_BEFORE_REWARD", msUntilReward: (0, a.A)(i, t) };
        }
        return { state: "MORE_THAN_24H_BEFORE_REWARD" };
    })();
    h.setTtl("LESS_THAN_24H_BEFORE_REWARD" === e ? (t ?? 864e5) : 864e5);
}
class E extends o.Ay.PersistedStore {
    static displayName = "ProgramRewardsStore";
    static persistKey = "ProgramRewardsStore";
    initialize(e) {
        if ((this.waitFor(u.default), e?.cache != null)) {
            let t = new Map(e.cache.value);
            h.restore({ value: t, fetchedAt: e.cache.fetchedAt });
        }
        p();
    }
    getState() {
        let e = h.serialize();
        return { cache: null != e ? { value: Array.from(e.value.entries()), fetchedAt: e.fetchedAt } : null };
    }
    getTotalDaysInDuration(e) {
        let t = this.getRewardForProgram(e);
        if (null == t) return null;
        let n = t.total_countdown_duration_ms;
        return null == n || n <= 0 ? null : Math.ceil(n / c.A.Millis.DAY);
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
        return (
            !this.isFetching() &&
            (this.hasCachedValue() || !(0, _.g_)("ProgramRewardsStore") || this.isError() || !(0, _.mY)())
        );
    }
    shouldFetch() {
        return (0, _.g_)("ProgramRewardsStore.shouldFetch")
            ? (0, _.mY)()
                ? h.shouldFetch()
                    ? { shouldFetch: !0 }
                    : { shouldFetch: !1, reason: "CACHE_SHOULD_NOT_FETCH" }
                : { shouldFetch: !1, reason: "MISSING_NECESSARY_PREMIUM_STATUS" }
            : { shouldFetch: !1, reason: "NOT_ELIGIBLE_FOR_ANY_PROGRAM_REWARD" };
    }
    isError() {
        return h.isError();
    }
    getStatus() {
        return h.getStatus();
    }
    getRewardForProgram(e) {
        return h.getValue()?.get(e);
    }
    forceExpire() {
        h.forceExpire();
    }
    __getLocalVars = () => {
        let e = this.getState(),
            t = e.cache?.value ?? [],
            n = {};
        for (let [e, i] of t) n[e === d.W.NITRO ? "NITRO" : String(e)] = i;
        return {
            status: this.getStatus(),
            isFetching: this.isFetching(),
            isFetched: this.isFetched(),
            hasCachedValue: this.hasCachedValue(),
            isError: this.isError(),
            isReady: this.isReady(),
            shouldFetch: this.shouldFetch(),
            fetchedAt: e.cache?.fetchedAt ?? null,
            rewards: Object.keys(n).length > 0 ? n : null,
        };
    };
    __getLocalVarsEditConfig = () => ({
        preDispatches: [{ type: "PROGRAM_REWARDS_FETCH" }],
        actionType: "PROGRAM_REWARDS_FETCH_SUCCESS",
        buildPayload: (e) => {
            let t = e.rewards ?? null;
            return null == t || 0 === Object.keys(t).length
                ? { programRewards: [] }
                : {
                      programRewards: Object.entries(t).map((e) => {
                          let [t, n] = e;
                          return { ...n, reward_program: "NITRO" === t ? d.W.NITRO : Number(t) };
                      }),
                  };
        },
        getPurgeVars: () => ({ rewards: null }),
    });
}
let m = new E(l.h, {
    LOGOUT: function () {
        h.clear();
    },
    PROGRAM_REWARDS_FETCH: function () {
        h.setLoading();
    },
    PROGRAM_REWARDS_FETCH_SUCCESS: function (e) {
        let { programRewards: t } = e;
        if (!h.isLoading()) return !1;
        let n = new Map();
        t.forEach((e) => {
            n.set(e.reward_program, e);
        }),
            h.setValue(n),
            p();
    },
    PROGRAM_REWARDS_FETCH_FAILURE: function () {
        if (!h.isLoading()) return !1;
        h.setError();
    },
    CURRENT_USER_UPDATE: p,
    CONNECTION_OPEN: p,
});
