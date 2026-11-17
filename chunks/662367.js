var i = n(477900);
n(582128);
var o = n(613412),
    l = n(517352),
    a = n(855986),
    s = n(462887),
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
    y = n(807098),
    I = n(693369),
    T = n(637706),
    C = n(412260),
    f = n(852218),
    M = n(792996),
    _ = n(734165);
n.d(
    e,
    {},
    {
        I: function (t) {
            let { component: e, endDate: n } = t,
                { analyticsLocations: E } = (0, g.Ay)(),
                L = (0, x.p)(),
                k = (0, s.M)((0, b.Ay)());
            (0, A.A)({
                type: o.ImpressionTypes.VIEW,
                name: o.ImpressionNames.PREMIUM_MARKETING_COMPONENT,
                properties: { component_type: e.componentType, component_id: e.id, promotion_id: e.promotionId },
            });
            let H = (0, a.bG)([C.A], () => C.A.getPromotionByTypeAndId(f.pt.MARKETING_MOMENT, e.promotionId)?.endDate),
                R = (0, I.a9)(e, l.oW.BILLING_SETTINGS_BANNER) ? e.surface : null,
                w = (0, T.a)(R?.body ?? ""),
                D = (0, y.T)(R?.asset);
            if (null == R) return null;
            let S = (0, j.h)({
                    buttonAction: R.button?.buttonAction,
                    deeplinkSection: R.button?.deeplinkSection,
                    applicationId: R.button?.navigableStorefrontApplicationId?.value,
                    shopCollectionId: R.button?.shopCollectionId?.value,
                    giftModalDestination: R.button?.giftModalDestination,
                    analyticsLocations: E,
                    analyticsLocation: L.location,
                }),
                P = (0, T.C)(R.helpArticle, ""),
                { icon: B, iconPosition: G } = (0, j.x)({ buttonAction: R.button?.buttonAction }),
                O = (0, v.ux)((n ?? H)?.toISOString());
            return (0, i.jsx)(r.h, {
                color: "nitro-pink",
                className: _.kL,
                children: (0, i.jsxs)(c.B, {
                    direction: "vertical",
                    gap: 12,
                    padding: { top: 16, right: 24, bottom: 24, left: 24 },
                    className: _.Zp,
                    children: [
                        (0, i.jsxs)(c.B, {
                            direction: "horizontal",
                            align: "center",
                            justify: "space-between",
                            gap: 8,
                            children: [
                                (0, i.jsx)(N.A, {
                                    color: "currentcolor",
                                    className: _.Ss,
                                    "aria-label": M.intl.string(M.t.lpNrPu),
                                }),
                                null != O &&
                                    (0, i.jsx)(d.E, {
                                        variant: "body-sm/medium",
                                        color: k ? "text-subtle" : "text-default",
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
                                    className: _.pq,
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
                                                w,
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
                                                className: _.UD,
                                                children: (0, i.jsx)(h.$, {
                                                    variant: "expressive",
                                                    size: "md",
                                                    onClick: S,
                                                    text: R.button.copy,
                                                    icon: B,
                                                    iconPosition: G,
                                                }),
                                            }),
                                    ],
                                }),
                                null != D && (0, i.jsx)("img", { src: D, className: _.LY, alt: "" }),
                            ],
                        }),
                    ],
                }),
            });
        },
    },
);
