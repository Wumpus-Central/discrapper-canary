var n = t(477900);
t(582128);
var l = t(503698),
    i = t.n(l),
    s = t(855986),
    a = t(462887),
    c = t(289873),
    o = t(834730),
    u = t(534514),
    d = t(736653),
    m = t(97352),
    p = t(722178),
    x = t(682901),
    h = t(658859);
t.d(
    r,
    {},
    {
        A: function (e) {
            let {
                    subscriptionTier: r,
                    interval: t = x.WT.MONTH,
                    className: l,
                    isGift: T = !1,
                    variant: I,
                    priceOptions: A,
                    isApplicationHome: E,
                    enablePremiumBrandRefresh: f,
                } = e,
                g = (0, s.bG)([m.A], () => m.A.isLoadedForSKUs([r])),
                j = (0, a.q)((0, d.Ay)());
            if (!g) return (0, n.jsx)(c.y, { type: c.y.Type.PULSING_ELLIPSIS, className: h.xB });
            let R = m.A.getForSkuAndInterval((0, p.mH)(r), t),
                _ = null != R ? (0, p.sS)(R, A, !1, T) : null;
            if (f) {
                let e = t === x.WT.YEAR;
                return (0, n.jsxs)("div", {
                    children: [
                        (0, n.jsx)(o.E, {
                            variant: e ? "heading-sm/semibold" : "heading-xxl/semibold",
                            color: e ? "text-muted" : j ? "text-strong" : "text-overlay-light",
                            tag: "span",
                            children: (0, n.jsx)("span", { children: _ }),
                        }),
                        (0, n.jsxs)(o.E, {
                            variant: "body-xs/medium",
                            tag: "span",
                            color: "text-muted",
                            children: ["/", (0, p.FJ)(t)],
                        }),
                    ],
                });
            }
            return (0, n.jsx)(u.D, {
                color: E ? "none" : "text-overlay-light",
                variant: I ?? "heading-sm/medium",
                className: i()(h.SW, l),
                children: (0, n.jsxs)(n.Fragment, {
                    children: [(0, n.jsx)("span", { className: E ? void 0 : h.q9, children: _ }), " / ", (0, p.FJ)(t)],
                }),
            });
        },
    },
);
