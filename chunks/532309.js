"use strict";
n.d(t, { V: () => c, A: () => f });
var i,
    r = n(410530),
    s = n(582972),
    a = n(17928),
    o = n(228366),
    l = n(287809),
    d = n(927813),
    _ = n(636592),
    u = n(26508),
    c =
        (((i = {}).NOT_ELIGIBLE_FOR_ANY_PROGRAM_REWARD = "NOT_ELIGIBLE_FOR_ANY_PROGRAM_REWARD"),
        (i.MISSING_NECESSARY_PREMIUM_STATUS = "MISSING_NECESSARY_PREMIUM_STATUS"),
        (i.CACHE_SHOULD_NOT_FETCH = "CACHE_SHOULD_NOT_FETCH"),
        i);
let E = new (class {
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
function h() {
    let { state: e, msUntilReward: t } = (function () {
        let e = E.getValue();
        if (null == e) return { state: "MORE_THAN_24H_BEFORE_REWARD" };
        let t = new Date();
        for (let n of e.values()) {
            let e = new Date(n.next_reward_date);
            if (!isNaN(e.getTime())) {
                if (t >= e) return { state: "PAST_REWARD_DATE" };
                if (t >= (0, r.default)(e, -1))
                    return { state: "LESS_THAN_24H_BEFORE_REWARD", msUntilReward: (0, s.A)(e, t) };
            }
        }
        return { state: "MORE_THAN_24H_BEFORE_REWARD" };
    })();
    E.setTtl("LESS_THAN_24H_BEFORE_REWARD" === e ? (t ?? 864e5) : 864e5);
}
class m extends a.Ay.PersistedStore {
    static displayName = "ProgramRewardsStore";
    static persistKey = "ProgramRewardsStore";
    initialize(e) {
        if ((this.waitFor(l.default), e?.cache != null)) {
            let t = new Map(e.cache.value);
            E.restore({ value: t, fetchedAt: e.cache.fetchedAt });
        }
        h();
    }
    getState() {
        let e = E.serialize();
        return { cache: null != e ? { value: Array.from(e.value.entries()), fetchedAt: e.fetchedAt } : null };
    }
    getTotalDaysInDuration(e) {
        let t = this.getRewardForProgram(e);
        if (null == t) return null;
        let n = t.total_countdown_duration_ms;
        return null == n || n <= 0 ? null : Math.ceil(n / d.A.Millis.DAY);
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
        return (
            !this.isFetching() &&
            (this.hasCachedValue() || !(0, u.g_)("ProgramRewardsStore") || this.isError() || !(0, u.mY)())
        );
    }
    shouldFetch() {
        return (0, u.g_)("ProgramRewardsStore.shouldFetch")
            ? (0, u.mY)()
                ? E.shouldFetch()
                    ? { shouldFetch: !0 }
                    : { shouldFetch: !1, reason: "CACHE_SHOULD_NOT_FETCH" }
                : { shouldFetch: !1, reason: "MISSING_NECESSARY_PREMIUM_STATUS" }
            : { shouldFetch: !1, reason: "NOT_ELIGIBLE_FOR_ANY_PROGRAM_REWARD" };
    }
    isError() {
        return E.isError();
    }
    getStatus() {
        return E.getStatus();
    }
    getRewardForProgram(e) {
        return E.getValue()?.get(e);
    }
    forceExpire() {
        E.forceExpire();
    }
    __getLocalVars = () => {
        let e = this.getState(),
            t = e.cache?.value ?? [],
            n = {};
        for (let [e, i] of t) n[e === _.W.NITRO ? "NITRO" : String(e)] = i;
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
                          return { ...n, reward_program: "NITRO" === t ? _.W.NITRO : Number(t) };
                      }),
                  };
        },
        getPurgeVars: () => ({ rewards: null }),
    });
}
let f = new m(o.h, {
    LOGOUT: function () {
        E.clear();
    },
    PROGRAM_REWARDS_FETCH: function () {
        E.setLoading();
    },
    PROGRAM_REWARDS_FETCH_SUCCESS: function (e) {
        let { programRewards: t } = e;
        if (!E.isLoading()) return !1;
        let n = new Map();
        t.forEach((e) => {
            n.set(e.reward_program, e);
        }),
            E.setValue(n),
            h();
    },
    PROGRAM_REWARDS_FETCH_FAILURE: function () {
        if (!E.isLoading()) return !1;
        E.setError();
    },
    CURRENT_USER_UPDATE: h,
    CONNECTION_OPEN: h,
});
