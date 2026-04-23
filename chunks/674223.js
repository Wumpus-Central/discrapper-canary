t.d(n, { K: () => b });
var a = t(627968),
    i = t(64700),
    l = t(311907),
    s = t(696208),
    d = t(534514),
    r = t(94420),
    c = t(734925),
    o = t(687033),
    u = t(871181),
    p = t(683433),
    h = t(287809),
    m = t(67480),
    x = t(328968),
    g = t(371794),
    f = t(937008),
    j = t(156312),
    k = t(166532),
    C = t(482132),
    I = t(788868),
    A = t(985018),
    T = t(565756);
let b = {
    key: k.pn.GIFT_CUSTOMIZATION,
    renderStep: (e) => (0, a.jsx)(y, { ...e }),
    options: { modalSizeGetter: () => "xl", useBreadcrumbLabel: () => A.intl.string(A.t["W685+b"]) },
};
function v(e) {
    let { onStepChange: n, onBackClick: t, showBackButton: l = !1, disabled: d = !1, loading: r = !1 } = e,
        { hasPaymentSources: c } = (0, j.P5)(),
        o = c ? k.pn.REVIEW : k.pn.ADD_PAYMENT_STEPS,
        u = i.useMemo(
            () => [
                { variant: "primary", onClick: () => n(o), disabled: d, loading: r, text: A.intl.string(A.t.XiOHRX) },
            ],
            [n, o, d, r],
        );
    return (0, a.jsx)(s.H, { actions: u, leading: l ? (0, a.jsx)(p.A, { onClick: t }) : void 0 });
}
function y(e) {
    let { handleStepChange: n, handleClose: t } = e,
        { customGiftMessage: i = "", setCustomGiftMessage: s, giftRecipient: p } = (0, f.Pv)(),
        j = (0, r.t4)((e) => e.selectedSkuId),
        k = (0, l.bG)([h.default], () => h.default.getCurrentUser()),
        A = (0, l.bG)([m.A], () => (null != j ? m.A.get(j) : null), [j]),
        b = (0, o.A)(),
        y = (0, l.bG)([x.A], () => (null != j ? x.A.getForSKU(j) : null), [j]),
        _ =
            y?.headerBackground != null && A?.applicationId != null
                ? (0, g.YE)(A.applicationId, y.headerBackground, 256)
                : void 0,
        M = async (e, n) => {};
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)(C.dZ, {
                children: (0, a.jsxs)("div", {
                    className: T.Du,
                    children: [
                        (0, a.jsxs)("div", {
                            className: T.mT,
                            children: [
                                A?.name != null &&
                                    (0, a.jsx)(d.D, {
                                        variant: "heading-lg/semibold",
                                        color: "text-strong",
                                        children: A.name,
                                    }),
                                null != _ && (0, a.jsx)("img", { src: _, alt: A?.name ?? "", className: T.LC }),
                            ],
                        }),
                        (0, a.jsxs)("div", {
                            className: T.Tc,
                            children: [
                                (0, a.jsx)(c.A, { recipients: b, selectedSkuId: j, validateSelectedGift: M }),
                                (0, a.jsx)(u.A, {
                                    onTextChange: (e) => s?.(e),
                                    pendingText: i,
                                    currentText: i,
                                    disableThemedBackground: !0,
                                    className: T.iX,
                                    innerClassName: T.pt,
                                }),
                            ],
                        }),
                    ],
                }),
            }),
            (0, a.jsx)(C.UX, {
                children: (0, a.jsx)(v, {
                    onStepChange: n,
                    onBackClick: t,
                    disabled: null == p || p.id === k?.id || i.length > I.Jo,
                }),
            }),
        ],
    });
}
