r.d(t, { m: () => y });
var a = r(627968),
    n = r(64700),
    i = r(158954),
    o = r(311907),
    s = r(397927),
    l = r(158032),
    d = r(925847),
    c = r(773669),
    _ = r(469778),
    p = r(954571),
    u = r(927578),
    m = r(580630),
    b = r(501957),
    C = r(232392),
    x = r(788868),
    S = r(652215),
    g = r(985018),
    h = r(938822);
let y = (e) => {
    let {
            analyticsLocations: t,
            onClose: r,
            transitionState: y,
            premiumSubscription: I,
            currentInvoicePreview: f,
            renewalInvoicePreview: v,
            fractionalPremiumInfo: M,
            setStep: E,
        } = e,
        T = (0, o.bG)([c.default], () => c.default.locale),
        A = new Date(v.subscriptionPeriodStart);
    I.isBoostOnly || (A = u.Ay.extendDateWithUnconsumedFractionalPremium(A, M.unactivatedUnits));
    let w = (0, o.bG)([_.A], () => _.A.getForApplication(x.tv)),
        j = (0, m.$g)(f.total, f.currency),
        [P, R] = (0, n.useState)(!1),
        [k, F] = (0, n.useState)(!1),
        O = A.toLocaleDateString(T, { month: "long", day: "numeric", year: "numeric" }),
        B = n.useMemo(() => (0, d.A)(), []);
    n.useEffect(() => {
        p.default.track(S.HAw.PREMIUM_RESUBSCRIBE_FLOW_STARTED, { location_stack: t, load_id: B, ...(0, b.j)(I) });
    }, [t, I, B]);
    let D = async () => {
            R(!0), F(!1);
            try {
                await l.Ir(I, t), E(C.g.SUCCESS);
            } catch (e) {
                F(!0), R(!1);
            }
        },
        N = [{ text: g.intl.string(g.t["cY+Oob"]), onClick: () => D(), variant: "primary", loading: P, disabled: P }],
        U = g.intl.format(g.t.dbGGui, { price: j, date: O }),
        L = I.premiumPlanIdFromItems;
    if (u.Ay.hasUnconsumedGiftForSubscriptionPlan(w, L)) {
        let e = (0, m.$g)(v.total, v.currency),
            t = u.Ay.getIntervalForInvoice(v),
            r = {
                discountedPrice: e,
                regularPrice: j,
                date: O,
                billingPeriod: u.Ay.getIntervalStringAsNoun(t.intervalType),
            };
        U = v.taxInclusive ? g.intl.format(g.t.G8IxyE, r) : g.intl.format(g.t.kXtIIn, r);
    }
    return (0, a.jsxs)(i.ExpressiveModal, {
        graphic: { type: "image", src: h.A },
        gradientColor: "nitro-pink",
        transitionState: y,
        title: g.intl.string(g.t.fYEWlq),
        actions: N,
        onClose: async () => r(),
        children: [
            (0, a.jsxs)(s.Text, {
                variant: "text-md/normal",
                style: { textAlign: "center" },
                children: [(0, a.jsx)("p", { children: U }), (0, a.jsx)("p", { children: g.intl.string(g.t.UQolSy) })],
            }),
            k ? (0, a.jsx)(i.wx6, { type: "critical", children: g.intl.string(g.t["5mlOCW"]) }) : null,
        ],
    });
};
