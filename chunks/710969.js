n.d(t, {
    GR: () => m,
    Gp: () => v,
    HN: () => N,
    Ic: () => f,
    Kc: () => L,
    L4: () => y,
    Oh: () => _,
    RF: () => M,
    ZG: () => g,
    gO: () => h,
    if: () => p,
    kd: () => I,
    s9: () => D,
    v1: () => T,
    vZ: () => b,
    vc: () => E,
    vy: () => A,
    xn: () => C,
});
var i = n(665260),
    r = n(157695),
    a = n(107195),
    s = n(773669),
    l = n(38405),
    o = n(265704),
    d = n(859703),
    c = n(738822),
    u = n(190107);
function _(e) {
    return null != e && e.fetchedAt + e.ttlMillis >= Date.now();
}
function E(e, t, n) {
    let i = Array.isArray(t) ? new Map(t.map((e) => [e.id, e])) : t,
        r = Array.isArray(n) ? new Map(n.map((e) => [e.id, e])) : n,
        a = i.get(e);
    if (null != a) return a;
    let s = r.get(e)?.replacementId;
    if (null != s) return i.get(s);
}
function A(e) {
    return Object.keys(u.TY).includes(c.uF[e]);
}
function h(e, t) {
    if (!A(t)) return !1;
    let n = c.uF[t];
    return (0, i.Lt)(e.dismissedQuestContent, u.TY[n]);
}
function I(e) {
    return new Date(e.expiresAt).valueOf() <= Date.now();
}
function f(e) {
    return I(e.config);
}
function p(e) {
    if (!f(e)) return !1;
    let t = Date.now() - 2592e6,
        n = new Date(e.config.expiresAt).valueOf();
    return null != e.config.expiresAt && !(n <= t);
}
function T(e) {
    let t = null,
        n = Date.now();
    for (let i of e) {
        let e = new Date(i.config.expiresAt).valueOf();
        !(e <= n) && (null == t || e < t) && (t = e);
    }
    return t;
}
function m(e) {
    return null != e && null != e.completedAt && null == e.claimedAt;
}
function g(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : { dateStyle: "short" };
    return null == e ? "" : new Date(e).toLocaleDateString(s.default.locale, t);
}
let S = {
    [c.uF.QUEST_BAR]: c.p9.DESKTOP_ACCOUNT_PANEL_AREA,
    [c.uF.QUEST_BAR_V2]: c.p9.DESKTOP_ACCOUNT_PANEL_AREA,
    [c.uF.QUEST_BAR_MOBILE]: c.p9.MOBILE_HOME_DOCK_AREA,
    [c.uF.QUEST_HOME_HERO]: c.p9.QUEST_HOME_BANNER_DESKTOP,
    [c.uF.QUEST_HOME_HERO_SHELF]: c.p9.QUEST_HOME_BANNER_DESKTOP,
    [c.uF.QUEST_HOME_MOBILE_CAROUSEL]: c.p9.QUEST_HOME_MOBILE_CAROUSEL,
    [c.uF.VIDEO_MODAL_MOBILE]: c.p9.VIDEO_MODAL_MOBILE,
};
function N(e) {
    return S[e];
}
function C(e) {
    let t = S[e];
    return null != t && u.J6.has(t);
}
function O(e) {
    return {
        questId: (0, a.Yz)(e.creative),
        adCreativeId: (0, a.K2)(e.creative),
        adDecisionData: e.adDecisionData,
        adContext: e.adContext,
        metadataSealed: e.metadataSealed,
        trafficMetadataSealed: e.trafficMetadataSealed,
        provenanceMetadataSealed: e.provenanceMetadataSealed,
    };
}
function R(e, t) {
    let n = (function (e, t) {
        if ((e !== c.p9.QUEST_HOME_MOBILE_CAROUSEL && e !== c.p9.VIDEO_MODAL_MOBILE) || null == t) return null;
        let n = o.A.getAdDecisionByPlacementAndAdCreativeId(e, t);
        return null != n ? O(n) : null;
    })(e, t);
    if (null != n) return n;
    let i = r.A.deliveryAdDecisionByPlacement.get(e);
    return e === c.p9.QUEST_HOME_BANNER_DESKTOP && null != i ? O(i) : null == i ? null : O(i);
}
function L(e, t) {
    let n = S[t];
    if (null == n) return u.K3;
    let { adDecisionData: i, questId: r, adCreativeId: a } = R(n, e) ?? {};
    return null == i ? u.K3 : r === e || a === e || i.ad_id === e ? i : u.K3;
}
function y(e, t) {
    let n = S[e];
    if (null != n) return R(n, t)?.metadataSealed;
}
function D(e, t) {
    let n = S[e];
    if (null != n) return R(n, t)?.provenanceMetadataSealed;
}
function v(e, t, n) {
    let i = S[e];
    if (null != i) {
        let { trafficMetadataSealed: e, questId: r } = R(i, n) ?? {};
        if (null != e && (null != n || r === t)) return e;
    }
    if (null != t) {
        let e = d.A.getQuest(t);
        return e?.trafficMetadataSealed;
    }
}
function b(e, t) {
    let n = S[e];
    if (null != n) return R(n, t)?.adContext;
}
function M(e, t) {
    l.A.captureException(e, { ...t, tags: { ...t?.tags, app_context: "quests" } });
}
