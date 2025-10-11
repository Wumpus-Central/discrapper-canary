n.d(t, { PT: () => v });
var i = n(951288);
n(647438);
var a = n(442837),
    l = n(481060),
    r = n(225657),
    s = n(600164),
    o = n(927699),
    c = n(311821),
    u = n(594174),
    d = n(55563),
    f = n(551428),
    g = n(73346),
    h = n(987209),
    p = n(563132),
    m = n(409813),
    b = n(614277),
    j = n(474936),
    y = n(388032),
    x = n(323261);
let v = {
    key: m.h8.GIFT_CUSTOMIZATION,
    renderStep: (e) =>
        (0, i.jsx)(
            O,
            (function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        i = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols &&
                        (i = i.concat(
                            Object.getOwnPropertySymbols(n).filter(function (e) {
                                return Object.getOwnPropertyDescriptor(n, e).enumerable;
                            }),
                        )),
                        i.forEach(function (t) {
                            var i;
                            (i = n[t]),
                                t in e
                                    ? Object.defineProperty(e, t, {
                                          value: i,
                                          enumerable: !0,
                                          configurable: !0,
                                          writable: !0,
                                      })
                                    : (e[t] = i);
                        });
                }
                return e;
            })({}, e),
        ),
    options: {
        isLargeModal: !0,
        useBreadcrumbLabel: () => y.intl.string(y.t["W685+f"]),
    },
};
function C(e) {
    let { onStepChange: t, onBackClick: n, showBackButton: a = !1, disabled: r = !1, loading: s = !1 } = e,
        { hasPaymentSources: o } = (0, p.JL)(),
        u = o ? m.h8.REVIEW : m.h8.ADD_PAYMENT_STEPS;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(l.Button, {
                onClick: () => t(u),
                disabled: r,
                loading: s,
                text: y.intl.string(y.t.XiOHRU),
            }),
            a ? (0, i.jsx)(c.Z, { onClick: n }) : null,
        ],
    });
}
function O(e) {
    var t;
    let { handleStepChange: n, handleClose: c } = e,
        { customGiftMessage: m = "", setCustomGiftMessage: v, giftRecipient: O } = (0, h.wD)(),
        { selectedSkuId: I } = (0, p.JL)(),
        T = (0, a.e7)([u.default], () => u.default.getCurrentUser()),
        _ = (0, a.e7)([d.Z], () => (null != I ? d.Z.get(I) : null), [I]),
        E = (0, a.e7)([f.Z], () => (null != I ? f.Z.getForSKU(I) : null), [I]),
        P =
            (null == E ? void 0 : E.headerBackground) != null && (null == _ ? void 0 : _.applicationId) != null
                ? (0, g._W)(_.applicationId, E.headerBackground, 256)
                : void 0,
        k = async (e, t) => {};
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(b.C3, {
                children: (0, i.jsxs)("div", {
                    className: x.stepBody,
                    children: [
                        (0, i.jsxs)("div", {
                            className: x.bodyColumnLeft,
                            children: [
                                (null == _ ? void 0 : _.name) != null &&
                                    (0, i.jsx)(l.Heading, {
                                        variant: "heading-lg/semibold",
                                        color: "header-primary",
                                        children: _.name,
                                    }),
                                null != P &&
                                    (0, i.jsx)("img", {
                                        src: P,
                                        alt: null != (t = null == _ ? void 0 : _.name) ? t : "",
                                        className: x.skuImage,
                                    }),
                            ],
                        }),
                        (0, i.jsxs)("div", {
                            className: x.bodyColumnRight,
                            children: [
                                (0, i.jsx)(r.Z, {
                                    selectedSkuId: I,
                                    validateSelectedGift: k,
                                }),
                                (0, i.jsx)(o.Z, {
                                    sectionTitle: y.intl.string(y.t.B3miEx),
                                    onTextChange: (e) => (null == v ? void 0 : v(e)),
                                    pendingText: m,
                                    currentText: m,
                                    disableThemedBackground: !0,
                                    className: x.customGiftMessageWrapper,
                                    innerClassName: x.customGiftMessage,
                                }),
                            ],
                        }),
                    ],
                }),
            }),
            (0, i.jsx)(b.O3, {
                children: (0, i.jsx)(l.mzw, {
                    "data-migration-pending": !0,
                    justify: s.Z.Justify.BETWEEN,
                    align: s.Z.Align.CENTER,
                    children: (0, i.jsx)(C, {
                        onStepChange: n,
                        onBackClick: c,
                        disabled: null == O || O.id === (null == T ? void 0 : T.id) || m.length > j.$n,
                    }),
                }),
            }),
        ],
    });
}
