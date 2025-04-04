n.d(t, { Z: () => O }), n(47120);
var r = n(200651);
n(192379);
var i = n(772848),
    o = n(481060),
    a = n(159351),
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
        var o = Object.getOwnPropertySymbols(e);
        for (r = 0; r < o.length; r++) (n = o[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function E(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        o = Object.keys(e);
    for (r = 0; r < o.length; r++) (n = o[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
let b = 'payment-modal',
    y = 'gift-payment-modal',
    v = new Set([u.h8.REVIEW, u.h8.CONFIRM, u.h8.GIFT_CUSTOMIZATION]);
function O(e) {
    let t,
        { skuId: n, isGift: u = !1, giftMessage: _, giftingOrigin: h, onClose: E, onComplete: O, analyticsLocations: I, analyticsObject: S, giftRecipient: T, variantsReturnStyle: N } = e,
        A = !1,
        C = (0, i.Z)(),
        R = (e) => {
            t = e;
        },
        P = u ? y : b;
    (0, o.ZDy)(
        async () => (e) => {
            var { onClose: t, returnRef: i } = e,
                o = g(e, ['onClose', 'returnRef']);
            return (0, r.jsx)(
                d.Z,
                m(p({}, o), {
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
                        (A = !0), null == O || O();
                    },
                    returnRef: i,
                    onStepChange: R
                })
            );
        },
        {
            modalKey: P,
            onCloseCallback: () => {
                A ||
                    c.default.track(f.rMx.PAYMENT_FLOW_CANCELED, {
                        load_id: C,
                        payment_type: f.Zuq[f.GZQ.ONE_TIME],
                        location: S,
                        is_gift: u,
                        sku_id: n,
                        location_stack: I
                    }),
                    (0, a.fw)(),
                    (0, s.p)(),
                    null == E || E(A),
                    A &&
                        (0, l.qg)({
                            variantsReturnStyle: N,
                            location: 'openCollectiblesPaymentModal'
                        });
            },
            onCloseRequest: () => {
                null != t && v.has(t) && (0, o.Mr3)(P);
            }
        }
    );
}
