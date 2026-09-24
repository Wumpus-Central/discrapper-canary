n.d(t, { A: () => C });
var r = n(477900);
n(582128);
var l = n(503698),
    i = n.n(l),
    a = n(297264),
    s = n(17928),
    o = n(462887),
    c = n(289873),
    u = n(331322),
    d = n(834730),
    m = n(736653),
    g = n(626584),
    x = n(97352),
    h = n(158045),
    p = n(511484),
    I = n(795269),
    f = n(202541),
    T = n(148155),
    E = n(375708),
    j = n(12260),
    A = n(658859);
let v = new g.A("PremiumGroupPrice.tsx"),
    N = (0, r.jsx)(c.y, { type: c.y.Type.PULSING_ELLIPSIS, className: A.xB }),
    C = function (e) {
        let t,
            { isGift: n = !1, discountOffer: l, priceOptions: c, isApplicationHome: g = !1 } = e,
            A = (0, s.bG)([x.A], () => x.A.get(f.gD.PREMIUM_GROUP_MONTH)),
            C = (0, p.N1)(f.gD.PREMIUM_GROUP_MONTH),
            y = (0, o.q)((0, m.Ay)());
        if (null == A) return N;
        try {
            t = (0, h.sS)(A, c, !1, n, !1);
        } catch {
            return (v.warn(`No price available for plan ${A.id} in currency ${c?.currency ?? "unknown"}`), N);
        }
        let _ = f.WT.MONTH;
        if (null != l && null != C) {
            let e = l.discount.intervalCount;
            return (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsx)("hr", { className: i()(j.vI, { [j.oE]: g }) }),
                    (0, r.jsxs)(u.B, {
                        direction: "horizontal",
                        align: "center",
                        justify: "space-between",
                        gap: 12,
                        fullWidth: !1,
                        children: [
                            (0, r.jsxs)(u.B, {
                                direction: "vertical",
                                gap: 4,
                                fullWidth: !1,
                                className: j.Yc,
                                children: [
                                    (0, r.jsx)(a.D, {
                                        variant: g ? "heading-md/semibold" : "heading-sm/semibold",
                                        color: "text-strong",
                                        children: E.intl.format(T.default.rCpGVA, {
                                            discountedPrice: C,
                                            discountInterval: e,
                                        }),
                                    }),
                                    (0, r.jsx)(d.E, {
                                        variant: g ? "text-sm/medium" : "text-xs/medium",
                                        color: "text-muted",
                                        children: E.intl.format(T.default["4b2ByP"], { regularPrice: t }),
                                    }),
                                ],
                            }),
                            (0, r.jsx)(I.R, {
                                text: E.intl.formatToPlainString(T.default.GEwdVw, {
                                    percent: l.discount.amount,
                                    discountOfferAmount: l.discount.amount,
                                }),
                            }),
                        ],
                    }),
                    (0, r.jsx)("hr", { className: i()(j.yF, { [j.oE]: g }) }),
                ],
            });
        }
        return (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsxs)("div", {
                    children: [
                        (0, r.jsx)(d.E, {
                            variant: "heading-xxl/extrabold",
                            color: y ? "text-strong" : "text-overlay-light",
                            tag: "span",
                            children: t,
                        }),
                        (0, r.jsxs)(d.E, {
                            variant: "text-xs/medium",
                            tag: "span",
                            color: "text-muted",
                            children: ["/", (0, h.FJ)(_)],
                        }),
                    ],
                }),
                (0, r.jsx)(a.D, {
                    variant: "heading-md/semibold",
                    color: "text-muted",
                    children: E.intl.string(T.default["R+dzZw"]),
                }),
                (0, r.jsx)("hr", { className: j.yF }),
            ],
        });
    };
