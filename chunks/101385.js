r.d(t, { PremiumResubscribeModal: () => W });
var n,
    a = r(627968),
    o = r(64700),
    i = r(284009),
    s = r.n(i),
    l = r(688810),
    _ = r(937008),
    c = r(156312),
    d = r(166532),
    m = r(639289),
    u = r(864353),
    p = r(927578),
    b = r(772707),
    C = r(683071),
    h = r(17928),
    x = r(834730),
    g = r(158032),
    f = r(925847),
    S = r(773669),
    v = r(469778),
    I = r(954571),
    y = r(580630),
    j = r(501957),
    T = (((n = {})[(n.CONFIRM = 1)] = "CONFIRM"), (n[(n.SUCCESS = 2)] = "SUCCESS"), n),
    E = r(788868),
    F = r(652215),
    w = r(985018),
    P = r(977544);
let A = (e) => {
    let {
            analyticsLocations: t,
            onClose: r,
            transitionState: n,
            premiumSubscription: i,
            currentInvoicePreview: s,
            renewalInvoicePreview: l,
            fractionalPremiumInfo: _,
            setStep: c,
        } = e,
        d = (0, h.bG)([S.default], () => S.default.locale),
        m = new Date(l.subscriptionPeriodStart);
    i.isBoostOnly || (m = p.Ay.extendDateWithUnconsumedFractionalPremium(m, _.unactivatedUnits));
    let u = (0, h.bG)([v.A], () => v.A.getForApplication(E.tv)),
        A = (0, y.$g)(s.total, s.currency),
        [M, N] = (0, o.useState)(!1),
        [R, k] = (0, o.useState)(!1),
        U = m.toLocaleDateString(d, { month: "long", day: "numeric", year: "numeric" }),
        O = o.useMemo(() => (0, f.A)(), []);
    o.useEffect(() => {
        I.default.track(F.HAw.PREMIUM_RESUBSCRIBE_FLOW_STARTED, { location_stack: t, load_id: O, ...(0, j.j)(i) });
    }, [t, i, O]);
    let L = async () => {
            N(!0), k(!1);
            try {
                await g.Ir(i, t), c(T.SUCCESS);
            } catch (e) {
                k(!0), N(!1);
            }
        },
        D = [{ text: w.intl.string(w.t["cY+Oob"]), onClick: () => L(), variant: "primary", loading: M, disabled: M }],
        B = w.intl.format(w.t.dbGGui, { price: A, date: U }),
        G = i.premiumPlanIdFromItems;
    if (p.Ay.hasUnconsumedGiftForSubscriptionPlan(u, G)) {
        let e = (0, y.$g)(l.total, l.currency),
            t = p.Ay.getIntervalForInvoice(l),
            r = {
                discountedPrice: e,
                regularPrice: A,
                date: U,
                billingPeriod: p.Ay.getIntervalStringAsNoun(t.intervalType),
            };
        B = l.taxInclusive ? w.intl.format(w.t.G8IxyE, r) : w.intl.format(w.t.kXtIIn, r);
    }
    return (0, a.jsxs)(b.k, {
        graphic: { type: "image", src: P.A },
        gradientColor: "nitro-pink",
        transitionState: n,
        title: w.intl.string(w.t.fYEWlq),
        actions: D,
        onClose: async () => r(),
        children: [
            (0, a.jsxs)(x.E, {
                variant: "text-md/normal",
                style: { textAlign: "center" },
                children: [(0, a.jsx)("p", { children: B }), (0, a.jsx)("p", { children: w.intl.string(w.t.UQolSy) })],
            }),
            R ? (0, a.jsx)(C.w, { type: "critical", children: w.intl.string(w.t["5mlOCW"]) }) : null,
        ],
    });
};
var M = r(935462),
    N = r(25743),
    R = r(659746),
    k = r(151595),
    U = r(771566),
    O = r(20374);
function L(e) {
    let { onClose: t } = e,
        r = (0, a.jsx)(x.E, { className: O.h, variant: "text-md/normal", children: w.intl.string(w.t.FCsTCk) });
    return (0, a.jsx)(k.A, {
        type: R.Ay.Types.PREMIUM_ACTIVATED,
        text: r,
        buttonText: w.intl.string(w.t.TkTvBz),
        hideClose: !1,
        onClose: t,
    });
}
function D(e) {
    let { onClose: t } = e;
    return (0, a.jsx)(U.Ay, { planId: E.gD.PREMIUM_MONTH_TIER_0, onClose: t });
}
let B = (e) => {
        let { transitionState: t, onClose: r, premiumType: n } = e,
            o = n === E.PremiumTypes.TIER_0;
        return (0, a.jsxs)(M.EO, {
            "data-migration-pending": !0,
            className: O.z,
            transitionState: t,
            parentComponent: "ResubscribeSuccessStep",
            children: [
                (0, a.jsx)(N.A, { onClose: r, upgradeToPremiumType: n }),
                (0, a.jsx)(M.$m, { "data-migration-pending": !0, children: (0, a.jsx)(o ? D : L, { onClose: r }) }),
            ],
        });
    },
    G = (function e(t) {
        for (let r of Object.values(t)) Object.isFrozen(r) || e(r);
        return Object.freeze(t);
    })((0, u.E)()),
    z = [d.pn.CONFIRM],
    W = (e) => {
        let { analyticsLocations: t, premiumSubscription: r } = e,
            n = (0, p.EL)(r)?.planId,
            i = null != n ? (0, p.m6)(n) : null;
        s()(null != i, "Should not be resubscribing Nitro without premiumType");
        let d = i === E.PremiumTypes.TIER_0,
            [u, b] = o.useState(T.CONFIRM),
            C = o.useCallback(() => {
                switch (u) {
                    case T.CONFIRM:
                        return (0, a.jsx)(A, { ...e, setStep: b });
                    case T.SUCCESS:
                        return (0, a.jsx)(B, { ...e, premiumType: i });
                    default:
                        return (0, a.jsx)(A, { ...e, setStep: b });
                }
            }, [u, e, i]);
        return (0, a.jsx)(l.f5, {
            value: t,
            children: (0, a.jsx)(c.PaymentContextProvider, {
                activeSubscription: r,
                stepConfigs: G,
                skuIDs: [],
                breadcrumbs: z,
                children: (0, a.jsx)(_.Mq, {
                    children: (0, a.jsx)(m.A, {
                        isConfirmationStep: u === T.SUCCESS,
                        isEligibleForWowMoment: !d,
                        shouldPrefetchWowMoment: !d,
                        children: C(),
                    }),
                }),
            }),
        });
    };
