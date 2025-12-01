n.d(t, { Z: () => m }), n(388685);
var r = n(54381),
    i = n(473749),
    a = n(913527),
    o = n.n(a),
    s = n(355467),
    l = n(100527),
    c = n(906732),
    u = n(584825),
    d = n(931547),
    f = n(388032);
let p = "MMM DD, YYYY",
    _ = (e) => {
        let [t, n] = i.useState(!1),
            [r, a] = i.useState(null);
        return {
            resetRenewalMutation: async (t) => {
                n(!0), a(null);
                try {
                    await (0, s.qu)(t, e);
                } catch (e) {
                    a(e);
                } finally {
                    n(!1);
                }
            },
            submitting: t,
            error: r,
        };
    };
function m(e) {
    let { groupListingId: t, subscription: n, className: a } = e,
        { analyticsLocations: s } = (0, c.ZP)(l.Z.PENDING_PLAN_CHANGE_NOTICE),
        { resetRenewalMutation: m, submitting: h, error: g } = _(s),
        E = (0, u._k)(t, { includeSoftDeleted: !0 }),
        { currentListing: b, nextListing: y } = i.useMemo(() => {
            if ((null == n ? void 0 : n.renewalMutations) == null)
                return {
                    currentListing: void 0,
                    nextListing: void 0,
                };
            let e = n.items[0].planId,
                t = n.renewalMutations.items[0].planId;
            return {
                currentListing: E.find((t) => t.subscription_plans[0].id === e),
                nextListing: E.find((e) => e.subscription_plans[0].id === t),
            };
        }, [n, E]);
    if (null == n || null == b || null == y) return null;
    let O = () => m(n),
        v = o()(n.currentPeriodEnd).format(p);
    return (0, r.jsx)(d.Z, {
        message: f.intl.format(f.t.chw89X, {
            currentListing: b.name,
            nextListing: y.name,
            changeDate: v,
        }),
        error: null == g ? void 0 : g.message,
        onClick: O,
        submitting: h,
        ctaMessage: f.intl.string(f.t.De4wI8),
        className: a,
    });
}
