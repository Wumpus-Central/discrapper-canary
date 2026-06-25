"use strict";
n.d(t, { oH: () => R, s3: () => S, lo: () => C, DJ: () => N, Jg: () => v });
var i = n(627968),
    r = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(20742),
    l = n(364840),
    u = n(331322),
    c = n(224640),
    d = n(430993),
    _ = n(289873),
    h = n(632088),
    f = n(500380),
    p = n(423764),
    E = n(683433),
    m = n(981036),
    g = n(725836),
    A = n(834730),
    I = n(550534);
function T(e) {
    let { countryCode: t, relocationCountryCode: n } = e;
    return (0, i.jsxs)("div", {
        className: I.uL,
        children: [
            (0, i.jsx)("img", { alt: "", className: I.bI, src: (0, f.t)(t) }),
            (0, i.jsx)(A.E, { variant: "text-md/normal", color: "text-subtle", children: (0, p.j7)((0, p.ni)(t)) }),
            (0, i.jsx)(A.E, { variant: "text-md/normal", color: "text-subtle", className: I.B5, children: "\u2192" }),
            (0, i.jsx)("img", { alt: "", className: I.bI, src: (0, f.t)(n) }),
            (0, i.jsx)(A.E, { variant: "text-md/normal", color: "text-subtle", children: (0, p.j7)((0, p.ni)(n)) }),
        ],
    });
}
function S(e) {
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
        { checkoutHeaderConfigs: _ } = (0, g.ck)(),
        h = r.useCallback(
            () => (null == u ? null : (0, i.jsx)("img", { alt: "", className: I.bI, src: (0, f.t)(u) })),
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
        m = null != u && null != c,
        A = r.useMemo(() => {
            if (!m && null != u) return { text: (0, p.j7)((0, p.ni)(u)), leadingIcon: h };
        }, [m, u, h]);
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
                subtitle: A,
            }),
            m && (0, i.jsx)(T, { countryCode: u, relocationCountryCode: c }),
        ],
    });
}
let y = { top: 16, bottom: 8 };
function C(e) {
    let { onBackClick: t, primaryButtonProps: n, portalClassName: r } = e,
        { variant: s } = n,
        { setCheckoutFooterContentNode: o } = (0, g.ck)();
    return (0, i.jsxs)(l.j, {
        children: [
            (0, i.jsx)("div", { ref: o, className: a()(I.K4, r) }),
            (0, i.jsxs)(u.B, {
                direction: "horizontal",
                align: "center",
                justify: null != t ? "space-between" : "end",
                fullWidth: !0,
                padding: y,
                children: [
                    null != t ? (0, i.jsx)(E.A, { onClick: t }) : null,
                    (0, i.jsx)(m.p, { ...n, variant: s ?? "active", autoFocus: !0 }),
                ],
            }),
        ],
    });
}
function N(e) {
    let { className: t } = e;
    return (0, i.jsx)("div", {
        className: a()(I.g4, t),
        children: (0, i.jsx)(_.y, { type: _.y.Type.PULSING_ELLIPSIS, itemClassName: I.Je }),
    });
}
function v(e) {
    let { children: t, size: n = "md", maxHeight: r = "viewport", isModalContentLoading: s, ...a } = e;
    return (0, i.jsx)(g.e0, {
        children: (0, i.jsx)(c.d, {
            size: n,
            ...a,
            maxHeight: r,
            contentOutsideContainer: (0, i.jsx)(h.A, {}),
            children: s ? (0, i.jsx)(N, {}) : t,
        }),
    });
}
function R(e) {
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
    return (0, i.jsx)(g.e0, {
        children: (0, i.jsxs)(c.d, {
            ...h,
            children: [
                (0, i.jsx)(S, {
                    gradientColor: n,
                    title: t,
                    countryCode: r,
                    relocationCountryCode: s,
                    headerBadgeText: a,
                    headerBadgeIcon: o,
                }),
                (0, i.jsx)(d.c, { children: _ }),
                (0, i.jsx)(C, { onBackClick: l, primaryButtonProps: u }),
            ],
        }),
    });
}
