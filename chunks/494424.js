n.d(t, {
    Z: () => S,
    c: () => T,
});
var r = n(951288),
    i = n(647438),
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
    h = n(981631),
    m = n(921944),
    g = n(388032);
let E = 1,
    b = 15;
function y() {
    let e = I();
    return 1 === e ? g.intl.string(g.t.NBae0i) : g.intl.format(g.t.GSynLW, { time: e });
}
function O() {
    let e = (0, a.e7)([c.Z], () => c.Z.getPremiumSubscription());
    return null != e && e.status === h.O0b.CANCELED ? e : null;
}
function v() {
    let e = O(),
        t = I();
    return null != e && t >= E && t <= b;
}
function I() {
    let e = O();
    return null != e ? (0, d.YN)(e) : 0;
}
function T(e, t) {
    let n = (0, _.Rw)(),
        r = v(),
        i = (0, f.S)(e, t);
    return (null == n ? void 0 : n.status) === _.Vq.EARNED && r && i;
}
let S = (e) => {
    let { markAsDismissed: t, children: n, mode: a = "popover", tooltipDelay: c = 300, targetElementRef: d } = e,
        { analyticsLocations: f } = (0, s.ZP)(o.Z.TIERED_TENURE_BADGE_CHURN_REMINDER),
        _ = y(),
        O = I(),
        v = (0, i.useCallback)(() => {
            u.default.track(h.rMx.TOOLTIP_VIEWED, { type: "tiered_tenure_badge_churn_reminder" });
        }, []),
        T = (0, i.useCallback)(() => {
            null == t || t(m.L.TAKE_ACTION),
                (0, l.Z)({
                    initialPlanId: null,
                    subscriptionTier: null,
                    analyticsLocations: f,
                });
        }, [t, f]),
        S = [
            {
                text: g.intl.string(g.t.iIvF2z),
                variant: "expressive",
                onClick: T,
            },
        ],
        A = O >= E && O <= b ? Math.max(1, Math.min(100, ((b - O) / b) * 100)) : 1,
        C = O <= 10 ? "critical" : "warning";
    return (0, r.jsx)(p.Z, {
        targetElementRef: d,
        body: _,
        mode: a,
        tooltipDelay: c,
        markAsDismissed: t,
        progressCircleText: "" + O,
        progressCirclePercent: A,
        progressCircleUrgency: C,
        actions: S,
        onShow: "tooltip" === a ? v : void 0,
        children: n,
    });
};
