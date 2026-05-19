n.d(t, { K: () => g, e: () => P });
var l = n(627968),
    i = n(64700),
    r = n(17928),
    s = n(696208),
    a = n(534514),
    o = n(426398),
    u = n(94420),
    c = n(734925),
    d = n(687033),
    C = n(871181),
    p = n(683433),
    m = n(287809),
    _ = n(67480),
    T = n(328968),
    E = n(371794),
    A = n(937008),
    h = n(166532),
    O = n(482132),
    S = n(788868),
    I = n(375708),
    x = n(565756);
let g = {
    key: h.pn.GIFT_CUSTOMIZATION,
    renderStep: (e) => (0, l.jsx)(P, { ...e }),
    options: { modalSizeGetter: () => "xl", useBreadcrumbLabel: () => I.intl.string(I.t["W685+b"]) },
};
function f(e) {
    let { onStepChange: t, onBackClick: n, showBackButton: r = !1, disabled: a = !1, loading: u = !1 } = e,
        { hasPaymentSources: c } = (0, o.jm)(),
        d = c ? h.pn.REVIEW : h.pn.ADD_PAYMENT_STEPS,
        C = i.useMemo(
            () => [
                { variant: "primary", onClick: () => t(d), disabled: a, loading: u, text: I.intl.string(I.t.XiOHRX) },
            ],
            [t, d, a, u],
        );
    return (0, l.jsx)(s.H, { actions: C, leading: r ? (0, l.jsx)(p.A, { onClick: n }) : void 0 });
}
function P(e) {
    let { handleStepChange: t, handleClose: n } = e,
        { customGiftMessage: i = "", setCustomGiftMessage: s, giftRecipient: o } = (0, A.Pv)(),
        p = (0, u.t4)((e) => e.selectedSkuId),
        h = (0, r.bG)([m.default], () => m.default.getCurrentUser()),
        I = (0, r.bG)([_.A], () => (null != p ? _.A.get(p) : null), [p]),
        g = (0, d.A)(),
        P = (0, r.bG)([T.A], () => (null != p ? T.A.getForSKU(p) : null), [p]),
        N =
            P?.headerBackground != null && I?.applicationId != null
                ? (0, E.YE)(I.applicationId, P.headerBackground, 256)
                : void 0,
        y = async (e, t) => {};
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(O.dZ, {
                children: (0, l.jsxs)("div", {
                    className: x.Du,
                    children: [
                        (0, l.jsxs)("div", {
                            className: x.mT,
                            children: [
                                I?.name != null &&
                                    (0, l.jsx)(a.D, {
                                        variant: "heading-lg/semibold",
                                        color: "text-strong",
                                        children: I.name,
                                    }),
                                null != N && (0, l.jsx)("img", { src: N, alt: I?.name ?? "", className: x.LC }),
                            ],
                        }),
                        (0, l.jsxs)("div", {
                            className: x.Tc,
                            children: [
                                (0, l.jsx)(c.A, { recipients: g, selectedSkuId: p, validateSelectedGift: y }),
                                (0, l.jsx)(C.A, {
                                    onTextChange: (e) => s?.(e),
                                    pendingText: i,
                                    currentText: i,
                                    disableThemedBackground: !0,
                                    className: x.iX,
                                    innerClassName: x.pt,
                                }),
                            ],
                        }),
                    ],
                }),
            }),
            (0, l.jsx)(O.UX, {
                children: (0, l.jsx)(f, {
                    onStepChange: t,
                    onBackClick: n,
                    disabled: null == o || o.id === h?.id || i.length > S.Jo,
                }),
            }),
        ],
    });
}
