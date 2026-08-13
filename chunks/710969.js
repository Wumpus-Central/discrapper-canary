"use strict";
n.d(t, {
    GR: () => T,
    Gp: () => D,
    HN: () => S,
    Ic: () => I,
    Kc: () => O,
    L4: () => L,
    Oh: () => u,
    RF: () => v,
    ZG: () => m,
    gO: () => A,
    if: () => f,
    kd: () => h,
    v1: () => p,
    vZ: () => y,
    vc: () => _,
    vy: () => E,
    xn: () => N,
});
var i = n(665260),
    r = n(107195),
    a = n(773669),
    s = n(38405),
    l = n(265704),
    o = n(859703),
    d = n(24001),
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
    return Object.keys(c.TY).includes(d.uF[e]);
}
function A(e, t) {
    if (!E(t)) return !1;
    let n = d.uF[t];
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
    return null == e ? "" : new Date(e).toLocaleDateString(a.default.locale, t);
}
let g = {
    [d.uF.QUEST_BAR]: d.p9.DESKTOP_ACCOUNT_PANEL_AREA,
    [d.uF.QUEST_BAR_V2]: d.p9.DESKTOP_ACCOUNT_PANEL_AREA,
    [d.uF.QUEST_BAR_MOBILE]: d.p9.MOBILE_HOME_DOCK_AREA,
    [d.uF.QUEST_HOME_HERO]: d.p9.QUEST_HOME_BANNER_DESKTOP,
    [d.uF.QUEST_HOME_HERO_SHELF]: d.p9.QUEST_HOME_BANNER_DESKTOP,
    [d.uF.QUEST_HOME_MOBILE_CAROUSEL]: d.p9.QUEST_HOME_MOBILE_CAROUSEL,
    [d.uF.VIDEO_MODAL_MOBILE]: d.p9.VIDEO_MODAL_MOBILE,
};
function S(e) {
    return g[e];
}
function N(e) {
    let t = g[e];
    return null != t && c.J6.has(t);
}
function C(e) {
    return {
        questId: (0, r.Yz)(e.creative),
        adCreativeId: (0, r.K2)(e.creative),
        adDecisionData: e.adDecisionData,
        adContext: e.adContext,
        metadataSealed: e.metadataSealed,
        trafficMetadataSealed: e.trafficMetadataSealed,
    };
}
function R(e, t) {
    let n = (function (e, t) {
        if ((e !== d.p9.QUEST_HOME_MOBILE_CAROUSEL && e !== d.p9.VIDEO_MODAL_MOBILE) || null == t) return null;
        let n = l.A.getAdDecisionByPlacementAndAdCreativeId(e, t);
        return null != n ? C(n) : null;
    })(e, t);
    if (null != n) return n;
    let i = o.A.questAdDecisionByPlacement.get(e);
    return e === d.p9.QUEST_HOME_BANNER_DESKTOP && null != i ? C(i) : null == i ? null : C(i);
}
function O(e, t) {
    let n = g[t];
    if (null == n) return c.K3;
    let { adDecisionData: i, questId: r, adCreativeId: a } = R(n, e) ?? {};
    return null == i ? c.K3 : r === e || a === e || i.ad_id === e ? i : c.K3;
}
function L(e, t) {
    let n = g[e];
    if (null != n) return R(n, t)?.metadataSealed;
}
function D(e, t, n) {
    let i = g[e];
    if (null != i) {
        let { trafficMetadataSealed: e, questId: r } = R(i, n) ?? {};
        if (null != e && (null != n || r === t)) return e;
    }
    if (null != t) {
        let e = o.A.getQuest(t);
        return e?.trafficMetadataSealed;
    }
}
function y(e, t) {
    let n = g[e];
    if (null != n) return R(n, t)?.adContext;
}
function v(e, t) {
    s.A.captureException(e, { ...t, tags: { ...t?.tags, app_context: "quests" } });
}
