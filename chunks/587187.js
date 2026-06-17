"use strict";
n.d(t, { d: () => W });
var i = n(627968),
    r = n(64700),
    s = n(284009),
    a = n.n(s),
    o = n(17928),
    l = n(655857),
    u = n(211159),
    c = n(166532),
    d = n(97352),
    _ = n(615396),
    h = n(503698),
    f = n.n(h),
    p = n(364840),
    E = n(104510),
    m = n(661531),
    g = n(460905),
    A = n(183623),
    I = n(95635),
    T = n(935462),
    S = n(430993),
    y = n(331322),
    C = n(123292),
    N = n(821609),
    v = n(793574),
    R = n(688810),
    O = n(532794),
    b = n(234419),
    D = n(811611),
    L = n(901017),
    w = n(773669),
    M = n(174459),
    P = n(252424),
    x = n(428262),
    k = n(580630),
    U = n(652215),
    G = n(788868),
    F = n(375708),
    V = n(403052);
function B(e) {
    let { shouldUpsellFromNoneTier: t } = e,
        n = (0, o.bG)([w.default], () => w.default.locale);
    return (0, i.jsxs)("div", {
        className: V.mH,
        children: [
            (0, i.jsx)(L.A, {
                icon: E._,
                iconClassName: V.pl,
                description: F.intl.formatToPlainString(F.t.sQBgs2, { numFreeGuildSubscriptions: G.M4 }),
                color: m.A.unsafe_rawColors.GUILD_BOOSTING_PINK.css,
            }),
            (0, i.jsx)(L.A, {
                icon: E._,
                iconClassName: V.pl,
                description: F.intl.formatToPlainString(F.t["1A6vXi"], { percent: (0, P.l9)(n, G.oX / 100) }),
                color: m.A.unsafe_rawColors.GUILD_BOOSTING_PINK.css,
            }),
            t ? (0, i.jsx)(L.A, { icon: g.n, iconClassName: V.zO, description: F.intl.string(F.t.Z9b2x2) }) : null,
            (0, i.jsx)(L.A, { icon: A.F, iconClassName: V.Kg, description: F.intl.string(F.t["8dqG5E"]) }),
            (0, i.jsx)(L.A, { icon: I.J, iconClassName: V.$z, description: F.intl.string(F.t.cBorIy) }),
        ],
    });
}
function j(e) {
    let {
            premiumSubscriptionPlan: t,
            onClose: n,
            onBack: s,
            onSkip: a,
            onSubscriptionConfirmation: o,
            analyticsLocation: l,
            analyticsSourceLocation: u,
            priceOptions: c,
        } = e,
        { analyticsLocations: d, sourceAnalyticsLocations: _ } = (0, R.Ay)(v.A.GUILD_BOOSTING_PREMIUM_UPSELL),
        h = null == t || null == t.premiumSubscriptionType,
        E = x.Ay.getPrice(G.gD.PREMIUM_MONTH_TIER_2, !1, !1, c),
        m = (0, k.$g)(E.amount, E.currency),
        g = (0, b.V)(),
        A = g?.trial_id,
        I = g?.subscription_trial?.sku_id === G.pe.TIER_2;
    return (
        r.useEffect(() => {
            M.default.track(U.HAw.PREMIUM_UPSELL_VIEWED, { type: G.e.GUILD_PREMIUM_UPSELL_MODAL, location_stack: _ });
        }, [_]),
        (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(T.s_, { "data-migration-pending": !0, onClick: n, className: V.b }),
                (0, i.jsxs)(S.c, {
                    children: [
                        I && (0, i.jsx)(D.Vq, { className: V.Fg }),
                        (0, i.jsx)("div", { className: f()(V.Tn, { [V.NH]: I }) }),
                        (0, i.jsx)("div", {
                            className: V.G3,
                            children:
                                null != A
                                    ? F.intl.string(F.t.AoSzEr)
                                    : F.intl.format(F.t["7vePZb"], { monthlyPrice: m }),
                        }),
                        (0, i.jsx)(B, { shouldUpsellFromNoneTier: h }),
                    ],
                }),
                (0, i.jsx)(p.j, {
                    children: (0, i.jsxs)(y.B, {
                        direction: "horizontal",
                        align: "center",
                        justify: "space-between",
                        fullWidth: !0,
                        children: [
                            (0, i.jsx)(C.Q, { text: F.intl.string(F.t["13/7kX"]), onClick: s, variant: "secondary" }),
                            (0, i.jsxs)(y.B, {
                                direction: "horizontal",
                                align: "center",
                                fullWidth: !1,
                                children: [
                                    (0, i.jsx)(C.Q, {
                                        text: F.intl.string(F.t["SI/adm"]),
                                        onClick: a,
                                        variant: "secondary",
                                    }),
                                    (0, i.jsx)(N.$, {
                                        variant: "active",
                                        text: null != A ? F.intl.string(F.t["Gd/XHF"]) : F.intl.string(F.t.p2moip),
                                        type: "submit",
                                        onClick: () => {
                                            n(),
                                                (0, O.A)({
                                                    initialPlanId: null,
                                                    subscriptionTier: G.pe.TIER_2,
                                                    analyticsLocations: d,
                                                    analyticsObject: {
                                                        ...l,
                                                        section: U.JJy.PREMIUM_GUILD_PURCHASE_MODAL,
                                                    },
                                                    analyticsSourceLocation: u,
                                                    onSubscriptionConfirmation: o,
                                                    trialId: A,
                                                });
                                        },
                                    }),
                                ],
                            }),
                        ],
                    }),
                }),
            ],
        })
    );
}
var H = n(526151),
    Y = n(469633);
function W(e) {
    let { handleClose: t, handleStepChange: n, onSubscriptionConfirmation: s } = e,
        { paymentModalArgs: h, analyticsLocation: f, analyticsSourceLocation: p } = (0, H.Oe)(),
        { paymentSourceId: E, activeSubscription: m } = (0, u.t4)((e) => ({
            paymentSourceId: e.paymentSourceId,
            activeSubscription: e.activeSubscription,
        })),
        { displayCurrency: g } = (0, l.Jn)(),
        A = (0, o.bG)([d.A], () => (null != m ? (0, _.c9)(m.planId) : null)),
        I = (0, o.bG)([d.A], () => (null == A ? d.A.get(Y.Z) : A));
    a()(null != I, "Missing nextPremiumSubscriptionPlan"), a()(null != g && "" !== g, "Currency not defined");
    let { paymentSources: T } = h,
        S = null != m ? m.paymentSourceId : null,
        y = Object.keys(T).length > 0,
        C = r.useCallback(() => n(c.pn.PLAN_SELECT), [n]),
        N = r.useCallback(() => n(null != S || y ? c.pn.REVIEW : c.pn.ADD_PAYMENT_STEPS), [n, S, y]);
    return (0, i.jsx)(j, {
        premiumSubscriptionPlan: I,
        analyticsLocation: f,
        analyticsSourceLocation: p,
        onClose: t,
        onBack: C,
        onSkip: N,
        onSubscriptionConfirmation: s,
        priceOptions: null != E ? { paymentSourceId: E, currency: g } : { currency: g },
    });
}
