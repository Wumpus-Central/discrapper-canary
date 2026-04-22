s.d(t, { A: () => k });
var r = s(627968),
    a = s(64700),
    i = s(503698),
    n = s.n(i),
    l = s(827734),
    o = s(820081),
    c = s(140735),
    d = s(401432),
    m = s(834730),
    u = s(534514),
    _ = s(403581),
    x = s(793574),
    p = s(688810),
    g = s(927578),
    h = s(580630),
    f = s(422936),
    C = s(234419),
    b = s(511484),
    j = s(795269),
    A = s(121304),
    N = s(788868),
    I = s(985018),
    T = s(17844),
    v = s(115292),
    E = s(799919);
let R = (e) => {
        let { includes: t } = e;
        return t
            ? (0, r.jsxs)(r.Fragment, {
                  children: [
                      (0, r.jsx)(o.B, { size: "sm", color: l.A.colors.TEXT_STRONG, "aria-hidden": !0 }),
                      (0, r.jsx)(c.A, { children: I.intl.string(I.t["tq+6t/"]) }),
                  ],
              })
            : (0, r.jsxs)(r.Fragment, {
                  children: [
                      (0, r.jsx)(d.a, { size: "xs", color: l.A.colors.TEXT_STRONG, "aria-hidden": !0 }),
                      (0, r.jsx)(c.A, { children: I.intl.string(I.t.l4qZrp) }),
                  ],
              });
    },
    M = (e) => {
        let { label: t, tier0ColumnData: s, tier2ColumnData: a } = e;
        return (0, r.jsxs)("tr", {
            className: n()(T.nM, T.WQ),
            children: [
                (0, r.jsx)("th", {
                    scope: "row",
                    className: T.nx,
                    children: (0, r.jsx)(m.E, { variant: "text-md/medium", children: t }),
                }),
                (0, r.jsx)("td", {
                    className: T.Hn,
                    children:
                        null != s.text
                            ? (0, r.jsx)(m.E, { variant: "text-md/medium", children: s.text })
                            : (0, r.jsx)(R, { includes: !!s.includes }),
                }),
                (0, r.jsx)("td", {
                    className: T.Hn,
                    children:
                        null != a.text
                            ? (0, r.jsx)(m.E, { variant: "text-md/medium", children: a.text })
                            : (0, r.jsx)(R, { includes: !!a.includes }),
                }),
            ],
        });
    },
    S = (e) => {
        let { title: t, subtitle: s, rows: a } = e;
        return (0, r.jsxs)("tbody", {
            children: [
                (0, r.jsx)("tr", {
                    className: n()(T.nM, T.Gf),
                    children: (0, r.jsxs)("td", {
                        className: T.nx,
                        colSpan: 3,
                        children: [
                            (0, r.jsx)(u.D, { variant: "heading-lg/bold", children: t }),
                            null != s && (0, r.jsx)(m.E, { variant: "text-xs/medium", children: s }),
                        ],
                    }),
                }),
                a.map((e) => (0, r.jsx)(M, { ...e }, e.id)),
            ],
        });
    },
    y = (e) => {
        let { premiumType: t, priceString: s } = e,
            a = t === N.PremiumTypes.TIER_0 ? I.intl.string(I.t.tUbSDK) : I.intl.string(I.t.Ipxkog);
        return (0, r.jsxs)("div", {
            className: T.nn,
            children: [
                (0, r.jsxs)("div", {
                    className: T.KS,
                    children: [
                        (0, r.jsx)(_.t, { colorClass: T.oG }),
                        (0, r.jsx)(u.D, { variant: "heading-sm/semibold", children: a }),
                    ],
                }),
                (0, r.jsx)(u.D, { variant: "heading-sm/semibold", children: s }),
            ],
        });
    },
    P = (e) => {
        let { tier0Price: t, tier2Price: s, shouldUseDiscountPrice: a, tier2DiscountedPriceString: i } = e,
            n = a ? i : (0, h.$g)(s.amount, s.currency);
        return (0, r.jsx)("thead", {
            children: (0, r.jsxs)("tr", {
                className: T.U1,
                children: [
                    (0, r.jsx)("th", {
                        scope: "col",
                        className: T.Cr,
                        children: (0, r.jsx)(u.D, { variant: "heading-xl/bold", children: I.intl.string(I.t.ED4UVD) }),
                    }),
                    (0, r.jsx)("th", {
                        scope: "col",
                        className: T.Hn,
                        children: (0, r.jsx)(y, {
                            premiumType: N.PremiumTypes.TIER_0,
                            priceString: (0, h.$g)(t.amount, t.currency),
                        }),
                    }),
                    (0, r.jsx)("th", {
                        scope: "col",
                        className: T.Hn,
                        children: (0, r.jsx)(y, { premiumType: N.PremiumTypes.TIER_2, priceString: n }),
                    }),
                ],
            }),
        });
    },
    k = (e) => {
        let t,
            { className: s, hidePill: i = !1, selectedPlanTier: l = N.PremiumTypes.TIER_2 } = e,
            { analyticsLocations: o } = (0, p.Ay)(x.A.PREMIUM_MARKETING_PLAN_COMPARISON),
            c = (0, C.V)(),
            d = c?.subscription_trial?.sku_id,
            m = (0, f.O)(),
            _ = null != m && (0, b.U9)(m, N.pe.TIER_2),
            h = (0, b.N1)(N.gD.PREMIUM_MONTH_TIER_2),
            R = `${h}/${(0, g.FJ)(N.WT.MONTH)}`,
            M = (0, g.JM)(N.gD.PREMIUM_MONTH_TIER_0),
            y = (0, g.JM)(N.gD.PREMIUM_MONTH_TIER_2),
            k = (0, A.g)();
        if (i) t = null;
        else {
            let e = null != c ? I.intl.string(I.t.IBYG5U) : I.intl.string(I.t.TR2B4T);
            t = (0, r.jsx)(j.R, { className: n()(T.Io, T.SP), text: e });
        }
        let B = d === N.pe.TIER_0 || l === N.PremiumTypes.TIER_0;
        return (0, r.jsx)(p.f5, {
            value: o,
            children: (0, r.jsxs)("div", {
                className: n()(T.zr, s),
                children: [
                    (0, r.jsx)(u.D, {
                        className: T.Qw,
                        variant: "display-md",
                        color: "text-strong",
                        children: I.intl.string(I.t.DbPgAd),
                    }),
                    (0, r.jsxs)("div", {
                        className: T.wY,
                        children: [
                            (0, r.jsxs)("div", {
                                className: n()(T.fO, { [T.Vd]: B, [T.hA]: !B }),
                                children: [
                                    !B && t,
                                    (0, r.jsx)("div", { className: T.xQ }),
                                    (0, r.jsxs)("div", {
                                        className: T.wN,
                                        children: [
                                            (0, r.jsx)("img", { src: E, alt: "", className: T.kQ }),
                                            (0, r.jsx)("img", { src: v, alt: "", className: T.kQ }),
                                        ],
                                    }),
                                ],
                            }),
                            (0, r.jsxs)("table", {
                                className: T.tp,
                                children: [
                                    (0, r.jsx)(P, {
                                        tier0Price: M,
                                        tier2Price: y,
                                        shouldUseDiscountPrice: _,
                                        tier2DiscountedPriceString: R,
                                    }),
                                    k.map((e) => (0, a.createElement)(S, { ...e, key: e.id })),
                                ],
                            }),
                        ],
                    }),
                ],
            }),
        });
    };
