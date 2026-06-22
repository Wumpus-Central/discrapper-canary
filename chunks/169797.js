"use strict";
n.d(t, { DJ: () => C, Jg: () => N, lo: () => y, oH: () => v, s3: () => T });
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
    A = n(520149),
    I = n(857414);
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
        T = r.useMemo(() => {
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
                subtitle: T,
            }),
            m && (0, i.jsx)(A.w, { countryCode: u, relocationCountryCode: c }),
        ],
    });
}
let S = { top: 16, bottom: 8 };
function y(e) {
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
                padding: S,
                children: [
                    null != t ? (0, i.jsx)(E.A, { onClick: t }) : null,
                    (0, i.jsx)(m.p, { ...n, variant: s ?? "active", autoFocus: !0 }),
                ],
            }),
        ],
    });
}
let C = (e) => {
    let { className: t } = e;
    return (0, i.jsx)("div", {
        className: a()(I.g4, t),
        children: (0, i.jsx)(_.y, { type: _.y.Type.PULSING_ELLIPSIS, itemClassName: I.Je }),
    });
};
function N(e) {
    let { children: t, size: n = "md", maxHeight: r = "viewport", isModalContentLoading: s, ...a } = e;
    return (0, i.jsx)(g.e0, {
        children: (0, i.jsx)(c.d, {
            size: n,
            ...a,
            maxHeight: r,
            contentOutsideContainer: (0, i.jsx)(h.A, {}),
            children: s ? (0, i.jsx)(C, {}) : t,
        }),
    });
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
    return (0, i.jsx)(g.e0, {
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
