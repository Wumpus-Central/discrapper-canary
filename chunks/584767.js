n.d(t, { A: () => G });
var i = n(627968),
    s = n(64700),
    r = n(503698),
    a = n.n(r),
    l = n(311907),
    o = n(582754),
    c = n(397927),
    d = n(736653),
    u = n(793574),
    _ = n(688810),
    m = n(160946),
    A = n(166403),
    g = n(927578),
    E = n(422936),
    h = n(234419),
    p = n(511484),
    C = n(121304),
    x = n(788868),
    T = n(985018),
    I = n(976543),
    S = n(196093),
    f = n(979653),
    N = n(255631),
    b = n(193023);
let R = () =>
        (0, i.jsx)("div", {
            className: I.Zr,
            children: (0, i.jsx)(c.Heading, {
                className: I.uC,
                variant: "text-xs/bold",
                children: T.intl.string(T.t.TR2B4T),
            }),
        }),
    v = () =>
        (0, i.jsx)("div", {
            className: I.Zr,
            children: (0, i.jsx)(c.Heading, {
                className: I.uC,
                variant: "heading-deprecated-12/extrabold",
                children: T.intl.string(T.t.IBYG5U),
            }),
        }),
    O = (e) => {
        let { text: t, badge: n, variant: s } = e;
        return (0, i.jsxs)(c.Text, {
            color: "none",
            variant: s ?? "text-md/medium",
            className: I.wb,
            children: [t, null != n && (0, i.jsxs)(i.Fragment, { children: [" ", n] })],
        });
    },
    j = (e) => {
        let { isIncluded: t, isTier0: n } = e;
        return t
            ? (0, i.jsxs)(i.Fragment, {
                  children: [
                      (0, i.jsx)(c.A9s, {
                          size: "md",
                          color: "currentColor",
                          className: n ? I.M0 : I.PE,
                          "aria-hidden": !0,
                      }),
                      (0, i.jsx)(c.AC4, { children: T.intl.string(T.t["tq+6t/"]) }),
                  ],
              })
            : (0, i.jsxs)(i.Fragment, {
                  children: [
                      (0, i.jsx)(c.PGe, { size: "md", color: "currentColor", className: I.ut, "aria-hidden": !0 }),
                      (0, i.jsx)(c.AC4, { children: T.intl.string(T.t.l4qZrp) }),
                  ],
              });
    },
    P = (e) => {
        let { label: t, tier0ColumnData: n, tier2ColumnData: s, withBottomMargin: r } = e;
        return (0, i.jsxs)("tr", {
            className: a()(I.nM, I.YI, { [I.ML]: r }),
            children: [
                (0, i.jsx)("th", { scope: "row", className: I.nx, children: (0, i.jsx)(O, { text: t }) }),
                (0, i.jsx)("td", {
                    className: I.Hn,
                    children:
                        null != n.text
                            ? (0, i.jsx)(O, { text: n.text })
                            : (0, i.jsx)(j, { isIncluded: !!n.includes, isTier0: !0 }),
                }),
                (0, i.jsx)("td", {
                    className: I.Hn,
                    children:
                        null != s.text ? (0, i.jsx)(O, { text: s.text }) : (0, i.jsx)(j, { isIncluded: !!s.includes }),
                }),
            ],
        });
    },
    y = (e) => {
        let { title: t, rows: n } = e;
        return (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsxs)("tr", {
                    className: I.nM,
                    children: [
                        (0, i.jsx)("th", {
                            scope: "row",
                            className: I.nx,
                            children: (0, i.jsx)(O, { text: t, variant: "text-lg/bold" }),
                        }),
                        (0, i.jsx)("td", {}),
                        (0, i.jsx)("td", {}),
                    ],
                }),
                n.map((e, t) => (0, i.jsx)(P, { ...e, withBottomMargin: t === n.length - 1 }, e.id)),
            ],
        });
    },
    L = (e) => {
        let t,
            { premiumType: n } = e,
            s = (0, d.Ay)();
        t = n === x.PremiumTypes.TIER_0 ? ((0, o.Mw)(s) ? S : f) : (0, o.Mw)(s) ? N : b;
        let r = (0, g.Dd)(n);
        return (0, i.jsx)("img", { src: t, className: I.wm, alt: r });
    },
    D = () =>
        (0, i.jsx)("thead", {
            children: (0, i.jsxs)("tr", {
                className: a()(I.U1, I.Y9),
                children: [
                    (0, i.jsx)("th", {
                        scope: "col",
                        className: I.Cr,
                        children: (0, i.jsx)(c.Heading, {
                            className: I.__invalid_textColor,
                            variant: "heading-xl/semibold",
                            children: T.intl.string(T.t.XXENra),
                        }),
                    }),
                    (0, i.jsx)("th", {
                        scope: "col",
                        className: I.e4,
                        children: (0, i.jsx)(L, { premiumType: x.PremiumTypes.TIER_0 }),
                    }),
                    (0, i.jsx)("th", {
                        scope: "col",
                        className: a()(I.e4, I.Y9),
                        children: (0, i.jsx)(L, { premiumType: x.PremiumTypes.TIER_2 }),
                    }),
                ],
            }),
        }),
    M = (e) => {
        let {
            tier0MonthlyPrice: t,
            tier2MonthlyPrice: n,
            shouldUseDiscountPrice: s,
            tier2DiscountedPriceString: r,
        } = e;
        return (0, i.jsxs)("tr", {
            className: a()(I.nM, I.YI, I.ML),
            children: [
                (0, i.jsx)("th", {
                    scope: "row",
                    className: I.nx,
                    children: (0, i.jsx)(O, { text: T.intl.string(T.t["09yRK3"]), variant: "text-lg/bold" }),
                }),
                (0, i.jsx)("td", {
                    className: I.Hn,
                    children: (0, i.jsx)(O, { text: g.Ay.formatPriceString(t, x.WT.MONTH) }),
                }),
                (0, i.jsx)("td", {
                    className: I.Hn,
                    children: (0, i.jsx)(O, { text: s ? r : g.Ay.formatPriceString(n, x.WT.MONTH) }),
                }),
            ],
        });
    },
    G = (e) => {
        let t,
            {
                className: n,
                hidePill: r = !1,
                selectedPlanColumnClassName: o,
                selectedPlanTier: c = x.PremiumTypes.TIER_2,
            } = e,
            { analyticsLocations: d } = (0, _.Ay)(u.A.PREMIUM_MARKETING_PLAN_COMPARISON),
            T = (0, l.bG)([A.A], () => A.A.hasFetchedSubscriptions()),
            S = (0, m.Y)(x.T7),
            f = (0, h.V)(),
            N = f?.subscription_trial?.sku_id,
            b = (0, E.O)(),
            O = null != b && (0, p.U9)(b, x.pe.TIER_2),
            j = (0, p.N1)(x.gD.PREMIUM_MONTH_TIER_2),
            P = `${j}/${(0, g.FJ)(x.WT.MONTH)}`,
            L = (0, g.JM)(x.gD.PREMIUM_MONTH_TIER_0),
            G = (0, g.JM)(x.gD.PREMIUM_MONTH_TIER_2),
            U = (0, C.g)();
        if (!T || !S) return null;
        t = r ? null : null != f ? (0, i.jsx)(v, {}) : (0, i.jsx)(R, {});
        let k = N === x.pe.TIER_0 || c === x.PremiumTypes.TIER_0;
        return (0, i.jsx)(_.f5, {
            value: d,
            children: (0, i.jsx)("div", {
                className: a()(I.zr, n),
                "data-testid": "application-home-marketing-page-comparison-table",
                children: (0, i.jsxs)("div", {
                    className: I.wY,
                    children: [
                        (0, i.jsxs)("div", {
                            className: a()(o, { [I.sO]: k, [I.Yr]: !k }),
                            children: [!k && t, (0, i.jsx)("div", { className: a()({ [I.A9]: k, [I.ce]: !k }) })],
                        }),
                        (0, i.jsxs)("table", {
                            className: I.tp,
                            children: [
                                (0, i.jsx)(D, {}),
                                (0, i.jsxs)("tbody", {
                                    children: [
                                        (0, i.jsx)(M, {
                                            tier0MonthlyPrice: L,
                                            tier2MonthlyPrice: G,
                                            shouldUseDiscountPrice: O,
                                            tier2DiscountedPriceString: P,
                                        }),
                                        U.map((e) => (0, s.createElement)(y, { ...e, key: e.id })),
                                    ],
                                }),
                            ],
                        }),
                    ],
                }),
            }),
        });
    };
