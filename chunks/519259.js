t.d(n, { default: () => O });
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
    m = t(426398),
    j = t(94420),
    g = t(734925),
    k = t(687033),
    A = t(871181),
    C = t(683433),
    I = t(287809),
    v = t(67480),
    f = t(328968),
    T = t(371794),
    b = t(166532),
    S = t(482132),
    y = t(788868),
    M = t(375708),
    N = t(565756);
let P = {
    key: b.pn.GIFT_CUSTOMIZATION,
    renderStep: (e) => (0, i.jsx)(G, { ...e }),
    options: { modalSizeGetter: () => "xl", useBreadcrumbLabel: () => M.intl.string(M.t["W685+b"]) },
};
function E(e) {
    let { onStepChange: n, onBackClick: t, showBackButton: a = !1, disabled: s = !1, loading: d = !1 } = e,
        { hasPaymentSources: r } = (0, m.jm)(),
        c = r ? b.pn.REVIEW : b.pn.ADD_PAYMENT_STEPS,
        o = l.useMemo(
            () => [
                { variant: "primary", onClick: () => n(c), disabled: s, loading: d, text: M.intl.string(M.t.XiOHRX) },
            ],
            [n, c, s, d],
        );
    return (0, i.jsx)(h.H, { actions: o, leading: a ? (0, i.jsx)(C.A, { onClick: t }) : void 0 });
}
function G(e) {
    let { handleStepChange: n, handleClose: t } = e,
        { customGiftMessage: l = "", setCustomGiftMessage: a, giftRecipient: s } = (0, d.Pv)(),
        r = (0, j.t4)((e) => e.selectedSkuId),
        c = (0, p.bG)([I.default], () => I.default.getCurrentUser()),
        o = (0, p.bG)([v.A], () => (null != r ? v.A.get(r) : null), [r]),
        u = (0, k.A)(),
        h = (0, p.bG)([f.A], () => (null != r ? f.A.getForSKU(r) : null), [r]),
        m =
            h?.headerBackground != null && o?.applicationId != null
                ? (0, T.YE)(o.applicationId, h.headerBackground, 256)
                : void 0,
        C = async (e, n) => {};
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(S.dZ, {
                children: (0, i.jsxs)("div", {
                    className: N.Du,
                    children: [
                        (0, i.jsxs)("div", {
                            className: N.mT,
                            children: [
                                o?.name != null &&
                                    (0, i.jsx)(x.D, {
                                        variant: "heading-lg/semibold",
                                        color: "text-strong",
                                        children: o.name,
                                    }),
                                null != m && (0, i.jsx)("img", { src: m, alt: o?.name ?? "", className: N.LC }),
                            ],
                        }),
                        (0, i.jsxs)("div", {
                            className: N.Tc,
                            children: [
                                (0, i.jsx)(g.A, { recipients: u, selectedSkuId: r, validateSelectedGift: C }),
                                (0, i.jsx)(A.A, {
                                    onTextChange: (e) => a?.(e),
                                    pendingText: l,
                                    currentText: l,
                                    disableThemedBackground: !0,
                                    className: N.iX,
                                    innerClassName: N.pt,
                                }),
                            ],
                        }),
                    ],
                }),
            }),
            (0, i.jsx)(S.UX, {
                children: (0, i.jsx)(E, {
                    onStepChange: n,
                    onBackClick: t,
                    disabled: null == s || s.id === c?.id || l.length > y.Jo,
                }),
            }),
        ],
    });
}
var _ = t(818348);
function D(e) {
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
function O(e) {
    let { loadId: n, applicationId: t, skuId: o, analyticsLocations: p, isGift: h = !1, checkoutFlow: x } = e,
        { analyticsLocations: m } = (0, s.Ay)(p, a.A.PREMIUM_PAYMENT_MODAL),
        j = l.useMemo(
            () =>
                (function () {
                    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                    return [u.kJ, ...(e ? [P] : []), u.zK, ...u.hh, u.r2, u.zX];
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
            purchaseType: _.VV.ONE_TIME,
            isGift: h,
            unifiedCheckoutFlow: x,
            children: (0, i.jsx)(c.Qt, {
                children: (0, i.jsx)(d.dX, { isGift: h, children: (0, i.jsx)(D, { ...e }) }),
            }),
        }),
    });
}
