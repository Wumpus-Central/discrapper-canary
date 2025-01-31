n.d(t, { Z: () => c });
var i = n(544891),
    l = n(570140),
    a = n(881052),
    r = n(122289),
    s = n(981631);
let o = Object.freeze({}),
    c = {
        redeemGiftCode: async function (e) {
            let { code: t, options: n = o, onRedeemed: c, onError: d } = e,
                { channelId: u = null, paymentSource: m = null } = n;
            l.Z.dispatch({
                type: 'GIFT_CODE_REDEEM',
                code: t
            });
            try {
                let e = await i.tn.post({
                    url: s.ANM.GIFT_CODE_REDEEM(t),
                    body: {
                        channel_id: u,
                        payment_source_id: null == m ? void 0 : m.id,
                        gateway_checkout_context: await (0, r.cn)(m)
                    },
                    oldFormErrors: !0,
                    rejectWithError: !1
                });
                return (
                    l.Z.dispatch({
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
                    (l.Z.dispatch({
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
