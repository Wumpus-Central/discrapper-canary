(n.d(t, { Z: () => I }), n(388685));
var r = n(255367);
n(73800);
var i = n(772848),
    a = n(481060),
    o = n(570140),
    s = n(159351),
    l = n(667),
    c = n(335131),
    u = n(626135),
    d = n(409813),
    f = n(608579),
    _ = n(981631);
function p(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function h(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                p(e, t, n[t]);
            }));
    }
    return e;
}
function m(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        (t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r));
    }
    return n;
}
function g(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : m(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function E(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = b(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++) ((n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]));
    }
    return i;
}
function b(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) ((n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]));
    return i;
}
let y = 'payment-modal',
    O = 'gift-payment-modal',
    v = new Set([d.h8.REVIEW, d.h8.CONFIRM, d.h8.GIFT_CUSTOMIZATION]);
function I(e) {
    let t,
        { skuId: n, isGift: d = !1, giftMessage: p, giftingOrigin: m, onClose: b, onComplete: I, analyticsLocations: T, analyticsObject: S, giftRecipient: A, variantsReturnStyle: N } = e,
        C = !1,
        R = (0, i.Z)(),
        P = (e) => {
            t = e;
        },
        w = d ? O : y;
    (o.Z.wait(() => {
        o.Z.dispatch({ type: 'PAYMENT_MODAL_OPEN' });
    }),
        (0, a.ZDy)(
            async () => (e) => {
                var { onClose: t, returnRef: i } = e,
                    a = E(e, ['onClose', 'returnRef']);
                return (0, r.jsx)(
                    f.Z,
                    g(h({}, a), {
                        loadId: R,
                        skuId: n,
                        isGift: d,
                        giftMessage: p,
                        giftingOrigin: m,
                        analyticsLocations: T,
                        giftRecipient: A,
                        onClose: (e) => {
                            (t(), null == b || b(e));
                        },
                        onComplete: () => {
                            ((C = !0), null == I || I());
                        },
                        returnRef: i,
                        onStepChange: P
                    })
                );
            },
            {
                modalKey: w,
                onCloseCallback: () => {
                    (C ||
                        u.default.track(_.rMx.PAYMENT_FLOW_CANCELED, {
                            load_id: R,
                            payment_type: _.Zuq[_.GZQ.ONE_TIME],
                            location: S,
                            is_gift: d,
                            sku_id: n,
                            location_stack: T
                        }),
                        (0, s.fw)(),
                        (0, l.p)(),
                        null == b || b(C),
                        C &&
                            (0, c.qg)({
                                variantsReturnStyle: N,
                                location: 'openCollectiblesPaymentModal'
                            }));
                },
                onCloseRequest: () => {
                    null != t && v.has(t) && (0, a.Mr3)(w);
                }
            }
        ));
}
