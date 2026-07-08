s.d(t, { I: () => y });
var l = s(627968);
s(64700);
var n = s(562708),
    i = s(877624),
    r = s(17928),
    a = s(462887),
    o = s(315629),
    c = s(331322),
    d = s(834730),
    u = s(404778),
    x = s(534514),
    m = s(349288),
    p = s(821609),
    h = s(212245),
    j = s(736653),
    _ = s(688810),
    g = s(139286),
    f = s(392943),
    A = s(498470),
    E = s(811611),
    C = s(807098),
    T = s(637706),
    N = s(412260),
    I = s(852218),
    R = s(375708),
    v = s(143872);
function y(e) {
    let { component: t, endDate: s } = e,
        { analyticsLocations: y } = (0, _.Ay)(),
        M = (0, h.p)(),
        b = (0, a.M)((0, j.Ay)());
    (0, g.A)({
        type: n.ImpressionTypes.VIEW,
        name: n.ImpressionNames.PREMIUM_MARKETING_COMPONENT,
        properties: { component_type: i.C.BILLING_SETTINGS_BANNER, component_id: t.id },
    });
    let L = (0, r.bG)([N.A], () => N.A.getPromotionByTypeAndId(I.pt.MARKETING_MOMENT, t.promotionId)?.endDate),
        O = t.properties.properties,
        P = "billingSettingsBanner" === O.oneofKind ? O.billingSettingsBanner : null,
        S = (0, T.a)(P?.body ?? ""),
        w = (0, C.T)(P?.asset);
    if (null == P) return null;
    let D = (0, A.h)({
            buttonAction: P.button?.buttonAction,
            deeplinkSection: P.button?.deeplinkSection,
            applicationId: P.button?.navigableStorefrontApplicationId?.value,
            analyticsLocations: y,
            analyticsLocation: M.location,
        }),
        G = (0, T.C)(P.helpArticle, ""),
        { icon: U } = (0, A.x)({ buttonAction: P.button?.buttonAction }),
        F = (0, E.ux)((s ?? L)?.toISOString());
    return (0, l.jsx)(o.h, {
        color: "nitro-pink",
        className: v.kL,
        children: (0, l.jsxs)(c.B, {
            direction: "vertical",
            gap: 12,
            padding: { top: 16, right: 24, bottom: 24, left: 24 },
            children: [
                (0, l.jsxs)(c.B, {
                    direction: "horizontal",
                    align: "center",
                    justify: "space-between",
                    gap: 8,
                    children: [
                        (0, l.jsx)(f.A, {
                            color: "currentcolor",
                            className: v.Ss,
                            "aria-label": R.intl.string(R.t.lpNrPu),
                        }),
                        null != F &&
                            (0, l.jsx)(d.E, {
                                variant: "text-sm/medium",
                                color: b ? "text-subtle" : "text-default",
                                children: F,
                            }),
                    ],
                }),
                (0, l.jsx)(u.c, {}),
                (0, l.jsxs)(c.B, {
                    direction: "horizontal",
                    align: "center",
                    justify: "space-between",
                    gap: 24,
                    children: [
                        (0, l.jsxs)(c.B, {
                            direction: "vertical",
                            align: "start",
                            gap: 8,
                            fullWidth: !1,
                            className: v.pq,
                            children: [
                                (0, l.jsx)(x.D, {
                                    variant: "heading-xl/semibold",
                                    color: "text-strong",
                                    children: P.header,
                                }),
                                (0, l.jsxs)(d.E, {
                                    variant: "text-sm/medium",
                                    color: "text-subtle",
                                    children: [
                                        S,
                                        null != G &&
                                            (0, l.jsxs)(l.Fragment, {
                                                children: [
                                                    "\xa0",
                                                    (0, l.jsx)(m.Anchor, { href: G.url, children: G.linkText }),
                                                ],
                                            }),
                                    ],
                                }),
                                null != P.button &&
                                    (0, l.jsx)("div", {
                                        className: v.UD,
                                        children: (0, l.jsx)(p.$, {
                                            variant: "expressive",
                                            size: "md",
                                            onClick: D,
                                            text: P.button.copy,
                                            icon: U,
                                        }),
                                    }),
                            ],
                        }),
                        null != w && (0, l.jsx)("img", { src: w, className: v.LY, alt: "" }),
                    ],
                }),
            ],
        }),
    });
}
