var r = n(477900);
n(582128);
var i = n(503698),
    l = n.n(i),
    a = n(855986),
    s = n(462887),
    o = n(289873),
    c = n(834730),
    u = n(534514),
    m = n(736653),
    d = n(97352),
    g = n(448645),
    I = n(682901),
    x = n(658859);
n.d(
    t,
    {},
    {
        A: function (e) {
            let {
                    subscriptionTier: t,
                    interval: n = I.WT.MONTH,
                    className: i,
                    isGift: T = !1,
                    variant: p,
                    priceOptions: h,
                    isApplicationHome: f,
                    color: j,
                    enablePremiumBrandRefresh: A,
                } = e,
                E = (0, a.bG)([d.A], () => d.A.isLoadedForSKUs([t])),
                v = (0, s.q)((0, m.Ay)());
            if (!E) return (0, r.jsx)(o.y, { type: o.y.Type.PULSING_ELLIPSIS, className: x.xB });
            let R = d.A.getForSkuAndInterval((0, g.mH)(t), n),
                P = null != R ? (0, g.sS)(R, h, !1, T) : null;
            if (A) {
                let e = n === I.WT.YEAR;
                return (0, r.jsxs)("div", {
                    children: [
                        (0, r.jsx)(c.E, {
                            variant: e ? "heading-sm/semibold" : "heading-xxl/semibold",
                            color: e ? "text-muted" : v ? "text-strong" : "text-overlay-light",
                            tag: "span",
                            children: (0, r.jsx)("span", { children: P }),
                        }),
                        (0, r.jsxs)(c.E, {
                            variant: "body-xs/medium",
                            tag: "span",
                            color: "text-muted",
                            children: ["/", (0, g.FJ)(n)],
                        }),
                    ],
                });
            }
            return (0, r.jsx)(u.D, {
                color: j ?? (f ? "none" : "text-overlay-light"),
                variant: p ?? "heading-sm/medium",
                className: l()(x.SW, i),
                children: (0, r.jsxs)(r.Fragment, {
                    children: [(0, r.jsx)("span", { className: f ? void 0 : x.q9, children: P }), " / ", (0, g.FJ)(n)],
                }),
            });
        },
    },
);
