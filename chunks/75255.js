n.d(t, {
    A: () => c,
});
var r = n(562465),
    i = n(73153),
    a = n(198982),
    s = n(739508),
    o = n(652215);
let l = Object.freeze({}),
    c = {
        redeemGiftCode: async function (e) {
            let { code: t, options: n = l, onRedeemed: c, onError: u } = e,
                { channelId: d = null, paymentSource: f = null } = n;
            i.h.dispatch({
                type: "GIFT_CODE_REDEEM",
                code: t,
            });
            try {
                let e = await r.Bo.post({
                    url: o.Rsh.GIFT_CODE_REDEEM(t),
                    body: {
                        channel_id: d,
                        payment_source_id: null == f ? void 0 : f.id,
                        gateway_checkout_context: await (0, s.ob)(f),
                    },
                    oldFormErrors: !0,
                    rejectWithError: !1,
                });
                return (
                    i.h.dispatch({
                        type: "GIFT_CODE_REDEEM_SUCCESS",
                        code: t,
                        entitlement: e.body,
                    }),
                    null == c || c(),
                    {
                        code: t,
                        entitlement: e,
                    }
                );
            } catch (n) {
                let e = new a.Ey(n);
                throw (
                    (i.h.dispatch({
                        type: "GIFT_CODE_REDEEM_FAILURE",
                        code: t,
                        error: e,
                    }),
                    null == u || u(e),
                    e)
                );
            }
        },
    };
