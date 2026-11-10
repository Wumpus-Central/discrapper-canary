var i = n(477900);
n(582128);
var o = n(613412),
    l = n(517352),
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
    y = n(807098),
    I = n(693369),
    T = n(637706),
    C = n(412260),
    _ = n(852218),
    f = n(792996),
    E = n(734165);
n.d(
    e,
    {},
    {
        I: function (t) {
            let { component: e, endDate: n } = t,
                { analyticsLocations: L } = (0, g.Ay)(),
                M = (0, x.p)(),
                k = (0, a.M)((0, b.Ay)());
            (0, A.A)({
                type: o.ImpressionTypes.VIEW,
                name: o.ImpressionNames.PREMIUM_MARKETING_COMPONENT,
                properties: { component_type: e.componentType, component_id: e.id, promotion_id: e.promotionId },
            });
            let H = (0, s.bG)([C.A], () => C.A.getPromotionByTypeAndId(_.pt.MARKETING_MOMENT, e.promotionId)?.endDate),
                R = (0, I.a9)(e, l.oW.BILLING_SETTINGS_BANNER) ? e.surface : null,
                w = (0, T.a)(R?.body ?? ""),
                S = (0, y.T)(R?.asset);
            if (null == R) return null;
            let P = (0, j.h)({
                    buttonAction: R.button?.buttonAction,
                    deeplinkSection: R.button?.deeplinkSection,
                    applicationId: R.button?.navigableStorefrontApplicationId?.value,
                    shopCollectionId: R.button?.shopCollectionId?.value,
                    analyticsLocations: L,
                    analyticsLocation: M.location,
                }),
                B = (0, T.C)(R.helpArticle, ""),
                { icon: G, iconPosition: D } = (0, j.x)({ buttonAction: R.button?.buttonAction }),
                O = (0, v.ux)((n ?? H)?.toISOString());
            return (0, i.jsx)(r.h, {
                color: "nitro-pink",
                className: E.kL,
                children: (0, i.jsxs)(c.B, {
                    direction: "vertical",
                    gap: 12,
                    padding: { top: 16, right: 24, bottom: 24, left: 24 },
                    className: E.Zp,
                    children: [
                        (0, i.jsxs)(c.B, {
                            direction: "horizontal",
                            align: "center",
                            justify: "space-between",
                            gap: 8,
                            children: [
                                (0, i.jsx)(N.A, {
                                    color: "currentcolor",
                                    className: E.Ss,
                                    "aria-label": f.intl.string(f.t.lpNrPu),
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
                                    className: E.pq,
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
                                                null != B &&
                                                    (0, i.jsxs)(i.Fragment, {
                                                        children: [
                                                            "\xa0",
                                                            (0, i.jsx)(m.Anchor, { href: B.url, children: B.linkText }),
                                                        ],
                                                    }),
                                            ],
                                        }),
                                        null != R.button &&
                                            (0, i.jsx)("div", {
                                                className: E.UD,
                                                children: (0, i.jsx)(h.$, {
                                                    variant: "expressive",
                                                    size: "md",
                                                    onClick: P,
                                                    text: R.button.copy,
                                                    icon: G,
                                                    iconPosition: D,
                                                }),
                                            }),
                                    ],
                                }),
                                null != S && (0, i.jsx)("img", { src: S, className: E.LY, alt: "" }),
                            ],
                        }),
                    ],
                }),
            });
        },
    },
);
