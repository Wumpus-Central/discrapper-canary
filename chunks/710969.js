n.d(t, {
    Gp: () => D,
    HN: () => R,
    Ic: () => A,
    Kc: () => p,
    L4: () => m,
    Oh: () => d,
    RF: () => g,
    ZG: () => N,
    gO: () => I,
    if: () => T,
    r$: () => b,
    t6: () => O,
    v1: () => S,
    vZ: () => h,
    vc: () => c,
    vy: () => u,
    xn: () => f,
    yI: () => L,
});
var i = n(665260),
    r = n(773669),
    a = n(38405),
    s = n(859703),
    _ = n(507107),
    l = n(302654),
    o = n(654487),
    E = n(652215);
function d(e) {
    return null != e && e.fetchedAt + e.ttlMillis >= Date.now();
}
function c(e, t, n) {
    let i = Array.isArray(t) ? new Map(t.map((e) => [e.id, e])) : t,
        r = Array.isArray(n) ? new Map(n.map((e) => [e.id, e])) : n,
        a = i.get(e);
    if (null != a) return a;
    let s = r.get(e)?.replacementId;
    if (null != s) return i.get(s);
}
function u(e) {
    return Object.keys(o.TY).includes(_.uF[e]);
}
function I(e, t) {
    if (!u(t)) return !1;
    let n = _.uF[t];
    return (0, i.Lt)(e.dismissedQuestContent, o.TY[n]);
}
function A(e) {
    return new Date(e.config.expiresAt).valueOf() <= Date.now();
}
function T(e) {
    if (!A(e)) return !1;
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
    return null == e ? "" : new Date(e).toLocaleDateString(r.default.locale, t);
}
function O(e, t, n) {
    let i = t.get(n);
    if (null == i) return;
    let r = e.get(i.quest.id);
    if (null != r && !A(r)) return r;
}
function R(e) {
    return {
        [_.uF.QUEST_BAR]: _.yW.DESKTOP_ACCOUNT_PANEL_AREA,
        [_.uF.QUEST_BAR_V2]: _.yW.DESKTOP_ACCOUNT_PANEL_AREA,
        [_.uF.QUEST_BAR_MOBILE]: _.yW.MOBILE_HOME_DOCK_AREA,
        [_.uF.QUEST_HOME_HERO]: _.yW.QUEST_HOME_BANNER_DESKTOP,
    }[e];
}
function f(e) {
    let t = R(e);
    return null != t && o.J6.has(t);
}
function C(e) {
    let { enableNewRequestBehavior: t } = l.A.getConfig({ location: "getQuestDeliveryDataForPlacement" }),
        n = s.A.questAdDecisionByPlacement.get(e);
    if (e === _.yW.QUEST_HOME_BANNER_DESKTOP && null != n)
        return {
            questId: n.questId,
            adCreativeId: n.adCreativeId,
            adDecisionData: n.adDecisionData,
            adContext: n.adContext,
            metadataSealed: n.metadataSealed,
            trafficMetadataRaw: n.trafficMetadataRaw,
            trafficMetadataSealed: n.trafficMetadataSealed,
        };
    if (t)
        return null == n
            ? null
            : {
                  questId: n.questId,
                  adCreativeId: n.adCreativeId,
                  adDecisionData: n.adDecisionData,
                  adContext: n.adContext,
                  metadataSealed: n.metadataSealed,
                  trafficMetadataRaw: n.trafficMetadataRaw,
                  trafficMetadataSealed: n.trafficMetadataSealed,
              };
    {
        let t = s.A.questToDeliverForPlacement.get(e);
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
function p(e, t) {
    let n = R(t);
    if (null == n) return o.K3;
    let { adDecisionData: i, questId: r, adCreativeId: a } = C(n) ?? {};
    return null != i && (r === e || a === e) ? i : o.K3;
}
function m(e) {
    let t = R(e);
    if (null != t) return C(t)?.metadataSealed;
}
function L(e, t) {
    let n = R(e);
    if (null != n) {
        let { trafficMetadataRaw: e, questId: i } = C(n) ?? {};
        if (null != e && i === t) return e;
    }
    if (null != t) {
        let e = s.A.getQuest(t);
        return e?.trafficMetadataRaw;
    }
}
function D(e, t) {
    let n = R(e);
    if (null != n) {
        let { trafficMetadataSealed: e, questId: i } = C(n) ?? {};
        if (null != e && i === t) return e;
    }
    if (null != t) {
        let e = s.A.getQuest(t);
        return e?.trafficMetadataSealed;
    }
}
function h(e) {
    let t = R(e);
    if (null != t) return C(t)?.adContext;
}
function g(e, t) {
    a.A.captureException(e, { ...t, tags: { ...t?.tags, app_context: "quests" } });
}
function b() {
    return window.location.pathname.startsWith(E.BVt.QUEST_HOME_DEPRECATED);
}
