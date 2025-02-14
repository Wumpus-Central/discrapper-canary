n.d(t, { Z: () => h }), n(47120);
var i = n(200651),
    s = n(192379),
    r = n(913527),
    l = n.n(r),
    a = n(355467),
    o = n(100527),
    c = n(906732),
    d = n(584825),
    u = n(931547),
    m = n(388032);
let g = (e) => {
    let [t, n] = s.useState(!1),
        [i, r] = s.useState(null);
    return {
        resetRenewalMutation: async (t) => {
            n(!0), r(null);
            try {
                await (0, a.qu)(t, e);
            } catch (e) {
                r(e);
            } finally {
                n(!1);
            }
        },
        submitting: t,
        error: i
    };
};
function h(e) {
    let { groupListingId: t, subscription: n, className: r } = e,
        { analyticsLocations: a } = (0, c.ZP)(o.Z.PENDING_PLAN_CHANGE_NOTICE),
        { resetRenewalMutation: h, submitting: x, error: _ } = g(a),
        p = (0, d._k)(t, { includeSoftDeleted: !0 }),
        { currentListing: E, nextListing: C } = s.useMemo(() => {
            if ((null == n ? void 0 : n.renewalMutations) == null)
                return {
                    currentListing: void 0,
                    nextListing: void 0
                };
            let e = n.items[0].planId,
                t = n.renewalMutations.items[0].planId;
            return {
                currentListing: p.find((t) => t.subscription_plans[0].id === e),
                nextListing: p.find((e) => e.subscription_plans[0].id === t)
            };
        }, [n, p]);
    if (null == n || null == E || null == C) return null;
    let f = l()(n.currentPeriodEnd).format('MMM DD, YYYY');
    return (0, i.jsx)(u.Z, {
        message: m.intl.format(m.t.chw89f, {
            currentListing: E.name,
            nextListing: C.name,
            changeDate: f
        }),
        error: null == _ ? void 0 : _.message,
        onClick: () => h(n),
        submitting: x,
        ctaMessage: m.intl.string(m.t.De4wIy),
        className: r
    });
}
