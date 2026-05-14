t.d(n, { default: () => D });
var i = t(627968),
    l = t(64700),
    a = t(793574),
    s = t(688810),
    d = t(937008),
    r = t(834252),
    c = t(491057),
    o = t(546042),
    u = t(939220),
    p = t(17928),
    h = t(696208),
    x = t(534514),
    m = t(94420),
    j = t(734925),
    g = t(687033),
    k = t(871181),
    A = t(683433),
    C = t(287809),
    I = t(67480),
    v = t(328968),
    f = t(371794),
    T = t(166532),
    b = t(482132),
    S = t(788868),
    y = t(375708),
    P = t(565756);
let M = {
    key: T.pn.GIFT_CUSTOMIZATION,
    renderStep: (e) => (0, i.jsx)(E, { ...e }),
    options: { modalSizeGetter: () => "xl", useBreadcrumbLabel: () => y.intl.string(y.t["W685+b"]) },
};
function N(e) {
    let { onStepChange: n, onBackClick: t, showBackButton: a = !1, disabled: s = !1, loading: d = !1 } = e,
        { hasPaymentSources: c } = (0, r.P5)(),
        o = c ? T.pn.REVIEW : T.pn.ADD_PAYMENT_STEPS,
        u = l.useMemo(
            () => [
                { variant: "primary", onClick: () => n(o), disabled: s, loading: d, text: y.intl.string(y.t.XiOHRX) },
            ],
            [n, o, s, d],
        );
    return (0, i.jsx)(h.H, { actions: u, leading: a ? (0, i.jsx)(A.A, { onClick: t }) : void 0 });
}
function E(e) {
    let { handleStepChange: n, handleClose: t } = e,
        { customGiftMessage: l = "", setCustomGiftMessage: a, giftRecipient: s } = (0, d.Pv)(),
        r = (0, m.t4)((e) => e.selectedSkuId),
        c = (0, p.bG)([C.default], () => C.default.getCurrentUser()),
        o = (0, p.bG)([I.A], () => (null != r ? I.A.get(r) : null), [r]),
        u = (0, g.A)(),
        h = (0, p.bG)([v.A], () => (null != r ? v.A.getForSKU(r) : null), [r]),
        A =
            h?.headerBackground != null && o?.applicationId != null
                ? (0, f.YE)(o.applicationId, h.headerBackground, 256)
                : void 0,
        T = async (e, n) => {};
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(b.dZ, {
                children: (0, i.jsxs)("div", {
                    className: P.Du,
                    children: [
                        (0, i.jsxs)("div", {
                            className: P.mT,
                            children: [
                                o?.name != null &&
                                    (0, i.jsx)(x.D, {
                                        variant: "heading-lg/semibold",
                                        color: "text-strong",
                                        children: o.name,
                                    }),
                                null != A && (0, i.jsx)("img", { src: A, alt: o?.name ?? "", className: P.LC }),
                            ],
                        }),
                        (0, i.jsxs)("div", {
                            className: P.Tc,
                            children: [
                                (0, i.jsx)(j.A, { recipients: u, selectedSkuId: r, validateSelectedGift: T }),
                                (0, i.jsx)(k.A, {
                                    onTextChange: (e) => a?.(e),
                                    pendingText: l,
                                    currentText: l,
                                    disableThemedBackground: !0,
                                    className: P.iX,
                                    innerClassName: P.pt,
                                }),
                            ],
                        }),
                    ],
                }),
            }),
            (0, i.jsx)(b.UX, {
                children: (0, i.jsx)(N, {
                    onStepChange: n,
                    onBackClick: t,
                    disabled: null == s || s.id === c?.id || l.length > S.Jo,
                }),
            }),
        ],
    });
}
var G = t(818348);
function _(e) {
    let { onClose: n, onComplete: t, transitionState: l, applicationId: a, analyticsLocationObject: d, skuId: c } = e,
        {} = (0, r.P5)(),
        { analyticsLocations: u } = (0, s.Ay)();
    return (0, i.jsx)(o.PaymentModal, {
        onClose: n,
        onComplete: t,
        applicationId: a,
        skuId: c,
        initialPlanId: null,
        analyticsObject: d,
        analyticsLocations: u,
        transitionState: l,
    });
}
function D(e) {
    let { loadId: n, applicationId: t, skuId: o, analyticsLocations: p, isGift: h = !1, checkoutFlow: x } = e,
        { analyticsLocations: m } = (0, s.Ay)(p, a.A.PREMIUM_PAYMENT_MODAL),
        j = l.useMemo(
            () =>
                (function () {
                    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                    return [u.kJ, ...(e ? [M] : []), u.zK, ...u.hh, u.r2, u.zX];
                })(h),
            [h],
        );
    return (0, i.jsx)(s.f5, {
        value: m,
        children: (0, i.jsx)(r.PaymentContextProvider, {
            loadId: n,
            stepConfigs: j,
            applicationId: t,
            skuIDs: [o],
            activeSubscription: null,
            purchaseType: G.VV.ONE_TIME,
            isGift: h,
            unifiedCheckoutFlow: x,
            children: (0, i.jsx)(c.Qt, {
                children: (0, i.jsx)(d.dX, { isGift: h, children: (0, i.jsx)(_, { ...e }) }),
            }),
        }),
    });
}
