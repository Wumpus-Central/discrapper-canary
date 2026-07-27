"use strict";
n.d(t, {
    GR: () => T,
    Gp: () => D,
    HN: () => N,
    Ic: () => I,
    Kc: () => L,
    L4: () => y,
    Oh: () => u,
    RF: () => b,
    ZG: () => m,
    gO: () => A,
    if: () => f,
    kd: () => h,
    t6: () => g,
    v1: () => p,
    vZ: () => v,
    vc: () => _,
    vy: () => E,
    xn: () => C,
});
var i = n(665260),
    r = n(773669),
    a = n(38405),
    s = n(265704),
    l = n(859703),
    o = n(24001),
    d = n(302654),
    c = n(190107);
function u(e) {
    return null != e && e.fetchedAt + e.ttlMillis >= Date.now();
}
function _(e, t, n) {
    let i = Array.isArray(t) ? new Map(t.map((e) => [e.id, e])) : t,
        r = Array.isArray(n) ? new Map(n.map((e) => [e.id, e])) : n,
        a = i.get(e);
    if (null != a) return a;
    let s = r.get(e)?.replacementId;
    if (null != s) return i.get(s);
}
function E(e) {
    return Object.keys(c.TY).includes(o.uF[e]);
}
function A(e, t) {
    if (!E(t)) return !1;
    let n = o.uF[t];
    return (0, i.Lt)(e.dismissedQuestContent, c.TY[n]);
}
function h(e) {
    return new Date(e.expiresAt).valueOf() <= Date.now();
}
function I(e) {
    return h(e.config);
}
function f(e) {
    if (!I(e)) return !1;
    let t = Date.now() - 2592e6,
        n = new Date(e.config.expiresAt).valueOf();
    return null != e.config.expiresAt && !(n <= t);
}
function p(e) {
    let t = null,
        n = Date.now();
    for (let i of e) {
        let e = new Date(i.config.expiresAt).valueOf();
        !(e <= n) && (null == t || e < t) && (t = e);
    }
    return t;
}
function T(e) {
    return null != e && null != e.completedAt && null == e.claimedAt;
}
function m(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : { dateStyle: "short" };
    return null == e ? "" : new Date(e).toLocaleDateString(r.default.locale, t);
}
function g(e, t, n) {
    let i = t.get(n);
    if (null == i) return;
    let r = e.get(i.quest.id);
    if (null != r && !I(r)) return r;
}
let S = {
    [o.uF.QUEST_BAR]: o.p9.DESKTOP_ACCOUNT_PANEL_AREA,
    [o.uF.QUEST_BAR_V2]: o.p9.DESKTOP_ACCOUNT_PANEL_AREA,
    [o.uF.QUEST_BAR_MOBILE]: o.p9.MOBILE_HOME_DOCK_AREA,
    [o.uF.QUEST_HOME_HERO]: o.p9.QUEST_HOME_BANNER_DESKTOP,
    [o.uF.QUEST_HOME_HERO_SHELF]: o.p9.QUEST_HOME_BANNER_DESKTOP,
    [o.uF.QUEST_HOME_MOBILE_CAROUSEL]: o.p9.QUEST_HOME_MOBILE_CAROUSEL,
    [o.uF.VIDEO_MODAL_MOBILE]: o.p9.VIDEO_MODAL_MOBILE,
};
function N(e) {
    return S[e];
}
function C(e) {
    let t = S[e];
    return null != t && c.J6.has(t);
}
function O(e) {
    return {
        questId: e.questId,
        adCreativeId: e.adCreativeId,
        adDecisionData: e.adDecisionData,
        adContext: e.adContext,
        metadataSealed: e.metadataSealed,
        trafficMetadataSealed: e.trafficMetadataSealed,
    };
}
function R(e, t) {
    let n = (function (e, t) {
        if ((e !== o.p9.QUEST_HOME_MOBILE_CAROUSEL && e !== o.p9.VIDEO_MODAL_MOBILE) || null == t) return null;
        let n = s.A.getAdDecisionByPlacementAndAdCreativeId(e, t);
        return null != n ? O(n) : null;
    })(e, t);
    if (null != n) return n;
    let { enableNewRequestBehavior: i } = d.A.getConfig({ location: "getQuestDeliveryDataForPlacement" }),
        r = l.A.questAdDecisionByPlacement.get(e);
    if (e === o.p9.QUEST_HOME_BANNER_DESKTOP && null != r) return O(r);
    if (i) return null == r ? null : O(r);
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
                  trafficMetadataSealed: t.trafficMetadataSealed,
              };
    }
}
function L(e, t) {
    let n = S[t];
    if (null == n) return c.K3;
    let { adDecisionData: i, questId: r, adCreativeId: a } = R(n, e) ?? {};
    return null == i ? c.K3 : r === e || a === e || i.ad_id === e ? i : c.K3;
}
function y(e, t) {
    let n = S[e];
    if (null != n) return R(n, t)?.metadataSealed;
}
function D(e, t, n) {
    let i = S[e];
    if (null != i) {
        let { trafficMetadataSealed: e, questId: r } = R(i, n) ?? {};
        if (null != e && (null != n || r === t)) return e;
    }
    if (null != t) {
        let e = l.A.getQuest(t);
        return e?.trafficMetadataSealed;
    }
}
function v(e, t) {
    let n = S[e];
    if (null != n) return R(n, t)?.adContext;
}
function b(e, t) {
    a.A.captureException(e, { ...t, tags: { ...t?.tags, app_context: "quests" } });
}
