"use strict";
n.d(t, { A: () => j });
var i = n(627968),
    r = n(64700),
    a = n(503698),
    l = n.n(a),
    s = n(311907),
    o = n(364840),
    c = n(104510),
    d = n(827734),
    u = n(460905),
    _ = n(183623),
    p = n(95635),
    m = n(935462),
    h = n(430993),
    f = n(331322),
    b = n(123292),
    g = n(821609),
    A = n(793574),
    E = n(688810),
    x = n(532794),
    I = n(234419),
    v = n(811611),
    S = n(901017),
    C = n(773669),
    T = n(954571),
    y = n(252424),
    N = n(927578),
    R = n(580630),
    P = n(652215),
    w = n(788868),
    L = n(985018),
    O = n(213178);
function M(e) {
    let { shouldUpsellFromNoneTier: t } = e,
        n = (0, s.bG)([C.default], () => C.default.locale);
    return (0, i.jsxs)("div", {
        className: O.mH,
        children: [
            (0, i.jsx)(S.A, {
                icon: c._,
                iconClassName: O.pl,
                description: L.intl.formatToPlainString(L.t.sQBgs2, { numFreeGuildSubscriptions: w.M4 }),
                color: d.A.unsafe_rawColors.GUILD_BOOSTING_PINK.css,
            }),
            (0, i.jsx)(S.A, {
                icon: c._,
                iconClassName: O.pl,
                description: L.intl.formatToPlainString(L.t["1A6vXi"], { percent: (0, y.l9)(n, w.oX / 100) }),
                color: d.A.unsafe_rawColors.GUILD_BOOSTING_PINK.css,
            }),
            t ? (0, i.jsx)(S.A, { icon: u.n, iconClassName: O.zO, description: L.intl.string(L.t.Z9b2x2) }) : null,
            (0, i.jsx)(S.A, { icon: _.F, iconClassName: O.Kg, description: L.intl.string(L.t["8dqG5E"]) }),
            (0, i.jsx)(S.A, { icon: p.J, iconClassName: O.$z, description: L.intl.string(L.t.cBorIy) }),
        ],
    });
}
function j(e) {
    let {
            premiumSubscriptionPlan: t,
            onClose: n,
            onBack: a,
            onSkip: s,
            onSubscriptionConfirmation: c,
            analyticsLocation: d,
            analyticsSourceLocation: u,
            priceOptions: _,
        } = e,
        { analyticsLocations: p, sourceAnalyticsLocations: S } = (0, E.Ay)(A.A.GUILD_BOOSTING_PREMIUM_UPSELL),
        C = null == t || null == t.premiumSubscriptionType,
        y = N.Ay.getPrice(w.gD.PREMIUM_MONTH_TIER_2, !1, !1, _),
        j = (0, R.$g)(y.amount, y.currency),
        U = (0, I.V)(),
        D = U?.trial_id,
        k = U?.subscription_trial?.sku_id === w.pe.TIER_2;
    return (
        r.useEffect(() => {
            T.default.track(P.HAw.PREMIUM_UPSELL_VIEWED, { type: w.e.GUILD_PREMIUM_UPSELL_MODAL, location_stack: S });
        }, [S]),
        (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(m.s_, { "data-migration-pending": !0, onClick: n, className: O.b }),
                (0, i.jsxs)(h.c, {
                    children: [
                        k && (0, i.jsx)(v.Vq, { className: O.Fg }),
                        (0, i.jsx)("div", { className: l()(O.Tn, { [O.NH]: k }) }),
                        (0, i.jsx)("div", {
                            className: O.G3,
                            children:
                                null != D
                                    ? L.intl.string(L.t.AoSzEr)
                                    : L.intl.format(L.t["7vePZb"], { monthlyPrice: j }),
                        }),
                        (0, i.jsx)(M, { shouldUpsellFromNoneTier: C }),
                    ],
                }),
                (0, i.jsx)(o.j, {
                    children: (0, i.jsxs)(f.B, {
                        direction: "horizontal",
                        align: "center",
                        justify: "space-between",
                        fullWidth: !0,
                        children: [
                            (0, i.jsx)(b.Q, { text: L.intl.string(L.t["13/7kX"]), onClick: a, variant: "secondary" }),
                            (0, i.jsxs)(f.B, {
                                direction: "horizontal",
                                align: "center",
                                fullWidth: !1,
                                children: [
                                    (0, i.jsx)(b.Q, {
                                        text: L.intl.string(L.t["SI/adm"]),
                                        onClick: s,
                                        variant: "secondary",
                                    }),
                                    (0, i.jsx)(g.$, {
                                        variant: "active",
                                        text: null != D ? L.intl.string(L.t["Gd/XHF"]) : L.intl.string(L.t.p2moip),
                                        type: "submit",
                                        onClick: () => {
                                            n(),
                                                (0, x.A)({
                                                    initialPlanId: null,
                                                    subscriptionTier: w.pe.TIER_2,
                                                    analyticsLocations: p,
                                                    analyticsObject: {
                                                        ...d,
                                                        section: P.JJy.PREMIUM_GUILD_PURCHASE_MODAL,
                                                    },
                                                    analyticsSourceLocation: u,
                                                    onSubscriptionConfirmation: c,
                                                    trialId: D,
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
