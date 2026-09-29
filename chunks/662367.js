n.d(e, { I: () => L });
var i = n(477900);
n(582128);
var l = n(562708),
    o = n(877624),
    a = n(17928),
    s = n(462887),
    r = n(315629),
    c = n(331322),
    d = n(834730),
    p = n(404778),
    u = n(297264),
    m = n(28863),
    x = n(821609),
    h = n(212245),
    b = n(736653),
    g = n(688810),
    A = n(139286),
    j = n(392943),
    N = n(498470),
    v = n(811611),
    y = n(807098),
    T = n(637706),
    I = n(412260),
    C = n(852218),
    _ = n(375708),
    E = n(734165);
function L(t) {
    let { component: e, endDate: n } = t,
        { analyticsLocations: L } = (0, g.Ay)(),
        f = (0, h.p)(),
        M = (0, s.M)((0, b.Ay)());
    (0, A.A)({
        type: l.ImpressionTypes.VIEW,
        name: l.ImpressionNames.PREMIUM_MARKETING_COMPONENT,
        properties: { component_type: o.C.BILLING_SETTINGS_BANNER, component_id: e.id, promotion_id: e.promotionId },
    });
    let k = (0, a.bG)([I.A], () => I.A.getPromotionByTypeAndId(C.pt.MARKETING_MOMENT, e.promotionId)?.endDate),
        H = e.properties.properties,
        R = "billingSettingsBanner" === H.oneofKind ? H.billingSettingsBanner : null,
        S = (0, T.a)(R?.body ?? ""),
        w = (0, y.T)(R?.asset);
    if (null == R) return null;
    let B = (0, N.h)({
            buttonAction: R.button?.buttonAction,
            deeplinkSection: R.button?.deeplinkSection,
            applicationId: R.button?.navigableStorefrontApplicationId?.value,
            analyticsLocations: L,
            analyticsLocation: f.location,
        }),
        P = (0, T.C)(R.helpArticle, ""),
        { icon: G, iconPosition: O } = (0, N.x)({ buttonAction: R.button?.buttonAction }),
        U = (0, v.ux)((n ?? k)?.toISOString());
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
                        (0, i.jsx)(j.A, {
                            color: "currentcolor",
                            className: E.Ss,
                            "aria-label": _.intl.string(_.t.lpNrPu),
                        }),
                        null != U &&
                            (0, i.jsx)(d.E, {
                                variant: "text-sm/medium",
                                color: M ? "text-subtle" : "text-default",
                                children: U,
                            }),
                    ],
                }),
                (0, i.jsx)(p.c, {}),
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
                                (0, i.jsx)(u.D, {
                                    variant: "heading-xl/semibold",
                                    color: "text-strong",
                                    children: R.header,
                                }),
                                (0, i.jsxs)(d.E, {
                                    variant: "text-sm/medium",
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
                                        className: E.UD,
                                        children: (0, i.jsx)(x.$, {
                                            variant: "expressive",
                                            size: "md",
                                            onClick: B,
                                            text: R.button.copy,
                                            icon: G,
                                            iconPosition: O,
                                        }),
                                    }),
                            ],
                        }),
                        null != w && (0, i.jsx)("img", { src: w, className: E.LY, alt: "" }),
                    ],
                }),
            ],
        }),
    });
}
