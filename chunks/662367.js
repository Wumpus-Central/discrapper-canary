s.d(t, { I: () => T });
var l = s(627968);
s(64700);
var n = s(562708),
    i = s(877624),
    r = s(462887),
    a = s(315629),
    o = s(834730),
    c = s(404778),
    d = s(534514),
    u = s(349288),
    x = s(821609),
    m = s(212245),
    p = s(736653),
    h = s(688810),
    j = s(139286),
    _ = s(392943),
    g = s(498470),
    f = s(811611),
    A = s(807098),
    E = s(637706),
    C = s(375708),
    N = s(143872);
function T(e) {
    let { componentId: t, fields: s, endDate: T } = e,
        { analyticsLocations: I } = (0, h.Ay)(),
        R = (0, m.p)(),
        v = (0, r.M)((0, p.Ay)());
    (0, j.A)({
        type: n.ImpressionTypes.VIEW,
        name: n.ImpressionNames.PREMIUM_MARKETING_COMPONENT,
        properties: { component_type: i.C.BILLING_SETTINGS_BANNER, component_id: t },
    });
    let y = (0, g.h)({
            buttonAction: s.button?.buttonAction,
            deeplinkSection: s.button?.deeplinkSection,
            applicationId: s.button?.navigableStorefrontApplicationId?.value,
            analyticsLocations: I,
            analyticsLocation: R.location,
        }),
        M = (0, E.a)(s.body),
        b = (0, E.C)(s.helpArticle, ""),
        { icon: L } = (0, g.x)({ buttonAction: s.button?.buttonAction }),
        O = (0, A.T)(s.asset),
        P = (0, f.ux)(T?.toISOString());
    return (0, l.jsx)(a.h, {
        color: "nitro-pink",
        className: N.kL,
        children: (0, l.jsxs)("div", {
            className: N.Qs,
            children: [
                (0, l.jsxs)("div", {
                    className: N.wx,
                    children: [
                        (0, l.jsx)(_.A, {
                            color: "currentcolor",
                            className: N.Ss,
                            "aria-label": C.intl.string(C.t.lpNrPu),
                        }),
                        null != P &&
                            (0, l.jsx)(o.E, {
                                variant: "text-sm/medium",
                                color: v ? "text-subtle" : "text-default",
                                children: P,
                            }),
                    ],
                }),
                (0, l.jsx)(c.c, {}),
                (0, l.jsxs)("div", {
                    className: N.rf,
                    children: [
                        (0, l.jsxs)("div", {
                            className: N.pq,
                            children: [
                                (0, l.jsx)(d.D, {
                                    variant: "heading-xl/semibold",
                                    color: "text-strong",
                                    children: s.header,
                                }),
                                (0, l.jsxs)(o.E, {
                                    variant: "text-sm/medium",
                                    color: "text-subtle",
                                    children: [
                                        M,
                                        null != b &&
                                            (0, l.jsxs)(l.Fragment, {
                                                children: [
                                                    "\xa0",
                                                    (0, l.jsx)(u.Anchor, { href: b.url, children: b.linkText }),
                                                ],
                                            }),
                                    ],
                                }),
                                null != s.button &&
                                    (0, l.jsx)("div", {
                                        className: N.UD,
                                        children: (0, l.jsx)(x.$, {
                                            variant: "expressive",
                                            size: "md",
                                            onClick: y,
                                            text: s.button.copy,
                                            icon: L,
                                        }),
                                    }),
                            ],
                        }),
                        null != O && (0, l.jsx)("img", { src: O, className: N.LY, alt: "" }),
                    ],
                }),
            ],
        }),
    });
}
