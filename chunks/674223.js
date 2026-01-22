t.d(n, { K_: () => O });
var l = t(627968);
t(64700);
var i = t(311907),
    r = t(397927),
    a = t(734925),
    c = t(687033),
    s = t(235986),
    o = t(871181),
    d = t(683433),
    u = t(287809),
    p = t(67480),
    f = t(328968),
    b = t(371794),
    g = t(937008),
    j = t(156312),
    h = t(166532),
    v = t(482132),
    m = t(788868),
    x = t(985018),
    y = t(402671);
let O = {
    key: h.pn.GIFT_CUSTOMIZATION,
    renderStep: (e) =>
        (0, l.jsx)(
            A,
            (function (e) {
                for (var n = 1; n < arguments.length; n++) {
                    var t = null != arguments[n] ? arguments[n] : {},
                        l = Object.keys(t);
                    "function" == typeof Object.getOwnPropertySymbols &&
                        (l = l.concat(
                            Object.getOwnPropertySymbols(t).filter(function (e) {
                                return Object.getOwnPropertyDescriptor(t, e).enumerable;
                            }),
                        )),
                        l.forEach(function (n) {
                            var l;
                            (l = t[n]),
                                n in e
                                    ? Object.defineProperty(e, n, {
                                          value: l,
                                          enumerable: !0,
                                          configurable: !0,
                                          writable: !0,
                                      })
                                    : (e[n] = l);
                        });
                }
                return e;
            })({}, e),
        ),
    options: {
        isLargeModal: !0,
        useBreadcrumbLabel: () => x.intl.string(x.t["W685+b"]),
    },
};
function P(e) {
    let { onStepChange: n, onBackClick: t, showBackButton: i = !1, disabled: a = !1, loading: c = !1 } = e,
        { hasPaymentSources: s } = (0, j.P5)(),
        o = s ? h.pn.REVIEW : h.pn.ADD_PAYMENT_STEPS;
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(r.Button, {
                onClick: () => n(o),
                disabled: a,
                loading: c,
                text: x.intl.string(x.t.XiOHRX),
            }),
            i ? (0, l.jsx)(d.A, { onClick: t }) : null,
        ],
    });
}
function A(e) {
    var n;
    let { handleStepChange: t, handleClose: d } = e,
        { customGiftMessage: h = "", setCustomGiftMessage: x, giftRecipient: O } = (0, g.Pv)(),
        { selectedSkuId: A } = (0, j.P5)(),
        k = (0, i.bG)([u.default], () => u.default.getCurrentUser()),
        T = (0, i.bG)([p.A], () => (null != A ? p.A.get(A) : null), [A]),
        C = (0, c.A)(),
        E = (0, i.bG)([f.A], () => (null != A ? f.A.getForSKU(A) : null), [A]),
        I =
            (null == E ? void 0 : E.headerBackground) != null && (null == T ? void 0 : T.applicationId) != null
                ? (0, b.YE)(T.applicationId, E.headerBackground, 256)
                : void 0,
        _ = async (e, n) => {};
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(v.dZ, {
                children: (0, l.jsxs)("div", {
                    className: y.Du,
                    children: [
                        (0, l.jsxs)("div", {
                            className: y.mT,
                            children: [
                                (null == T ? void 0 : T.name) != null &&
                                    (0, l.jsx)(r.Heading, {
                                        variant: "heading-lg/semibold",
                                        color: "text-strong",
                                        children: T.name,
                                    }),
                                null != I &&
                                    (0, l.jsx)("img", {
                                        src: I,
                                        alt: null != (n = null == T ? void 0 : T.name) ? n : "",
                                        className: y.LC,
                                    }),
                            ],
                        }),
                        (0, l.jsxs)("div", {
                            className: y.Tc,
                            children: [
                                (0, l.jsx)(a.A, {
                                    recipients: C,
                                    selectedSkuId: A,
                                    validateSelectedGift: _,
                                }),
                                (0, l.jsx)(o.A, {
                                    onTextChange: (e) => (null == x ? void 0 : x(e)),
                                    pendingText: h,
                                    currentText: h,
                                    disableThemedBackground: !0,
                                    className: y.iX,
                                    innerClassName: y.pt,
                                }),
                            ],
                        }),
                    ],
                }),
            }),
            (0, l.jsx)(v.UX, {
                children: (0, l.jsx)(r.jlY, {
                    "data-migration-pending": !0,
                    justify: s.A.Justify.BETWEEN,
                    align: s.A.Align.CENTER,
                    children: (0, l.jsx)(P, {
                        onStepChange: t,
                        onBackClick: d,
                        disabled: null == O || O.id === (null == k ? void 0 : k.id) || h.length > m.Jo,
                    }),
                }),
            }),
        ],
    });
}
