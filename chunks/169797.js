l.d(e, { DJ: () => H, Jg: () => R, KT: () => Z, lo: () => P, oH: () => y, s3: () => L });
var t = l(477900),
    r = l(582128),
    s = l(503698),
    n = l.n(s),
    h = l(20742),
    i = l(364840),
    o = l(331322),
    c = l(224640),
    d = l(231723),
    u = l(430993),
    m = l(632088),
    p = l(500380),
    x = l(423764),
    A = l(820287),
    C = l(708791),
    M = l(981036),
    E = l(725836),
    g = l(642639),
    _ = l(520149),
    j = l(56763),
    v = l(652215),
    T = l(126223);
function L(a) {
    let {
            gradientColor: e,
            title: l,
            headerBadgeVariant: s = "expressive",
            headerBadgeText: n,
            headerBadgeIcon: i,
            countryCode: o,
            relocationCountryCode: c,
            ...d
        } = a,
        u = r.useCallback(
            () => (null == o ? null : (0, t.jsx)("img", { alt: "", className: T.bI, src: (0, p.t)(o) })),
            [o],
        ),
        m = r.useMemo(() => {
            if (null != n) return { icon: i, type: { text: n ?? "" }, variant: s };
        }, [n, i, s]),
        A = null != o && null != c,
        C = r.useMemo(() => {
            if (!A && null != o) return { text: (0, x.j7)((0, x.ni)(o)), leadingIcon: u };
        }, [A, o, u]);
    return (0, t.jsxs)(t.Fragment, {
        children: [
            (0, t.jsx)(h.rQ, {
                ...d,
                badge: m,
                badgePosition: "end",
                gradientColor: e,
                titleTextVariant: "heading-lg/semibold",
                alignCenter: !1,
                title: l,
                subtitle: C,
            }),
            A && (0, t.jsx)(_.w, { countryCode: o, relocationCountryCode: c }),
        ],
    });
}
let I = { top: 16, bottom: 8 };
function P(a) {
    let { onBackClick: e, primaryButtonProps: l, portalClassName: r, stripeExpressCheckoutComponent: s } = a,
        { variant: h } = l,
        { setCheckoutFooterContentNode: c } = (0, E.ck)(),
        { shouldUseStripeExpressCheckout: d } = (0, g.t4)((a) => ({
            shouldUseStripeExpressCheckout: a.getShouldUseStripeExpressCheckout(),
        })),
        u = (0, t.jsx)(M.p, { ...l, variant: h ?? "active", autoFocus: !0 });
    return (0, t.jsxs)(i.j, {
        children: [
            (0, t.jsx)("div", { ref: c, className: n()(T.K4, r) }),
            (0, t.jsxs)(o.B, {
                direction: "horizontal",
                align: "center",
                justify: null != e ? "space-between" : "end",
                fullWidth: !0,
                padding: I,
                children: [
                    null != e ? (0, t.jsx)(A.A, { onClick: e }) : null,
                    d && null != s
                        ? (0, t.jsx)(C.O, { stripeExpressCheckoutComponent: s, primaryCheckoutButton: u })
                        : u,
                ],
            }),
        ],
    });
}
function H(a) {
    let { className: e } = a;
    return (0, t.jsx)("div", { className: n()(T.g4, e), children: (0, t.jsx)(j.I, {}) });
}
function R(a) {
    let { children: e, size: l = "md", maxHeight: r = "viewport", isModalContentLoading: s, ...n } = a;
    return (0, t.jsx)(E.e0, {
        children: (0, t.jsx)(c.d, {
            size: l,
            ...n,
            maxHeight: r,
            contentOutsideContainer: (0, t.jsx)(m.A, {}),
            children: s ? (0, t.jsx)(H, {}) : e,
        }),
    });
}
function Z() {
    return (0, t.jsx)(R, { transitionState: d.ip.ENTERED, onClose: v.tEg, size: "md", isModalContentLoading: !0 });
}
function y(a) {
    let {
        title: e,
        gradientColor: l = "purple",
        countryCode: r,
        relocationCountryCode: s,
        headerBadgeText: n,
        headerBadgeIcon: h,
        onBackClick: i,
        primaryButtonProps: o,
        children: d,
        ...m
    } = a;
    return (0, t.jsx)(E.e0, {
        children: (0, t.jsxs)(c.d, {
            ...m,
            children: [
                (0, t.jsx)(L, {
                    gradientColor: l,
                    title: e,
                    countryCode: r,
                    relocationCountryCode: s,
                    headerBadgeText: n,
                    headerBadgeIcon: h,
                }),
                (0, t.jsx)(u.c, { children: d }),
                (0, t.jsx)(P, { onBackClick: i, primaryButtonProps: o }),
            ],
        }),
    });
}
