"use strict";
n.d(t, { oH: () => v, s3: () => T, lo: () => y, Jg: () => N });
var i = n(627968),
    r = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(20742),
    l = n(364840),
    u = n(331322),
    c = n(224640),
    d = n(430993),
    _ = n(632088),
    h = n(500380),
    f = n(423764),
    p = n(683433),
    E = n(981036),
    m = n(725836),
    g = n(834730),
    A = n(857414);
function I(e) {
    let { countryCode: t, relocationCountryCode: n } = e;
    return (0, i.jsxs)("div", {
        className: A.uL,
        children: [
            (0, i.jsx)("img", { alt: "", className: A.bI, src: (0, h.t)(t) }),
            (0, i.jsx)(g.E, { variant: "text-md/normal", color: "text-subtle", children: (0, f.j7)((0, f.ni)(t)) }),
            (0, i.jsx)(g.E, { variant: "text-md/normal", color: "text-subtle", className: A.B5, children: "\u2192" }),
            (0, i.jsx)("img", { alt: "", className: A.bI, src: (0, h.t)(n) }),
            (0, i.jsx)(g.E, { variant: "text-md/normal", color: "text-subtle", children: (0, f.j7)((0, f.ni)(n)) }),
        ],
    });
}
function T(e) {
    let {
            gradientColor: t,
            title: n,
            headerBadgeText: s,
            headerBadgeIcon: a,
            countryCode: l,
            relocationCountryCode: u,
            ...c
        } = e,
        { checkoutHeaderConfigs: d } = (0, m.ck)(),
        _ = r.useCallback(
            () => (null == l ? null : (0, i.jsx)("img", { alt: "", className: A.bI, src: (0, h.t)(l) })),
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
        E = null != l && null != u,
        g = r.useMemo(() => {
            if (!E && null != l) return { text: (0, f.j7)((0, f.ni)(l)), leadingIcon: _ };
        }, [E, l, _]);
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
                subtitle: g,
            }),
            E && (0, i.jsx)(I, { countryCode: l, relocationCountryCode: u }),
        ],
    });
}
let S = { top: 16, bottom: 8 };
function y(e) {
    let { onBackClick: t, primaryButtonProps: n, portalClassName: r } = e,
        { variant: s } = n,
        { setCheckoutFooterContentNode: o } = (0, m.ck)();
    return (0, i.jsxs)(l.j, {
        children: [
            (0, i.jsx)("div", { ref: o, className: a()(A.K4, r) }),
            (0, i.jsxs)(u.B, {
                direction: "horizontal",
                align: "center",
                justify: null != t ? "space-between" : "end",
                fullWidth: !0,
                padding: S,
                children: [
                    null != t ? (0, i.jsx)(p.A, { onClick: t }) : null,
                    (0, i.jsx)(E.p, { ...n, variant: s ?? "active", autoFocus: !0 }),
                ],
            }),
        ],
    });
}
function N(e) {
    let { children: t, size: n = "md", maxHeight: r = "viewport", ...s } = e;
    return (0, i.jsx)(c.d, { size: n, ...s, maxHeight: r, contentOutsideContainer: (0, i.jsx)(_.A, {}), children: t });
}
function v(e) {
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
        ...h
    } = e;
    return (0, i.jsx)(m.e0, {
        children: (0, i.jsxs)(c.d, {
            ...h,
            children: [
                (0, i.jsx)(T, {
                    gradientColor: n,
                    title: t,
                    countryCode: r,
                    relocationCountryCode: s,
                    headerBadgeText: a,
                    headerBadgeIcon: o,
                }),
                (0, i.jsx)(d.c, { children: _ }),
                (0, i.jsx)(y, { onBackClick: l, primaryButtonProps: u }),
            ],
        }),
    });
}
