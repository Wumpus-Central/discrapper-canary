n.d(t, { Z: () => c });
var r = n(544891),
    i = n(570140),
    a = n(881052),
    o = n(122289),
    l = n(981631);
let s = Object.freeze({}),
    c = {
        redeemGiftCode: async function (e) {
            let { code: t, options: n = s, onRedeemed: c, onError: d } = e,
                { channelId: u = null, paymentSource: p = null } = n;
            i.Z.dispatch({
                type: 'GIFT_CODE_REDEEM',
                code: t
            });
            try {
                let e = await r.tn.post({
                    url: l.ANM.GIFT_CODE_REDEEM(t),
                    body: {
                        channel_id: u,
                        payment_source_id: null == p ? void 0 : p.id,
                        gateway_checkout_context: await (0, o.cn)(p)
                    },
                    oldFormErrors: !0,
                    rejectWithError: !1
                });
                return (
                    i.Z.dispatch({
                        type: 'GIFT_CODE_REDEEM_SUCCESS',
                        code: t,
                        entitlement: e.body
                    }),
                    null == c || c(),
                    {
                        code: t,
                        entitlement: e
                    }
                );
            } catch (n) {
                let e = new a.HF(n);
                throw (
                    (i.Z.dispatch({
                        type: 'GIFT_CODE_REDEEM_FAILURE',
                        code: t,
                        error: e
                    }),
                    null == d || d(e),
                    e)
                );
            }
        }
    };
