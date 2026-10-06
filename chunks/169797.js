n.d(t, { DJ: () => T, Jg: () => N, KT: () => I, lo: () => E, oH: () => P, s3: () => _ });
var r = n(477900),
    o = n(582128),
    l = n(503698),
    s = n.n(l),
    i = n(20742),
    a = n(364840),
    u = n(331322),
    c = n(224640),
    d = n(231723),
    p = n(430993),
    x = n(632088),
    m = n(500380),
    h = n(423764),
    C = n(820287),
    j = n(708791),
    g = n(981036),
    y = n(725836),
    k = n(642639),
    v = n(520149),
    f = n(56763),
    b = n(652215),
    A = n(126223);
function _(e) {
    let {
            gradientColor: t,
            title: n,
            headerBadgeVariant: l = "expressive",
            headerBadgeText: s,
            headerBadgeIcon: a,
            countryCode: u,
            relocationCountryCode: c,
            ...d
        } = e,
        p = o.useCallback(
            () => (null == u ? null : (0, r.jsx)("img", { alt: "", className: A.bI, src: (0, m.t)(u) })),
            [u],
        ),
        x = o.useMemo(() => {
            if (null != s) return { icon: a, type: { text: s ?? "" }, variant: l };
        }, [s, a, l]),
        C = null != u && null != c,
        j = o.useMemo(() => {
            if (!C && null != u) return { text: (0, h.j7)((0, h.ni)(u)), leadingIcon: p };
        }, [C, u, p]);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(i.rQ, {
                ...d,
                badge: x,
                badgePosition: "end",
                gradientColor: t,
                titleTextVariant: "heading-lg/semibold",
                alignCenter: !1,
                title: n,
                subtitle: j,
            }),
            C && (0, r.jsx)(v.w, { countryCode: u, relocationCountryCode: c }),
        ],
    });
}
let S = { top: 16, bottom: 8 };
function E(e) {
    let { onBackClick: t, primaryButtonProps: n, portalClassName: o, stripeExpressCheckoutComponent: l } = e,
        { variant: i } = n,
        { setCheckoutFooterContentNode: c } = (0, y.ck)(),
        { shouldUseStripeExpressCheckout: d } = (0, k.t4)((e) => ({
            shouldUseStripeExpressCheckout: e.getShouldUseStripeExpressCheckout(),
        })),
        p = (0, r.jsx)(g.p, { ...n, variant: i ?? "active", autoFocus: !0 });
    return (0, r.jsxs)(a.j, {
        children: [
            (0, r.jsx)("div", { ref: c, className: s()(A.K4, o) }),
            (0, r.jsxs)(u.B, {
                direction: "horizontal",
                align: "center",
                justify: null != t ? "space-between" : "end",
                fullWidth: !0,
                padding: S,
                children: [
                    null != t ? (0, r.jsx)(C.A, { onClick: t }) : null,
                    d && null != l
                        ? (0, r.jsx)(j.O, { stripeExpressCheckoutComponent: l, primaryCheckoutButton: p })
                        : p,
                ],
            }),
        ],
    });
}
function T(e) {
    let { className: t } = e;
    return (0, r.jsx)("div", { className: s()(A.g4, t), children: (0, r.jsx)(f.I, {}) });
}
function N(e) {
    let { children: t, size: n = "md", maxHeight: o = "viewport", isModalContentLoading: l, ...s } = e;
    return (0, r.jsx)(y.e0, {
        children: (0, r.jsx)(c.d, {
            size: n,
            ...s,
            maxHeight: o,
            contentOutsideContainer: (0, r.jsx)(x.A, {}),
            children: l ? (0, r.jsx)(T, {}) : t,
        }),
    });
}
function I() {
    return (0, r.jsx)(N, { transitionState: d.ip.ENTERED, onClose: b.tEg, size: "md", isModalContentLoading: !0 });
}
function P(e) {
    let {
        title: t,
        gradientColor: n = "purple",
        countryCode: o,
        relocationCountryCode: l,
        headerBadgeText: s,
        headerBadgeIcon: i,
        onBackClick: a,
        primaryButtonProps: u,
        children: d,
        ...x
    } = e;
    return (0, r.jsx)(y.e0, {
        children: (0, r.jsxs)(c.d, {
            ...x,
            children: [
                (0, r.jsx)(_, {
                    gradientColor: n,
                    title: t,
                    countryCode: o,
                    relocationCountryCode: l,
                    headerBadgeText: s,
                    headerBadgeIcon: i,
                }),
                (0, r.jsx)(p.c, { children: d }),
                (0, r.jsx)(E, { onBackClick: a, primaryButtonProps: u }),
            ],
        }),
    });
}
