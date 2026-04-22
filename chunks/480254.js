r.d(t, { m: () => I });
var o = r(627968),
    n = r(64700),
    a = r(772707),
    i = r(683071),
    _ = r(311907),
    s = r(834730),
    l = r(158032),
    c = r(925847),
    d = r(773669),
    p = r(469778),
    u = r(954571),
    m = r(927578),
    b = r(580630),
    C = r(501957),
    h = r(232392),
    g = r(788868),
    x = r(652215),
    f = r(985018),
    S = r(977544);
let I = (e) => {
    let {
            analyticsLocations: t,
            onClose: r,
            transitionState: I,
            premiumSubscription: y,
            currentInvoicePreview: v,
            renewalInvoicePreview: T,
            fractionalPremiumInfo: A,
            setStep: F,
        } = e,
        w = (0, _.bG)([d.default], () => d.default.locale),
        E = new Date(T.subscriptionPeriodStart);
    y.isBoostOnly || (E = m.Ay.extendDateWithUnconsumedFractionalPremium(E, A.unactivatedUnits));
    let j = (0, _.bG)([p.A], () => p.A.getForApplication(g.tv)),
        P = (0, b.$g)(v.total, v.currency),
        [M, R] = (0, n.useState)(!1),
        [k, U] = (0, n.useState)(!1),
        O = E.toLocaleDateString(w, { month: "long", day: "numeric", year: "numeric" }),
        B = n.useMemo(() => (0, c.A)(), []);
    n.useEffect(() => {
        u.default.track(x.HAw.PREMIUM_RESUBSCRIBE_FLOW_STARTED, { location_stack: t, load_id: B, ...(0, C.j)(y) });
    }, [t, y, B]);
    let L = async () => {
            R(!0), U(!1);
            try {
                await l.Ir(y, t), F(h.g.SUCCESS);
            } catch (e) {
                U(!0), R(!1);
            }
        },
        D = [{ text: f.intl.string(f.t["cY+Oob"]), onClick: () => L(), variant: "primary", loading: M, disabled: M }],
        G = f.intl.format(f.t.dbGGui, { price: P, date: O }),
        N = y.premiumPlanIdFromItems;
    if (m.Ay.hasUnconsumedGiftForSubscriptionPlan(j, N)) {
        let e = (0, b.$g)(T.total, T.currency),
            t = m.Ay.getIntervalForInvoice(T),
            r = {
                discountedPrice: e,
                regularPrice: P,
                date: O,
                billingPeriod: m.Ay.getIntervalStringAsNoun(t.intervalType),
            };
        G = T.taxInclusive ? f.intl.format(f.t.G8IxyE, r) : f.intl.format(f.t.kXtIIn, r);
    }
    return (0, o.jsxs)(a.k, {
        graphic: { type: "image", src: S.A },
        gradientColor: "nitro-pink",
        transitionState: I,
        title: f.intl.string(f.t.fYEWlq),
        actions: D,
        onClose: async () => r(),
        children: [
            (0, o.jsxs)(s.E, {
                variant: "text-md/normal",
                style: { textAlign: "center" },
                children: [(0, o.jsx)("p", { children: G }), (0, o.jsx)("p", { children: f.intl.string(f.t.UQolSy) })],
            }),
            k ? (0, o.jsx)(i.w, { type: "critical", children: f.intl.string(f.t["5mlOCW"]) }) : null,
        ],
    });
};
