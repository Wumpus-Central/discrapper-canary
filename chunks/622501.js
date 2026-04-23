t.d(n, { A: () => U });
var i = t(627968),
    l = t(64700),
    r = t(503698),
    s = t.n(r),
    a = t(311907),
    o = t(364840),
    c = t(104510),
    u = t(827734),
    d = t(460905),
    p = t(183623),
    m = t(95635),
    _ = t(935462),
    f = t(430993),
    h = t(331322),
    g = t(123292),
    S = t(821609),
    x = t(793574),
    b = t(688810),
    I = t(532794),
    E = t(234419),
    A = t(811611),
    y = t(901017),
    P = t(773669),
    N = t(954571),
    v = t(252424),
    C = t(927578),
    T = t(580630),
    j = t(652215),
    M = t(788868),
    L = t(985018),
    R = t(213178);
function D(e) {
    let { shouldUpsellFromNoneTier: n } = e,
        t = (0, a.bG)([P.default], () => P.default.locale);
    return (0, i.jsxs)("div", {
        className: R.mH,
        children: [
            (0, i.jsx)(y.A, {
                icon: c._,
                iconClassName: R.pl,
                description: L.intl.formatToPlainString(L.t.sQBgs2, { numFreeGuildSubscriptions: M.M4 }),
                color: u.A.unsafe_rawColors.GUILD_BOOSTING_PINK.css,
            }),
            (0, i.jsx)(y.A, {
                icon: c._,
                iconClassName: R.pl,
                description: L.intl.formatToPlainString(L.t["1A6vXi"], { percent: (0, v.l9)(t, M.oX / 100) }),
                color: u.A.unsafe_rawColors.GUILD_BOOSTING_PINK.css,
            }),
            n ? (0, i.jsx)(y.A, { icon: d.n, iconClassName: R.zO, description: L.intl.string(L.t.Z9b2x2) }) : null,
            (0, i.jsx)(y.A, { icon: p.F, iconClassName: R.Kg, description: L.intl.string(L.t["8dqG5E"]) }),
            (0, i.jsx)(y.A, { icon: m.J, iconClassName: R.$z, description: L.intl.string(L.t.cBorIy) }),
        ],
    });
}
function U(e) {
    let {
            premiumSubscriptionPlan: n,
            onClose: t,
            onBack: r,
            onSkip: a,
            onSubscriptionConfirmation: c,
            analyticsLocation: u,
            analyticsSourceLocation: d,
            priceOptions: p,
        } = e,
        { analyticsLocations: m, sourceAnalyticsLocations: y } = (0, b.Ay)(x.A.GUILD_BOOSTING_PREMIUM_UPSELL),
        P = null == n || null == n.premiumSubscriptionType,
        v = C.Ay.getPrice(M.gD.PREMIUM_MONTH_TIER_2, !1, !1, p),
        U = (0, T.$g)(v.amount, v.currency),
        w = (0, E.V)(),
        k = w?.trial_id,
        O = w?.subscription_trial?.sku_id === M.pe.TIER_2;
    return (
        l.useEffect(() => {
            N.default.track(j.HAw.PREMIUM_UPSELL_VIEWED, { type: M.e.GUILD_PREMIUM_UPSELL_MODAL, location_stack: y });
        }, [y]),
        (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(_.s_, { "data-migration-pending": !0, onClick: t, className: R.b }),
                (0, i.jsxs)(f.c, {
                    children: [
                        O && (0, i.jsx)(A.Vq, { className: R.Fg }),
                        (0, i.jsx)("div", { className: s()(R.Tn, { [R.NH]: O }) }),
                        (0, i.jsx)("div", {
                            className: R.G3,
                            children:
                                null != k
                                    ? L.intl.string(L.t.AoSzEr)
                                    : L.intl.format(L.t["7vePZb"], { monthlyPrice: U }),
                        }),
                        (0, i.jsx)(D, { shouldUpsellFromNoneTier: P }),
                    ],
                }),
                (0, i.jsx)(o.j, {
                    children: (0, i.jsxs)(h.B, {
                        direction: "horizontal",
                        align: "center",
                        justify: "space-between",
                        fullWidth: !0,
                        children: [
                            (0, i.jsx)(g.Q, { text: L.intl.string(L.t["13/7kX"]), onClick: r, variant: "secondary" }),
                            (0, i.jsxs)(h.B, {
                                direction: "horizontal",
                                align: "center",
                                fullWidth: !1,
                                children: [
                                    (0, i.jsx)(g.Q, {
                                        text: L.intl.string(L.t["SI/adm"]),
                                        onClick: a,
                                        variant: "secondary",
                                    }),
                                    (0, i.jsx)(S.$, {
                                        variant: "active",
                                        text: null != k ? L.intl.string(L.t["Gd/XHF"]) : L.intl.string(L.t.p2moip),
                                        type: "submit",
                                        onClick: () => {
                                            t(),
                                                (0, I.A)({
                                                    initialPlanId: null,
                                                    subscriptionTier: M.pe.TIER_2,
                                                    analyticsLocations: m,
                                                    analyticsObject: {
                                                        ...u,
                                                        section: j.JJy.PREMIUM_GUILD_PURCHASE_MODAL,
                                                    },
                                                    analyticsSourceLocation: d,
                                                    onSubscriptionConfirmation: c,
                                                    trialId: k,
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
