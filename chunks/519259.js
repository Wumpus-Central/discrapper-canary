t.d(n, { default: () => D });
var a = t(627968),
    i = t(64700),
    l = t(793574),
    s = t(688810),
    d = t(937008),
    r = t(156312),
    c = t(491057),
    o = t(546042),
    u = t(939220),
    p = t(17928),
    h = t(696208),
    m = t(534514),
    x = t(94420),
    g = t(734925),
    f = t(687033),
    j = t(871181),
    k = t(683433),
    C = t(287809),
    I = t(67480),
    A = t(328968),
    T = t(371794),
    b = t(166532),
    v = t(482132),
    y = t(788868),
    _ = t(985018),
    M = t(565756);
let S = {
    key: b.pn.GIFT_CUSTOMIZATION,
    renderStep: (e) => (0, a.jsx)(G, { ...e }),
    options: { modalSizeGetter: () => "xl", useBreadcrumbLabel: () => _.intl.string(_.t["W685+b"]) },
};
function P(e) {
    let { onStepChange: n, onBackClick: t, showBackButton: l = !1, disabled: s = !1, loading: d = !1 } = e,
        { hasPaymentSources: c } = (0, r.P5)(),
        o = c ? b.pn.REVIEW : b.pn.ADD_PAYMENT_STEPS,
        u = i.useMemo(
            () => [
                { variant: "primary", onClick: () => n(o), disabled: s, loading: d, text: _.intl.string(_.t.XiOHRX) },
            ],
            [n, o, s, d],
        );
    return (0, a.jsx)(h.H, { actions: u, leading: l ? (0, a.jsx)(k.A, { onClick: t }) : void 0 });
}
function G(e) {
    let { handleStepChange: n, handleClose: t } = e,
        { customGiftMessage: i = "", setCustomGiftMessage: l, giftRecipient: s } = (0, d.Pv)(),
        r = (0, x.t4)((e) => e.selectedSkuId),
        c = (0, p.bG)([C.default], () => C.default.getCurrentUser()),
        o = (0, p.bG)([I.A], () => (null != r ? I.A.get(r) : null), [r]),
        u = (0, f.A)(),
        h = (0, p.bG)([A.A], () => (null != r ? A.A.getForSKU(r) : null), [r]),
        k =
            h?.headerBackground != null && o?.applicationId != null
                ? (0, T.YE)(o.applicationId, h.headerBackground, 256)
                : void 0,
        b = async (e, n) => {};
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)(v.dZ, {
                children: (0, a.jsxs)("div", {
                    className: M.Du,
                    children: [
                        (0, a.jsxs)("div", {
                            className: M.mT,
                            children: [
                                o?.name != null &&
                                    (0, a.jsx)(m.D, {
                                        variant: "heading-lg/semibold",
                                        color: "text-strong",
                                        children: o.name,
                                    }),
                                null != k && (0, a.jsx)("img", { src: k, alt: o?.name ?? "", className: M.LC }),
                            ],
                        }),
                        (0, a.jsxs)("div", {
                            className: M.Tc,
                            children: [
                                (0, a.jsx)(g.A, { recipients: u, selectedSkuId: r, validateSelectedGift: b }),
                                (0, a.jsx)(j.A, {
                                    onTextChange: (e) => l?.(e),
                                    pendingText: i,
                                    currentText: i,
                                    disableThemedBackground: !0,
                                    className: M.iX,
                                    innerClassName: M.pt,
                                }),
                            ],
                        }),
                    ],
                }),
            }),
            (0, a.jsx)(v.UX, {
                children: (0, a.jsx)(P, {
                    onStepChange: n,
                    onBackClick: t,
                    disabled: null == s || s.id === c?.id || i.length > y.Jo,
                }),
            }),
        ],
    });
}
var N = t(818348);
function E(e) {
    let { onClose: n, onComplete: t, transitionState: i, applicationId: l, analyticsLocationObject: d, skuId: c } = e,
        {} = (0, r.P5)(),
        { analyticsLocations: u } = (0, s.Ay)();
    return (0, a.jsx)(o.PaymentModal, {
        onClose: n,
        onComplete: t,
        applicationId: l,
        skuId: c,
        initialPlanId: null,
        analyticsObject: d,
        analyticsLocations: u,
        transitionState: i,
    });
}
function D(e) {
    let { loadId: n, applicationId: t, skuId: o, analyticsLocations: p, isGift: h = !1, checkoutFlow: m } = e,
        { analyticsLocations: x } = (0, s.Ay)(p, l.A.PREMIUM_PAYMENT_MODAL),
        g = i.useMemo(
            () =>
                (function () {
                    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                    return [u.kJ, ...(e ? [S] : []), u.zK, ...u.hh, u.r2, u.zX];
                })(h),
            [h],
        );
    return (0, a.jsx)(s.f5, {
        value: x,
        children: (0, a.jsx)(r.PaymentContextProvider, {
            loadId: n,
            stepConfigs: g,
            applicationId: t,
            skuIDs: [o],
            activeSubscription: null,
            purchaseType: N.VV.ONE_TIME,
            isGift: h,
            unifiedCheckoutFlow: m,
            children: (0, a.jsx)(c.Qt, {
                children: (0, a.jsx)(d.dX, { isGift: h, children: (0, a.jsx)(E, { ...e }) }),
            }),
        }),
    });
}
