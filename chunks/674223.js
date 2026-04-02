t.d(n, { K: () => I });
var a = t(627968),
    i = t(64700),
    l = t(311907),
    s = t(397927),
    d = t(734925),
    r = t(687033),
    c = t(871181),
    o = t(683433),
    u = t(287809),
    p = t(67480),
    h = t(328968),
    m = t(371794),
    x = t(937008),
    g = t(156312),
    f = t(166532),
    j = t(482132),
    C = t(788868),
    k = t(985018),
    A = t(714092);
let I = {
    key: f.pn.GIFT_CUSTOMIZATION,
    renderStep: (e) => (0, a.jsx)(b, { ...e }),
    options: { modalSizeGetter: () => "xl", useBreadcrumbLabel: () => k.intl.string(k.t["W685+b"]) },
};
function T(e) {
    let { onStepChange: n, onBackClick: t, showBackButton: l = !1, disabled: d = !1, loading: r = !1 } = e,
        { hasPaymentSources: c } = (0, g.P5)(),
        u = c ? f.pn.REVIEW : f.pn.ADD_PAYMENT_STEPS,
        p = i.useMemo(
            () => [
                { variant: "primary", onClick: () => n(u), disabled: d, loading: r, text: k.intl.string(k.t.XiOHRX) },
            ],
            [n, u, d, r],
        );
    return (0, a.jsx)(s.H7u, { actions: p, leading: l ? (0, a.jsx)(o.A, { onClick: t }) : void 0 });
}
function b(e) {
    let { handleStepChange: n, handleClose: t } = e,
        { customGiftMessage: i = "", setCustomGiftMessage: o, giftRecipient: f } = (0, x.Pv)(),
        { selectedSkuId: k } = (0, g.P5)(),
        I = (0, l.bG)([u.default], () => u.default.getCurrentUser()),
        b = (0, l.bG)([p.A], () => (null != k ? p.A.get(k) : null), [k]),
        v = (0, r.A)(),
        y = (0, l.bG)([h.A], () => (null != k ? h.A.getForSKU(k) : null), [k]),
        _ =
            y?.headerBackground != null && b?.applicationId != null
                ? (0, m.YE)(b.applicationId, y.headerBackground, 256)
                : void 0,
        M = async (e, n) => {};
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)(j.dZ, {
                children: (0, a.jsxs)("div", {
                    className: A.Du,
                    children: [
                        (0, a.jsxs)("div", {
                            className: A.mT,
                            children: [
                                b?.name != null &&
                                    (0, a.jsx)(s.Heading, {
                                        variant: "heading-lg/semibold",
                                        color: "text-strong",
                                        children: b.name,
                                    }),
                                null != _ && (0, a.jsx)("img", { src: _, alt: b?.name ?? "", className: A.LC }),
                            ],
                        }),
                        (0, a.jsxs)("div", {
                            className: A.Tc,
                            children: [
                                (0, a.jsx)(d.A, { recipients: v, selectedSkuId: k, validateSelectedGift: M }),
                                (0, a.jsx)(c.A, {
                                    onTextChange: (e) => o?.(e),
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
            (0, a.jsx)(j.UX, {
                children: (0, a.jsx)(T, {
                    onStepChange: n,
                    onBackClick: t,
                    disabled: null == f || f.id === I?.id || i.length > C.Jo,
                }),
            }),
        ],
    });
}
