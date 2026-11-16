n.d(e, { PremiumResubscribeModal: () => W });
var i,
    r = n(477900),
    a = n(582128),
    l = n(284009),
    s = n.n(l),
    o = n(688810),
    c = n(199453),
    u = n(418200),
    d = n(327113),
    m = n(448645),
    p = n(855986),
    y = n(772707),
    S = n(331322),
    C = n(834730),
    g = n(158032),
    h = n(136857),
    b = n(925847),
    x = n(773669),
    E = n(469778),
    I = n(129230),
    f = n(580630),
    A = n(501957),
    j = (((i = {})[(i.CONFIRM = 1)] = "CONFIRM"), (i[(i.SUCCESS = 2)] = "SUCCESS"), i),
    T = n(682901),
    v = n(652215),
    M = n(792996),
    k = n(977544);
let P = (t) => {
    let {
            analyticsLocations: e,
            onClose: n,
            transitionState: i,
            premiumSubscription: l,
            currentInvoicePreview: s,
            renewalInvoicePreview: o,
            fractionalPremiumInfo: c,
            setStep: u,
        } = t,
        d = (0, p.bG)([x.default], () => x.default.locale),
        P = new Date(o.subscriptionPeriodStart);
    l.isBoostOnly || (P = m.Ay.extendDateWithUnconsumedFractionalPremium(P, c.unactivatedUnits));
    let R = (0, p.bG)([E.A], () => E.A.getForApplication(T.tv)),
        U = (0, f.$g)(s.total, s.currency),
        [_, F] = (0, a.useState)(!1),
        [w, N] = (0, a.useState)(null),
        O = P.toLocaleDateString(d, { month: "long", day: "numeric", year: "numeric" }),
        D = a.useMemo(() => (0, b.A)(), []);
    a.useEffect(() => {
        I.default.track(v.HAw.PREMIUM_RESUBSCRIBE_FLOW_STARTED, { location_stack: e, load_id: D, ...(0, A.j)(l) });
    }, [e, l, D]);
    let G = [
            {
                text: M.intl.string(M.t["cY+Oob"]),
                onClick: () =>
                    (async function () {
                        (F(!0), N(null));
                        try {
                            (await g.Ir(l, e), u(j.SUCCESS));
                        } catch (t) {
                            N(t instanceof h.Ay ? t : new h.Ay(t));
                        } finally {
                            F(!1);
                        }
                    })(),
                variant: "primary",
                loading: _,
                disabled: _,
            },
        ],
        B = M.intl.format(M.t.dbGGui, { price: U, date: O }),
        L = l.premiumPlanIdFromItems;
    if (m.Ay.hasUnconsumedGiftForSubscriptionPlan(R, L)) {
        let t = (0, f.$g)(o.total, o.currency),
            e = m.Ay.getIntervalForInvoice(o),
            n = {
                discountedPrice: t,
                regularPrice: U,
                date: O,
                billingPeriod: m.Ay.getIntervalStringAsNoun(e.intervalType),
            };
        B = o.taxInclusive ? M.intl.format(M.t.G8IxyE, n) : M.intl.format(M.t.kXtIIn, n);
    }
    return (0, r.jsx)(y.k, {
        graphic: { type: "image", src: k.A },
        gradientColor: "nitro-pink",
        transitionState: i,
        title: M.intl.string(M.t.fYEWlq),
        actions: G,
        onClose: async () => n(),
        children: (0, r.jsxs)(S.B, {
            gap: 16,
            children: [
                (0, r.jsx)(C.E, { variant: "body-md/normal", children: B }),
                null != w
                    ? (0, r.jsx)(C.E, {
                          variant: "body-sm/normal",
                          color: "text-feedback-critical",
                          role: "alert",
                          children: w.message,
                      })
                    : null,
                (0, r.jsx)(C.E, { variant: "body-md/normal", children: M.intl.string(M.t.UQolSy) }),
            ],
        }),
    });
};
var R = n(935462),
    U = n(332030),
    _ = n(659746),
    F = n(585121),
    w = n(231308),
    N = n(926063);
function O(t) {
    let { onClose: e } = t,
        n = (0, r.jsx)(C.E, { className: N.h, variant: "body-md/normal", children: M.intl.string(M.t.FCsTCk) });
    return (0, r.jsx)(F.A, {
        type: _.Ay.Types.PREMIUM_ACTIVATED,
        text: n,
        buttonText: M.intl.string(M.t.TkTvBz),
        hideClose: !1,
        onClose: e,
    });
}
function D(t) {
    let { onClose: e } = t;
    return (0, r.jsx)(w.Ay, { planId: T.gD.PREMIUM_MONTH_TIER_0, onClose: e });
}
function G(t) {
    let { transitionState: e, onClose: n, premiumType: i } = t,
        a = i === T.PremiumTypes.TIER_0;
    return (0, r.jsxs)(R.EO, {
        "data-migration-pending": !0,
        className: N.z,
        transitionState: e,
        parentComponent: "ResubscribeSuccessStep",
        children: [
            (0, r.jsx)(U.A, { onClose: n, upgradeToPremiumType: i }),
            (0, r.jsx)(R.$m, { "data-migration-pending": !0, children: (0, r.jsx)(a ? D : O, { onClose: n }) }),
        ],
    });
}
let B = [],
    L = [];
function W(t) {
    let { analyticsLocations: e, premiumSubscription: n } = t,
        i = (0, m.EL)(n)?.planId,
        l = null != i ? (0, m.m6)(i) : null;
    s()(null != l, "Should not be resubscribing Nitro without premiumType");
    let p = l === T.PremiumTypes.TIER_0,
        [y, S] = a.useState(j.CONFIRM),
        C = a.useCallback(() => {
            switch (y) {
                case j.CONFIRM:
                    return (0, r.jsx)(P, { ...t, setStep: S });
                case j.SUCCESS:
                    return (0, r.jsx)(G, { ...t, premiumType: l });
                default:
                    return (0, r.jsx)(P, { ...t, setStep: S });
            }
        }, [y, t, l]);
    return (0, r.jsx)(o.f5, {
        value: e,
        children: (0, r.jsx)(c.M, {
            activeSubscription: n,
            stepConfigs: B,
            skuIDs: L,
            children: (0, r.jsx)(u.Mq, {
                children: (0, r.jsx)(d.A, {
                    isConfirmationStep: y === j.SUCCESS,
                    isEligibleForWowMoment: !p,
                    shouldPrefetchWowMoment: !p,
                    children: C(),
                }),
            }),
        }),
    });
}
