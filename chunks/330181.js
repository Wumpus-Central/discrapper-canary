n.d(t, { Z: () => p }), n(388685);
var i = n(200651),
    r = n(192379),
    s = n(913527),
    l = n.n(s),
    a = n(355467),
    o = n(100527),
    c = n(906732),
    d = n(584825),
    u = n(931547),
    m = n(388032);
let g = (e) => {
    let [t, n] = r.useState(!1),
        [i, s] = r.useState(null);
    return {
        resetRenewalMutation: async (t) => {
            n(!0), s(null);
            try {
                await (0, a.qu)(t, e);
            } catch (e) {
                s(e);
            } finally {
                n(!1);
            }
        },
        submitting: t,
        error: i
    };
};
function p(e) {
    let { groupListingId: t, subscription: n, className: s } = e,
        { analyticsLocations: a } = (0, c.ZP)(o.Z.PENDING_PLAN_CHANGE_NOTICE),
        { resetRenewalMutation: p, submitting: h, error: f } = g(a),
        b = (0, d._k)(t, { includeSoftDeleted: !0 }),
        { currentListing: _, nextListing: x } = r.useMemo(() => {
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
    if (null == n || null == _ || null == x) return null;
    let E = l()(n.currentPeriodEnd).format('MMM DD, YYYY');
    return (0, i.jsx)(u.Z, {
        message: m.intl.format(m.t.chw89f, {
            currentListing: _.name,
            nextListing: x.name,
            changeDate: E
        }),
        error: null == f ? void 0 : f.message,
        onClick: () => p(n),
        submitting: h,
        ctaMessage: m.intl.string(m.t.De4wIy),
        className: s
    });
}
