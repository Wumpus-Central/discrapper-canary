t.d(a, { KT: () => _, oH: () => S, s3: () => I, lo: () => T, DJ: () => L, Jg: () => P, Ig: () => R });
var l = t(477900),
    n = t(582128),
    r = t(503698),
    s = t.n(r),
    i = t(20742),
    c = t(364840),
    o = t(331322),
    d = t(224640),
    h = t(430993),
    u = t(289873),
    m = t(231723),
    p = t(632088),
    x = t(500380),
    E = t(423764),
    C = t(683433),
    v = t(708791),
    j = t(981036),
    g = t(725836),
    A = t(834730),
    f = t(834334);
function b(e) {
    let { countryCode: a, relocationCountryCode: t } = e;
    return (0, l.jsxs)("div", {
        className: f.uL,
        children: [
            (0, l.jsx)("img", { alt: "", className: f.bI, src: (0, x.t)(a) }),
            (0, l.jsx)(A.E, { variant: "text-md/normal", color: "text-subtle", children: (0, E.j7)((0, E.ni)(a)) }),
            (0, l.jsx)(A.E, { variant: "text-md/normal", color: "text-subtle", className: f.B5, children: "\u2192" }),
            (0, l.jsx)("img", { alt: "", className: f.bI, src: (0, x.t)(t) }),
            (0, l.jsx)(A.E, { variant: "text-md/normal", color: "text-subtle", children: (0, E.j7)((0, E.ni)(t)) }),
        ],
    });
}
var y = t(652215);
function I(e) {
    let {
            gradientColor: a,
            title: t,
            headerBadgeVariant: r = "expressive",
            headerBadgeText: s,
            headerBadgeIcon: c,
            countryCode: o,
            relocationCountryCode: d,
            ...h
        } = e,
        u = n.useCallback(
            () => (null == o ? null : (0, l.jsx)("img", { alt: "", className: f.bI, src: (0, x.t)(o) })),
            [o],
        ),
        m = n.useMemo(() => {
            if (null != s) return { icon: c, type: { text: s ?? "" }, variant: r };
        }, [s, c, r]),
        p = null != o && null != d,
        C = n.useMemo(() => {
            if (!p && null != o) return { text: (0, E.j7)((0, E.ni)(o)), leadingIcon: u };
        }, [p, o, u]);
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(i.rQ, {
                ...h,
                badge: m,
                badgePosition: "end",
                gradientColor: a,
                titleTextVariant: "heading-lg/semibold",
                alignCenter: !1,
                title: t,
                subtitle: C,
            }),
            p && (0, l.jsx)(b, { countryCode: o, relocationCountryCode: d }),
        ],
    });
}
let M = { top: 16, bottom: 8 };
function T(e) {
    let {
            onBackClick: a,
            primaryButtonProps: t,
            portalClassName: n,
            stripeExpressCheckoutComponent: r,
            isSubmitting: i,
        } = e,
        { variant: d } = t,
        { setCheckoutFooterContentNode: h } = (0, g.ck)(),
        u = (0, l.jsx)(j.p, { ...t, variant: d ?? "active", autoFocus: !0 });
    return (0, l.jsxs)(c.j, {
        children: [
            (0, l.jsx)("div", { ref: h, className: s()(f.K4, n) }),
            (0, l.jsxs)(o.B, {
                direction: "horizontal",
                align: "center",
                justify: null != a ? "space-between" : "end",
                fullWidth: !0,
                padding: M,
                children: [
                    null != a ? (0, l.jsx)(C.A, { onClick: a }) : null,
                    null != r
                        ? (0, l.jsx)(v.$, {
                              stripeExpressCheckoutComponent: r,
                              primaryCheckoutButton: u,
                              isSubmitting: i,
                          })
                        : u,
                ],
            }),
        ],
    });
}
function R() {
    return (0, l.jsx)(u.y, { type: u.y.Type.PULSING_ELLIPSIS, itemClassName: f.Je });
}
function L(e) {
    let { className: a } = e;
    return (0, l.jsx)("div", { className: s()(f.g4, a), children: (0, l.jsx)(R, {}) });
}
function P(e) {
    let { children: a, size: t = "md", maxHeight: n = "viewport", isModalContentLoading: r, ...s } = e;
    return (0, l.jsx)(g.e0, {
        children: (0, l.jsx)(d.d, {
            size: t,
            ...s,
            maxHeight: n,
            contentOutsideContainer: (0, l.jsx)(p.A, {}),
            children: r ? (0, l.jsx)(L, {}) : a,
        }),
    });
}
function _() {
    return (0, l.jsx)(P, { transitionState: m.ip.ENTERED, onClose: y.tEg, size: "md", isModalContentLoading: !0 });
}
function S(e) {
    let {
        title: a,
        gradientColor: t = "purple",
        countryCode: n,
        relocationCountryCode: r,
        headerBadgeText: s,
        headerBadgeIcon: i,
        onBackClick: c,
        primaryButtonProps: o,
        children: u,
        ...m
    } = e;
    return (0, l.jsx)(g.e0, {
        children: (0, l.jsxs)(d.d, {
            ...m,
            children: [
                (0, l.jsx)(I, {
                    gradientColor: t,
                    title: a,
                    countryCode: n,
                    relocationCountryCode: r,
                    headerBadgeText: s,
                    headerBadgeIcon: i,
                }),
                (0, l.jsx)(h.c, { children: u }),
                (0, l.jsx)(T, { onBackClick: c, primaryButtonProps: o }),
            ],
        }),
    });
}
