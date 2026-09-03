t.d(e, { DJ: () => R, Ig: () => L, Jg: () => _, KT: () => P, lo: () => T, oH: () => S, s3: () => M });
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
    A = t(708791),
    v = t(981036),
    g = t(725836),
    j = t(206441),
    f = t(520149),
    b = t(652215),
    y = t(126223);
function M(a) {
    let {
            gradientColor: e,
            title: t,
            headerBadgeVariant: r = "expressive",
            headerBadgeText: s,
            headerBadgeIcon: c,
            countryCode: o,
            relocationCountryCode: d,
            ...h
        } = a,
        u = n.useCallback(
            () => (null == o ? null : (0, l.jsx)("img", { alt: "", className: y.bI, src: (0, x.t)(o) })),
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
                gradientColor: e,
                titleTextVariant: "heading-lg/semibold",
                alignCenter: !1,
                title: t,
                subtitle: C,
            }),
            p && (0, l.jsx)(f.w, { countryCode: o, relocationCountryCode: d }),
        ],
    });
}
let I = { top: 16, bottom: 8 };
function T(a) {
    let { onBackClick: e, primaryButtonProps: t, portalClassName: n, stripeExpressCheckoutComponent: r } = a,
        { variant: i } = t,
        { setCheckoutFooterContentNode: d } = (0, g.ck)(),
        { shouldUseStripeExpressCheckout: h } = (0, j.t4)((a) => ({
            shouldUseStripeExpressCheckout: a.getShouldUseStripeExpressCheckout(),
        })),
        u = (0, l.jsx)(v.p, { ...t, variant: i ?? "active", autoFocus: !0 });
    return (0, l.jsxs)(c.j, {
        children: [
            (0, l.jsx)("div", { ref: d, className: s()(y.K4, n) }),
            (0, l.jsxs)(o.B, {
                direction: "horizontal",
                align: "center",
                justify: null != e ? "space-between" : "end",
                fullWidth: !0,
                padding: I,
                children: [
                    null != e ? (0, l.jsx)(C.A, { onClick: e }) : null,
                    h && null != r
                        ? (0, l.jsx)(A.O, { stripeExpressCheckoutComponent: r, primaryCheckoutButton: u })
                        : u,
                ],
            }),
        ],
    });
}
function L() {
    return (0, l.jsx)(u.y, { type: u.y.Type.PULSING_ELLIPSIS, itemClassName: y.Je });
}
function R(a) {
    let { className: e } = a;
    return (0, l.jsx)("div", { className: s()(y.g4, e), children: (0, l.jsx)(L, {}) });
}
function _(a) {
    let { children: e, size: t = "md", maxHeight: n = "viewport", isModalContentLoading: r, ...s } = a;
    return (0, l.jsx)(g.e0, {
        children: (0, l.jsx)(d.d, {
            size: t,
            ...s,
            maxHeight: n,
            contentOutsideContainer: (0, l.jsx)(p.A, {}),
            children: r ? (0, l.jsx)(R, {}) : e,
        }),
    });
}
function P() {
    return (0, l.jsx)(_, { transitionState: m.ip.ENTERED, onClose: b.tEg, size: "md", isModalContentLoading: !0 });
}
function S(a) {
    let {
        title: e,
        gradientColor: t = "purple",
        countryCode: n,
        relocationCountryCode: r,
        headerBadgeText: s,
        headerBadgeIcon: i,
        onBackClick: c,
        primaryButtonProps: o,
        children: u,
        ...m
    } = a;
    return (0, l.jsx)(g.e0, {
        children: (0, l.jsxs)(d.d, {
            ...m,
            children: [
                (0, l.jsx)(M, {
                    gradientColor: t,
                    title: e,
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
