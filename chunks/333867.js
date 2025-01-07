t.d(n, {
    Z: function () {
        return C;
    }
}),
    t(47120);
var i = t(200651);
t(192379);
var l = t(772848),
    s = t(481060),
    a = t(159351),
    r = t(667),
    o = t(335131),
    d = t(626135),
    c = t(409813),
    u = t(608579),
    h = t(981631);
let x = 'payment-modal',
    f = new Set([c.h8.REVIEW, c.h8.CONFIRM, c.h8.GIFT_CUSTOMIZATION]);
function C(e) {
    let n;
    let { skuId: t, isGift: c = !1, giftMessage: C, giftingOrigin: m, onClose: g, onComplete: p, analyticsLocations: S, analyticsObject: j, giftRecipient: v, variantsReturnStyle: E } = e,
        I = !1,
        T = (0, l.Z)(),
        N = (e) => {
            n = e;
        };
    (0, s.openModalLazy)(
        async () => (e) => {
            let { onClose: n, returnRef: l, ...s } = e;
            return (0, i.jsx)(u.Z, {
                ...s,
                loadId: T,
                skuId: t,
                isGift: c,
                giftMessage: C,
                giftingOrigin: m,
                analyticsLocations: S,
                giftRecipient: v,
                onClose: (e) => {
                    n(), null == g || g(e);
                },
                onComplete: () => {
                    (I = !0), null == p || p();
                },
                returnRef: l,
                onStepChange: N
            });
        },
        {
            modalKey: x,
            onCloseCallback: () => {
                !I &&
                    d.default.track(h.rMx.PAYMENT_FLOW_CANCELED, {
                        load_id: T,
                        payment_type: h.Zuq[h.GZQ.ONE_TIME],
                        location: j,
                        is_gift: c,
                        sku_id: t,
                        location_stack: S
                    }),
                    (0, a.fw)(),
                    (0, r.p)(),
                    null == g || g(I),
                    I &&
                        (0, o.qg)({
                            variantsReturnStyle: E,
                            location: 'openCollectiblesPaymentModal'
                        });
            },
            onCloseRequest: () => {
                null != n && f.has(n) && (0, s.closeModal)(x);
            }
        }
    );
}
