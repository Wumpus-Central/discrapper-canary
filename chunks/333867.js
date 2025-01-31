n.d(t, { Z: () => h }), n(47120);
var i = n(200651);
n(192379);
var r = n(772848),
    a = n(481060),
    s = n(159351),
    o = n(667),
    l = n(335131),
    u = n(626135),
    c = n(409813),
    d = n(608579),
    f = n(981631);
let _ = 'payment-modal',
    p = new Set([c.h8.REVIEW, c.h8.CONFIRM, c.h8.GIFT_CUSTOMIZATION]);
function h(e) {
    let t;
    let { skuId: n, isGift: c = !1, giftMessage: h, giftingOrigin: m, onClose: g, onComplete: E, analyticsLocations: v, analyticsObject: y, giftRecipient: I, variantsReturnStyle: b } = e,
        T = !1,
        S = (0, r.Z)(),
        A = (e) => {
            t = e;
        };
    (0, a.ZDy)(
        async () => (e) => {
            let { onClose: t, returnRef: r, ...a } = e;
            return (0, i.jsx)(d.Z, {
                ...a,
                loadId: S,
                skuId: n,
                isGift: c,
                giftMessage: h,
                giftingOrigin: m,
                analyticsLocations: v,
                giftRecipient: I,
                onClose: (e) => {
                    t(), null == g || g(e);
                },
                onComplete: () => {
                    (T = !0), null == E || E();
                },
                returnRef: r,
                onStepChange: A
            });
        },
        {
            modalKey: _,
            onCloseCallback: () => {
                T ||
                    u.default.track(f.rMx.PAYMENT_FLOW_CANCELED, {
                        load_id: S,
                        payment_type: f.Zuq[f.GZQ.ONE_TIME],
                        location: y,
                        is_gift: c,
                        sku_id: n,
                        location_stack: v
                    }),
                    (0, s.fw)(),
                    (0, o.p)(),
                    null == g || g(T),
                    T &&
                        (0, l.qg)({
                            variantsReturnStyle: b,
                            location: 'openCollectiblesPaymentModal'
                        });
            },
            onCloseRequest: () => {
                null != t && p.has(t) && (0, a.Mr3)(_);
            }
        }
    );
}
