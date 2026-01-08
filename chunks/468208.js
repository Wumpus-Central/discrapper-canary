n.d(t, { Z: () => O }), n(388685);
var r,
    i = n(442837),
    a = n(570140),
    o = n(26842),
    s = n(375527),
    l = n(168232),
    c = n(594174);
function u(e, t, n) {
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
let d = 86400000,
    f = 30000,
    p = 86400000,
    _ = new o.j({ ttlMs: d });
function m() {
    (0, l.QI)(c.default.getCurrentUser()) ? _.setTtl(f) : _.setTtl(d);
}
function h() {
    _.setLoading();
}
function g(e) {
    let { programRewards: t } = e;
    if (!_.isLoading()) return !1;
    let n = new Map();
    t.forEach((e) => {
        n.set(e.reward_program, e);
    }),
        _.setValue(n);
}
function E() {
    if (!_.isLoading()) return !1;
    _.setError();
}
function b() {
    _.clear();
}
class y extends (r = i.ZP.PersistedStore) {
    initialize(e) {
        if ((this.waitFor(c.default), m(), (null == e ? void 0 : e.cache) != null)) {
            let t = new Map(e.cache.value);
            _.restore({
                value: t,
                fetchedAt: e.cache.fetchedAt,
            });
        }
    }
    getState() {
        let e = _.serialize();
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
        let { isInTreatment: e } = (0, s.f3)("ProgramRewardsStore");
        return e;
    }
    isFetching() {
        return _.isLoading();
    }
    isFetched() {
        return _.isValid();
    }
    isReady() {
        return this.isFetched() || !this.isInProperTreatments();
    }
    isWithinRewardProximity() {
        let e = _.getValue();
        if (null == e) return !1;
        let t = Date.now();
        for (let n of e.values()) if (new Date(n.next_reward_date).getTime() - t < p) return !0;
        return !1;
    }
    shouldFetch() {
        let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        if (!this.isInProperTreatments()) return !1;
        let t = e || this.isWithinRewardProximity();
        return _.shouldFetch(t);
    }
    isError() {
        return _.isError();
    }
    getForProgram(e) {
        let { value: t, status: n } = _.getValueWithStatus();
        return {
            value: null == t ? void 0 : t.get(e),
            status: n,
        };
    }
    forceExpire() {
        _.forceExpire();
    }
}
u(y, "displayName", "ProgramRewardsStore"), u(y, "persistKey", "ProgramRewardsStore");
let O = new y(a.Z, {
    LOGOUT: b,
    PROGRAM_REWARDS_FETCH: h,
    PROGRAM_REWARDS_FETCH_SUCCESS: g,
    PROGRAM_REWARDS_FETCH_FAILURE: E,
    CURRENT_USER_UPDATE: m,
});
