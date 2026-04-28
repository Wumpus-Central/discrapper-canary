n.d(t, {
    Gp: () => g,
    HN: () => R,
    Ic: () => A,
    Kc: () => p,
    L4: () => m,
    Oh: () => c,
    RF: () => U,
    ZG: () => O,
    gO: () => T,
    if: () => S,
    r$: () => P,
    t6: () => f,
    v1: () => N,
    vZ: () => b,
    vc: () => u,
    vy: () => I,
    xn: () => C,
    yI: () => h,
});
var i = n(665260),
    a = n(773669),
    r = n(38405),
    _ = n(265704),
    s = n(859703),
    l = n(507107),
    o = n(302654),
    E = n(654487),
    d = n(652215);
function c(e) {
    return null != e && e.fetchedAt + e.ttlMillis >= Date.now();
}
function u(e, t, n) {
    let i = Array.isArray(t) ? new Map(t.map((e) => [e.id, e])) : t,
        a = Array.isArray(n) ? new Map(n.map((e) => [e.id, e])) : n,
        r = i.get(e);
    if (null != r) return r;
    let _ = a.get(e)?.replacementId;
    if (null != _) return i.get(_);
}
function I(e) {
    return Object.keys(E.TY).includes(l.uF[e]);
}
function T(e, t) {
    if (!I(t)) return !1;
    let n = l.uF[t];
    return (0, i.Lt)(e.dismissedQuestContent, E.TY[n]);
}
function A(e) {
    return new Date(e.config.expiresAt).valueOf() <= Date.now();
}
function S(e) {
    if (!A(e)) return !1;
    let t = Date.now() - 2592e6,
        n = new Date(e.config.expiresAt).valueOf();
    return null != e.config.expiresAt && !(n <= t);
}
function N(e) {
    let t = null,
        n = Date.now();
    for (let i of e) {
        let e = new Date(i.config.expiresAt).valueOf();
        !(e <= n) && (null == t || e < t) && (t = e);
    }
    return t;
}
function O(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : { dateStyle: "short" };
    return null == e ? "" : new Date(e).toLocaleDateString(a.default.locale, t);
}
function f(e, t, n) {
    let i = t.get(n);
    if (null == i) return;
    let a = e.get(i.quest.id);
    if (null != a && !A(a)) return a;
}
function R(e) {
    return {
        [l.uF.QUEST_BAR]: l.yW.DESKTOP_ACCOUNT_PANEL_AREA,
        [l.uF.QUEST_BAR_V2]: l.yW.DESKTOP_ACCOUNT_PANEL_AREA,
        [l.uF.QUEST_BAR_MOBILE]: l.yW.MOBILE_HOME_DOCK_AREA,
        [l.uF.QUEST_HOME_HERO]: l.yW.QUEST_HOME_BANNER_DESKTOP,
        [l.uF.QUEST_HOME_MOBILE_CAROUSEL]: l.yW.QUEST_HOME_MOBILE_CAROUSEL,
    }[e];
}
function C(e) {
    let t = R(e);
    return null != t && E.J6.has(t);
}
function D(e) {
    return {
        questId: e.questId,
        adCreativeId: e.adCreativeId,
        adDecisionData: e.adDecisionData,
        adContext: e.adContext,
        metadataSealed: e.metadataSealed,
        trafficMetadataRaw: e.trafficMetadataRaw,
        trafficMetadataSealed: e.trafficMetadataSealed,
    };
}
function L(e, t) {
    let n = (function (e, t) {
        if (e !== l.yW.QUEST_HOME_MOBILE_CAROUSEL || null == t) return null;
        let n = _.A.getAdDecisionByPlacementAndAdCreativeId(e, t);
        return null != n ? D(n) : null;
    })(e, t);
    if (null != n) return n;
    let { enableNewRequestBehavior: i } = o.A.getConfig({ location: "getQuestDeliveryDataForPlacement" }),
        a = s.A.questAdDecisionByPlacement.get(e);
    if (e === l.yW.QUEST_HOME_BANNER_DESKTOP && null != a) return D(a);
    if (i) return null == a ? null : D(a);
    {
        let t = s.A.questToDeliverForPlacement.get(e);
        return null == t
            ? null
            : {
                  questId: t.quest.id,
                  adCreativeId: t.quest.id,
                  adDecisionData: t.adDecisionData,
                  adContext: t.adContext,
                  metadataSealed: t.metadataSealed,
                  trafficMetadataRaw: t.trafficMetadataRaw,
                  trafficMetadataSealed: t.trafficMetadataSealed,
              };
    }
}
function p(e, t) {
    let n = R(t);
    if (null == n) return E.K3;
    let { adDecisionData: i, questId: a, adCreativeId: r } = L(n, e) ?? {};
    return null == i ? E.K3 : a === e || r === e || i.ad_id === e ? i : E.K3;
}
function m(e, t) {
    let n = R(e);
    if (null != n) return L(n, t)?.metadataSealed;
}
function h(e, t, n) {
    let i = R(e);
    if (null != i) {
        let { trafficMetadataRaw: e, questId: a } = L(i, n) ?? {};
        if (null != e && (null != n || a === t)) return e;
    }
    if (null != t) {
        let e = s.A.getQuest(t);
        return e?.trafficMetadataRaw;
    }
}
function g(e, t, n) {
    let i = R(e);
    if (null != i) {
        let { trafficMetadataSealed: e, questId: a } = L(i, n) ?? {};
        if (null != e && (null != n || a === t)) return e;
    }
    if (null != t) {
        let e = s.A.getQuest(t);
        return e?.trafficMetadataSealed;
    }
}
function b(e, t) {
    let n = R(e);
    if (null != n) return L(n, t)?.adContext;
}
function U(e, t) {
    r.A.captureException(e, { ...t, tags: { ...t?.tags, app_context: "quests" } });
}
function P() {
    return window.location.pathname.startsWith(d.BVt.QUEST_HOME_DEPRECATED);
}
