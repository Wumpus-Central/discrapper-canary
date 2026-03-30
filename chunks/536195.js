n.d(t, { A: () => j });
var i = n(627968),
    s = n(64700),
    l = n(503698),
    a = n.n(l),
    r = n(827734),
    o = n(397927),
    d = n(793574),
    c = n(688810),
    u = n(927578),
    m = n(580630),
    _ = n(422936),
    g = n(234419),
    A = n(511484),
    x = n(356309),
    h = n(121304),
    p = n(788868),
    T = n(985018),
    f = n(705284),
    S = n(115292),
    E = n(799919);
let b = (e) => {
        let { includes: t } = e;
        return t
            ? (0, i.jsxs)(i.Fragment, {
                  children: [
                      (0, i.jsx)(o.BNr, { size: "sm", color: r.A.colors.TEXT_STRONG, "aria-hidden": !0 }),
                      (0, i.jsx)(o.AC4, { children: T.intl.string(T.t["tq+6t/"]) }),
                  ],
              })
            : (0, i.jsxs)(i.Fragment, {
                  children: [
                      (0, i.jsx)(o.aoi, { size: "xs", color: r.A.colors.TEXT_STRONG, "aria-hidden": !0 }),
                      (0, i.jsx)(o.AC4, { children: T.intl.string(T.t.l4qZrp) }),
                  ],
              });
    },
    C = (e) => {
        let { label: t, tier0ColumnData: n, tier2ColumnData: s, logoSrc: l, subtitle: r } = e;
        return (0, i.jsxs)("tr", {
            className: a()(f.nM, f.WQ),
            children: [
                (0, i.jsx)("th", {
                    scope: "row",
                    className: f.nx,
                    children:
                        null != l
                            ? (0, i.jsxs)("div", {
                                  className: f.aT,
                                  children: [
                                      (0, i.jsx)("img", { src: l, alt: "", className: f.Nj }),
                                      (0, i.jsx)(o.Text, {
                                          variant: "text-sm/medium",
                                          color: "text-subtle",
                                          children: r,
                                      }),
                                  ],
                              })
                            : (0, i.jsx)(o.Text, { variant: "text-md/medium", children: t }),
                }),
                (0, i.jsx)("td", {
                    className: f.Hn,
                    children:
                        null != n.text
                            ? (0, i.jsx)(o.Text, { variant: "text-md/medium", children: n.text })
                            : (0, i.jsx)(b, { includes: !!n.includes }),
                }),
                (0, i.jsx)("td", {
                    className: f.Hn,
                    children:
                        null != s.text
                            ? (0, i.jsx)(o.Text, { variant: "text-md/medium", children: s.text })
                            : (0, i.jsx)(b, { includes: !!s.includes }),
                }),
            ],
        });
    },
    v = (e) => {
        let { title: t, rows: n } = e;
        return (0, i.jsxs)("tbody", {
            children: [
                (0, i.jsx)("tr", {
                    className: a()(f.nM, f.Gf),
                    children: (0, i.jsx)("td", {
                        className: f.nx,
                        colSpan: 3,
                        children: (0, i.jsx)(o.Heading, { variant: "heading-lg/bold", children: t }),
                    }),
                }),
                n.map((e) => (0, i.jsx)(C, { ...e }, e.id)),
            ],
        });
    },
    N = (e) => {
        let { premiumType: t, priceString: n } = e,
            s = t === p.PremiumTypes.TIER_0 ? T.intl.string(T.t.tUbSDK) : T.intl.string(T.t.Ipxkog);
        return (0, i.jsxs)("div", {
            className: f.nn,
            children: [
                (0, i.jsxs)("div", {
                    className: f.KS,
                    children: [
                        (0, i.jsx)(o.tvc, { colorClass: f.oG }),
                        (0, i.jsx)(o.Heading, { variant: "heading-sm/semibold", children: s }),
                    ],
                }),
                (0, i.jsx)(o.Heading, { variant: "heading-sm/semibold", children: n }),
            ],
        });
    },
    I = (e) => {
        let { tier0Price: t, tier2Price: n, shouldUseDiscountPrice: s, tier2DiscountedPriceString: l } = e,
            a = s ? l : (0, m.$g)(n.amount, n.currency);
        return (0, i.jsx)("thead", {
            children: (0, i.jsxs)("tr", {
                className: f.U1,
                children: [
                    (0, i.jsx)("th", {
                        scope: "col",
                        className: f.Cr,
                        children: (0, i.jsx)(o.Heading, {
                            variant: "heading-xl/bold",
                            children: T.intl.string(T.t.ED4UVD),
                        }),
                    }),
                    (0, i.jsx)("th", {
                        scope: "col",
                        className: f.Hn,
                        children: (0, i.jsx)(N, {
                            premiumType: p.PremiumTypes.TIER_0,
                            priceString: (0, m.$g)(t.amount, t.currency),
                        }),
                    }),
                    (0, i.jsx)("th", {
                        scope: "col",
                        className: f.Hn,
                        children: (0, i.jsx)(N, { premiumType: p.PremiumTypes.TIER_2, priceString: a }),
                    }),
                ],
            }),
        });
    },
    j = (e) => {
        let t,
            { className: n, hidePill: l = !1, selectedPlanTier: r = p.PremiumTypes.TIER_2 } = e,
            { analyticsLocations: m } = (0, c.Ay)(d.A.PREMIUM_MARKETING_PLAN_COMPARISON),
            b = (0, g.V)(),
            C = b?.subscription_trial?.sku_id,
            N = (0, _.O)(),
            j = null != N && (0, A.U9)(N, p.pe.TIER_2),
            y = (0, A.N1)(p.gD.PREMIUM_MONTH_TIER_2),
            O = `${y}/${(0, u.FJ)(p.WT.MONTH)}`,
            R = (0, u.JM)(p.gD.PREMIUM_MONTH_TIER_0),
            L = (0, u.JM)(p.gD.PREMIUM_MONTH_TIER_2),
            P = (0, h.g)();
        if (l) t = null;
        else {
            let e = null != b ? T.intl.string(T.t.IBYG5U) : T.intl.string(T.t.TR2B4T);
            t = (0, i.jsx)(x.D, { className: a()(f.Io, f.SP), text: e });
        }
        let D = C === p.pe.TIER_0 || r === p.PremiumTypes.TIER_0;
        return (0, i.jsx)(c.f5, {
            value: m,
            children: (0, i.jsxs)("div", {
                className: a()(f.zr, n),
                children: [
                    (0, i.jsx)(o.Heading, {
                        className: f.Qw,
                        variant: "display-md",
                        color: "text-strong",
                        children: T.intl.string(T.t.DbPgAd),
                    }),
                    (0, i.jsxs)("div", {
                        className: f.wY,
                        children: [
                            (0, i.jsxs)("div", {
                                className: a()(f.fO, { [f.Vd]: D, [f.hA]: !D }),
                                children: [
                                    !D && t,
                                    (0, i.jsx)("div", { className: f.xQ }),
                                    (0, i.jsxs)("div", {
                                        className: f.wN,
                                        children: [
                                            (0, i.jsx)("img", { src: E, alt: "", className: f.kQ }),
                                            (0, i.jsx)("img", { src: S, alt: "", className: f.kQ }),
                                        ],
                                    }),
                                ],
                            }),
                            (0, i.jsxs)("table", {
                                className: f.tp,
                                children: [
                                    (0, i.jsx)(I, {
                                        tier0Price: R,
                                        tier2Price: L,
                                        shouldUseDiscountPrice: j,
                                        tier2DiscountedPriceString: O,
                                    }),
                                    P.map((e) => (0, s.createElement)(v, { ...e, key: e.id })),
                                ],
                            }),
                        ],
                    }),
                ],
            }),
        });
    };
