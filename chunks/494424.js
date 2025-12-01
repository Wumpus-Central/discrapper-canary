n.d(t, {
    Z: () => C,
    c: () => A,
});
var r = n(54381),
    i = n(473749),
    a = n(442837),
    o = n(481060),
    s = n(100527),
    l = n(906732),
    c = n(963249),
    u = n(78839),
    d = n(626135),
    f = n(74538),
    p = n(660000),
    _ = n(848572),
    m = n(654939),
    h = n(474936),
    g = n(981631),
    E = n(921944),
    b = n(388032);
let y = 1,
    O = 15;
function v() {
    let e = T();
    return 1 === e ? b.intl.string(b.t.NBae0i) : b.intl.format(b.t.GSynLW, { time: e });
}
function S() {
    let e = (0, a.e7)([u.Z], () => u.Z.getPremiumSubscription());
    return null != e && e.status === g.O0b.CANCELED ? e : null;
}
function I() {
    let e = S(),
        t = T();
    return null != e && t >= y && t <= O;
}
function T() {
    let e = S();
    return null != e ? (0, f.YN)(e) : 0;
}
function A(e, t) {
    let n = (0, _.kG)(),
        r = I(),
        i = (0, p.S)(e, t);
    return null != n && r && i;
}
let C = (e) => {
    var t;
    let { markAsDismissed: n, children: a, mode: u = "popover", tooltipDelay: f = 300, targetElementRef: p } = e,
        { analyticsLocations: S } = (0, l.ZP)(s.Z.TIERED_TENURE_BADGE_CHURN_REMINDER),
        I = v(),
        A = T(),
        C = null != (t = (0, _.kG)()) ? t : h.VU.PREMIUM_TENURE_1_MONTH,
        N = (0, i.useCallback)(() => {
            d.default.track(g.rMx.TOOLTIP_VIEWED, { type: "tiered_tenure_badge_churn_reminder" });
        }, []),
        P = (0, i.useCallback)(() => {
            null == n || n(E.L.TAKE_ACTION),
                (0, c.Z)({
                    initialPlanId: null,
                    subscriptionTier: null,
                    analyticsLocations: S,
                });
        }, [n, S]),
        R = [
            {
                text: b.intl.string(b.t.iIvF2z),
                variant: "expressive",
                icon: o.SrA,
                iconPosition: "start",
                onClick: P,
            },
        ],
        w = A >= y && A <= O ? Math.max(1, Math.min(100, ((O - A) / O) * 100)) : 1,
        D = A <= 10 ? "critical" : "warning";
    return (0, r.jsx)(m.Z, {
        badgeId: C,
        targetElementRef: p,
        body: I,
        mode: u,
        tooltipDelay: f,
        markAsDismissed: n,
        progressCircleText: "" + A,
        progressCirclePercent: w,
        progressCircleUrgency: D,
        actions: R,
        onShow: "tooltip" === u ? N : void 0,
        estimatedTooltipHeight: 300,
        children: a,
    });
};
