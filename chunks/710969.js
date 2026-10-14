n.d(t, {
    GR: () => p,
    Gp: () => D,
    HN: () => g,
    Kc: () => R,
    L4: () => L,
    Oh: () => E,
    RF: () => b,
    ZG: () => T,
    gO: () => f,
    if: () => I,
    s9: () => y,
    vZ: () => v,
    vc: () => A,
    vy: () => h,
    xn: () => S,
});
var i = n(665260),
    r = n(157695),
    a = n(107195),
    s = n(773669),
    l = n(38405),
    o = n(265704),
    d = n(859703),
    c = n(738822),
    u = n(977416),
    _ = n(190107);
function E(e) {
    return null != e && e.fetchedAt + e.ttlMillis >= Date.now();
}
function A(e, t, n) {
    let i = Array.isArray(t) ? new Map(t.map((e) => [e.id, e])) : t,
        r = Array.isArray(n) ? new Map(n.map((e) => [e.id, e])) : n,
        a = i.get(e);
    if (null != a) return a;
    let s = r.get(e)?.replacementId;
    if (null != s) return i.get(s);
}
function h(e) {
    return Object.keys(_.TY).includes(c.uF[e]);
}
function f(e, t) {
    if (!h(t)) return !1;
    let n = c.uF[t];
    return (0, i.Lt)(e.dismissedQuestContent, _.TY[n]);
}
function I(e) {
    if (!(0, u.Ic)(e)) return !1;
    let t = Date.now() - 2592e6,
        n = new Date(e.config.expiresAt).valueOf();
    return null != e.config.expiresAt && !(n <= t);
}
function p(e) {
    return null != e && null != e.completedAt && null == e.claimedAt;
}
function T(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : { dateStyle: "short" };
    return null == e ? "" : new Date(e).toLocaleDateString(s.default.locale, t);
}
let m = {
    [c.uF.QUEST_BAR]: c.p9.DESKTOP_ACCOUNT_PANEL_AREA,
    [c.uF.QUEST_BAR_V2]: c.p9.DESKTOP_ACCOUNT_PANEL_AREA,
    [c.uF.QUEST_BAR_MOBILE]: c.p9.MOBILE_HOME_DOCK_AREA,
    [c.uF.QUEST_HOME_HERO]: c.p9.QUEST_HOME_BANNER_DESKTOP,
    [c.uF.QUEST_HOME_HERO_SHELF]: c.p9.QUEST_HOME_BANNER_DESKTOP,
    [c.uF.QUEST_HOME_HERO_BANNER]: c.p9.QUEST_HOME_BANNER_DESKTOP,
    [c.uF.VIDEO_MODAL_MOBILE]: c.p9.VIDEO_MODAL_MOBILE,
};
function g(e) {
    return m[e];
}
function S(e, t) {
    if (null != t && _.cY.has(t)) return !1;
    let n = m[e];
    return null != n && _.J6.has(n);
}
function N(e) {
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
let C = new Set([c.p9.VIDEO_MODAL_MOBILE]);
function O(e, t) {
    let n = (function (e, t) {
        if (!C.has(e) || null == t) return null;
        let n = o.A.getAdDecisionByPlacementAndAdCreativeId(e, t);
        return null != n ? N(n) : null;
    })(e, t);
    if (null != n) return n;
    let i = r.A.deliveryAdDecisionByPlacement.get(e);
    return e === c.p9.QUEST_HOME_BANNER_DESKTOP && null != i ? N(i) : null == i ? null : N(i);
}
function R(e, t) {
    let n = m[t];
    if (null == n) return _.K3;
    let { adDecisionData: i, questId: r, adCreativeId: a } = O(n, e) ?? {};
    return null != i && (r === e || a === e || i.ad_id === e) ? i : _.K3;
}
function L(e, t) {
    let n = m[e];
    if (null != n) return O(n, t)?.metadataSealed;
}
function y(e, t) {
    let n = m[e];
    if (null != n) return O(n, t)?.provenanceMetadataSealed;
}
function D(e, t, n) {
    let i = m[e];
    if (null != i) {
        let { trafficMetadataSealed: e, questId: r } = O(i, n) ?? {};
        if (null != e && (null != n || r === t)) return e;
    }
    if (null != t) {
        let e = d.A.getQuest(t);
        return e?.trafficMetadataSealed;
    }
}
function v(e, t) {
    let n = m[e];
    if (null != n) return O(n, t)?.adContext;
}
function b(e, t) {
    l.A.captureException(e, { ...t, tags: { ...t?.tags, app_context: "quests" } });
}
