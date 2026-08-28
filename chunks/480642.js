t.d(a, { KT: () => _, oH: () => U, s3: () => M, lo: () => R, DJ: () => P, Jg: () => S, Ig: () => L });
var l = t(477900),
    n = t(582128),
    r = t(503698),
    s = t.n(r),
    i = t(20742),
    c = t(364840),
    o = t(331322),
    u = t(224640),
    d = t(430993),
    h = t(289873),
    m = t(231723),
    p = t(632088),
    x = t(500380),
    C = t(423764),
    E = t(683433),
    g = t(708791),
    v = t(981036),
    f = t(725836),
    j = t(206441),
    A = t(834730),
    b = t(126223);
function y(e) {
    let { countryCode: a, relocationCountryCode: t } = e;
    return (0, l.jsxs)("div", {
        className: b.uL,
        children: [
            (0, l.jsx)("img", { alt: "", className: b.bI, src: (0, x.t)(a) }),
            (0, l.jsx)(A.E, { variant: "text-md/normal", color: "text-subtle", children: (0, C.j7)((0, C.ni)(a)) }),
            (0, l.jsx)(A.E, { variant: "text-md/normal", color: "text-subtle", className: b.B5, children: "\u2192" }),
            (0, l.jsx)("img", { alt: "", className: b.bI, src: (0, x.t)(t) }),
            (0, l.jsx)(A.E, { variant: "text-md/normal", color: "text-subtle", children: (0, C.j7)((0, C.ni)(t)) }),
        ],
    });
}
var I = t(652215);
function M(e) {
    let {
            gradientColor: a,
            title: t,
            headerBadgeVariant: r = "expressive",
            headerBadgeText: s,
            headerBadgeIcon: c,
            countryCode: o,
            relocationCountryCode: u,
            ...d
        } = e,
        h = n.useCallback(
            () => (null == o ? null : (0, l.jsx)("img", { alt: "", className: b.bI, src: (0, x.t)(o) })),
            [o],
        ),
        m = n.useMemo(() => {
            if (null != s) return { icon: c, type: { text: s ?? "" }, variant: r };
        }, [s, c, r]),
        p = null != o && null != u,
        E = n.useMemo(() => {
            if (!p && null != o) return { text: (0, C.j7)((0, C.ni)(o)), leadingIcon: h };
        }, [p, o, h]);
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(i.rQ, {
                ...d,
                badge: m,
                badgePosition: "end",
                gradientColor: a,
                titleTextVariant: "heading-lg/semibold",
                alignCenter: !1,
                title: t,
                subtitle: E,
            }),
            p && (0, l.jsx)(y, { countryCode: o, relocationCountryCode: u }),
        ],
    });
}
let T = { top: 16, bottom: 8 };
function R(e) {
    let { onBackClick: a, primaryButtonProps: t, portalClassName: n, stripeExpressCheckoutComponent: r } = e,
        { variant: i } = t,
        { setCheckoutFooterContentNode: u } = (0, f.ck)(),
        { shouldUseStripeExpressCheckout: d } = (0, j.t4)((e) => ({
            shouldUseStripeExpressCheckout: e.getShouldUseStripeExpressCheckout(),
        })),
        h = (0, l.jsx)(v.p, { ...t, variant: i ?? "active", autoFocus: !0 });
    return (0, l.jsxs)(c.j, {
        children: [
            (0, l.jsx)("div", { ref: u, className: s()(b.K4, n) }),
            (0, l.jsxs)(o.B, {
                direction: "horizontal",
                align: "center",
                justify: null != a ? "space-between" : "end",
                fullWidth: !0,
                padding: T,
                children: [
                    null != a ? (0, l.jsx)(E.A, { onClick: a }) : null,
                    d && null != r
                        ? (0, l.jsx)(g.O, { stripeExpressCheckoutComponent: r, primaryCheckoutButton: h })
                        : h,
                ],
            }),
        ],
    });
}
function L() {
    return (0, l.jsx)(h.y, { type: h.y.Type.PULSING_ELLIPSIS, itemClassName: b.Je });
}
function P(e) {
    let { className: a } = e;
    return (0, l.jsx)("div", { className: s()(b.g4, a), children: (0, l.jsx)(L, {}) });
}
function S(e) {
    let { children: a, size: t = "md", maxHeight: n = "viewport", isModalContentLoading: r, ...s } = e;
    return (0, l.jsx)(f.e0, {
        children: (0, l.jsx)(u.d, {
            size: t,
            ...s,
            maxHeight: n,
            contentOutsideContainer: (0, l.jsx)(p.A, {}),
            children: r ? (0, l.jsx)(P, {}) : a,
        }),
    });
}
function _() {
    return (0, l.jsx)(S, { transitionState: m.ip.ENTERED, onClose: I.tEg, size: "md", isModalContentLoading: !0 });
}
function U(e) {
    let {
        title: a,
        gradientColor: t = "purple",
        countryCode: n,
        relocationCountryCode: r,
        headerBadgeText: s,
        headerBadgeIcon: i,
        onBackClick: c,
        primaryButtonProps: o,
        children: h,
        ...m
    } = e;
    return (0, l.jsx)(f.e0, {
        children: (0, l.jsxs)(u.d, {
            ...m,
            children: [
                (0, l.jsx)(M, {
                    gradientColor: t,
                    title: a,
                    countryCode: n,
                    relocationCountryCode: r,
                    headerBadgeText: s,
                    headerBadgeIcon: i,
                }),
                (0, l.jsx)(d.c, { children: h }),
                (0, l.jsx)(R, { onBackClick: c, primaryButtonProps: o }),
            ],
        }),
    });
}
