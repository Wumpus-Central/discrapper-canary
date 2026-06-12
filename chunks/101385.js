n.d(e, { PremiumResubscribeModal: () => B });
var i,
    r = n(627968),
    s = n(64700),
    a = n(284009),
    l = n.n(a),
    o = n(688810),
    c = n(197510),
    u = n(937008),
    d = n(166532),
    m = n(811656),
    p = n(245172),
    S = n(428262),
    C = n(772707),
    g = n(683071),
    y = n(17928),
    h = n(834730),
    x = n(158032),
    b = n(925847),
    I = n(773669),
    E = n(469778),
    j = n(174459),
    f = n(580630),
    A = n(501957),
    T = (((i = {})[(i.CONFIRM = 1)] = "CONFIRM"), (i[(i.SUCCESS = 2)] = "SUCCESS"), i),
    M = n(788868),
    v = n(652215),
    R = n(375708),
    P = n(977544);
let k = (t) => {
    let {
            analyticsLocations: e,
            onClose: n,
            transitionState: i,
            premiumSubscription: a,
            currentInvoicePreview: l,
            renewalInvoicePreview: o,
            fractionalPremiumInfo: c,
            setStep: u,
        } = t,
        d = (0, y.bG)([I.default], () => I.default.locale),
        m = new Date(o.subscriptionPeriodStart);
    a.isBoostOnly || (m = S.Ay.extendDateWithUnconsumedFractionalPremium(m, c.unactivatedUnits));
    let p = (0, y.bG)([E.A], () => E.A.getForApplication(M.tv)),
        k = (0, f.$g)(l.total, l.currency),
        [F, O] = (0, s.useState)(!1),
        [U, _] = (0, s.useState)(!1),
        w = m.toLocaleDateString(d, { month: "long", day: "numeric", year: "numeric" }),
        N = s.useMemo(() => (0, b.A)(), []);
    s.useEffect(() => {
        j.default.track(v.HAw.PREMIUM_RESUBSCRIBE_FLOW_STARTED, { location_stack: e, load_id: N, ...(0, A.j)(a) });
    }, [e, a, N]);
    let D = async () => {
            O(!0), _(!1);
            try {
                await x.Ir(a, e), u(T.SUCCESS);
            } catch (t) {
                _(!0), O(!1);
            }
        },
        G = [{ text: R.intl.string(R.t["cY+Oob"]), onClick: () => D(), variant: "primary", loading: F, disabled: F }],
        W = R.intl.format(R.t.dbGGui, { price: k, date: w }),
        L = a.premiumPlanIdFromItems;
    if (S.Ay.hasUnconsumedGiftForSubscriptionPlan(p, L)) {
        let t = (0, f.$g)(o.total, o.currency),
            e = S.Ay.getIntervalForInvoice(o),
            n = {
                discountedPrice: t,
                regularPrice: k,
                date: w,
                billingPeriod: S.Ay.getIntervalStringAsNoun(e.intervalType),
            };
        W = o.taxInclusive ? R.intl.format(R.t.G8IxyE, n) : R.intl.format(R.t.kXtIIn, n);
    }
    return (0, r.jsxs)(C.k, {
        graphic: { type: "image", src: P.A },
        gradientColor: "nitro-pink",
        transitionState: i,
        title: R.intl.string(R.t.fYEWlq),
        actions: G,
        onClose: async () => n(),
        children: [
            (0, r.jsxs)(h.E, {
                variant: "text-md/normal",
                style: { textAlign: "center" },
                children: [(0, r.jsx)("p", { children: W }), (0, r.jsx)("p", { children: R.intl.string(R.t.UQolSy) })],
            }),
            U ? (0, r.jsx)(g.w, { type: "critical", children: R.intl.string(R.t["5mlOCW"]) }) : null,
        ],
    });
};
var F = n(935462),
    O = n(25743),
    U = n(659746),
    _ = n(151595),
    w = n(771566),
    N = n(20374);
function D(t) {
    let { onClose: e } = t,
        n = (0, r.jsx)(h.E, { className: N.h, variant: "text-md/normal", children: R.intl.string(R.t.FCsTCk) });
    return (0, r.jsx)(_.A, {
        type: U.Ay.Types.PREMIUM_ACTIVATED,
        text: n,
        buttonText: R.intl.string(R.t.TkTvBz),
        hideClose: !1,
        onClose: e,
    });
}
function G(t) {
    let { onClose: e } = t;
    return (0, r.jsx)(w.Ay, { planId: M.gD.PREMIUM_MONTH_TIER_0, onClose: e });
}
let W = (t) => {
        let { transitionState: e, onClose: n, premiumType: i } = t,
            s = i === M.PremiumTypes.TIER_0;
        return (0, r.jsxs)(F.EO, {
            "data-migration-pending": !0,
            className: N.z,
            transitionState: e,
            parentComponent: "ResubscribeSuccessStep",
            children: [
                (0, r.jsx)(O.A, { onClose: n, upgradeToPremiumType: i }),
                (0, r.jsx)(F.$m, { "data-migration-pending": !0, children: (0, r.jsx)(s ? G : D, { onClose: n }) }),
            ],
        });
    },
    L = (function t(e) {
        for (let n of Object.values(e)) Object.isFrozen(n) || t(n);
        return Object.freeze(e);
    })((0, p.E5)()),
    z = [d.pn.CONFIRM],
    B = (t) => {
        let { analyticsLocations: e, premiumSubscription: n } = t,
            i = (0, S.EL)(n)?.planId,
            a = null != i ? (0, S.m6)(i) : null;
        l()(null != a, "Should not be resubscribing Nitro without premiumType");
        let d = a === M.PremiumTypes.TIER_0,
            [p, C] = s.useState(T.CONFIRM),
            g = s.useCallback(() => {
                switch (p) {
                    case T.CONFIRM:
                        return (0, r.jsx)(k, { ...t, setStep: C });
                    case T.SUCCESS:
                        return (0, r.jsx)(W, { ...t, premiumType: a });
                    default:
                        return (0, r.jsx)(k, { ...t, setStep: C });
                }
            }, [p, t, a]);
        return (0, r.jsx)(o.f5, {
            value: e,
            children: (0, r.jsx)(c.M, {
                activeSubscription: n,
                stepConfigs: L,
                skuIDs: [],
                breadcrumbs: z,
                children: (0, r.jsx)(u.Mq, {
                    children: (0, r.jsx)(m.A, {
                        isConfirmationStep: p === T.SUCCESS,
                        isEligibleForWowMoment: !d,
                        shouldPrefetchWowMoment: !d,
                        children: g(),
                    }),
                }),
            }),
        });
    };
