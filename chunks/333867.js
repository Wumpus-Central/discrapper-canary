n.d(t, { Z: () => I }), n(388685);
var r = n(54381);
n(473749);
var i = n(772848),
    a = n(481060),
    o = n(570140),
    s = n(159351),
    l = n(667),
    c = n(335131),
    u = n(594174),
    d = n(626135),
    f = n(409813),
    p = n(608579),
    _ = n(981631);
function m(e, t, n) {
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
function h(e) {
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
                m(e, t, n[t]);
            });
    }
    return e;
}
function g(e, t) {
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
function E(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : g(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function b(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = y(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++)
            (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function y(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
let O = "payment-modal",
    v = "gift-payment-modal",
    S = new Set([f.h8.REVIEW, f.h8.CONFIRM, f.h8.GIFT_CUSTOMIZATION]);
function I(e) {
    let t,
        {
            skuId: f,
            isGift: m = !1,
            giftMessage: g,
            giftingOrigin: y,
            onClose: I,
            onComplete: T,
            analyticsLocations: A,
            analyticsObject: C,
            giftRecipient: N,
            variantsReturnStyle: P,
        } = e,
        R = !1,
        w = (0, i.Z)(),
        D = (e) => {
            t = e;
        },
        x = m ? v : O,
        L = u.default.getCurrentUser();
    if (!(null == L ? void 0 : L.verified))
        return void (0, a.ZDy)(async () => {
            let { default: e } = await Promise.all([n.e("88470"), n.e("20102")]).then(n.bind(n, 444688));
            return (t) => {
                var { onClose: n } = t,
                    i = b(t, ["onClose"]);
                return (0, r.jsx)(
                    e,
                    E(h({}, i), {
                        onClose: () => {
                            n(), null == I || I(!1);
                        },
                    }),
                );
            };
        });
    o.Z.wait(() => {
        o.Z.dispatch({ type: "PAYMENT_MODAL_OPEN" });
    }),
        (0, a.ZDy)(
            async () => (e) => {
                var { onClose: t, returnRef: n } = e,
                    i = b(e, ["onClose", "returnRef"]);
                return (0, r.jsx)(
                    p.ZP,
                    E(h({}, i), {
                        loadId: w,
                        skuId: f,
                        isGift: m,
                        giftMessage: g,
                        giftingOrigin: y,
                        analyticsLocations: A,
                        giftRecipient: N,
                        onClose: (e) => {
                            t(), null == I || I(e);
                        },
                        onComplete: () => {
                            (R = !0), null == T || T();
                        },
                        returnRef: n,
                        onStepChange: D,
                    }),
                );
            },
            {
                modalKey: x,
                onCloseCallback: () => {
                    R ||
                        d.default.track(_.rMx.PAYMENT_FLOW_CANCELED, {
                            load_id: w,
                            payment_type: _.Zuq[_.GZQ.ONE_TIME],
                            location: C,
                            is_gift: m,
                            sku_id: f,
                            location_stack: A,
                        }),
                        (0, s.fw)(),
                        (0, l.p)(),
                        null == I || I(R),
                        R && (0, c.qg)({ variantsReturnStyle: P });
                },
                onCloseRequest: () => {
                    null != t && S.has(t) && (0, a.Mr3)(x);
                },
            },
        );
}
