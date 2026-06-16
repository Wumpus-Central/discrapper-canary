"use strict";
n.d(t, { oH: () => N, s3: () => T, lo: () => y, Jg: () => C });
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
            headerBadgeVariant: s = "expressive",
            headerBadgeText: a,
            headerBadgeIcon: l,
            countryCode: u,
            relocationCountryCode: c,
            ...d
        } = e,
        { checkoutHeaderConfigs: _ } = (0, m.ck)(),
        p = r.useCallback(
            () => (null == u ? null : (0, i.jsx)("img", { alt: "", className: A.bI, src: (0, h.t)(u) })),
            [u],
        ),
        E = r.useMemo(() => {
            if (null != a || null != _.headerBadgeText)
                return {
                    icon: _.headerBadgeIcon ?? l,
                    type: { text: _.headerBadgeText ?? a ?? "" },
                    variant: _.headerBadgeVariant ?? s,
                };
        }, [a, l, _.headerBadgeText, _.headerBadgeIcon, s, _.headerBadgeVariant]),
        g = null != u && null != c,
        T = r.useMemo(() => {
            if (!g && null != u) return { text: (0, f.j7)((0, f.ni)(u)), leadingIcon: p };
        }, [g, u, p]);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(o.rQ, {
                ...d,
                badge: E,
                badgePosition: "end",
                gradientColor: t,
                titleTextVariant: "heading-lg/semibold",
                alignCenter: !1,
                title: n,
                subtitle: T,
            }),
            g && (0, i.jsx)(I, { countryCode: u, relocationCountryCode: c }),
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
function C(e) {
    let { children: t, size: n = "md", maxHeight: r = "viewport", ...s } = e;
    return (0, i.jsx)(m.e0, {
        children: (0, i.jsx)(c.d, {
            size: n,
            ...s,
            maxHeight: r,
            contentOutsideContainer: (0, i.jsx)(_.A, {}),
            children: t,
        }),
    });
}
function N(e) {
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
