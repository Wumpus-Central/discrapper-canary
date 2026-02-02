n.d(t, {
    Gp: () => P,
    HN: () => I,
    Ic: () => y,
    Kc: () => C,
    L4: () => w,
    Li: () => N,
    RF: () => L,
    ZG: () => v,
    gO: () => E,
    if: () => b,
    r$: () => x,
    t6: () => A,
    v1: () => O,
    vZ: () => D,
    vc: () => m,
    vy: () => g,
    xn: () => S,
    yI: () => R,
}),
    n(896048);
var r = n(665260),
    i = n(773669),
    a = n(728458),
    o = n(859703),
    s = n(341915),
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
let h = 2592e6;

function m(e, t, n) {
    var r;
    let i = Array.isArray(t) ? new Map(t.map((e) => [e.id, e])) : t,
        a = Array.isArray(n) ? new Map(n.map((e) => [e.id, e])) : n,
        o = i.get(e);
    if (null != o) return o;
    let s = null == (r = a.get(e)) ? void 0 : r.replacementId;
    if (null != s) return i.get(s);
}

function g(e) {
    return Object.keys(c.TY).includes(s.uF[e]);
}

function E(e, t) {
    if (!g(t)) return !1;
    let n = s.uF[t];
    return (0, r.Lt)(e.dismissedQuestContent, c.TY[n]);
}

function y(e) {
    return new Date(e.config.expiresAt).valueOf() <= Date.now();
}

function b(e) {
    if (!y(e)) return !1;
    let t = Date.now() - h,
        n = new Date(e.config.expiresAt).valueOf();
    return null != e.config.expiresAt && !(n <= t);
}

function O(e) {
    let t = null,
        n = Date.now();
    for (let r of e) {
        let e = new Date(r.config.expiresAt).valueOf();
        !(e <= n) && (null == t || e < t) && (t = e);
    }
    return t;
}

function v(e) {
    let t =
        arguments.length > 1 && void 0 !== arguments[1]
            ? arguments[1]
            : {
                  dateStyle: "short",
              };
    return null == e ? "" : new Date(e).toLocaleDateString(i.default.locale, t);
}

function A(e, t, n) {
    let r = t.get(n);
    if (null == r) return;
    let i = e.get(r.quest.id);
    if (null != i && !y(i)) return i;
}

function I(e) {
    return {
        [s.uF.QUEST_BAR]: s.yW.DESKTOP_ACCOUNT_PANEL_AREA,
        [s.uF.QUEST_BAR_V2]: s.yW.DESKTOP_ACCOUNT_PANEL_AREA,
        [s.uF.QUEST_BAR_MOBILE]: s.yW.MOBILE_HOME_DOCK_AREA,
    }[e];
}

function S(e) {
    let t = I(e);
    return null != t && c.J6.has(t);
}

function T(e) {
    let { enableNewRequestBehavior: t } = l.A.getConfig({
        location: "getQuestDeliveryDataForPlacement",
    });
    if (t) {
        let t = o.A.questAdDecisionByPlacement.get(e);
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
        let t = o.A.questToDeliverForPlacement.get(e);
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

function C(e, t) {
    var n;
    let r = I(t);
    if (null == r) return c.K3;
    let { adDecisionData: i, questId: a } = null != (n = T(r)) ? n : {};
    return null != i && a === e ? i : c.K3;
}

function N(e) {
    var t;
    let n = I(e);
    if (null != n) return null == (t = T(n)) ? void 0 : t.metadataRaw;
}

function w(e) {
    var t;
    let n = I(e);
    if (null != n) return null == (t = T(n)) ? void 0 : t.metadataSealed;
}

function R(e, t) {
    var n;
    let r = I(e);
    if (null == r) return;
    let { trafficMetadataRaw: i, questId: a } = null != (n = T(r)) ? n : {};
    if (null != i && a === t) return i;
    if (null != t) {
        let e = o.A.getQuest(t);
        return null == e ? void 0 : e.trafficMetadataRaw;
    }
}

function P(e, t) {
    var n;
    let r = I(e);
    if (null == r) return;
    let { trafficMetadataSealed: i, questId: a } = null != (n = T(r)) ? n : {};
    if (null != i && a === t) return i;
    if (null != t) {
        let e = o.A.getQuest(t);
        return null == e ? void 0 : e.trafficMetadataSealed;
    }
}

function D(e) {
    var t;
    let n = I(e);
    if (null != n) return null == (t = T(n)) ? void 0 : t.adContext;
}

function L(e, t) {
    a.A.captureException(
        e,
        _(f({}, t), {
            tags: _(f({}, null == t ? void 0 : t.tags), {
                app_context: "quests",
            }),
        }),
    );
}

function x() {
    return window.location.pathname.startsWith(u.BVt.QUEST_HOME);
}
