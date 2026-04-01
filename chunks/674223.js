t.d(n, { K: () => A });
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
    x = t(371794),
    m = t(937008),
    g = t(156312),
    f = t(166532),
    j = t(482132),
    C = t(788868),
    k = t(985018),
    v = t(714092);
let A = {
    key: f.pn.GIFT_CUSTOMIZATION,
    renderStep: (e) => (0, a.jsx)(T, { ...e }),
    options: { modalSizeGetter: () => "xl", useBreadcrumbLabel: () => k.intl.string(k.t["W685+b"]) },
};
function I(e) {
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
function T(e) {
    let { handleStepChange: n, handleClose: t } = e,
        { customGiftMessage: i = "", setCustomGiftMessage: o, giftRecipient: f } = (0, m.Pv)(),
        { selectedSkuId: k } = (0, g.P5)(),
        A = (0, l.bG)([u.default], () => u.default.getCurrentUser()),
        T = (0, l.bG)([p.A], () => (null != k ? p.A.get(k) : null), [k]),
        b = (0, r.A)(),
        y = (0, l.bG)([h.A], () => (null != k ? h.A.getForSKU(k) : null), [k]),
        _ =
            y?.headerBackground != null && T?.applicationId != null
                ? (0, x.YE)(T.applicationId, y.headerBackground, 256)
                : void 0,
        P = async (e, n) => {};
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)(j.dZ, {
                children: (0, a.jsxs)("div", {
                    className: v.Du,
                    children: [
                        (0, a.jsxs)("div", {
                            className: v.mT,
                            children: [
                                T?.name != null &&
                                    (0, a.jsx)(s.Heading, {
                                        variant: "heading-lg/semibold",
                                        color: "text-strong",
                                        children: T.name,
                                    }),
                                null != _ && (0, a.jsx)("img", { src: _, alt: T?.name ?? "", className: v.LC }),
                            ],
                        }),
                        (0, a.jsxs)("div", {
                            className: v.Tc,
                            children: [
                                (0, a.jsx)(d.A, { recipients: b, selectedSkuId: k, validateSelectedGift: P }),
                                (0, a.jsx)(c.A, {
                                    onTextChange: (e) => o?.(e),
                                    pendingText: i,
                                    currentText: i,
                                    disableThemedBackground: !0,
                                    className: v.iX,
                                    innerClassName: v.pt,
                                }),
                            ],
                        }),
                    ],
                }),
            }),
            (0, a.jsx)(j.UX, {
                children: (0, a.jsx)(I, {
                    onStepChange: n,
                    onBackClick: t,
                    disabled: null == f || f.id === A?.id || i.length > C.Jo,
                }),
            }),
        ],
    });
}
