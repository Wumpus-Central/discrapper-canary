n.d(t, { Z: () => A }), n(388685);
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
    m = n(301167),
    h = n(608579),
    g = n(981631);
function E(e, t, n) {
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
function b(e) {
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
                E(e, t, n[t]);
            });
    }
    return e;
}
function y(e, t) {
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
function O(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : y(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function v(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = S(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++)
            (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function S(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
let I = "payment-modal",
    T = "gift-payment-modal",
    C = new Set([_.h8.REVIEW, _.h8.CONFIRM, _.h8.GIFT_CUSTOMIZATION]);
function A(e) {
    let t,
        {
            skuId: u,
            analyticsLocations: _,
            analyticsObject: h,
            isGift: E = !1,
            giftMessage: y,
            giftingOrigin: S,
            giftRecipient: A,
            onClose: R,
            onComplete: w,
            variantsReturnStyle: D,
        } = e,
        x = !1,
        L = (0, i.Z)(),
        j = (e) => {
            t = e;
        },
        M = E ? T : I,
        k = f.default.getCurrentUser();
    if (!(null == k ? void 0 : k.verified))
        return void (0, a.ZDy)(async () => {
            let { default: e } = await Promise.all([n.e("88470"), n.e("20102")]).then(n.bind(n, 444688));
            return (t) => {
                var { onClose: n } = t,
                    i = v(t, ["onClose"]);
                return (0, r.jsx)(
                    e,
                    O(b({}, i), {
                        onClose: () => {
                            n(), null == R || R(!1);
                        },
                    }),
                );
            };
        });
    o.Z.wait(() => {
        o.Z.dispatch({ type: "PAYMENT_MODAL_OPEN" });
    });
    let { enabled: U } = (0, c.VL)({ location: "openCollectiblesPaymentModal" }),
        G = () => {
            (0, m.x)({ checkoutSucceeded: x }),
                x ||
                    p.default.track(g.rMx.PAYMENT_FLOW_CANCELED, {
                        load_id: L,
                        payment_type: g.Zuq[g.GZQ.ONE_TIME],
                        location: h,
                        is_gift: E,
                        sku_id: u,
                        location_stack: _,
                    }),
                (0, s.fw)(),
                (0, l.p)(),
                null == R || R(x),
                x && (0, d.qg)({ variantsReturnStyle: D });
        },
        Z = () => {
            null != t && C.has(t) && (0, a.Mr3)(M);
        },
        F = {
            loadId: L,
            skuId: u,
            analyticsLocations: _,
            onStepChange: j,
            modalKey: M,
            isGift: E,
            giftMessage: y,
            giftingOrigin: S,
            giftRecipient: A,
            onClose: R,
            onCloseCallback: G,
            onCloseRequest: Z,
            onComplete: () => {
                (x = !0), null == w || w();
            },
        };
    if (U) return void N(F);
    P(F);
}
let N = (e) => {
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
    P = (e) => {
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
            onComplete: m,
        } = e;
        return (0, a.ZDy)(
            async () => (e) => {
                var { onClose: a, returnRef: s } = e,
                    p = v(e, ["onClose", "returnRef"]);
                return (0, r.jsx)(
                    h.ZP,
                    O(b({}, p), {
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
                        onComplete: m,
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
