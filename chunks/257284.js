n.d(t, { A: () => f });
var l = n(627968);
n(64700);
var r = n(503698),
    i = n.n(r),
    a = n(534514),
    o = n(17928),
    s = n(462887),
    u = n(289873),
    c = n(331322),
    d = n(834730),
    m = n(736653),
    E = n(97352),
    p = n(428262),
    C = n(410516),
    _ = n(795269),
    h = n(202541),
    A = n(466919),
    N = n(375708),
    T = n(707259),
    I = n(378874);
let f = function (e) {
    let { isGift: t = !1, discountOffer: n, priceOptions: r, isApplicationHome: f = !1 } = e,
        S = (0, o.bG)([E.A], () => E.A.get(h.gD.PREMIUM_GROUP_MONTH)),
        y = (0, C.N1)(h.gD.PREMIUM_GROUP_MONTH),
        g = (0, s.q)((0, m.Ay)());
    if (null == S) return (0, l.jsx)(u.y, { type: u.y.Type.PULSING_ELLIPSIS, className: I.xB });
    let R = (0, p.sS)(S, r, !1, t),
        P = h.WT.MONTH;
    if (null != n && null != y) {
        let e = n.discount.userUsageLimit;
        return (0, l.jsxs)(l.Fragment, {
            children: [
                (0, l.jsx)("hr", { className: i()(T.vI, { [T.oE]: f }) }),
                (0, l.jsxs)(c.B, {
                    direction: "horizontal",
                    align: "center",
                    justify: "space-between",
                    gap: 12,
                    fullWidth: !1,
                    children: [
                        (0, l.jsxs)(c.B, {
                            direction: "vertical",
                            gap: 4,
                            fullWidth: !1,
                            className: T.Yc,
                            children: [
                                (0, l.jsx)(a.D, {
                                    variant: f ? "heading-md/semibold" : "heading-sm/semibold",
                                    color: "text-strong",
                                    children: N.intl.format(A.default.rCpGVA, {
                                        discountedPrice: y,
                                        discountInterval: e,
                                    }),
                                }),
                                (0, l.jsx)(d.E, {
                                    variant: f ? "text-sm/medium" : "text-xs/medium",
                                    color: "text-muted",
                                    children: N.intl.format(A.default["4b2ByP"], { regularPrice: R }),
                                }),
                            ],
                        }),
                        (0, l.jsx)(_.R, {
                            text: N.intl.formatToPlainString(A.default.GEwdVw, {
                                percent: n.discount.amount,
                                discountOfferAmount: n.discount.amount,
                            }),
                        }),
                    ],
                }),
                (0, l.jsx)("hr", { className: i()(T.yF, { [T.oE]: f }) }),
            ],
        });
    }
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsxs)("div", {
                children: [
                    (0, l.jsx)(d.E, {
                        variant: "heading-xxl/extrabold",
                        color: g ? "text-strong" : "always-white",
                        tag: "span",
                        children: R,
                    }),
                    (0, l.jsxs)(d.E, {
                        variant: "text-xs/medium",
                        tag: "span",
                        color: "text-muted",
                        children: ["/", (0, p.FJ)(P)],
                    }),
                ],
            }),
            (0, l.jsx)(a.D, {
                variant: "heading-md/semibold",
                color: "text-muted",
                children: N.intl.string(A.default["R+dzZw"]),
            }),
            (0, l.jsx)("hr", { className: T.yF }),
        ],
    });
};
