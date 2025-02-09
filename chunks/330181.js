n.d(t, { Z: () => _ }), n(47120);
var i = n(200651),
    r = n(192379),
    a = n(913527),
    s = n.n(a),
    l = n(355467),
    o = n(100527),
    c = n(906732),
    d = n(584825),
    u = n(931547),
    m = n(388032);
let g = (e) => {
    let [t, n] = r.useState(!1),
        [i, a] = r.useState(null);
    return {
        resetRenewalMutation: async (t) => {
            n(!0), a(null);
            try {
                await (0, l.qu)(t, e);
            } catch (e) {
                a(e);
            } finally {
                n(!1);
            }
        },
        submitting: t,
        error: i
    };
};
function _(e) {
    let { groupListingId: t, subscription: n, className: a } = e,
        { analyticsLocations: l } = (0, c.ZP)(o.Z.PENDING_PLAN_CHANGE_NOTICE),
        { resetRenewalMutation: _, submitting: p, error: f } = g(l),
        h = (0, d._k)(t, { includeSoftDeleted: !0 }),
        { currentListing: x, nextListing: E } = r.useMemo(() => {
            if ((null == n ? void 0 : n.renewalMutations) == null)
                return {
                    currentListing: void 0,
                    nextListing: void 0
                };
            let e = n.items[0].planId,
                t = n.renewalMutations.items[0].planId;
            return {
                currentListing: h.find((t) => t.subscription_plans[0].id === e),
                nextListing: h.find((e) => e.subscription_plans[0].id === t)
            };
        }, [n, h]);
    if (null == n || null == x || null == E) return null;
    let C = s()(n.currentPeriodEnd).format('MMM DD, YYYY');
    return (0, i.jsx)(u.Z, {
        message: m.intl.format(m.t.chw89f, {
            currentListing: x.name,
            nextListing: E.name,
            changeDate: C
        }),
        error: null == f ? void 0 : f.message,
        onClick: () => _(n),
        submitting: p,
        ctaMessage: m.intl.string(m.t.De4wIy),
        className: a
    });
}
