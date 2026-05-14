"use strict";
n.d(t, { oH: () => y, s3: () => I, lo: () => S, Jg: () => N });
var i = n(627968),
    r = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(20742),
    l = n(364840),
    u = n(331322),
    c = n(224640),
    d = n(430993),
    _ = n(500380),
    f = n(423764),
    h = n(683433),
    p = n(981036),
    E = n(725836),
    m = n(834730),
    g = n(857414);
function A(e) {
    let { countryCode: t, relocationCountryCode: n } = e;
    return (0, i.jsxs)("div", {
        className: g.uL,
        children: [
            (0, i.jsx)("img", { alt: "", className: g.bI, src: (0, _.t)(t) }),
            (0, i.jsx)(m.E, { variant: "text-md/normal", color: "text-subtle", children: (0, f.j7)((0, f.ni)(t)) }),
            (0, i.jsx)(m.E, { variant: "text-md/normal", color: "text-subtle", className: g.B5, children: "\u2192" }),
            (0, i.jsx)("img", { alt: "", className: g.bI, src: (0, _.t)(n) }),
            (0, i.jsx)(m.E, { variant: "text-md/normal", color: "text-subtle", children: (0, f.j7)((0, f.ni)(n)) }),
        ],
    });
}
function I(e) {
    let {
            gradientColor: t,
            title: n,
            headerBadgeText: s,
            headerBadgeIcon: a,
            countryCode: l,
            relocationCountryCode: u,
            ...c
        } = e,
        { checkoutHeaderConfigs: d } = (0, E.ck)(),
        h = r.useCallback(
            () => (null == l ? null : (0, i.jsx)("img", { alt: "", className: g.bI, src: (0, _.t)(l) })),
            [l],
        ),
        p = r.useMemo(() => {
            if (null != s || null != d.headerBadgeText)
                return {
                    icon: d.headerBadgeIcon ?? a,
                    type: { text: d.headerBadgeText ?? s ?? "" },
                    variant: "expressive",
                };
        }, [s, a, d.headerBadgeText, d.headerBadgeIcon]),
        m = null != l && null != u,
        I = r.useMemo(() => {
            if (!m && null != l) return { text: (0, f.j7)((0, f.ni)(l)), leadingIcon: h };
        }, [m, l, h]);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(o.rQ, {
                ...c,
                badge: p,
                badgePosition: "end",
                gradientColor: t,
                titleTextVariant: "heading-lg/semibold",
                alignCenter: !1,
                title: n,
                subtitle: I,
            }),
            m && (0, i.jsx)(A, { countryCode: l, relocationCountryCode: u }),
        ],
    });
}
let T = { top: 16, bottom: 8 };
function S(e) {
    let { onBackClick: t, primaryButtonProps: n, portalClassName: r } = e,
        { variant: s } = n,
        { setCheckoutFooterContentNode: o } = (0, E.ck)();
    return (0, i.jsxs)(l.j, {
        children: [
            (0, i.jsx)("div", { ref: o, className: a()(g.K4, r) }),
            (0, i.jsxs)(u.B, {
                direction: "horizontal",
                align: "center",
                justify: null != t ? "space-between" : "end",
                fullWidth: !0,
                padding: T,
                children: [
                    null != t ? (0, i.jsx)(h.A, { onClick: t }) : null,
                    (0, i.jsx)(p.p, { ...n, variant: s ?? "active" }),
                ],
            }),
        ],
    });
}
function N(e) {
    let { children: t, size: n = "md", maxHeight: r = "viewport", ...s } = e;
    return (0, i.jsx)(c.d, { size: n, ...s, maxHeight: r, children: t });
}
function y(e) {
    let {
        title: t,
        gradientColor: n = "purple",
        countryCode: r,
        relocationCountryCode: s,
        headerBadgeText: a,
        headerBadgeIcon: o,
        onBackClick: l,
        primaryButtonProps: u,
        children: _,
        ...f
    } = e;
    return (0, i.jsx)(E.e0, {
        children: (0, i.jsxs)(c.d, {
            ...f,
            children: [
                (0, i.jsx)(I, {
                    gradientColor: n,
                    title: t,
                    countryCode: r,
                    relocationCountryCode: s,
                    headerBadgeText: a,
                    headerBadgeIcon: o,
                }),
                (0, i.jsx)(d.c, { children: _ }),
                (0, i.jsx)(S, { onBackClick: l, primaryButtonProps: u }),
            ],
        }),
    });
}
