t.d(n, { K: () => T });
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
    x = t(413748),
    g = t(937008),
    f = t(156312),
    j = t(166532),
    k = t(482132),
    C = t(788868),
    I = t(985018),
    A = t(714092);
let T = {
    key: j.pn.GIFT_CUSTOMIZATION,
    renderStep: (e) => (0, a.jsx)(v, { ...e }),
    options: { modalSizeGetter: () => "xl", useBreadcrumbLabel: () => I.intl.string(I.t["W685+b"]) },
};
function b(e) {
    let { onStepChange: n, onBackClick: t, showBackButton: l = !1, disabled: d = !1, loading: r = !1 } = e,
        { hasPaymentSources: c } = (0, f.P5)(),
        u = c ? j.pn.REVIEW : j.pn.ADD_PAYMENT_STEPS,
        p = i.useMemo(
            () => [
                { variant: "primary", onClick: () => n(u), disabled: d, loading: r, text: I.intl.string(I.t.XiOHRX) },
            ],
            [n, u, d, r],
        );
    return (0, a.jsx)(s.H7u, { actions: p, leading: l ? (0, a.jsx)(o.A, { onClick: t }) : void 0 });
}
function v(e) {
    let { handleStepChange: n, handleClose: t } = e,
        { customGiftMessage: i = "", setCustomGiftMessage: o, giftRecipient: f } = (0, g.Pv)(),
        j = (0, x.t)((e) => e.selectedSkuId),
        I = (0, l.bG)([u.default], () => u.default.getCurrentUser()),
        T = (0, l.bG)([p.A], () => (null != j ? p.A.get(j) : null), [j]),
        v = (0, r.A)(),
        y = (0, l.bG)([h.A], () => (null != j ? h.A.getForSKU(j) : null), [j]),
        _ =
            y?.headerBackground != null && T?.applicationId != null
                ? (0, m.YE)(T.applicationId, y.headerBackground, 256)
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
                                (0, a.jsx)(d.A, { recipients: v, selectedSkuId: j, validateSelectedGift: M }),
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
