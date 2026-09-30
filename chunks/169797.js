l.d(e, { DJ: () => R, Ig: () => H, Jg: () => Z, KT: () => y, lo: () => P, oH: () => D, s3: () => L });
var t = l(477900),
    r = l(582128),
    s = l(503698),
    n = l.n(s),
    h = l(20742),
    i = l(364840),
    o = l(331322),
    c = l(289873),
    d = l(224640),
    u = l(231723),
    m = l(430993),
    p = l(632088),
    x = l(500380),
    A = l(423764),
    C = l(820287),
    M = l(708791),
    g = l(981036),
    E = l(725836),
    _ = l(263532),
    j = l(520149),
    T = l(652215),
    v = l(126223);
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
            () => (null == o ? null : (0, t.jsx)("img", { alt: "", className: v.bI, src: (0, x.t)(o) })),
            [o],
        ),
        m = r.useMemo(() => {
            if (null != n) return { icon: i, type: { text: n ?? "" }, variant: s };
        }, [n, i, s]),
        p = null != o && null != c,
        C = r.useMemo(() => {
            if (!p && null != o) return { text: (0, A.j7)((0, A.ni)(o)), leadingIcon: u };
        }, [p, o, u]);
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
            p && (0, t.jsx)(j.w, { countryCode: o, relocationCountryCode: c }),
        ],
    });
}
let I = { top: 16, bottom: 8 };
function P(a) {
    let { onBackClick: e, primaryButtonProps: l, portalClassName: r, stripeExpressCheckoutComponent: s } = a,
        { variant: h } = l,
        { setCheckoutFooterContentNode: c } = (0, E.ck)(),
        { shouldUseStripeExpressCheckout: d } = (0, _.t4)((a) => ({
            shouldUseStripeExpressCheckout: a.getShouldUseStripeExpressCheckout(),
        })),
        u = (0, t.jsx)(g.p, { ...l, variant: h ?? "active", autoFocus: !0 });
    return (0, t.jsxs)(i.j, {
        children: [
            (0, t.jsx)("div", { ref: c, className: n()(v.K4, r) }),
            (0, t.jsxs)(o.B, {
                direction: "horizontal",
                align: "center",
                justify: null != e ? "space-between" : "end",
                fullWidth: !0,
                padding: I,
                children: [
                    null != e ? (0, t.jsx)(C.A, { onClick: e }) : null,
                    d && null != s
                        ? (0, t.jsx)(M.O, { stripeExpressCheckoutComponent: s, primaryCheckoutButton: u })
                        : u,
                ],
            }),
        ],
    });
}
function H() {
    return (0, t.jsx)(c.y, { type: c.y.Type.PULSING_ELLIPSIS, itemClassName: v.Je });
}
function R(a) {
    let { className: e } = a;
    return (0, t.jsx)("div", { className: n()(v.g4, e), children: (0, t.jsx)(H, {}) });
}
function Z(a) {
    let { children: e, size: l = "md", maxHeight: r = "viewport", isModalContentLoading: s, ...n } = a;
    return (0, t.jsx)(E.e0, {
        children: (0, t.jsx)(d.d, {
            size: l,
            ...n,
            maxHeight: r,
            contentOutsideContainer: (0, t.jsx)(p.A, {}),
            children: s ? (0, t.jsx)(R, {}) : e,
        }),
    });
}
function y() {
    return (0, t.jsx)(Z, { transitionState: u.ip.ENTERED, onClose: T.tEg, size: "md", isModalContentLoading: !0 });
}
function D(a) {
    let {
        title: e,
        gradientColor: l = "purple",
        countryCode: r,
        relocationCountryCode: s,
        headerBadgeText: n,
        headerBadgeIcon: h,
        onBackClick: i,
        primaryButtonProps: o,
        children: c,
        ...u
    } = a;
    return (0, t.jsx)(E.e0, {
        children: (0, t.jsxs)(d.d, {
            ...u,
            children: [
                (0, t.jsx)(L, {
                    gradientColor: l,
                    title: e,
                    countryCode: r,
                    relocationCountryCode: s,
                    headerBadgeText: n,
                    headerBadgeIcon: h,
                }),
                (0, t.jsx)(m.c, { children: c }),
                (0, t.jsx)(P, { onBackClick: i, primaryButtonProps: o }),
            ],
        }),
    });
}
