a.d(n, { K_: () => k });
var t = a(627968);
a(64700);
var i = a(311907),
    l = a(397927),
    s = a(734925),
    d = a(687033),
    r = a(235986),
    c = a(871181),
    o = a(683433),
    u = a(287809),
    p = a(67480),
    g = a(328968),
    h = a(371794),
    x = a(937008),
    m = a(156312),
    j = a(166532),
    f = a(482132),
    A = a(788868),
    C = a(985018),
    T = a(402671);
let k = {
    key: j.pn.GIFT_CUSTOMIZATION,
    renderStep: (e) => (0, t.jsx)(I, { ...e }),
    options: { isLargeModal: !0, useBreadcrumbLabel: () => C.intl.string(C.t["W685+b"]) },
};
function b(e) {
    let { onStepChange: n, onBackClick: a, showBackButton: i = !1, disabled: s = !1, loading: d = !1 } = e,
        { hasPaymentSources: r } = (0, m.P5)(),
        c = r ? j.pn.REVIEW : j.pn.ADD_PAYMENT_STEPS;
    return (0, t.jsxs)(t.Fragment, {
        children: [
            (0, t.jsx)(l.Button, { onClick: () => n(c), disabled: s, loading: d, text: C.intl.string(C.t.XiOHRX) }),
            i ? (0, t.jsx)(o.A, { onClick: a }) : null,
        ],
    });
}
function I(e) {
    let { handleStepChange: n, handleClose: a } = e,
        { customGiftMessage: o = "", setCustomGiftMessage: j, giftRecipient: C } = (0, x.Pv)(),
        { selectedSkuId: k } = (0, m.P5)(),
        I = (0, i.bG)([u.default], () => u.default.getCurrentUser()),
        _ = (0, i.bG)([p.A], () => (null != k ? p.A.get(k) : null), [k]),
        v = (0, d.A)(),
        y = (0, i.bG)([g.A], () => (null != k ? g.A.getForSKU(k) : null), [k]),
        E =
            y?.headerBackground != null && _?.applicationId != null
                ? (0, h.YE)(_.applicationId, y.headerBackground, 256)
                : void 0,
        N = async (e, n) => {};
    return (0, t.jsxs)(t.Fragment, {
        children: [
            (0, t.jsx)(f.dZ, {
                children: (0, t.jsxs)("div", {
                    className: T.Du,
                    children: [
                        (0, t.jsxs)("div", {
                            className: T.mT,
                            children: [
                                _?.name != null &&
                                    (0, t.jsx)(l.Heading, {
                                        variant: "heading-lg/semibold",
                                        color: "text-strong",
                                        children: _.name,
                                    }),
                                null != E && (0, t.jsx)("img", { src: E, alt: _?.name ?? "", className: T.LC }),
                            ],
                        }),
                        (0, t.jsxs)("div", {
                            className: T.Tc,
                            children: [
                                (0, t.jsx)(s.A, { recipients: v, selectedSkuId: k, validateSelectedGift: N }),
                                (0, t.jsx)(c.A, {
                                    onTextChange: (e) => j?.(e),
                                    pendingText: o,
                                    currentText: o,
                                    disableThemedBackground: !0,
                                    className: T.iX,
                                    innerClassName: T.pt,
                                }),
                            ],
                        }),
                    ],
                }),
            }),
            (0, t.jsx)(f.UX, {
                children: (0, t.jsx)(l.jlY, {
                    "data-migration-pending": !0,
                    justify: r.A.Justify.BETWEEN,
                    align: r.A.Align.CENTER,
                    children: (0, t.jsx)(b, {
                        onStepChange: n,
                        onBackClick: a,
                        disabled: null == C || C.id === I?.id || o.length > A.Jo,
                    }),
                }),
            }),
        ],
    });
}
