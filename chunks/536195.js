n.d(t, { A: () => v });
var i = n(627968),
    s = n(64700),
    a = n(503698),
    l = n.n(a),
    r = n(827734),
    o = n(397927),
    c = n(793574),
    d = n(688810),
    u = n(927578),
    _ = n(580630),
    m = n(422936),
    A = n(234419),
    g = n(511484),
    h = n(356309),
    x = n(121304),
    p = n(788868),
    E = n(985018),
    C = n(870143),
    T = n(115292),
    S = n(799919);
let I = (e) => {
        let { includes: t } = e;
        return t
            ? (0, i.jsxs)(i.Fragment, {
                  children: [
                      (0, i.jsx)(o.BNr, { size: "sm", color: r.A.colors.TEXT_STRONG, "aria-hidden": !0 }),
                      (0, i.jsx)(o.AC4, { children: E.intl.string(E.t["tq+6t/"]) }),
                  ],
              })
            : (0, i.jsxs)(i.Fragment, {
                  children: [
                      (0, i.jsx)(o.aoi, { size: "xs", color: r.A.colors.TEXT_STRONG, "aria-hidden": !0 }),
                      (0, i.jsx)(o.AC4, { children: E.intl.string(E.t.l4qZrp) }),
                  ],
              });
    },
    f = (e) => {
        let { label: t, tier0ColumnData: n, tier2ColumnData: s } = e;
        return (0, i.jsxs)("tr", {
            className: l()(C.nM, C.WQ),
            children: [
                (0, i.jsx)("th", {
                    scope: "row",
                    className: C.nx,
                    children: (0, i.jsx)(o.Text, { variant: "text-md/medium", children: t }),
                }),
                (0, i.jsx)("td", {
                    className: C.Hn,
                    children:
                        null != n.text
                            ? (0, i.jsx)(o.Text, { variant: "text-md/medium", children: n.text })
                            : (0, i.jsx)(I, { includes: !!n.includes }),
                }),
                (0, i.jsx)("td", {
                    className: C.Hn,
                    children:
                        null != s.text
                            ? (0, i.jsx)(o.Text, { variant: "text-md/medium", children: s.text })
                            : (0, i.jsx)(I, { includes: !!s.includes }),
                }),
            ],
        });
    },
    N = (e) => {
        let { title: t, rows: n } = e;
        return (0, i.jsxs)("tbody", {
            children: [
                (0, i.jsx)("tr", {
                    className: l()(C.nM, C.Gf),
                    children: (0, i.jsx)("td", {
                        className: C.nx,
                        colSpan: 3,
                        children: (0, i.jsx)(o.Heading, { variant: "heading-lg/bold", children: t }),
                    }),
                }),
                n.map((e) => (0, i.jsx)(f, { ...e }, e.id)),
            ],
        });
    },
    b = (e) => {
        let { premiumType: t, priceString: n } = e,
            s = t === p.PremiumTypes.TIER_0 ? E.intl.string(E.t.tUbSDK) : E.intl.string(E.t.Ipxkog);
        return (0, i.jsxs)("div", {
            className: C.nn,
            children: [
                (0, i.jsxs)("div", {
                    className: C.KS,
                    children: [
                        (0, i.jsx)(o.tvc, { colorClass: C.oG }),
                        (0, i.jsx)(o.Heading, { variant: "heading-sm/semibold", children: s }),
                    ],
                }),
                (0, i.jsx)(o.Heading, { variant: "heading-sm/semibold", children: n }),
            ],
        });
    },
    j = (e) => {
        let { tier0Price: t, tier2Price: n, shouldUseDiscountPrice: s, tier2DiscountedPriceString: a } = e,
            l = s ? a : (0, _.$g)(n.amount, n.currency);
        return (0, i.jsx)("thead", {
            children: (0, i.jsxs)("tr", {
                className: C.U1,
                children: [
                    (0, i.jsx)("th", {
                        scope: "col",
                        className: C.Cr,
                        children: (0, i.jsx)(o.Heading, {
                            variant: "heading-xl/bold",
                            children: E.intl.string(E.t.ED4UVD),
                        }),
                    }),
                    (0, i.jsx)("th", {
                        scope: "col",
                        className: C.Hn,
                        children: (0, i.jsx)(b, {
                            premiumType: p.PremiumTypes.TIER_0,
                            priceString: (0, _.$g)(t.amount, t.currency),
                        }),
                    }),
                    (0, i.jsx)("th", {
                        scope: "col",
                        className: C.Hn,
                        children: (0, i.jsx)(b, { premiumType: p.PremiumTypes.TIER_2, priceString: l }),
                    }),
                ],
            }),
        });
    },
    v = (e) => {
        let t,
            { className: n, hidePill: a = !1, selectedPlanTier: r = p.PremiumTypes.TIER_2 } = e,
            { analyticsLocations: _ } = (0, d.Ay)(c.A.PREMIUM_MARKETING_PLAN_COMPARISON),
            I = (0, A.V)(),
            f = I?.subscription_trial?.sku_id,
            b = (0, m.O)(),
            v = null != b && (0, g.U9)(b, p.pe.TIER_2),
            O = (0, g.N1)(p.gD.PREMIUM_MONTH_TIER_2),
            R = `${O}/${(0, u.FJ)(p.WT.MONTH)}`,
            y = (0, u.JM)(p.gD.PREMIUM_MONTH_TIER_0),
            P = (0, u.JM)(p.gD.PREMIUM_MONTH_TIER_2),
            L = (0, x.g)();
        if (a) t = null;
        else {
            let e = null != I ? E.intl.string(E.t.IBYG5U) : E.intl.string(E.t.TR2B4T);
            t = (0, i.jsx)(h.D, { className: l()(C.Io, C.SP), text: e });
        }
        let D = f === p.pe.TIER_0 || r === p.PremiumTypes.TIER_0;
        return (0, i.jsx)(d.f5, {
            value: _,
            children: (0, i.jsxs)("div", {
                className: l()(C.zr, n),
                children: [
                    (0, i.jsx)(o.Heading, {
                        className: C.Qw,
                        variant: "display-md",
                        color: "text-strong",
                        children: E.intl.string(E.t.DbPgAd),
                    }),
                    (0, i.jsxs)("div", {
                        className: C.wY,
                        children: [
                            (0, i.jsxs)("div", {
                                className: l()(C.fO, { [C.Vd]: D, [C.hA]: !D }),
                                children: [
                                    !D && t,
                                    (0, i.jsx)("div", { className: C.xQ }),
                                    (0, i.jsxs)("div", {
                                        className: C.wN,
                                        children: [
                                            (0, i.jsx)("img", { src: S, alt: "", className: C.kQ }),
                                            (0, i.jsx)("img", { src: T, alt: "", className: C.kQ }),
                                        ],
                                    }),
                                ],
                            }),
                            (0, i.jsxs)("table", {
                                className: C.tp,
                                children: [
                                    (0, i.jsx)(j, {
                                        tier0Price: y,
                                        tier2Price: P,
                                        shouldUseDiscountPrice: v,
                                        tier2DiscountedPriceString: R,
                                    }),
                                    L.map((e) => (0, s.createElement)(N, { ...e, key: e.id })),
                                ],
                            }),
                        ],
                    }),
                ],
            }),
        });
    };
