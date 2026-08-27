"use strict";
let i, r, a, s, l;
n.d(t, { A: () => S });
var o = n(158390),
    d = n(323889),
    c = n(252313),
    u = n(17928),
    _ = n(228366),
    E = n(927813),
    A = n(107195);
let h = 30 * E.A.Millis.SECOND,
    I = 10 * E.A.Millis.MINUTE,
    f = null,
    p = !1;
function T() {
    (i = new Map()), (r = 0), (a = new Map()), (s = new Map()), (l = new Map()), (f = null), (p = !1);
}
function m(e, t) {
    (i = new Map(i)).set(e, t);
}
T();
class g extends u.Ay.Store {
    static displayName = "AdDeliveryStore";
    get lastFetchedQuestToDeliver() {
        return r;
    }
    isFetchingAdToDeliverByPlacement(e) {
        return i?.get(e) ?? !1;
    }
    canRefreshAd(e) {
        let t = l?.get(e);
        return null == t || Date.now() >= t;
    }
    get deliveryAdDecisionByPlacement() {
        return a;
    }
    isFetchingQuestHomeHero() {
        return p;
    }
    getLastFetchedQuestHomeHero() {
        return f;
    }
    getQuestHomeHero() {
        let e = a.get(c.p.QUEST_HOME_BANNER_DESKTOP)?.creative;
        return e?.type === d.p.QUEST_HOME_HERO ? e.questHomeHero : null;
    }
}
let S = new g(_.h, {
    LOGOUT: function () {
        T();
    },
    QUESTS_FETCH_QUEST_TO_DELIVER_BEGIN: function (e) {
        let { placement: t } = e;
        m(t, !0);
    },
    QUESTS_FETCH_QUEST_TO_DELIVER_SUCCESS: function (e) {
        let {
            creative: t,
            placement: n,
            adDecisionData: i,
            adContext: o,
            responseTtlSeconds: d,
            metadataSealed: c,
            trafficMetadataSealed: u,
            provenanceMetadataSealed: _,
            fetchedAt: E,
        } = e;
        (r = Date.now()), m(n, !1), s.get(n)?.succeed(), l.delete(n);
        let h = {
            creative: t ?? null,
            fetchedAt: E,
            ttlMillis: (0, A.Ce)(d),
            adDecisionData: i,
            adContext: o,
            metadataSealed: c,
            trafficMetadataSealed: u,
            provenanceMetadataSealed: _,
        };
        (a = new Map(a)).set(n, h);
    },
    QUESTS_FETCH_QUEST_TO_DELIVER_FAILURE: function (e) {
        let { placement: t } = e;
        (r = Date.now()), m(t, !1);
        let n = s.get(t);
        null == n && ((n = new o.A(h, I)), s.set(t, n)), l.set(t, Date.now() + n.fail());
    },
    QUESTS_CLEAR_EXPIRED_QUEST_TO_DELIVER: function (e) {
        let { placement: t, responseTtlSeconds: n, fetchedAt: i } = e;
        m(t, !1);
        let r = { creative: null, fetchedAt: i, ttlMillis: (0, A.Ce)(n) };
        (a = new Map(a)).set(t, r);
    },
    QUESTS_FETCH_QUEST_HOME_HERO_BEGIN: function (e) {
        let { placement: t } = e;
        (p = !0), m(t, !0);
    },
    QUESTS_FETCH_QUEST_HOME_HERO_SUCCESS: function (e) {
        (p = !1), (f = Date.now()), m(e.placement, !1);
        let t = {
            creative: null != e.questHomeHero ? { type: d.p.QUEST_HOME_HERO, questHomeHero: e.questHomeHero } : null,
            fetchedAt: e.fetchedAt,
            ttlMillis: (0, A.Ce)(e.responseTtlSeconds),
            adDecisionData: e.adDecisionData,
            adContext: e.adContext,
            metadataSealed: e.metadataSealed,
            trafficMetadataSealed: e.trafficMetadataSealed,
            provenanceMetadataSealed: e.provenanceMetadataSealed,
        };
        (a = new Map(a)).set(e.placement, t);
    },
    QUESTS_FETCH_QUEST_HOME_HERO_FAILURE: function (e) {
        let { placement: t } = e;
        (p = !1), m(t, !1);
    },
});
