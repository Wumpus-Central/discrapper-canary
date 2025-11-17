n.d(t, {
    Z: () => A,
    c: () => S,
});
var r = n(54381),
    i = n(473749),
    a = n(442837),
    o = n(100527),
    s = n(906732),
    l = n(963249),
    c = n(78839),
    u = n(626135),
    d = n(74538),
    f = n(660000),
    _ = n(848572),
    p = n(654939),
    h = n(474936),
    m = n(981631),
    g = n(921944),
    E = n(388032);
let b = 1,
    y = 15;
function O() {
    let e = T();
    return 1 === e ? E.intl.string(E.t.NBae0i) : E.intl.format(E.t.GSynLW, { time: e });
}
function v() {
    let e = (0, a.e7)([c.Z], () => c.Z.getPremiumSubscription());
    return null != e && e.status === m.O0b.CANCELED ? e : null;
}
function I() {
    let e = v(),
        t = T();
    return null != e && t >= b && t <= y;
}
function T() {
    let e = v();
    return null != e ? (0, d.YN)(e) : 0;
}
function S(e, t) {
    let n = (0, _.kG)(),
        r = I(),
        i = (0, f.S)(e, t);
    return null != n && r && i;
}
let A = (e) => {
    var t;
    let { markAsDismissed: n, children: a, mode: c = "popover", tooltipDelay: d = 300, targetElementRef: f } = e,
        { analyticsLocations: v } = (0, s.ZP)(o.Z.TIERED_TENURE_BADGE_CHURN_REMINDER),
        I = O(),
        S = T(),
        A = null != (t = (0, _.kG)()) ? t : h.VU.PREMIUM_TENURE_1_MONTH,
        C = (0, i.useCallback)(() => {
            u.default.track(m.rMx.TOOLTIP_VIEWED, { type: "tiered_tenure_badge_churn_reminder" });
        }, []),
        N = (0, i.useCallback)(() => {
            null == n || n(g.L.TAKE_ACTION),
                (0, l.Z)({
                    initialPlanId: null,
                    subscriptionTier: null,
                    analyticsLocations: v,
                });
        }, [n, v]),
        R = [
            {
                text: E.intl.string(E.t.iIvF2z),
                variant: "expressive",
                onClick: N,
            },
        ],
        P = S >= b && S <= y ? Math.max(1, Math.min(100, ((y - S) / y) * 100)) : 1,
        D = S <= 10 ? "critical" : "warning";
    return (0, r.jsx)(p.Z, {
        badgeId: A,
        targetElementRef: f,
        body: I,
        mode: c,
        tooltipDelay: d,
        markAsDismissed: n,
        progressCircleText: "" + S,
        progressCirclePercent: P,
        progressCircleUrgency: D,
        actions: R,
        onShow: "tooltip" === c ? C : void 0,
        children: a,
    });
};
