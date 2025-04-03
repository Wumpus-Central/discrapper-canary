n.d(t, { Z: () => p }), n(47120);
var r = n(200651),
    i = n(192379),
    s = n(913527),
    a = n.n(s),
    l = n(355467),
    o = n(100527),
    c = n(906732),
    d = n(584825),
    u = n(931547),
    m = n(388032);
let g = (e) => {
    let [t, n] = i.useState(!1),
        [r, s] = i.useState(null);
    return {
        resetRenewalMutation: async (t) => {
            n(!0), s(null);
            try {
                await (0, l.qu)(t, e);
            } catch (e) {
                s(e);
            } finally {
                n(!1);
            }
        },
        submitting: t,
        error: r
    };
};
function p(e) {
    let { groupListingId: t, subscription: n, className: s } = e,
        { analyticsLocations: l } = (0, c.ZP)(o.Z.PENDING_PLAN_CHANGE_NOTICE),
        { resetRenewalMutation: p, submitting: h, error: f } = g(l),
        b = (0, d._k)(t, { includeSoftDeleted: !0 }),
        { currentListing: N, nextListing: x } = i.useMemo(() => {
            if ((null == n ? void 0 : n.renewalMutations) == null)
                return {
                    currentListing: void 0,
                    nextListing: void 0
                };
            let e = n.items[0].planId,
                t = n.renewalMutations.items[0].planId;
            return {
                currentListing: b.find((t) => t.subscription_plans[0].id === e),
                nextListing: b.find((e) => e.subscription_plans[0].id === t)
            };
        }, [n, b]);
    if (null == n || null == N || null == x) return null;
    let _ = a()(n.currentPeriodEnd).format('MMM DD, YYYY');
    return (0, r.jsx)(u.Z, {
        message: m.NW.format(m.t.chw89f, {
            currentListing: N.name,
            nextListing: x.name,
            changeDate: _
        }),
        error: null == f ? void 0 : f.message,
        onClick: () => p(n),
        submitting: h,
        ctaMessage: m.NW.string(m.t.De4wIy),
        className: s
    });
}
