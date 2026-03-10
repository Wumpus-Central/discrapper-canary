a.d(n, { K: () => A });
var t = a(627968),
    i = a(64700),
    l = a(311907),
    s = a(397927),
    d = a(734925),
    r = a(687033),
    c = a(871181),
    o = a(683433),
    u = a(287809),
    p = a(67480),
    h = a(328968),
    x = a(371794),
    m = a(937008),
    g = a(156312),
    f = a(166532),
    j = a(482132),
    C = a(788868),
    k = a(985018),
    v = a(402671);
let A = {
    key: f.pn.GIFT_CUSTOMIZATION,
    renderStep: (e) => (0, t.jsx)(T, { ...e }),
    options: { modalSizeGetter: () => "xl", useBreadcrumbLabel: () => k.intl.string(k.t["W685+b"]) },
};
function I(e) {
    let { onStepChange: n, onBackClick: a, showBackButton: l = !1, disabled: d = !1, loading: r = !1 } = e,
        { hasPaymentSources: c } = (0, g.P5)(),
        u = c ? f.pn.REVIEW : f.pn.ADD_PAYMENT_STEPS,
        p = i.useMemo(
            () => [
                { variant: "primary", onClick: () => n(u), disabled: d, loading: r, text: k.intl.string(k.t.XiOHRX) },
            ],
            [n, u, d, r],
        );
    return (0, t.jsx)(s.H7u, { actions: p, leading: l ? (0, t.jsx)(o.A, { onClick: a }) : void 0 });
}
function T(e) {
    let { handleStepChange: n, handleClose: a } = e,
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
    return (0, t.jsxs)(t.Fragment, {
        children: [
            (0, t.jsx)(j.dZ, {
                children: (0, t.jsxs)("div", {
                    className: v.Du,
                    children: [
                        (0, t.jsxs)("div", {
                            className: v.mT,
                            children: [
                                T?.name != null &&
                                    (0, t.jsx)(s.Heading, {
                                        variant: "heading-lg/semibold",
                                        color: "text-strong",
                                        children: T.name,
                                    }),
                                null != _ && (0, t.jsx)("img", { src: _, alt: T?.name ?? "", className: v.LC }),
                            ],
                        }),
                        (0, t.jsxs)("div", {
                            className: v.Tc,
                            children: [
                                (0, t.jsx)(d.A, { recipients: b, selectedSkuId: k, validateSelectedGift: P }),
                                (0, t.jsx)(c.A, {
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
            (0, t.jsx)(j.UX, {
                children: (0, t.jsx)(I, {
                    onStepChange: n,
                    onBackClick: a,
                    disabled: null == f || f.id === A?.id || i.length > C.Jo,
                }),
            }),
        ],
    });
}
