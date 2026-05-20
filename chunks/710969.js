"use strict";
n.d(t, {
    Gp: () => O,
    HN: () => T,
    Ic: () => E,
    Kc: () => C,
    L4: () => v,
    Oh: () => _,
    RF: () => b,
    ZG: () => A,
    gO: () => p,
    if: () => m,
    r$: () => D,
    t6: () => I,
    v1: () => g,
    vZ: () => R,
    vc: () => f,
    vy: () => h,
    xn: () => S,
});
var i = n(665260),
    r = n(773669),
    s = n(38405),
    a = n(265704),
    o = n(859703),
    l = n(507107),
    u = n(302654),
    c = n(190107),
    d = n(652215);
function _(e) {
    return null != e && e.fetchedAt + e.ttlMillis >= Date.now();
}
function f(e, t, n) {
    let i = Array.isArray(t) ? new Map(t.map((e) => [e.id, e])) : t,
        r = Array.isArray(n) ? new Map(n.map((e) => [e.id, e])) : n,
        s = i.get(e);
    if (null != s) return s;
    let a = r.get(e)?.replacementId;
    if (null != a) return i.get(a);
}
function h(e) {
    return Object.keys(c.TY).includes(l.uF[e]);
}
function p(e, t) {
    if (!h(t)) return !1;
    let n = l.uF[t];
    return (0, i.Lt)(e.dismissedQuestContent, c.TY[n]);
}
function E(e) {
    return new Date(e.config.expiresAt).valueOf() <= Date.now();
}
function m(e) {
    if (!E(e)) return !1;
    let t = Date.now() - 2592e6,
        n = new Date(e.config.expiresAt).valueOf();
    return null != e.config.expiresAt && !(n <= t);
}
function g(e) {
    let t = null,
        n = Date.now();
    for (let i of e) {
        let e = new Date(i.config.expiresAt).valueOf();
        !(e <= n) && (null == t || e < t) && (t = e);
    }
    return t;
}
function A(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : { dateStyle: "short" };
    return null == e ? "" : new Date(e).toLocaleDateString(r.default.locale, t);
}
function I(e, t, n) {
    let i = t.get(n);
    if (null == i) return;
    let r = e.get(i.quest.id);
    if (null != r && !E(r)) return r;
}
function T(e) {
    return {
        [l.uF.QUEST_BAR]: l.yW.DESKTOP_ACCOUNT_PANEL_AREA,
        [l.uF.QUEST_BAR_V2]: l.yW.DESKTOP_ACCOUNT_PANEL_AREA,
        [l.uF.QUEST_BAR_MOBILE]: l.yW.MOBILE_HOME_DOCK_AREA,
        [l.uF.QUEST_HOME_HERO]: l.yW.QUEST_HOME_BANNER_DESKTOP,
        [l.uF.QUEST_HOME_HERO_SHELF]: l.yW.QUEST_HOME_BANNER_DESKTOP,
        [l.uF.QUEST_HOME_MOBILE_CAROUSEL]: l.yW.QUEST_HOME_MOBILE_CAROUSEL,
    }[e];
}
function S(e) {
    let t = T(e);
    return null != t && c.J6.has(t);
}
function N(e) {
    return {
        questId: e.questId,
        adCreativeId: e.adCreativeId,
        adDecisionData: e.adDecisionData,
        adContext: e.adContext,
        metadataSealed: e.metadataSealed,
        trafficMetadataSealed: e.trafficMetadataSealed,
    };
}
function y(e, t) {
    let n = (function (e, t) {
        if (e !== l.yW.QUEST_HOME_MOBILE_CAROUSEL || null == t) return null;
        let n = a.A.getAdDecisionByPlacementAndAdCreativeId(e, t);
        return null != n ? N(n) : null;
    })(e, t);
    if (null != n) return n;
    let { enableNewRequestBehavior: i } = u.A.getConfig({ location: "getQuestDeliveryDataForPlacement" }),
        r = o.A.questAdDecisionByPlacement.get(e);
    if (e === l.yW.QUEST_HOME_BANNER_DESKTOP && null != r) return N(r);
    if (i) return null == r ? null : N(r);
    {
        let t = o.A.questToDeliverForPlacement.get(e);
        return null == t
            ? null
            : {
                  questId: t.quest.id,
                  adCreativeId: t.quest.id,
                  adDecisionData: t.adDecisionData,
                  adContext: t.adContext,
                  metadataSealed: t.metadataSealed,
                  trafficMetadataSealed: t.trafficMetadataSealed,
              };
    }
}
function C(e, t) {
    let n = T(t);
    if (null == n) return c.K3;
    let { adDecisionData: i, questId: r, adCreativeId: s } = y(n, e) ?? {};
    return null == i ? c.K3 : r === e || s === e || i.ad_id === e ? i : c.K3;
}
function v(e, t) {
    let n = T(e);
    if (null != n) return y(n, t)?.metadataSealed;
}
function O(e, t, n) {
    let i = T(e);
    if (null != i) {
        let { trafficMetadataSealed: e, questId: r } = y(i, n) ?? {};
        if (null != e && (null != n || r === t)) return e;
    }
    if (null != t) {
        let e = o.A.getQuest(t);
        return e?.trafficMetadataSealed;
    }
}
function R(e, t) {
    let n = T(e);
    if (null != n) return y(n, t)?.adContext;
}
function b(e, t) {
    s.A.captureException(e, { ...t, tags: { ...t?.tags, app_context: "quests" } });
}
function D() {
    return window.location.pathname.startsWith(d.BVt.QUEST_HOME_DEPRECATED);
}
