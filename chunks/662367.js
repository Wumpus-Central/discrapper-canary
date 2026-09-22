n.d(e, { I: () => f });
var i = n(477900);
n(582128);
var l = n(562708),
    o = n(877624),
    s = n(17928),
    a = n(462887),
    r = n(315629),
    c = n(331322),
    d = n(834730),
    u = n(404778),
    p = n(297264),
    m = n(28863),
    x = n(821609),
    h = n(212245),
    b = n(736653),
    g = n(688810),
    A = n(139286),
    N = n(392943),
    j = n(498470),
    v = n(811611),
    T = n(807098),
    y = n(637706),
    I = n(412260),
    C = n(852218),
    _ = n(375708),
    E = n(734165);
function f(t) {
    let { component: e, endDate: n } = t,
        { analyticsLocations: f } = (0, g.Ay)(),
        L = (0, h.p)(),
        M = (0, a.M)((0, b.Ay)());
    (0, A.A)({
        type: l.ImpressionTypes.VIEW,
        name: l.ImpressionNames.PREMIUM_MARKETING_COMPONENT,
        properties: { component_type: o.C.BILLING_SETTINGS_BANNER, component_id: e.id, promotion_id: e.promotionId },
    });
    let k = (0, s.bG)([I.A], () => I.A.getPromotionByTypeAndId(C.pt.MARKETING_MOMENT, e.promotionId)?.endDate),
        H = e.properties.properties,
        S = "billingSettingsBanner" === H.oneofKind ? H.billingSettingsBanner : null,
        R = (0, y.a)(S?.body ?? ""),
        B = (0, T.T)(S?.asset);
    if (null == S) return null;
    let P = (0, j.h)({
            buttonAction: S.button?.buttonAction,
            deeplinkSection: S.button?.deeplinkSection,
            applicationId: S.button?.navigableStorefrontApplicationId?.value,
            analyticsLocations: f,
            analyticsLocation: L.location,
        }),
        w = (0, y.C)(S.helpArticle, ""),
        { icon: O, iconPosition: G } = (0, j.x)({ buttonAction: S.button?.buttonAction }),
        D = (0, v.ux)((n ?? k)?.toISOString());
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
                            "aria-label": _.intl.string(_.t.lpNrPu),
                        }),
                        null != D &&
                            (0, i.jsx)(d.E, {
                                variant: "text-sm/medium",
                                color: M ? "text-subtle" : "text-default",
                                children: D,
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
                                    children: S.header,
                                }),
                                (0, i.jsxs)(d.E, {
                                    variant: "text-sm/medium",
                                    color: "text-subtle",
                                    children: [
                                        R,
                                        null != w &&
                                            (0, i.jsxs)(i.Fragment, {
                                                children: [
                                                    "\xa0",
                                                    (0, i.jsx)(m.Anchor, { href: w.url, children: w.linkText }),
                                                ],
                                            }),
                                    ],
                                }),
                                null != S.button &&
                                    (0, i.jsx)("div", {
                                        className: E.UD,
                                        children: (0, i.jsx)(x.$, {
                                            variant: "expressive",
                                            size: "md",
                                            onClick: P,
                                            text: S.button.copy,
                                            icon: O,
                                            iconPosition: G,
                                        }),
                                    }),
                            ],
                        }),
                        null != B && (0, i.jsx)("img", { src: B, className: E.LY, alt: "" }),
                    ],
                }),
            ],
        }),
    });
}
