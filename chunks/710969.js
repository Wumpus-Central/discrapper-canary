n.d(t, {
    Gp: () => D,
    HN: () => p,
    Ic: () => T,
    Kc: () => R,
    L4: () => g,
    Oh: () => E,
    RF: () => M,
    ZG: () => N,
    gO: () => I,
    if: () => h,
    r$: () => P,
    t6: () => f,
    v1: () => S,
    vZ: () => b,
    vc: () => u,
    vy: () => A,
    xn: () => m,
    yI: () => L,
});
var i = n(665260),
    a = n(773669),
    r = n(38405),
    s = n(265704),
    l = n(859703),
    o = n(507107),
    d = n(302654),
    c = n(654487),
    _ = n(652215);
function E(e) {
    return null != e && e.fetchedAt + e.ttlMillis >= Date.now();
}
function u(e, t, n) {
    let i = Array.isArray(t) ? new Map(t.map((e) => [e.id, e])) : t,
        a = Array.isArray(n) ? new Map(n.map((e) => [e.id, e])) : n,
        r = i.get(e);
    if (null != r) return r;
    let s = a.get(e)?.replacementId;
    if (null != s) return i.get(s);
}
function A(e) {
    return Object.keys(c.TY).includes(o.uF[e]);
}
function I(e, t) {
    if (!A(t)) return !1;
    let n = o.uF[t];
    return (0, i.Lt)(e.dismissedQuestContent, c.TY[n]);
}
function T(e) {
    return new Date(e.config.expiresAt).valueOf() <= Date.now();
}
function h(e) {
    if (!T(e)) return !1;
    let t = Date.now() - 2592e6,
        n = new Date(e.config.expiresAt).valueOf();
    return null != e.config.expiresAt && !(n <= t);
}
function S(e) {
    let t = null,
        n = Date.now();
    for (let i of e) {
        let e = new Date(i.config.expiresAt).valueOf();
        !(e <= n) && (null == t || e < t) && (t = e);
    }
    return t;
}
function N(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : { dateStyle: "short" };
    return null == e ? "" : new Date(e).toLocaleDateString(a.default.locale, t);
}
function f(e, t, n) {
    let i = t.get(n);
    if (null == i) return;
    let a = e.get(i.quest.id);
    if (null != a && !T(a)) return a;
}
function p(e) {
    return {
        [o.uF.QUEST_BAR]: o.yW.DESKTOP_ACCOUNT_PANEL_AREA,
        [o.uF.QUEST_BAR_V2]: o.yW.DESKTOP_ACCOUNT_PANEL_AREA,
        [o.uF.QUEST_BAR_MOBILE]: o.yW.MOBILE_HOME_DOCK_AREA,
        [o.uF.QUEST_HOME_HERO]: o.yW.QUEST_HOME_BANNER_DESKTOP,
        [o.uF.QUEST_HOME_MOBILE_CAROUSEL]: o.yW.QUEST_HOME_MOBILE_CAROUSEL,
    }[e];
}
function m(e) {
    let t = p(e);
    return null != t && c.J6.has(t);
}
function O(e) {
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
function C(e, t) {
    let n = (function (e, t) {
        if (e !== o.yW.QUEST_HOME_MOBILE_CAROUSEL || null == t) return null;
        let n = s.A.getAdDecisionByPlacementAndAdCreativeId(e, t);
        return null != n ? O(n) : null;
    })(e, t);
    if (null != n) return n;
    let { enableNewRequestBehavior: i } = d.A.getConfig({ location: "getQuestDeliveryDataForPlacement" }),
        a = l.A.questAdDecisionByPlacement.get(e);
    if (e === o.yW.QUEST_HOME_BANNER_DESKTOP && null != a) return O(a);
    if (i) return null == a ? null : O(a);
    {
        let t = l.A.questToDeliverForPlacement.get(e);
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
function R(e, t) {
    let n = p(t);
    if (null == n) return c.K3;
    let { adDecisionData: i, questId: a, adCreativeId: r } = C(n, e) ?? {};
    return null == i ? c.K3 : a === e || r === e || i.ad_id === e ? i : c.K3;
}
function g(e, t) {
    let n = p(e);
    if (null != n) return C(n, t)?.metadataSealed;
}
function L(e, t, n) {
    let i = p(e);
    if (null != i) {
        let { trafficMetadataRaw: e, questId: a } = C(i, n) ?? {};
        if (null != e && (null != n || a === t)) return e;
    }
    if (null != t) {
        let e = l.A.getQuest(t);
        return e?.trafficMetadataRaw;
    }
}
function D(e, t, n) {
    let i = p(e);
    if (null != i) {
        let { trafficMetadataSealed: e, questId: a } = C(i, n) ?? {};
        if (null != e && (null != n || a === t)) return e;
    }
    if (null != t) {
        let e = l.A.getQuest(t);
        return e?.trafficMetadataSealed;
    }
}
function b(e, t) {
    let n = p(e);
    if (null != n) return C(n, t)?.adContext;
}
function M(e, t) {
    r.A.captureException(e, { ...t, tags: { ...t?.tags, app_context: "quests" } });
}
function P() {
    return window.location.pathname.startsWith(_.BVt.QUEST_HOME_DEPRECATED);
}
