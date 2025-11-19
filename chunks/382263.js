t.d(n, { PT: () => x });
var l = t(54381);
t(473749);
var i = t(442837),
    a = t(481060),
    r = t(225657),
    s = t(600164),
    o = t(927699),
    c = t(311821),
    u = t(594174),
    d = t(55563),
    f = t(551428),
    g = t(73346),
    p = t(987209),
    m = t(563132),
    b = t(409813),
    h = t(614277),
    y = t(474936),
    j = t(388032),
    v = t(957618);
let x = {
    key: b.h8.GIFT_CUSTOMIZATION,
    renderStep: (e) =>
        (0, l.jsx)(
            C,
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
        useBreadcrumbLabel: () => j.intl.string(j.t["W685+b"]),
    },
};
function O(e) {
    let { onStepChange: n, onBackClick: t, showBackButton: i = !1, disabled: r = !1, loading: s = !1 } = e,
        { hasPaymentSources: o } = (0, m.JL)(),
        u = o ? b.h8.REVIEW : b.h8.ADD_PAYMENT_STEPS;
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(a.Button, {
                onClick: () => n(u),
                disabled: r,
                loading: s,
                text: j.intl.string(j.t.XiOHRX),
            }),
            i ? (0, l.jsx)(c.Z, { onClick: t }) : null,
        ],
    });
}
function C(e) {
    var n;
    let { handleStepChange: t, handleClose: c } = e,
        { customGiftMessage: b = "", setCustomGiftMessage: x, giftRecipient: C } = (0, p.wD)(),
        { selectedSkuId: k } = (0, m.JL)(),
        P = (0, i.e7)([u.default], () => u.default.getCurrentUser()),
        I = (0, i.e7)([d.Z], () => (null != k ? d.Z.get(k) : null), [k]),
        T = (0, i.e7)([f.Z], () => (null != k ? f.Z.getForSKU(k) : null), [k]),
        E =
            (null == T ? void 0 : T.headerBackground) != null && (null == I ? void 0 : I.applicationId) != null
                ? (0, g._W)(I.applicationId, T.headerBackground, 256)
                : void 0,
        M = async (e, n) => {};
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(h.C3, {
                children: (0, l.jsxs)("div", {
                    className: v.stepBody,
                    children: [
                        (0, l.jsxs)("div", {
                            className: v.bodyColumnLeft,
                            children: [
                                (null == I ? void 0 : I.name) != null &&
                                    (0, l.jsx)(a.Heading, {
                                        variant: "heading-lg/semibold",
                                        color: "header-primary",
                                        children: I.name,
                                    }),
                                null != E &&
                                    (0, l.jsx)("img", {
                                        src: E,
                                        alt: null != (n = null == I ? void 0 : I.name) ? n : "",
                                        className: v.skuImage,
                                    }),
                            ],
                        }),
                        (0, l.jsxs)("div", {
                            className: v.bodyColumnRight,
                            children: [
                                (0, l.jsx)(r.Z, {
                                    selectedSkuId: k,
                                    validateSelectedGift: M,
                                }),
                                (0, l.jsx)(o.Z, {
                                    sectionTitle: j.intl.string(j.t.B3miE8),
                                    onTextChange: (e) => (null == x ? void 0 : x(e)),
                                    pendingText: b,
                                    currentText: b,
                                    disableThemedBackground: !0,
                                    className: v.customGiftMessageWrapper,
                                    innerClassName: v.customGiftMessage,
                                }),
                            ],
                        }),
                    ],
                }),
            }),
            (0, l.jsx)(h.O3, {
                children: (0, l.jsx)(a.mzw, {
                    "data-migration-pending": !0,
                    justify: s.Z.Justify.BETWEEN,
                    align: s.Z.Align.CENTER,
                    children: (0, l.jsx)(O, {
                        onStepChange: t,
                        onBackClick: c,
                        disabled: null == C || C.id === (null == P ? void 0 : P.id) || b.length > y.$n,
                    }),
                }),
            }),
        ],
    });
}
