"use strict";
n.d(t, {
    Gp: () => N,
    HN: () => I,
    Ic: () => h,
    Kc: () => S,
    L4: () => C,
    Li: () => v,
    RF: () => O,
    ZG: () => E,
    gO: () => p,
    if: () => m,
    r$: () => D,
    t6: () => A,
    v1: () => g,
    vZ: () => R,
    vc: () => _,
    vy: () => f,
    xn: () => T,
    yI: () => b,
});
var r = n(665260),
    i = n(773669),
    a = n(728458),
    s = n(859703),
    o = n(341915),
    l = n(302654),
    u = n(654487),
    c = n(652215);
let d = 2592e6;
function _(e, t, n) {
    let r = Array.isArray(t) ? new Map(t.map((e) => [e.id, e])) : t,
        i = Array.isArray(n) ? new Map(n.map((e) => [e.id, e])) : n,
        a = r.get(e);
    if (null != a) return a;
    let s = i.get(e)?.replacementId;
    if (null != s) return r.get(s);
}
function f(e) {
    return Object.keys(u.TY).includes(o.uF[e]);
}
function p(e, t) {
    if (!f(t)) return !1;
    let n = o.uF[t];
    return (0, r.Lt)(e.dismissedQuestContent, u.TY[n]);
}
function h(e) {
    return new Date(e.config.expiresAt).valueOf() <= Date.now();
}
function m(e) {
    if (!h(e)) return !1;
    let t = Date.now() - d,
        n = new Date(e.config.expiresAt).valueOf();
    return null != e.config.expiresAt && !(n <= t);
}
function g(e) {
    let t = null,
        n = Date.now();
    for (let r of e) {
        let e = new Date(r.config.expiresAt).valueOf();
        !(e <= n) && (null == t || e < t) && (t = e);
    }
    return t;
}
function E(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : { dateStyle: "short" };
    return null == e ? "" : new Date(e).toLocaleDateString(i.default.locale, t);
}
function A(e, t, n) {
    let r = t.get(n);
    if (null == r) return;
    let i = e.get(r.quest.id);
    if (null != i && !h(i)) return i;
}
function I(e) {
    return {
        [o.uF.QUEST_BAR]: o.yW.DESKTOP_ACCOUNT_PANEL_AREA,
        [o.uF.QUEST_BAR_V2]: o.yW.DESKTOP_ACCOUNT_PANEL_AREA,
        [o.uF.QUEST_BAR_MOBILE]: o.yW.MOBILE_HOME_DOCK_AREA,
    }[e];
}
function T(e) {
    let t = I(e);
    return null != t && u.J6.has(t);
}
function y(e) {
    let { enableNewRequestBehavior: t } = l.A.getConfig({ location: "getQuestDeliveryDataForPlacement" });
    if (t) {
        let t = s.A.questAdDecisionByPlacement.get(e);
        return null == t
            ? null
            : {
                  questId: t.questId,
                  adDecisionData: t.adDecisionData,
                  adContext: t.adContext,
                  metadataRaw: t.metadataRaw,
                  metadataSealed: t.metadataSealed,
                  trafficMetadataRaw: t.trafficMetadataRaw,
                  trafficMetadataSealed: t.trafficMetadataSealed,
              };
    }
    {
        let t = s.A.questToDeliverForPlacement.get(e);
        return null == t
            ? null
            : {
                  questId: t.quest.id,
                  adDecisionData: t.adDecisionData,
                  adContext: t.adContext,
                  metadataRaw: t.metadataRaw,
                  metadataSealed: t.metadataSealed,
                  trafficMetadataRaw: t.trafficMetadataRaw,
                  trafficMetadataSealed: t.trafficMetadataSealed,
              };
    }
}
function S(e, t) {
    let n = I(t);
    if (null == n) return u.K3;
    let { adDecisionData: r, questId: i } = y(n) ?? {};
    return null != r && i === e ? r : u.K3;
}
function v(e) {
    let t = I(e);
    if (null != t) return y(t)?.metadataRaw;
}
function C(e) {
    let t = I(e);
    if (null != t) return y(t)?.metadataSealed;
}
function b(e, t) {
    let n = I(e);
    if (null == n) return;
    let { trafficMetadataRaw: r, questId: i } = y(n) ?? {};
    if (null != r && i === t) return r;
    if (null != t) {
        let e = s.A.getQuest(t);
        return e?.trafficMetadataRaw;
    }
}
function N(e, t) {
    let n = I(e);
    if (null == n) return;
    let { trafficMetadataSealed: r, questId: i } = y(n) ?? {};
    if (null != r && i === t) return r;
    if (null != t) {
        let e = s.A.getQuest(t);
        return e?.trafficMetadataSealed;
    }
}
function R(e) {
    let t = I(e);
    if (null != t) return y(t)?.adContext;
}
function O(e, t) {
    a.A.captureException(e, { ...t, tags: { ...t?.tags, app_context: "quests" } });
}
function D() {
    return window.location.pathname.startsWith(c.BVt.QUEST_HOME);
}
