t.d(n, { K: () => T });
var a = t(627968),
    i = t(64700),
    l = t(311907),
    s = t(397927),
    d = t(94420),
    r = t(734925),
    c = t(687033),
    o = t(871181),
    u = t(683433),
    p = t(287809),
    h = t(67480),
    m = t(328968),
    x = t(371794),
    g = t(937008),
    f = t(156312),
    j = t(166532),
    k = t(482132),
    C = t(788868),
    I = t(985018),
    A = t(565756);
let T = {
    key: j.pn.GIFT_CUSTOMIZATION,
    renderStep: (e) => (0, a.jsx)(v, { ...e }),
    options: { modalSizeGetter: () => "xl", useBreadcrumbLabel: () => I.intl.string(I.t["W685+b"]) },
};
function b(e) {
    let { onStepChange: n, onBackClick: t, showBackButton: l = !1, disabled: d = !1, loading: r = !1 } = e,
        { hasPaymentSources: c } = (0, f.P5)(),
        o = c ? j.pn.REVIEW : j.pn.ADD_PAYMENT_STEPS,
        p = i.useMemo(
            () => [
                { variant: "primary", onClick: () => n(o), disabled: d, loading: r, text: I.intl.string(I.t.XiOHRX) },
            ],
            [n, o, d, r],
        );
    return (0, a.jsx)(s.H7u, { actions: p, leading: l ? (0, a.jsx)(u.A, { onClick: t }) : void 0 });
}
function v(e) {
    let { handleStepChange: n, handleClose: t } = e,
        { customGiftMessage: i = "", setCustomGiftMessage: u, giftRecipient: f } = (0, g.Pv)(),
        j = (0, d.t4)((e) => e.selectedSkuId),
        I = (0, l.bG)([p.default], () => p.default.getCurrentUser()),
        T = (0, l.bG)([h.A], () => (null != j ? h.A.get(j) : null), [j]),
        v = (0, c.A)(),
        y = (0, l.bG)([m.A], () => (null != j ? m.A.getForSKU(j) : null), [j]),
        _ =
            y?.headerBackground != null && T?.applicationId != null
                ? (0, x.YE)(T.applicationId, y.headerBackground, 256)
                : void 0,
        M = async (e, n) => {};
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)(k.dZ, {
                children: (0, a.jsxs)("div", {
                    className: A.Du,
                    children: [
                        (0, a.jsxs)("div", {
                            className: A.mT,
                            children: [
                                T?.name != null &&
                                    (0, a.jsx)(s.Heading, {
                                        variant: "heading-lg/semibold",
                                        color: "text-strong",
                                        children: T.name,
                                    }),
                                null != _ && (0, a.jsx)("img", { src: _, alt: T?.name ?? "", className: A.LC }),
                            ],
                        }),
                        (0, a.jsxs)("div", {
                            className: A.Tc,
                            children: [
                                (0, a.jsx)(r.A, { recipients: v, selectedSkuId: j, validateSelectedGift: M }),
                                (0, a.jsx)(o.A, {
                                    onTextChange: (e) => u?.(e),
                                    pendingText: i,
                                    currentText: i,
                                    disableThemedBackground: !0,
                                    className: A.iX,
                                    innerClassName: A.pt,
                                }),
                            ],
                        }),
                    ],
                }),
            }),
            (0, a.jsx)(k.UX, {
                children: (0, a.jsx)(b, {
                    onStepChange: n,
                    onBackClick: t,
                    disabled: null == f || f.id === I?.id || i.length > C.Jo,
                }),
            }),
        ],
    });
}
