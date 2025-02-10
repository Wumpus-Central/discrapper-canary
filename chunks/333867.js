n.d(t, { Z: () => m }), n(47120);
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
    p = 'gift-payment-modal',
    h = new Set([c.h8.REVIEW, c.h8.CONFIRM, c.h8.GIFT_CUSTOMIZATION]);
function m(e) {
    let t;
    let { skuId: n, isGift: c = !1, giftMessage: m, giftingOrigin: g, onClose: E, onComplete: v, analyticsLocations: y, analyticsObject: I, giftRecipient: T, variantsReturnStyle: b } = e,
        S = !1,
        A = (0, r.Z)(),
        N = (e) => {
            t = e;
        },
        C = c ? p : _;
    (0, a.ZDy)(
        async () => (e) => {
            let { onClose: t, returnRef: r, ...a } = e;
            return (0, i.jsx)(d.Z, {
                ...a,
                loadId: A,
                skuId: n,
                isGift: c,
                giftMessage: m,
                giftingOrigin: g,
                analyticsLocations: y,
                giftRecipient: T,
                onClose: (e) => {
                    t(), null == E || E(e);
                },
                onComplete: () => {
                    (S = !0), null == v || v();
                },
                returnRef: r,
                onStepChange: N
            });
        },
        {
            modalKey: C,
            onCloseCallback: () => {
                S ||
                    u.default.track(f.rMx.PAYMENT_FLOW_CANCELED, {
                        load_id: A,
                        payment_type: f.Zuq[f.GZQ.ONE_TIME],
                        location: I,
                        is_gift: c,
                        sku_id: n,
                        location_stack: y
                    }),
                    (0, s.fw)(),
                    (0, o.p)(),
                    null == E || E(S),
                    S &&
                        (0, l.qg)({
                            variantsReturnStyle: b,
                            location: 'openCollectiblesPaymentModal'
                        });
            },
            onCloseRequest: () => {
                null != t && h.has(t) && (0, a.Mr3)(C);
            }
        }
    );
}
