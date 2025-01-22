n.d(t, {
    Z: function () {
        return h;
    }
}),
    n(47120);
var i = n(200651),
    r = n(192379),
    s = n(913527),
    a = n.n(s),
    l = n(355467),
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
                await (0, l.qu)(t, e);
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
function h(e) {
    let { groupListingId: t, subscription: n, className: s } = e,
        { analyticsLocations: l } = (0, c.ZP)(o.Z.PENDING_PLAN_CHANGE_NOTICE),
        { resetRenewalMutation: h, submitting: p, error: x } = g(l),
        f = (0, d._k)(t, { includeSoftDeleted: !0 }),
        { currentListing: E, nextListing: _ } = r.useMemo(() => {
            if ((null == n ? void 0 : n.renewalMutations) == null)
                return {
                    currentListing: void 0,
                    nextListing: void 0
                };
            let e = n.items[0].planId,
                t = n.renewalMutations.items[0].planId,
                i = f.find((t) => t.subscription_plans[0].id === e);
            return {
                currentListing: i,
                nextListing: f.find((e) => e.subscription_plans[0].id === t)
            };
        }, [n, f]);
    if (null == n || null == E || null == _) return null;
    let C = a()(n.currentPeriodEnd).format('MMM DD, YYYY');
    return (0, i.jsx)(u.Z, {
        message: m.intl.format(m.t.chw89f, {
            currentListing: E.name,
            nextListing: _.name,
            changeDate: C
        }),
        error: null == x ? void 0 : x.message,
        onClick: () => h(n),
        submitting: p,
        ctaMessage: m.intl.string(m.t.De4wIy),
        className: s
    });
}
