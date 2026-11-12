let i, r, a, s, l, o;
var d = n(158390),
    c = n(323889),
    u = n(252313),
    _ = n(855986),
    E = n(73153),
    A = n(927813),
    f = n(107195);
let h = [],
    I = 30 * A.A.Millis.SECOND,
    p = 10 * A.A.Millis.MINUTE,
    m = null,
    T = !1;
function g() {
    ((i = new Map()),
        (r = 0),
        (a = new Map()),
        (s = new Map()),
        (l = new Map()),
        (o = new Map()),
        (m = null),
        (T = !1));
}
function S(e, t) {
    (i = new Map(i)).set(e, t);
}
g();
class N extends _.Ay.Store {
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
    getAdDecisionsForPlacement(e) {
        return a.get(e) ?? h;
    }
    getNoFillForPlacement(e) {
        let t = s.get(e);
        return null == t ? null : t.fetchedAt + t.ttlMillis >= Date.now() ? t : null;
    }
    isFetchingQuestHomeHero() {
        return T;
    }
    getLastFetchedQuestHomeHero() {
        return m;
    }
    getQuestHomeHero() {
        let e = this.getAdDecisionsForPlacement(u.p.QUEST_HOME_BANNER_DESKTOP)[0]?.creative;
        return e?.type === c.p.QUEST_HOME_HERO ? e.questHomeHero : null;
    }
}
let C = new N(E.h, {
    LOGOUT: function () {
        g();
    },
    QUESTS_FETCH_QUEST_TO_DELIVER_BEGIN: function (e) {
        let { placement: t } = e;
        S(t, !0);
    },
    QUESTS_FETCH_QUEST_TO_DELIVER_SUCCESS: function (e) {
        let {
            quest: t,
            creative: n,
            isNoFill: i,
            noFillAdContentId: d,
            placement: c,
            adDecisionData: u,
            adContext: _,
            responseTtlSeconds: E,
            metadataSealed: A,
            trafficMetadataSealed: h,
            provenanceMetadataSealed: I,
            fetchedAt: p,
        } = e;
        ((r = Date.now()),
            S(c, !1),
            (s = new Map(s)),
            !0 === i && null == t && u?.decision_id != null
                ? s.set(c, {
                      decisionId: u.decision_id,
                      adContentId: d ?? void 0,
                      metadataSealed: A,
                      trafficMetadataSealed: h,
                      fetchedAt: p,
                      ttlMillis: (0, f.Ce)(E),
                  })
                : s.delete(c),
            l.get(c)?.succeed(),
            o.delete(c));
        let m = {
            creative: n ?? null,
            fetchedAt: p,
            ttlMillis: (0, f.Ce)(E),
            adDecisionData: u,
            adContext: _,
            metadataSealed: A,
            trafficMetadataSealed: h,
            provenanceMetadataSealed: I,
        };
        (a = new Map(a)).set(c, [m]);
    },
    QUESTS_FETCH_QUEST_TO_DELIVER_FAILURE: function (e) {
        let { placement: t } = e;
        ((s = new Map(s)).delete(t), (r = Date.now()), S(t, !1));
        let n = l.get(t);
        (null == n && ((n = new d.A(I, p)), l.set(t, n)), o.set(t, Date.now() + n.fail()));
    },
    QUESTS_CLEAR_EXPIRED_QUEST_TO_DELIVER: function (e) {
        let { placement: t, responseTtlSeconds: n, fetchedAt: i } = e;
        S(t, !1);
        let r = { creative: null, fetchedAt: i, ttlMillis: (0, f.Ce)(n) };
        (a = new Map(a)).set(t, [r]);
    },
    QUESTS_FETCH_QUEST_HOME_HERO_BEGIN: function (e) {
        let { placement: t } = e;
        ((T = !0), S(t, !0));
    },
    QUESTS_FETCH_QUEST_HOME_HERO_SUCCESS: function (e) {
        ((T = !1), (m = Date.now()), S(e.placement, !1), l.get(e.placement)?.succeed(), o.delete(e.placement));
        let t = {
            creative: null != e.questHomeHero ? { type: c.p.QUEST_HOME_HERO, questHomeHero: e.questHomeHero } : null,
            fetchedAt: e.fetchedAt,
            ttlMillis: (0, f.Ce)(e.responseTtlSeconds),
            adDecisionData: e.adDecisionData,
            adContext: e.adContext,
            metadataSealed: e.metadataSealed,
            trafficMetadataSealed: e.trafficMetadataSealed,
            provenanceMetadataSealed: e.provenanceMetadataSealed,
        };
        (a = new Map(a)).set(e.placement, [t]);
    },
    QUESTS_FETCH_QUEST_HOME_HERO_FAILURE: function (e) {
        let { placement: t } = e;
        ((T = !1), S(t, !1));
        let n = l.get(t);
        (null == n && ((n = new d.A(I, p)), l.set(t, n)), o.set(t, Date.now() + n.fail()));
    },
});
n.d(t, {}, { A: C });
