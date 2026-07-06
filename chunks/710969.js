"use strict";
n.d(t, {
    GR: () => A,
    Gp: () => v,
    HN: () => S,
    Ic: () => p,
    Kc: () => O,
    L4: () => R,
    Oh: () => d,
    RF: () => L,
    ZG: () => I,
    gO: () => f,
    if: () => m,
    kd: () => E,
    t6: () => T,
    v1: () => g,
    vZ: () => b,
    vc: () => _,
    vy: () => h,
    xn: () => N,
});
var i = n(665260),
    r = n(773669),
    s = n(38405),
    a = n(265704),
    o = n(859703),
    l = n(24001),
    u = n(302654),
    c = n(190107);
function d(e) {
    return null != e && e.fetchedAt + e.ttlMillis >= Date.now();
}
function _(e, t, n) {
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
function f(e, t) {
    if (!h(t)) return !1;
    let n = l.uF[t];
    return (0, i.Lt)(e.dismissedQuestContent, c.TY[n]);
}
function E(e) {
    return new Date(e.expiresAt).valueOf() <= Date.now();
}
function p(e) {
    return E(e.config);
}
function m(e) {
    if (!p(e)) return !1;
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
    return null != e && null != e.completedAt && null == e.claimedAt;
}
function I(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : { dateStyle: "short" };
    return null == e ? "" : new Date(e).toLocaleDateString(r.default.locale, t);
}
function T(e, t, n) {
    let i = t.get(n);
    if (null == i) return;
    let r = e.get(i.quest.id);
    if (null != r && !p(r)) return r;
}
function S(e) {
    return {
        [l.uF.QUEST_BAR]: l.p9.DESKTOP_ACCOUNT_PANEL_AREA,
        [l.uF.QUEST_BAR_V2]: l.p9.DESKTOP_ACCOUNT_PANEL_AREA,
        [l.uF.QUEST_BAR_MOBILE]: l.p9.MOBILE_HOME_DOCK_AREA,
        [l.uF.QUEST_HOME_HERO]: l.p9.QUEST_HOME_BANNER_DESKTOP,
        [l.uF.QUEST_HOME_HERO_SHELF]: l.p9.QUEST_HOME_BANNER_DESKTOP,
        [l.uF.QUEST_HOME_MOBILE_CAROUSEL]: l.p9.QUEST_HOME_MOBILE_CAROUSEL,
        [l.uF.VIDEO_MODAL_MOBILE]: l.p9.VIDEO_MODAL_MOBILE,
    }[e];
}
function N(e) {
    let t = S(e);
    return null != t && c.J6.has(t);
}
function C(e) {
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
        if ((e !== l.p9.QUEST_HOME_MOBILE_CAROUSEL && e !== l.p9.VIDEO_MODAL_MOBILE) || null == t) return null;
        let n = a.A.getAdDecisionByPlacementAndAdCreativeId(e, t);
        return null != n ? C(n) : null;
    })(e, t);
    if (null != n) return n;
    let { enableNewRequestBehavior: i } = u.A.getConfig({ location: "getQuestDeliveryDataForPlacement" }),
        r = o.A.questAdDecisionByPlacement.get(e);
    if (e === l.p9.QUEST_HOME_BANNER_DESKTOP && null != r) return C(r);
    if (i) return null == r ? null : C(r);
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
function O(e, t) {
    let n = S(t);
    if (null == n) return c.K3;
    let { adDecisionData: i, questId: r, adCreativeId: s } = y(n, e) ?? {};
    return null == i ? c.K3 : r === e || s === e || i.ad_id === e ? i : c.K3;
}
function R(e, t) {
    let n = S(e);
    if (null != n) return y(n, t)?.metadataSealed;
}
function v(e, t, n) {
    let i = S(e);
    if (null != i) {
        let { trafficMetadataSealed: e, questId: r } = y(i, n) ?? {};
        if (null != e && (null != n || r === t)) return e;
    }
    if (null != t) {
        let e = o.A.getQuest(t);
        return e?.trafficMetadataSealed;
    }
}
function b(e, t) {
    let n = S(e);
    if (null != n) return y(n, t)?.adContext;
}
function L(e, t) {
    s.A.captureException(e, { ...t, tags: { ...t?.tags, app_context: "quests" } });
}
