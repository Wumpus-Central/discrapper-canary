n.d(t, {
    Gp: () => D,
    HN: () => I,
    Ic: () => y,
    Kc: () => N,
    L4: () => w,
    Li: () => R,
    RF: () => L,
    ZA: () => b,
    ZG: () => v,
    gO: () => E,
    if: () => O,
    r$: () => j,
    t6: () => S,
    v1: () => A,
    vZ: () => x,
    vc: () => m,
    vy: () => g,
    xn: () => T,
    yI: () => P,
}),
    n(896048);
var r = n(665260),
    i = n(773669),
    a = n(728458),
    s = n(859703),
    o = n(341915),
    l = n(302654),
    c = n(654487),
    u = n(652215);
function d(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function f(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                d(e, t, n[t]);
            });
    }
    return e;
}
function p(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function _(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : p(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let h = 2592000000;
function m(e, t, n) {
    var r;
    let i = Array.isArray(t) ? new Map(t.map((e) => [e.id, e])) : t,
        a = Array.isArray(n) ? new Map(n.map((e) => [e.id, e])) : n,
        s = i.get(e);
    if (null != s) return s;
    let o = null == (r = a.get(e)) ? void 0 : r.replacementId;
    if (null != o) return i.get(o);
}
function g(e) {
    return Object.keys(c.TY).includes(o.uF[e]);
}
function E(e, t) {
    if (!g(t)) return !1;
    let n = o.uF[t];
    return (0, r.Lt)(e.dismissedQuestContent, c.TY[n]);
}
function b(e, t) {
    return e.targetedContent.includes(t);
}
function y(e) {
    return new Date(e.config.expiresAt).valueOf() <= Date.now();
}
function O(e) {
    if (!y(e)) return !1;
    let t = Date.now() - h,
        n = new Date(e.config.expiresAt).valueOf();
    return null != e.config.expiresAt && !(n <= t);
}
function A(e) {
    let t = null,
        n = Date.now();
    for (let r of e) {
        let e = new Date(r.config.expiresAt).valueOf();
        !(e <= n) && (null == t || e < t) && (t = e);
    }
    return t;
}
function v(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : { dateStyle: "short" };
    return null == e ? "" : new Date(e).toLocaleDateString(i.default.locale, t);
}
function S(e, t, n) {
    let r = t.get(n);
    if (null == r) return;
    let i = e.get(r.quest.id);
    if (null != i && !y(i)) return i;
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
    return null != t && c.J6.has(t);
}
function C(e) {
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
function N(e, t) {
    var n;
    let r = I(t);
    if (null == r) return c.K3;
    let { adDecisionData: i, questId: a } = null != (n = C(r)) ? n : {};
    return null != i && a === e ? i : c.K3;
}
function R(e) {
    var t;
    let n = I(e);
    if (null != n) return null == (t = C(n)) ? void 0 : t.metadataRaw;
}
function w(e) {
    var t;
    let n = I(e);
    if (null != n) return null == (t = C(n)) ? void 0 : t.metadataSealed;
}
function P(e, t) {
    var n;
    let r = I(e);
    if (null == r) return;
    let { trafficMetadataRaw: i, questId: a } = null != (n = C(r)) ? n : {};
    if (null != i && a === t) return i;
    if (null != t) {
        let e = s.A.getQuest(t);
        return null == e ? void 0 : e.trafficMetadataRaw;
    }
}
function D(e, t) {
    var n;
    let r = I(e);
    if (null == r) return;
    let { trafficMetadataSealed: i, questId: a } = null != (n = C(r)) ? n : {};
    if (null != i && a === t) return i;
    if (null != t) {
        let e = s.A.getQuest(t);
        return null == e ? void 0 : e.trafficMetadataSealed;
    }
}
function x(e) {
    var t;
    let n = I(e);
    if (null != n) return null == (t = C(n)) ? void 0 : t.adContext;
}
function L(e, t) {
    a.A.captureException(e, _(f({}, t), { tags: _(f({}, null == t ? void 0 : t.tags), { app_context: "quests" }) }));
}
function j() {
    return window.location.pathname.startsWith(u.BVt.QUEST_HOME);
}
