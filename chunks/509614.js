n.d(e, { PremiumResubscribeModal: () => L });
var i,
    r = n(627968),
    s = n(64700),
    a = n(284009),
    l = n.n(a),
    o = n(688810),
    c = n(197510),
    u = n(937008),
    d = n(811656),
    m = n(428262),
    p = n(772707),
    S = n(683071),
    C = n(17928),
    g = n(834730),
    y = n(158032),
    h = n(925847),
    x = n(773669),
    I = n(469778),
    E = n(174459),
    b = n(580630),
    j = n(501957),
    A = (((i = {})[(i.CONFIRM = 1)] = "CONFIRM"), (i[(i.SUCCESS = 2)] = "SUCCESS"), i),
    T = n(788868),
    f = n(652215),
    M = n(375708),
    v = n(977544);
let P = (t) => {
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
        d = (0, C.bG)([x.default], () => x.default.locale),
        P = new Date(o.subscriptionPeriodStart);
    a.isBoostOnly || (P = m.Ay.extendDateWithUnconsumedFractionalPremium(P, c.unactivatedUnits));
    let R = (0, C.bG)([I.A], () => I.A.getForApplication(T.tv)),
        k = (0, b.$g)(l.total, l.currency),
        [U, _] = (0, s.useState)(!1),
        [F, w] = (0, s.useState)(!1),
        O = P.toLocaleDateString(d, { month: "long", day: "numeric", year: "numeric" }),
        N = s.useMemo(() => (0, h.A)(), []);
    s.useEffect(() => {
        E.default.track(f.HAw.PREMIUM_RESUBSCRIBE_FLOW_STARTED, { location_stack: e, load_id: N, ...(0, j.j)(a) });
    }, [e, a, N]);
    let D = async () => {
            _(!0), w(!1);
            try {
                await y.Ir(a, e), u(A.SUCCESS);
            } catch (t) {
                w(!0), _(!1);
            }
        },
        G = [{ text: M.intl.string(M.t["cY+Oob"]), onClick: () => D(), variant: "primary", loading: U, disabled: U }],
        W = M.intl.format(M.t.dbGGui, { price: k, date: O }),
        L = a.premiumPlanIdFromItems;
    if (m.Ay.hasUnconsumedGiftForSubscriptionPlan(R, L)) {
        let t = (0, b.$g)(o.total, o.currency),
            e = m.Ay.getIntervalForInvoice(o),
            n = {
                discountedPrice: t,
                regularPrice: k,
                date: O,
                billingPeriod: m.Ay.getIntervalStringAsNoun(e.intervalType),
            };
        W = o.taxInclusive ? M.intl.format(M.t.G8IxyE, n) : M.intl.format(M.t.kXtIIn, n);
    }
    return (0, r.jsxs)(p.k, {
        graphic: { type: "image", src: v.A },
        gradientColor: "nitro-pink",
        transitionState: i,
        title: M.intl.string(M.t.fYEWlq),
        actions: G,
        onClose: async () => n(),
        children: [
            (0, r.jsxs)(g.E, {
                variant: "text-md/normal",
                style: { textAlign: "center" },
                children: [(0, r.jsx)("p", { children: W }), (0, r.jsx)("p", { children: M.intl.string(M.t.UQolSy) })],
            }),
            F ? (0, r.jsx)(S.w, { type: "critical", children: M.intl.string(M.t["5mlOCW"]) }) : null,
        ],
    });
};
var R = n(935462),
    k = n(25743),
    U = n(659746),
    _ = n(151595),
    F = n(771566),
    w = n(20374);
function O(t) {
    let { onClose: e } = t,
        n = (0, r.jsx)(g.E, { className: w.h, variant: "text-md/normal", children: M.intl.string(M.t.FCsTCk) });
    return (0, r.jsx)(_.A, {
        type: U.Ay.Types.PREMIUM_ACTIVATED,
        text: n,
        buttonText: M.intl.string(M.t.TkTvBz),
        hideClose: !1,
        onClose: e,
    });
}
function N(t) {
    let { onClose: e } = t;
    return (0, r.jsx)(F.Ay, { planId: T.gD.PREMIUM_MONTH_TIER_0, onClose: e });
}
let D = (t) => {
        let { transitionState: e, onClose: n, premiumType: i } = t,
            s = i === T.PremiumTypes.TIER_0;
        return (0, r.jsxs)(R.EO, {
            "data-migration-pending": !0,
            className: w.z,
            transitionState: e,
            parentComponent: "ResubscribeSuccessStep",
            children: [
                (0, r.jsx)(k.A, { onClose: n, upgradeToPremiumType: i }),
                (0, r.jsx)(R.$m, { "data-migration-pending": !0, children: (0, r.jsx)(s ? N : O, { onClose: n }) }),
            ],
        });
    },
    G = [],
    W = [],
    L = (t) => {
        let { analyticsLocations: e, premiumSubscription: n } = t,
            i = (0, m.EL)(n)?.planId,
            a = null != i ? (0, m.m6)(i) : null;
        l()(null != a, "Should not be resubscribing Nitro without premiumType");
        let p = a === T.PremiumTypes.TIER_0,
            [S, C] = s.useState(A.CONFIRM),
            g = s.useCallback(() => {
                switch (S) {
                    case A.CONFIRM:
                        return (0, r.jsx)(P, { ...t, setStep: C });
                    case A.SUCCESS:
                        return (0, r.jsx)(D, { ...t, premiumType: a });
                    default:
                        return (0, r.jsx)(P, { ...t, setStep: C });
                }
            }, [S, t, a]);
        return (0, r.jsx)(o.f5, {
            value: e,
            children: (0, r.jsx)(c.M, {
                activeSubscription: n,
                stepConfigs: G,
                skuIDs: W,
                children: (0, r.jsx)(u.Mq, {
                    children: (0, r.jsx)(d.A, {
                        isConfirmationStep: S === A.SUCCESS,
                        isEligibleForWowMoment: !p,
                        shouldPrefetchWowMoment: !p,
                        children: g(),
                    }),
                }),
            }),
        });
    };
