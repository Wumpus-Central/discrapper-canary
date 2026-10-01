n.d(t, { A: () => R });
var r = n(477900);
n(582128);
var l = n(503698),
    i = n.n(l),
    a = n(17928),
    s = n(462887),
    o = n(289873),
    c = n(331322),
    u = n(297264),
    d = n(834730),
    m = n(736653),
    g = n(626584),
    x = n(97352),
    T = n(158045),
    p = n(511484),
    I = n(795269),
    h = n(202541),
    f = n(148155),
    j = n(375708),
    E = n(12260),
    P = n(658859);
let v = new g.A("PremiumGroupPrice.tsx"),
    A = (0, r.jsx)(o.y, { type: o.y.Type.PULSING_ELLIPSIS, className: P.xB }),
    R = function (e) {
        let t,
            { isGift: n = !1, discountOffer: l, priceOptions: o, isApplicationHome: g = !1 } = e,
            P = (0, a.bG)([x.A], () => x.A.get(h.gD.PREMIUM_GROUP_MONTH)),
            R = (0, p.N1)(h.gD.PREMIUM_GROUP_MONTH),
            _ = (0, s.q)((0, m.Ay)());
        if (null == P) return A;
        try {
            t = (0, T.sS)(P, o, !1, n, !1);
        } catch {
            return (v.warn(`No price available for plan ${P.id} in currency ${o?.currency ?? "unknown"}`), A);
        }
        let N = h.WT.MONTH;
        if (null != l && null != R) {
            let e = l.discount.intervalCount;
            return (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsx)("hr", { className: i()(E.vI, { [E.oE]: g }) }),
                    (0, r.jsxs)(c.B, {
                        direction: "horizontal",
                        align: "center",
                        justify: "space-between",
                        gap: 12,
                        fullWidth: !1,
                        children: [
                            (0, r.jsxs)(c.B, {
                                direction: "vertical",
                                gap: 4,
                                fullWidth: !1,
                                className: E.Yc,
                                children: [
                                    (0, r.jsx)(u.D, {
                                        variant: g ? "heading-md/semibold" : "heading-sm/semibold",
                                        color: "text-strong",
                                        children: j.intl.format(f.default.rCpGVA, {
                                            discountedPrice: R,
                                            discountInterval: e,
                                        }),
                                    }),
                                    (0, r.jsx)(d.E, {
                                        variant: g ? "text-sm/medium" : "text-xs/medium",
                                        color: "text-muted",
                                        children: j.intl.format(f.default["4b2ByP"], { regularPrice: t }),
                                    }),
                                ],
                            }),
                            (0, r.jsx)(I.R, {
                                text: j.intl.formatToPlainString(f.default.GEwdVw, {
                                    percent: l.discount.amount,
                                    discountOfferAmount: l.discount.amount,
                                }),
                            }),
                        ],
                    }),
                    (0, r.jsx)("hr", { className: i()(E.yF, { [E.oE]: g }) }),
                ],
            });
        }
        return (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsxs)("div", {
                    children: [
                        (0, r.jsx)(d.E, {
                            variant: "heading-xxl/extrabold",
                            color: _ ? "text-strong" : "text-overlay-light",
                            tag: "span",
                            children: t,
                        }),
                        (0, r.jsxs)(d.E, {
                            variant: "text-xs/medium",
                            tag: "span",
                            color: "text-muted",
                            children: ["/", (0, T.FJ)(N)],
                        }),
                    ],
                }),
                (0, r.jsx)(u.D, {
                    variant: "heading-md/semibold",
                    color: "text-muted",
                    children: j.intl.string(f.default["R+dzZw"]),
                }),
                (0, r.jsx)("hr", { className: E.yF }),
            ],
        });
    };
