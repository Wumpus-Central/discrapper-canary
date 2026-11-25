let i, r, a, s, l, o;
var d = n(158390),
    c = n(323889),
    u = n(252313),
    _ = n(855986),
    E = n(73153),
    A = n(247512),
    f = n(927813),
    h = n(107195);
let I = [],
    p = 30 * f.A.Millis.SECOND,
    m = 10 * f.A.Millis.MINUTE,
    g = null,
    T = !1,
    S = new Set();
function N() {
    ((i = new Map()),
        (r = 0),
        (a = new Map()),
        (s = new Map()),
        (l = new Map()),
        (o = new Map()),
        (g = null),
        (T = !1),
        (S = new Set()));
}
function C(e, t) {
    (i = new Map(i)).set(e, t);
}
function O(e, t) {
    ((S = new Set(S)), t ? S.add(e) : S.delete(e));
}
function R(e, t) {
    let n = u.p.QUEST_HOME_BANNER_DESKTOP,
        [i, ...r] = a.get(n) ?? [],
        s = i?.creative;
    if (s?.type !== c.p.QUEST_HOME_HERO) return !1;
    let { questHomeHero: l } = s,
        { questSeries: o } = l;
    if (null == o || !e(o.rewardQuest, l)) return !1;
    let d = { ...o.rewardQuest, userStatus: t(o.rewardQuest) };
    return (
        (a = new Map(a)).set(n, [
            { ...i, creative: { ...s, questHomeHero: { ...l, questSeries: { ...o, rewardQuest: d } } } },
            ...r,
        ]),
        !0
    );
}
N();
class L extends _.Ay.Store {
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
        return a.get(e) ?? I;
    }
    getNoFillForPlacement(e) {
        let t = s.get(e);
        return null == t ? null : t.fetchedAt + t.ttlMillis >= Date.now() ? t : null;
    }
    isFetchingQuestHomeHero() {
        return T;
    }
    getLastFetchedQuestHomeHero() {
        return g;
    }
    getQuestHomeHero() {
        let e = this.getAdDecisionsForPlacement(u.p.QUEST_HOME_BANNER_DESKTOP)[0]?.creative;
        return e?.type === c.p.QUEST_HOME_HERO ? e.questHomeHero : null;
    }
    isClaimingQuestSeriesReward(e) {
        return S.has(e);
    }
}
let y = new L(E.h, {
    LOGOUT: function () {
        N();
    },
    QUESTS_FETCH_QUEST_TO_DELIVER_BEGIN: function (e) {
        let { placement: t } = e;
        C(t, !0);
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
            trafficMetadataSealed: f,
            provenanceMetadataSealed: I,
            fetchedAt: p,
        } = e;
        ((r = Date.now()),
            C(c, !1),
            (s = new Map(s)),
            !0 === i && null == t && u?.decision_id != null
                ? s.set(c, {
                      decisionId: u.decision_id,
                      adContentId: d ?? void 0,
                      metadataSealed: A,
                      trafficMetadataSealed: f,
                      fetchedAt: p,
                      ttlMillis: (0, h.Ce)(E),
                  })
                : s.delete(c),
            l.get(c)?.succeed(),
            o.delete(c));
        let m = {
            creative: n ?? null,
            fetchedAt: p,
            ttlMillis: (0, h.Ce)(E),
            adDecisionData: u,
            adContext: _,
            metadataSealed: A,
            trafficMetadataSealed: f,
            provenanceMetadataSealed: I,
        };
        (a = new Map(a)).set(c, [m]);
    },
    QUESTS_FETCH_QUEST_TO_DELIVER_FAILURE: function (e) {
        let { placement: t } = e;
        ((s = new Map(s)).delete(t), (r = Date.now()), C(t, !1));
        let n = l.get(t);
        (null == n && ((n = new d.A(p, m)), l.set(t, n)), o.set(t, Date.now() + n.fail()));
    },
    QUESTS_CLEAR_EXPIRED_QUEST_TO_DELIVER: function (e) {
        let { placement: t, responseTtlSeconds: n, fetchedAt: i, refetchOnFocus: r } = e;
        (a = new Map(a)).set(t, r ? [] : [{ creative: null, fetchedAt: i, ttlMillis: (0, h.Ce)(n) }]);
    },
    QUESTS_FETCH_QUEST_HOME_HERO_BEGIN: function (e) {
        let { placement: t } = e;
        ((T = !0), C(t, !0));
    },
    QUESTS_FETCH_QUEST_HOME_HERO_SUCCESS: function (e) {
        ((T = !1), (g = Date.now()), C(e.placement, !1), l.get(e.placement)?.succeed(), o.delete(e.placement));
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
        (a = new Map(a)).set(e.placement, [t]);
    },
    QUESTS_FETCH_QUEST_HOME_HERO_FAILURE: function (e) {
        let { placement: t } = e;
        ((T = !1), C(t, !1));
        let n = l.get(t);
        (null == n && ((n = new d.A(p, m)), l.set(t, n)), o.set(t, Date.now() + n.fail()));
    },
    QUEST_SERIES_CLAIM_REWARD_BEGIN: function (e) {
        let { heroId: t } = e;
        O(t, !0);
    },
    QUEST_SERIES_CLAIM_REWARD_SUCCESS: function (e) {
        let { heroId: t, entitlements: n } = e;
        (O(t, !1),
            R(
                (e, n) => {
                    let { userStatus: i } = e;
                    return n.id === t && null != i;
                },
                (e) => {
                    let { userStatus: t } = e;
                    return null != t ? { ...t, claimedAt: n.claimedAt } : null;
                },
            ));
    },
    QUEST_SERIES_CLAIM_REWARD_FAILURE: function (e) {
        let { heroId: t } = e;
        O(t, !1);
    },
    QUESTS_USER_STATUS_UPDATE: function (e) {
        let { user_status: t } = e;
        return R(
            (e) => e.id === t.quest_id,
            () => (0, A.tp)(t),
        );
    },
});
n.d(t, {}, { A: y });
