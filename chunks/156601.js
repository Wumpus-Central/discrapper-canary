var n = t(477900);
t(582128);
var l = t(503698),
    i = t.n(l),
    s = t(855986),
    a = t(462887),
    c = t(289873),
    u = t(834730),
    o = t(534514),
    m = t(736653),
    d = t(97352),
    p = t(448645),
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
                    color: f,
                    enablePremiumBrandRefresh: g,
                } = e,
                j = (0, s.bG)([d.A], () => d.A.isLoadedForSKUs([r])),
                R = (0, a.q)((0, m.Ay)());
            if (!j) return (0, n.jsx)(c.y, { type: c.y.Type.PULSING_ELLIPSIS, className: h.xB });
            let _ = d.A.getForSkuAndInterval((0, p.mH)(r), t),
                v = null != _ ? (0, p.sS)(_, A, !1, T) : null;
            if (g) {
                let e = t === x.WT.YEAR;
                return (0, n.jsxs)("div", {
                    children: [
                        (0, n.jsx)(u.E, {
                            variant: e ? "heading-sm/semibold" : "heading-xxl/semibold",
                            color: e ? "text-muted" : R ? "text-strong" : "text-overlay-light",
                            tag: "span",
                            children: (0, n.jsx)("span", { children: v }),
                        }),
                        (0, n.jsxs)(u.E, {
                            variant: "body-xs/medium",
                            tag: "span",
                            color: "text-muted",
                            children: ["/", (0, p.FJ)(t)],
                        }),
                    ],
                });
            }
            return (0, n.jsx)(o.D, {
                color: f ?? (E ? "none" : "text-overlay-light"),
                variant: I ?? "heading-sm/medium",
                className: i()(h.SW, l),
                children: (0, n.jsxs)(n.Fragment, {
                    children: [(0, n.jsx)("span", { className: E ? void 0 : h.q9, children: v }), " / ", (0, p.FJ)(t)],
                }),
            });
        },
    },
);
