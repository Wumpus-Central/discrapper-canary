n.d(t, { Z: () => O }), n(388685);
var r = n(200651);
n(192379);
var i = n(772848),
    a = n(481060),
    o = n(159351),
    s = n(667),
    l = n(335131),
    c = n(626135),
    u = n(409813),
    d = n(608579),
    f = n(981631);
function _(e, t, n) {
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
function p(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                _(e, t, n[t]);
            });
    }
    return e;
}
function h(e, t) {
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
function m(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : h(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function g(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = E(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++) (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function E(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
let b = 'payment-modal',
    y = 'gift-payment-modal',
    v = new Set([u.h8.REVIEW, u.h8.CONFIRM, u.h8.GIFT_CUSTOMIZATION]);
function O(e) {
    let t,
        { skuId: n, isGift: u = !1, giftMessage: _, giftingOrigin: h, onClose: E, onComplete: O, analyticsLocations: I, analyticsObject: S, giftRecipient: T, variantsReturnStyle: A } = e,
        N = !1,
        C = (0, i.Z)(),
        R = (e) => {
            t = e;
        },
        P = u ? y : b;
    (0, a.ZDy)(
        async () => (e) => {
            var { onClose: t, returnRef: i } = e,
                a = g(e, ['onClose', 'returnRef']);
            return (0, r.jsx)(
                d.Z,
                m(p({}, a), {
                    loadId: C,
                    skuId: n,
                    isGift: u,
                    giftMessage: _,
                    giftingOrigin: h,
                    analyticsLocations: I,
                    giftRecipient: T,
                    onClose: (e) => {
                        t(), null == E || E(e);
                    },
                    onComplete: () => {
                        (N = !0), null == O || O();
                    },
                    returnRef: i,
                    onStepChange: R
                })
            );
        },
        {
            modalKey: P,
            onCloseCallback: () => {
                N ||
                    c.default.track(f.rMx.PAYMENT_FLOW_CANCELED, {
                        load_id: C,
                        payment_type: f.Zuq[f.GZQ.ONE_TIME],
                        location: S,
                        is_gift: u,
                        sku_id: n,
                        location_stack: I
                    }),
                    (0, o.fw)(),
                    (0, s.p)(),
                    null == E || E(N),
                    N &&
                        (0, l.qg)({
                            variantsReturnStyle: A,
                            location: 'openCollectiblesPaymentModal'
                        });
            },
            onCloseRequest: () => {
                null != t && v.has(t) && (0, a.Mr3)(P);
            }
        }
    );
}
