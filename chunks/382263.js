n.d(t, { PT: () => x });
var i = n(951288);
n(647438);
var a = n(442837),
    l = n(481060),
    s = n(225657),
    r = n(600164),
    o = n(927699),
    c = n(987716),
    u = n(311821),
    d = n(594174),
    f = n(55563),
    p = n(987209),
    m = n(563132),
    g = n(409813),
    b = n(27034),
    h = n(474936),
    y = n(388032),
    j = n(323261);
let x = {
    key: g.h8.GIFT_CUSTOMIZATION,
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
function v(e) {
    let { onStepChange: t, onBackClick: n, showBackButton: a = !1, disabled: s = !1, loading: r = !1 } = e,
        { hasPaymentSources: o } = (0, m.JL)(),
        c = o ? g.h8.REVIEW : g.h8.ADD_PAYMENT_STEPS;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(l.zxk, {
                onClick: () => t(c),
                disabled: s,
                loading: r,
                text: y.intl.string(y.t.XiOHRU),
            }),
            a ? (0, i.jsx)(u.Z, { onClick: n }) : null,
        ],
    });
}
function O(e) {
    var t;
    let { handleStepChange: n, handleClose: u } = e,
        { customGiftMessage: g = "", setCustomGiftMessage: x, giftRecipient: O } = (0, p.wD)(),
        { selectedSkuId: C } = (0, m.JL)(),
        T = (0, a.e7)([d.default], () => d.default.getCurrentUser()),
        P = (0, a.e7)([f.Z], () => (null != C ? f.Z.get(C) : null), [C]),
        k = async (e, t) => {};
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(b.C3, {
                children: (0, i.jsxs)("div", {
                    className: j.stepBody,
                    children: [
                        (0, i.jsxs)("div", {
                            className: j.bodyColumnLeft,
                            children: [
                                (0, i.jsx)(l.X6q, {
                                    variant: "heading-lg/semibold",
                                    color: "header-primary",
                                    className: j.title,
                                    children: y.intl.formatToPlainString(y.t.UIOtjo, {
                                        skuName: null != (t = null == P ? void 0 : P.name) ? t : "this app",
                                    }),
                                }),
                                (0, i.jsx)(l.Text, {
                                    variant: "text-md/normal",
                                    color: "header-secondary",
                                    className: j.subtitle,
                                    children: y.intl.string(y.t.GHZfIC),
                                }),
                                (0, i.jsx)(c.q, {}),
                            ],
                        }),
                        (0, i.jsxs)("div", {
                            className: j.bodyColumnRight,
                            children: [
                                (0, i.jsx)(s.Z, {
                                    selectedSkuId: C,
                                    validateSelectedGift: k,
                                    className: j.sendTo,
                                }),
                                (0, i.jsx)(o.Z, {
                                    sectionTitle: y.intl.string(y.t.B3miEx),
                                    onTextChange: (e) => (null == x ? void 0 : x(e)),
                                    pendingText: g,
                                    currentText: g,
                                    disableThemedBackground: !0,
                                    className: j.customGiftMessageWrapper,
                                    innerClassName: j.customGiftMessage,
                                }),
                            ],
                        }),
                    ],
                }),
            }),
            (0, i.jsx)(b.O3, {
                children: (0, i.jsx)(l.mzw, {
                    "data-migration-pending": !0,
                    justify: r.Z.Justify.BETWEEN,
                    align: r.Z.Align.CENTER,
                    children: (0, i.jsx)(v, {
                        onStepChange: n,
                        onBackClick: u,
                        disabled: null == O || O.id === (null == T ? void 0 : T.id) || g.length > h.$n,
                    }),
                }),
            }),
        ],
    });
}
