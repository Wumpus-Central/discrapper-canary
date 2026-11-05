n.d(e, { PremiumResubscribeModal: () => L });
var i,
    r = n(477900),
    s = n(582128),
    a = n(284009),
    l = n.n(a),
    o = n(688810),
    c = n(199453),
    u = n(418200),
    d = n(327113),
    m = n(722178),
    p = n(855986),
    S = n(772707),
    C = n(834730),
    y = n(683071),
    g = n(158032),
    h = n(925847),
    x = n(773669),
    I = n(469778),
    b = n(129230),
    E = n(580630),
    f = n(501957),
    j = (((i = {})[(i.CONFIRM = 1)] = "CONFIRM"), (i[(i.SUCCESS = 2)] = "SUCCESS"), i),
    A = n(682901),
    T = n(652215),
    M = n(792996),
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
        d = (0, p.bG)([x.default], () => x.default.locale),
        P = new Date(o.subscriptionPeriodStart);
    a.isBoostOnly || (P = m.Ay.extendDateWithUnconsumedFractionalPremium(P, c.unactivatedUnits));
    let R = (0, p.bG)([I.A], () => I.A.getForApplication(A.tv)),
        k = (0, E.$g)(l.total, l.currency),
        [U, _] = (0, s.useState)(!1),
        [F, w] = (0, s.useState)(!1),
        O = P.toLocaleDateString(d, { month: "long", day: "numeric", year: "numeric" }),
        N = s.useMemo(() => (0, h.A)(), []);
    s.useEffect(() => {
        b.default.track(T.HAw.PREMIUM_RESUBSCRIBE_FLOW_STARTED, { location_stack: e, load_id: N, ...(0, f.j)(a) });
    }, [e, a, N]);
    let D = [
            {
                text: M.intl.string(M.t["cY+Oob"]),
                onClick: () =>
                    (async function () {
                        (_(!0), w(!1));
                        try {
                            (await g.Ir(a, e), u(j.SUCCESS));
                        } catch (t) {
                            (w(!0), _(!1));
                        }
                    })(),
                variant: "primary",
                loading: U,
                disabled: U,
            },
        ],
        G = M.intl.format(M.t.dbGGui, { price: k, date: O }),
        W = a.premiumPlanIdFromItems;
    if (m.Ay.hasUnconsumedGiftForSubscriptionPlan(R, W)) {
        let t = (0, E.$g)(o.total, o.currency),
            e = m.Ay.getIntervalForInvoice(o),
            n = {
                discountedPrice: t,
                regularPrice: k,
                date: O,
                billingPeriod: m.Ay.getIntervalStringAsNoun(e.intervalType),
            };
        G = o.taxInclusive ? M.intl.format(M.t.G8IxyE, n) : M.intl.format(M.t.kXtIIn, n);
    }
    return (0, r.jsxs)(S.k, {
        graphic: { type: "image", src: v.A },
        gradientColor: "nitro-pink",
        transitionState: i,
        title: M.intl.string(M.t.fYEWlq),
        actions: D,
        onClose: async () => n(),
        children: [
            (0, r.jsxs)(C.E, {
                variant: "body-md/normal",
                style: { textAlign: "center" },
                children: [(0, r.jsx)("p", { children: G }), (0, r.jsx)("p", { children: M.intl.string(M.t.UQolSy) })],
            }),
            F ? (0, r.jsx)(y.w, { type: "critical", message: M.intl.string(M.t["5mlOCW"]), role: "alert" }) : null,
        ],
    });
};
var R = n(935462),
    k = n(332030),
    U = n(659746),
    _ = n(585121),
    F = n(231308),
    w = n(926063);
function O(t) {
    let { onClose: e } = t,
        n = (0, r.jsx)(C.E, { className: w.h, variant: "body-md/normal", children: M.intl.string(M.t.FCsTCk) });
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
    return (0, r.jsx)(F.Ay, { planId: A.gD.PREMIUM_MONTH_TIER_0, onClose: e });
}
function D(t) {
    let { transitionState: e, onClose: n, premiumType: i } = t,
        s = i === A.PremiumTypes.TIER_0;
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
}
let G = [],
    W = [];
function L(t) {
    let { analyticsLocations: e, premiumSubscription: n } = t,
        i = (0, m.EL)(n)?.planId,
        a = null != i ? (0, m.m6)(i) : null;
    l()(null != a, "Should not be resubscribing Nitro without premiumType");
    let p = a === A.PremiumTypes.TIER_0,
        [S, C] = s.useState(j.CONFIRM),
        y = s.useCallback(() => {
            switch (S) {
                case j.CONFIRM:
                    return (0, r.jsx)(P, { ...t, setStep: C });
                case j.SUCCESS:
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
                    isConfirmationStep: S === j.SUCCESS,
                    isEligibleForWowMoment: !p,
                    shouldPrefetchWowMoment: !p,
                    children: y(),
                }),
            }),
        }),
    });
}
