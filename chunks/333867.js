n.d(t, { Z: () => C }), n(388685);
var r = n(54381);
n(473749);
var i = n(772848),
    a = n(481060),
    o = n(570140),
    s = n(159351),
    l = n(667),
    c = n(844718),
    u = n(762853),
    d = n(335131),
    f = n(594174),
    p = n(626135),
    _ = n(409813),
    m = n(608579),
    h = n(981631);
function g(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function E(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                g(e, t, n[t]);
            });
    }
    return e;
}
function b(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function y(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : b(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function O(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = v(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++)
            (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function v(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
let S = "payment-modal",
    I = "gift-payment-modal",
    T = new Set([_.h8.REVIEW, _.h8.CONFIRM, _.h8.GIFT_CUSTOMIZATION]);
function C(e) {
    let t,
        {
            skuId: u,
            analyticsLocations: _,
            analyticsObject: m,
            isGift: g = !1,
            giftMessage: b,
            giftingOrigin: v,
            giftRecipient: C,
            onClose: P,
            onComplete: R,
            variantsReturnStyle: w,
        } = e,
        D = !1,
        x = (0, i.Z)(),
        L = (e) => {
            t = e;
        },
        j = g ? I : S,
        M = f.default.getCurrentUser();
    if (!(null == M ? void 0 : M.verified))
        return void (0, a.ZDy)(async () => {
            let { default: e } = await Promise.all([n.e("88470"), n.e("20102")]).then(n.bind(n, 444688));
            return (t) => {
                var { onClose: n } = t,
                    i = O(t, ["onClose"]);
                return (0, r.jsx)(
                    e,
                    y(E({}, i), {
                        onClose: () => {
                            n(), null == P || P(!1);
                        },
                    }),
                );
            };
        });
    o.Z.wait(() => {
        o.Z.dispatch({ type: "PAYMENT_MODAL_OPEN" });
    });
    let { enabled: k } = (0, c.VL)({ location: "openCollectiblesPaymentModal" }),
        U = () => {
            D ||
                p.default.track(h.rMx.PAYMENT_FLOW_CANCELED, {
                    load_id: x,
                    payment_type: h.Zuq[h.GZQ.ONE_TIME],
                    location: m,
                    is_gift: g,
                    sku_id: u,
                    location_stack: _,
                }),
                (0, s.fw)(),
                (0, l.p)(),
                null == P || P(D),
                D && (0, d.qg)({ variantsReturnStyle: w });
        },
        G = () => {
            null != t && T.has(t) && (0, a.Mr3)(j);
        },
        Z = {
            loadId: x,
            skuId: u,
            analyticsLocations: _,
            onStepChange: L,
            modalKey: j,
            isGift: g,
            giftMessage: b,
            giftingOrigin: v,
            giftRecipient: C,
            onClose: P,
            onCloseCallback: U,
            onCloseRequest: G,
            onComplete: () => {
                (D = !0), null == R || R();
            },
        };
    if (k) return void A(Z);
    N(Z);
}
let A = (e) => {
        let {
            loadId: t,
            skuId: n,
            analyticsLocations: r,
            onStepChange: i,
            modalKey: a,
            isGift: o = !1,
            giftMessage: s,
            giftingOrigin: l,
            giftRecipient: c,
            onClose: d,
            onCloseCallback: f,
            onCloseRequest: p,
            onComplete: _,
        } = e;
        return (0, u.h4)().openCheckoutModal({
            loadId: t,
            skuId: n,
            analyticsLocations: r,
            giftContextProps: {
                isGift: o,
                giftMessage: s,
                giftingOrigin: l,
                giftRecipient: c,
            },
            onClose: d,
            onComplete: _,
            flowSpecificOptions: { onStepChange: i },
            openModalOptions: {
                modalKey: a,
                onCloseCallback: f,
                onCloseRequest: p,
            },
        });
    },
    N = (e) => {
        let {
            loadId: t,
            skuId: n,
            analyticsLocations: i,
            onStepChange: o,
            modalKey: s,
            isGift: l = !1,
            giftMessage: c,
            giftingOrigin: u,
            giftRecipient: d,
            onClose: f,
            onCloseCallback: p,
            onCloseRequest: _,
            onComplete: h,
        } = e;
        return (0, a.ZDy)(
            async () => (e) => {
                var { onClose: a, returnRef: s } = e,
                    p = O(e, ["onClose", "returnRef"]);
                return (0, r.jsx)(
                    m.ZP,
                    y(E({}, p), {
                        loadId: t,
                        skuId: n,
                        isGift: l,
                        giftMessage: c,
                        giftingOrigin: u,
                        analyticsLocations: i,
                        giftRecipient: d,
                        onClose: (e) => {
                            a(), null == f || f(e);
                        },
                        onComplete: h,
                        returnRef: s,
                        onStepChange: o,
                    }),
                );
            },
            {
                modalKey: s,
                onCloseCallback: p,
                onCloseRequest: _,
            },
        );
    };
