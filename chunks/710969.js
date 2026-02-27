"use strict";
n.d(t, {
    Gp: () => b,
    HN: () => I,
    Ic: () => h,
    Kc: () => y,
    L4: () => N,
    Li: () => v,
    RF: () => O,
    ZG: () => g,
    gO: () => p,
    if: () => m,
    r$: () => D,
    t6: () => A,
    v1: () => E,
    vZ: () => R,
    vc: () => _,
    vy: () => f,
    xn: () => T,
    yI: () => C,
});
var r = n(665260),
    i = n(773669),
    s = n(728458),
    a = n(859703),
    o = n(341915),
    l = n(302654),
    u = n(654487),
    c = n(652215);
let d = 2592e6;
function _(e, t, n) {
    let r = Array.isArray(t) ? new Map(t.map((e) => [e.id, e])) : t,
        i = Array.isArray(n) ? new Map(n.map((e) => [e.id, e])) : n,
        s = r.get(e);
    if (null != s) return s;
    let a = i.get(e)?.replacementId;
    if (null != a) return r.get(a);
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
function E(e) {
    let t = null,
        n = Date.now();
    for (let r of e) {
        let e = new Date(r.config.expiresAt).valueOf();
        !(e <= n) && (null == t || e < t) && (t = e);
    }
    return t;
}
function g(e) {
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
function S(e) {
    let { enableNewRequestBehavior: t } = l.A.getConfig({ location: "getQuestDeliveryDataForPlacement" });
    if (t) {
        let t = a.A.questAdDecisionByPlacement.get(e);
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
        let t = a.A.questToDeliverForPlacement.get(e);
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
function y(e, t) {
    let n = I(t);
    if (null == n) return u.K3;
    let { adDecisionData: r, questId: i } = S(n) ?? {};
    return null != r && i === e ? r : u.K3;
}
function v(e) {
    let t = I(e);
    if (null != t) return S(t)?.metadataRaw;
}
function N(e) {
    let t = I(e);
    if (null != t) return S(t)?.metadataSealed;
}
function C(e, t) {
    let n = I(e);
    if (null != n) {
        let { trafficMetadataRaw: e, questId: r } = S(n) ?? {};
        if (null != e && r === t) return e;
    }
    if (null != t) {
        let e = a.A.getQuest(t);
        return e?.trafficMetadataRaw;
    }
}
function b(e, t) {
    let n = I(e);
    if (null != n) {
        let { trafficMetadataSealed: e, questId: r } = S(n) ?? {};
        if (null != e && r === t) return e;
    }
    if (null != t) {
        let e = a.A.getQuest(t);
        return e?.trafficMetadataSealed;
    }
}
function R(e) {
    let t = I(e);
    if (null != t) return S(t)?.adContext;
}
function O(e, t) {
    s.A.captureException(e, { ...t, tags: { ...t?.tags, app_context: "quests" } });
}
function D() {
    return window.location.pathname.startsWith(c.BVt.QUEST_HOME_DEPRECATED);
}
