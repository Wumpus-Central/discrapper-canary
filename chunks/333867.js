r.d(n, {
    Z: function () {
        return g;
    }
});
var i = r(47120);
var a = r(200651);
r(192379);
var o = r(772848),
    s = r(481060),
    l = r(159351),
    u = r(667),
    c = r(335131),
    d = r(626135),
    f = r(409813),
    p = r(608579),
    h = r(981631);
let _ = 'payment-modal',
    m = new Set([f.h8.REVIEW, f.h8.CONFIRM, f.h8.GIFT_CUSTOMIZATION]);
function g(e) {
    let n;
    let { skuId: r, isGift: i = !1, giftMessage: f, giftingOrigin: g, onClose: E, onComplete: v, analyticsLocations: y, analyticsObject: b, giftRecipient: I, variantsReturnStyle: T } = e,
        S = !1,
        A = (0, o.Z)(),
        C = (e) => {
            n = e;
        };
    (0, s.openModalLazy)(
        async () => (e) => {
            let { onClose: n, returnRef: o, ...s } = e;
            return (0, a.jsx)(p.Z, {
                ...s,
                loadId: A,
                skuId: r,
                isGift: i,
                giftMessage: f,
                giftingOrigin: g,
                analyticsLocations: y,
                giftRecipient: I,
                onClose: (e) => {
                    n(), null == E || E(e);
                },
                onComplete: () => {
                    (S = !0), null == v || v();
                },
                returnRef: o,
                onStepChange: C
            });
        },
        {
            modalKey: _,
            onCloseCallback: () => {
                !S &&
                    d.default.track(h.rMx.PAYMENT_FLOW_CANCELED, {
                        load_id: A,
                        payment_type: h.Zuq[h.GZQ.ONE_TIME],
                        location: b,
                        is_gift: i,
                        sku_id: r,
                        location_stack: y
                    }),
                    (0, l.fw)(),
                    (0, u.p)(),
                    null == E || E(S),
                    S &&
                        (0, c.qg)({
                            variantsReturnStyle: T,
                            location: 'openCollectiblesPaymentModal'
                        });
            },
            onCloseRequest: () => {
                null != n && m.has(n) && (0, s.closeModal)(_);
            }
        }
    );
}
