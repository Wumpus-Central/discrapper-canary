t.d(n, { PT: () => O });
var l = t(54381);
t(473749);
var a = t(442837),
    i = t(481060),
    r = t(225657),
    s = t(334636),
    o = t(600164),
    c = t(927699),
    u = t(311821),
    d = t(594174),
    f = t(55563),
    g = t(551428),
    p = t(73346),
    m = t(987209),
    b = t(563132),
    h = t(409813),
    y = t(614277),
    j = t(474936),
    v = t(388032),
    x = t(321412);
let O = {
    key: h.h8.GIFT_CUSTOMIZATION,
    renderStep: (e) =>
        (0, l.jsx)(
            k,
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
        useBreadcrumbLabel: () => v.intl.string(v.t["W685+b"]),
    },
};
function C(e) {
    let { onStepChange: n, onBackClick: t, showBackButton: a = !1, disabled: r = !1, loading: s = !1 } = e,
        { hasPaymentSources: o } = (0, b.JL)(),
        c = o ? h.h8.REVIEW : h.h8.ADD_PAYMENT_STEPS;
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(i.Button, {
                onClick: () => n(c),
                disabled: r,
                loading: s,
                text: v.intl.string(v.t.XiOHRX),
            }),
            a ? (0, l.jsx)(u.Z, { onClick: t }) : null,
        ],
    });
}
function k(e) {
    var n;
    let { handleStepChange: t, handleClose: u } = e,
        { customGiftMessage: h = "", setCustomGiftMessage: v, giftRecipient: O } = (0, m.wD)(),
        { selectedSkuId: k } = (0, b.JL)(),
        P = (0, a.e7)([d.default], () => d.default.getCurrentUser()),
        I = (0, a.e7)([f.Z], () => (null != k ? f.Z.get(k) : null), [k]),
        T = (0, s.Z)({}),
        E = (0, a.e7)([g.Z], () => (null != k ? g.Z.getForSKU(k) : null), [k]),
        M =
            (null == E ? void 0 : E.headerBackground) != null && (null == I ? void 0 : I.applicationId) != null
                ? (0, p._W)(I.applicationId, E.headerBackground, 256)
                : void 0,
        Z = async (e, n) => {};
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(y.C3, {
                children: (0, l.jsxs)("div", {
                    className: x.stepBody,
                    children: [
                        (0, l.jsxs)("div", {
                            className: x.bodyColumnLeft,
                            children: [
                                (null == I ? void 0 : I.name) != null &&
                                    (0, l.jsx)(i.Heading, {
                                        variant: "heading-lg/semibold",
                                        color: "text-strong",
                                        children: I.name,
                                    }),
                                null != M &&
                                    (0, l.jsx)("img", {
                                        src: M,
                                        alt: null != (n = null == I ? void 0 : I.name) ? n : "",
                                        className: x.skuImage,
                                    }),
                            ],
                        }),
                        (0, l.jsxs)("div", {
                            className: x.bodyColumnRight,
                            children: [
                                (0, l.jsx)(r.Z, {
                                    recipients: T,
                                    selectedSkuId: k,
                                    validateSelectedGift: Z,
                                }),
                                (0, l.jsx)(c.Z, {
                                    onTextChange: (e) => (null == v ? void 0 : v(e)),
                                    pendingText: h,
                                    currentText: h,
                                    disableThemedBackground: !0,
                                    className: x.customGiftMessageWrapper,
                                    innerClassName: x.customGiftMessage,
                                }),
                            ],
                        }),
                    ],
                }),
            }),
            (0, l.jsx)(y.O3, {
                children: (0, l.jsx)(i.mzw, {
                    "data-migration-pending": !0,
                    justify: o.Z.Justify.BETWEEN,
                    align: o.Z.Align.CENTER,
                    children: (0, l.jsx)(C, {
                        onStepChange: t,
                        onBackClick: u,
                        disabled: null == O || O.id === (null == P ? void 0 : P.id) || h.length > j.$n,
                    }),
                }),
            }),
        ],
    });
}
