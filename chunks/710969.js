"use strict";
n.d(t, {
    GR: () => p,
    Gp: () => L,
    HN: () => g,
    Ic: () => h,
    Kc: () => O,
    L4: () => R,
    Oh: () => c,
    RF: () => y,
    ZG: () => T,
    gO: () => E,
    if: () => I,
    kd: () => A,
    v1: () => f,
    vZ: () => D,
    vc: () => u,
    vy: () => _,
    xn: () => S,
});
var i = n(665260),
    r = n(773669),
    a = n(38405),
    s = n(265704),
    l = n(859703),
    o = n(24001),
    d = n(190107);
function c(e) {
    return null != e && e.fetchedAt + e.ttlMillis >= Date.now();
}
function u(e, t, n) {
    let i = Array.isArray(t) ? new Map(t.map((e) => [e.id, e])) : t,
        r = Array.isArray(n) ? new Map(n.map((e) => [e.id, e])) : n,
        a = i.get(e);
    if (null != a) return a;
    let s = r.get(e)?.replacementId;
    if (null != s) return i.get(s);
}
function _(e) {
    return Object.keys(d.TY).includes(o.uF[e]);
}
function E(e, t) {
    if (!_(t)) return !1;
    let n = o.uF[t];
    return (0, i.Lt)(e.dismissedQuestContent, d.TY[n]);
}
function A(e) {
    return new Date(e.expiresAt).valueOf() <= Date.now();
}
function h(e) {
    return A(e.config);
}
function I(e) {
    if (!h(e)) return !1;
    let t = Date.now() - 2592e6,
        n = new Date(e.config.expiresAt).valueOf();
    return null != e.config.expiresAt && !(n <= t);
}
function f(e) {
    let t = null,
        n = Date.now();
    for (let i of e) {
        let e = new Date(i.config.expiresAt).valueOf();
        !(e <= n) && (null == t || e < t) && (t = e);
    }
    return t;
}
function p(e) {
    return null != e && null != e.completedAt && null == e.claimedAt;
}
function T(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : { dateStyle: "short" };
    return null == e ? "" : new Date(e).toLocaleDateString(r.default.locale, t);
}
let m = {
    [o.uF.QUEST_BAR]: o.p9.DESKTOP_ACCOUNT_PANEL_AREA,
    [o.uF.QUEST_BAR_V2]: o.p9.DESKTOP_ACCOUNT_PANEL_AREA,
    [o.uF.QUEST_BAR_MOBILE]: o.p9.MOBILE_HOME_DOCK_AREA,
    [o.uF.QUEST_HOME_HERO]: o.p9.QUEST_HOME_BANNER_DESKTOP,
    [o.uF.QUEST_HOME_HERO_SHELF]: o.p9.QUEST_HOME_BANNER_DESKTOP,
    [o.uF.QUEST_HOME_MOBILE_CAROUSEL]: o.p9.QUEST_HOME_MOBILE_CAROUSEL,
    [o.uF.VIDEO_MODAL_MOBILE]: o.p9.VIDEO_MODAL_MOBILE,
};
function g(e) {
    return m[e];
}
function S(e) {
    let t = m[e];
    return null != t && d.J6.has(t);
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
function C(e, t) {
    let n = (function (e, t) {
        if ((e !== o.p9.QUEST_HOME_MOBILE_CAROUSEL && e !== o.p9.VIDEO_MODAL_MOBILE) || null == t) return null;
        let n = s.A.getAdDecisionByPlacementAndAdCreativeId(e, t);
        return null != n ? N(n) : null;
    })(e, t);
    if (null != n) return n;
    let i = l.A.questAdDecisionByPlacement.get(e);
    return e === o.p9.QUEST_HOME_BANNER_DESKTOP && null != i ? N(i) : null == i ? null : N(i);
}
function O(e, t) {
    let n = m[t];
    if (null == n) return d.K3;
    let { adDecisionData: i, questId: r, adCreativeId: a } = C(n, e) ?? {};
    return null == i ? d.K3 : r === e || a === e || i.ad_id === e ? i : d.K3;
}
function R(e, t) {
    let n = m[e];
    if (null != n) return C(n, t)?.metadataSealed;
}
function L(e, t, n) {
    let i = m[e];
    if (null != i) {
        let { trafficMetadataSealed: e, questId: r } = C(i, n) ?? {};
        if (null != e && (null != n || r === t)) return e;
    }
    if (null != t) {
        let e = l.A.getQuest(t);
        return e?.trafficMetadataSealed;
    }
}
function D(e, t) {
    let n = m[e];
    if (null != n) return C(n, t)?.adContext;
}
function y(e, t) {
    a.A.captureException(e, { ...t, tags: { ...t?.tags, app_context: "quests" } });
}
