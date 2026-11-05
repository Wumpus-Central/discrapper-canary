var i = n(665260),
    r = n(157695),
    a = n(107195),
    s = n(773669),
    l = n(856383),
    o = n(265704),
    d = n(859703),
    c = n(506988),
    u = n(977416),
    _ = n(221596);
function E(e) {
    return Object.keys(_.TY).includes(c.uF[e]);
}
let A = {
    [c.uF.QUEST_BAR]: c.p9.DESKTOP_ACCOUNT_PANEL_AREA,
    [c.uF.QUEST_BAR_V2]: c.p9.DESKTOP_ACCOUNT_PANEL_AREA,
    [c.uF.QUEST_BAR_MOBILE]: c.p9.MOBILE_HOME_DOCK_AREA,
    [c.uF.QUEST_HOME_HERO]: c.p9.QUEST_HOME_BANNER_DESKTOP,
    [c.uF.QUEST_HOME_HERO_SHELF]: c.p9.QUEST_HOME_BANNER_DESKTOP,
    [c.uF.QUEST_HOME_HERO_BANNER]: c.p9.QUEST_HOME_BANNER_DESKTOP,
    [c.uF.VIDEO_MODAL_MOBILE]: c.p9.VIDEO_MODAL_MOBILE,
};
function f(e) {
    return A[e];
}
function h(e) {
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
let I = new Set([c.p9.VIDEO_MODAL_MOBILE]);
function p(e, t) {
    let n = (function (e, t) {
        if (!I.has(e) || null == t) return null;
        let n = o.A.getAdDecisionByPlacementAndAdCreativeId(e, t);
        return null != n ? h(n) : null;
    })(e, t);
    if (null != n) return n;
    let i = r.A.deliveryAdDecisionByPlacement.get(e);
    return e === c.p9.QUEST_HOME_BANNER_DESKTOP && null != i ? h(i) : null == i ? null : h(i);
}
n.d(
    t,
    {},
    {
        GR: function (e) {
            return null != e && null != e.completedAt && null == e.claimedAt;
        },
        Gp: function (e, t, n) {
            let i = f(e);
            if (null != i) {
                let { trafficMetadataSealed: e, questId: r } = p(i, n) ?? {};
                if (null != e && (null != n || r === t)) return e;
            }
            if (null != t) {
                let e = d.A.getQuest(t);
                return e?.trafficMetadataSealed;
            }
        },
        HN: f,
        Kc: function (e, t) {
            let n = f(t);
            if (null == n) return _.K3;
            let { adDecisionData: i, questId: r, adCreativeId: a } = p(n, e) ?? {};
            return null != i && (r === e || a === e || i.ad_id === e) ? i : _.K3;
        },
        L4: function (e, t) {
            let n = f(e);
            if (null != n) return p(n, t)?.metadataSealed;
        },
        Oh: function (e) {
            return null != e && e.fetchedAt + e.ttlMillis >= Date.now();
        },
        RF: function (e, t) {
            l.A.captureException(e, { ...t, tags: { ...t?.tags, app_context: "quests" } });
        },
        ZG: function (e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : { dateStyle: "short" };
            return null == e ? "" : new Date(e).toLocaleDateString(s.default.locale, t);
        },
        gO: function (e, t) {
            if (!E(t)) return !1;
            let n = c.uF[t];
            return (0, i.Lt)(e.dismissedQuestContent, _.TY[n]);
        },
        if: function (e) {
            if (!(0, u.Ic)(e)) return !1;
            let t = Date.now() - 2592e6,
                n = new Date(e.config.expiresAt).valueOf();
            return null != e.config.expiresAt && !(n <= t);
        },
        s9: function (e, t) {
            let n = f(e);
            if (null != n) return p(n, t)?.provenanceMetadataSealed;
        },
        vZ: function (e, t) {
            let n = f(e);
            if (null != n) return p(n, t)?.adContext;
        },
        vc: function (e, t, n) {
            let i = Array.isArray(t) ? new Map(t.map((e) => [e.id, e])) : t,
                r = Array.isArray(n) ? new Map(n.map((e) => [e.id, e])) : n,
                a = i.get(e);
            if (null != a) return a;
            let s = r.get(e)?.replacementId;
            if (null != s) return i.get(s);
        },
        vy: E,
        xn: function (e, t) {
            if (null != t && _.cY.has(t)) return !1;
            let n = f(e);
            return null != n && _.J6.has(n);
        },
    },
);
