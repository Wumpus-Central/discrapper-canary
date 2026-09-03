let i, r, a, s, l, o;
n.d(t, { A: () => N });
var d = n(158390),
    c = n(323889),
    u = n(252313),
    _ = n(17928),
    E = n(228366),
    A = n(927813),
    h = n(107195);
let I = 30 * A.A.Millis.SECOND,
    f = 10 * A.A.Millis.MINUTE,
    p = null,
    T = !1;
function m() {
    (i = new Map()), (r = 0), (a = new Map()), (s = new Map()), (l = new Map()), (o = new Map()), (p = null), (T = !1);
}
function g(e, t) {
    (i = new Map(i)).set(e, t);
}
m();
class S extends _.Ay.Store {
    static displayName = "AdDeliveryStore";
    get lastFetchedQuestToDeliver() {
        return r;
    }
    isFetchingAdToDeliverByPlacement(e) {
        return i?.get(e) ?? !1;
    }
    canRefreshAd(e) {
        let t = o?.get(e);
        return null == t || Date.now() >= t;
    }
    get deliveryAdDecisionByPlacement() {
        return a;
    }
    getNoFillForPlacement(e) {
        let { includeExpired: t = !1 } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            n = s.get(e);
        return null == n ? null : t || n.fetchedAt + n.ttlMillis >= Date.now() ? n : null;
    }
    isFetchingQuestHomeHero() {
        return T;
    }
    getLastFetchedQuestHomeHero() {
        return p;
    }
    getQuestHomeHero() {
        let e = a.get(u.p.QUEST_HOME_BANNER_DESKTOP)?.creative;
        return e?.type === c.p.QUEST_HOME_HERO ? e.questHomeHero : null;
    }
}
let N = new S(E.h, {
    LOGOUT: function () {
        m();
    },
    QUESTS_FETCH_QUEST_TO_DELIVER_BEGIN: function (e) {
        let { placement: t } = e;
        g(t, !0);
    },
    QUESTS_FETCH_QUEST_TO_DELIVER_SUCCESS: function (e) {
        let {
            quest: t,
            creative: n,
            isNoFill: i,
            placement: d,
            adDecisionData: c,
            adContext: u,
            responseTtlSeconds: _,
            metadataSealed: E,
            trafficMetadataSealed: A,
            provenanceMetadataSealed: I,
            fetchedAt: f,
        } = e;
        (r = Date.now()),
            g(d, !1),
            (s = new Map(s)),
            !0 === i && null == t && c?.decision_id != null
                ? s.set(d, {
                      decisionId: c.decision_id,
                      metadataSealed: E,
                      trafficMetadataSealed: A,
                      fetchedAt: f,
                      ttlMillis: (0, h.Ce)(_),
                  })
                : s.delete(d),
            l.get(d)?.succeed(),
            o.delete(d);
        let p = {
            creative: n ?? null,
            fetchedAt: f,
            ttlMillis: (0, h.Ce)(_),
            adDecisionData: c,
            adContext: u,
            metadataSealed: E,
            trafficMetadataSealed: A,
            provenanceMetadataSealed: I,
        };
        (a = new Map(a)).set(d, p);
    },
    QUESTS_FETCH_QUEST_TO_DELIVER_FAILURE: function (e) {
        let { placement: t } = e;
        (s = new Map(s)).delete(t), (r = Date.now()), g(t, !1);
        let n = l.get(t);
        null == n && ((n = new d.A(I, f)), l.set(t, n)), o.set(t, Date.now() + n.fail());
    },
    QUESTS_CLEAR_EXPIRED_QUEST_TO_DELIVER: function (e) {
        let { placement: t, responseTtlSeconds: n, fetchedAt: i } = e;
        g(t, !1);
        let r = { creative: null, fetchedAt: i, ttlMillis: (0, h.Ce)(n) };
        (a = new Map(a)).set(t, r);
    },
    QUESTS_FETCH_QUEST_HOME_HERO_BEGIN: function (e) {
        let { placement: t } = e;
        (T = !0), g(t, !0);
    },
    QUESTS_FETCH_QUEST_HOME_HERO_SUCCESS: function (e) {
        (T = !1), (p = Date.now()), g(e.placement, !1);
        let t = {
            creative: null != e.questHomeHero ? { type: c.p.QUEST_HOME_HERO, questHomeHero: e.questHomeHero } : null,
            fetchedAt: e.fetchedAt,
            ttlMillis: (0, h.Ce)(e.responseTtlSeconds),
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
        (T = !1), g(t, !1);
    },
});
