t.d(n, { PT: () => O });
var i = t(54381);
t(473749);
var l = t(442837),
    a = t(481060),
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
        (0, i.jsx)(
            k,
            (function (e) {
                for (var n = 1; n < arguments.length; n++) {
                    var t = null != arguments[n] ? arguments[n] : {},
                        i = Object.keys(t);
                    "function" == typeof Object.getOwnPropertySymbols &&
                        (i = i.concat(
                            Object.getOwnPropertySymbols(t).filter(function (e) {
                                return Object.getOwnPropertyDescriptor(t, e).enumerable;
                            }),
                        )),
                        i.forEach(function (n) {
                            var i;
                            (i = t[n]),
                                n in e
                                    ? Object.defineProperty(e, n, {
                                          value: i,
                                          enumerable: !0,
                                          configurable: !0,
                                          writable: !0,
                                      })
                                    : (e[n] = i);
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
    let { onStepChange: n, onBackClick: t, showBackButton: l = !1, disabled: r = !1, loading: s = !1 } = e,
        { hasPaymentSources: o } = (0, b.JL)(),
        c = o ? h.h8.REVIEW : h.h8.ADD_PAYMENT_STEPS;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(a.Button, {
                onClick: () => n(c),
                disabled: r,
                loading: s,
                text: v.intl.string(v.t.XiOHRX),
            }),
            l ? (0, i.jsx)(u.Z, { onClick: t }) : null,
        ],
    });
}
function k(e) {
    var n;
    let { handleStepChange: t, handleClose: u } = e,
        { customGiftMessage: h = "", setCustomGiftMessage: O, giftRecipient: k } = (0, m.wD)(),
        { selectedSkuId: P } = (0, b.JL)(),
        I = (0, l.e7)([d.default], () => d.default.getCurrentUser()),
        T = (0, l.e7)([f.Z], () => (null != P ? f.Z.get(P) : null), [P]),
        E = (0, s.Z)({}),
        M = (0, l.e7)([g.Z], () => (null != P ? g.Z.getForSKU(P) : null), [P]),
        Z =
            (null == M ? void 0 : M.headerBackground) != null && (null == T ? void 0 : T.applicationId) != null
                ? (0, p._W)(T.applicationId, M.headerBackground, 256)
                : void 0,
        S = async (e, n) => {};
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(y.C3, {
                children: (0, i.jsxs)("div", {
                    className: x.stepBody,
                    children: [
                        (0, i.jsxs)("div", {
                            className: x.bodyColumnLeft,
                            children: [
                                (null == T ? void 0 : T.name) != null &&
                                    (0, i.jsx)(a.Heading, {
                                        variant: "heading-lg/semibold",
                                        color: "text-strong",
                                        children: T.name,
                                    }),
                                null != Z &&
                                    (0, i.jsx)("img", {
                                        src: Z,
                                        alt: null != (n = null == T ? void 0 : T.name) ? n : "",
                                        className: x.skuImage,
                                    }),
                            ],
                        }),
                        (0, i.jsxs)("div", {
                            className: x.bodyColumnRight,
                            children: [
                                (0, i.jsx)(r.Z, {
                                    recipients: E,
                                    selectedSkuId: P,
                                    validateSelectedGift: S,
                                }),
                                (0, i.jsx)(c.Z, {
                                    sectionTitle: v.intl.string(v.t.B3miE8),
                                    onTextChange: (e) => (null == O ? void 0 : O(e)),
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
            (0, i.jsx)(y.O3, {
                children: (0, i.jsx)(a.mzw, {
                    "data-migration-pending": !0,
                    justify: o.Z.Justify.BETWEEN,
                    align: o.Z.Align.CENTER,
                    children: (0, i.jsx)(C, {
                        onStepChange: t,
                        onBackClick: u,
                        disabled: null == k || k.id === (null == I ? void 0 : I.id) || h.length > j.$n,
                    }),
                }),
            }),
        ],
    });
}
