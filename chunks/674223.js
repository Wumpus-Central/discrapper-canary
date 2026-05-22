n.d(t, { K: () => x, e: () => f });
var l = n(627968),
    i = n(64700),
    r = n(17928),
    s = n(696208),
    a = n(534514),
    o = n(426398),
    u = n(671744),
    c = n(734925),
    d = n(687033),
    C = n(871181),
    p = n(683433),
    m = n(287809),
    _ = n(67480),
    T = n(328968),
    E = n(371794),
    A = n(937008),
    O = n(166532),
    h = n(482132),
    I = n(788868),
    S = n(375708),
    g = n(565756);
let x = {
    key: O.pn.GIFT_CUSTOMIZATION,
    renderStep: (e) => (0, l.jsx)(f, { ...e }),
    options: { modalSizeGetter: () => "xl", useBreadcrumbLabel: () => S.intl.string(S.t["W685+b"]) },
};
function P(e) {
    let { onStepChange: t, onBackClick: n, showBackButton: r = !1, disabled: a = !1, loading: u = !1 } = e,
        { hasPaymentSources: c } = (0, o.jm)(),
        d = c ? O.pn.REVIEW : O.pn.ADD_PAYMENT_STEPS,
        C = i.useMemo(
            () => [
                { variant: "primary", onClick: () => t(d), disabled: a, loading: u, text: S.intl.string(S.t.XiOHRX) },
            ],
            [t, d, a, u],
        );
    return (0, l.jsx)(s.H, { actions: C, leading: r ? (0, l.jsx)(p.A, { onClick: n }) : void 0 });
}
function f(e) {
    let { handleStepChange: t, handleClose: n } = e,
        { customGiftMessage: i = "", setCustomGiftMessage: s, giftRecipient: o } = (0, A.Pv)(),
        p = (0, u.t4)((e) => e.selectedSkuId),
        O = (0, r.bG)([m.default], () => m.default.getCurrentUser()),
        S = (0, r.bG)([_.A], () => (null != p ? _.A.get(p) : null), [p]),
        x = (0, d.A)(),
        f = (0, r.bG)([T.A], () => (null != p ? T.A.getForSKU(p) : null), [p]),
        N =
            f?.headerBackground != null && S?.applicationId != null
                ? (0, E.YE)(S.applicationId, f.headerBackground, 256)
                : void 0,
        v = async (e, t) => {};
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(h.dZ, {
                children: (0, l.jsxs)("div", {
                    className: g.Du,
                    children: [
                        (0, l.jsxs)("div", {
                            className: g.mT,
                            children: [
                                S?.name != null &&
                                    (0, l.jsx)(a.D, {
                                        variant: "heading-lg/semibold",
                                        color: "text-strong",
                                        children: S.name,
                                    }),
                                null != N && (0, l.jsx)("img", { src: N, alt: S?.name ?? "", className: g.LC }),
                            ],
                        }),
                        (0, l.jsxs)("div", {
                            className: g.Tc,
                            children: [
                                (0, l.jsx)(c.A, { recipients: x, selectedSkuId: p, validateSelectedGift: v }),
                                (0, l.jsx)(C.A, {
                                    onTextChange: (e) => s?.(e),
                                    pendingText: i,
                                    currentText: i,
                                    disableThemedBackground: !0,
                                    className: g.iX,
                                    innerClassName: g.pt,
                                }),
                            ],
                        }),
                    ],
                }),
            }),
            (0, l.jsx)(h.UX, {
                children: (0, l.jsx)(P, {
                    onStepChange: t,
                    onBackClick: n,
                    disabled: null == o || o.id === O?.id || i.length > I.Jo,
                }),
            }),
        ],
    });
}
