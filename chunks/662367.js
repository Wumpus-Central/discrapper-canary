var i = n(477900);
n(582128);
var o = n(613412),
    l = n(877624),
    s = n(855986),
    a = n(462887),
    r = n(315629),
    c = n(331322),
    d = n(834730),
    u = n(404778),
    p = n(534514),
    m = n(28863),
    h = n(821609),
    x = n(212245),
    b = n(736653),
    g = n(688810),
    A = n(139286),
    N = n(392943),
    j = n(498470),
    v = n(811611),
    I = n(807098),
    y = n(637706),
    C = n(412260),
    T = n(852218),
    _ = n(792996),
    f = n(734165);
n.d(
    e,
    {},
    {
        I: function (t) {
            let { component: e, endDate: n } = t,
                { analyticsLocations: E } = (0, g.Ay)(),
                L = (0, x.p)(),
                M = (0, a.M)((0, b.Ay)());
            (0, A.A)({
                type: o.ImpressionTypes.VIEW,
                name: o.ImpressionNames.PREMIUM_MARKETING_COMPONENT,
                properties: {
                    component_type: l.C.BILLING_SETTINGS_BANNER,
                    component_id: e.id,
                    promotion_id: e.promotionId,
                },
            });
            let k = (0, s.bG)([C.A], () => C.A.getPromotionByTypeAndId(T.pt.MARKETING_MOMENT, e.promotionId)?.endDate),
                H = e.properties.properties,
                R = "billingSettingsBanner" === H.oneofKind ? H.billingSettingsBanner : null,
                S = (0, y.a)(R?.body ?? ""),
                w = (0, I.T)(R?.asset);
            if (null == R) return null;
            let B = (0, j.h)({
                    buttonAction: R.button?.buttonAction,
                    deeplinkSection: R.button?.deeplinkSection,
                    applicationId: R.button?.navigableStorefrontApplicationId?.value,
                    shopCollectionId: R.button?.shopCollectionId?.value,
                    analyticsLocations: E,
                    analyticsLocation: L.location,
                }),
                P = (0, y.C)(R.helpArticle, ""),
                { icon: G, iconPosition: D } = (0, j.x)({ buttonAction: R.button?.buttonAction }),
                O = (0, v.ux)((n ?? k)?.toISOString());
            return (0, i.jsx)(r.h, {
                color: "nitro-pink",
                className: f.kL,
                children: (0, i.jsxs)(c.B, {
                    direction: "vertical",
                    gap: 12,
                    padding: { top: 16, right: 24, bottom: 24, left: 24 },
                    className: f.Zp,
                    children: [
                        (0, i.jsxs)(c.B, {
                            direction: "horizontal",
                            align: "center",
                            justify: "space-between",
                            gap: 8,
                            children: [
                                (0, i.jsx)(N.A, {
                                    color: "currentcolor",
                                    className: f.Ss,
                                    "aria-label": _.intl.string(_.t.lpNrPu),
                                }),
                                null != O &&
                                    (0, i.jsx)(d.E, {
                                        variant: "body-sm/medium",
                                        color: M ? "text-subtle" : "text-default",
                                        children: O,
                                    }),
                            ],
                        }),
                        (0, i.jsx)(u.c, {}),
                        (0, i.jsxs)(c.B, {
                            direction: "horizontal",
                            align: "center",
                            justify: "space-between",
                            gap: 24,
                            children: [
                                (0, i.jsxs)(c.B, {
                                    direction: "vertical",
                                    align: "start",
                                    gap: 8,
                                    fullWidth: !1,
                                    className: f.pq,
                                    children: [
                                        (0, i.jsx)(p.D, {
                                            variant: "heading-xl/semibold",
                                            color: "text-strong",
                                            children: R.header,
                                        }),
                                        (0, i.jsxs)(d.E, {
                                            variant: "body-sm/medium",
                                            color: "text-subtle",
                                            children: [
                                                S,
                                                null != P &&
                                                    (0, i.jsxs)(i.Fragment, {
                                                        children: [
                                                            "\xa0",
                                                            (0, i.jsx)(m.Anchor, { href: P.url, children: P.linkText }),
                                                        ],
                                                    }),
                                            ],
                                        }),
                                        null != R.button &&
                                            (0, i.jsx)("div", {
                                                className: f.UD,
                                                children: (0, i.jsx)(h.$, {
                                                    variant: "expressive",
                                                    size: "md",
                                                    onClick: B,
                                                    text: R.button.copy,
                                                    icon: G,
                                                    iconPosition: D,
                                                }),
                                            }),
                                    ],
                                }),
                                null != w && (0, i.jsx)("img", { src: w, className: f.LY, alt: "" }),
                            ],
                        }),
                    ],
                }),
            });
        },
    },
);
