i.d(e, { A: () => d });
var s = i(636537),
    r = i(228366),
    n = i(913122),
    l = i(739508),
    a = i(652215);
let o = Object.freeze({}),
    d = {
        redeemGiftCode: async function (t) {
            let { code: e, options: i = o, onRedeemed: d, onError: p } = t,
                { channelId: u = null, paymentSource: c = null } = i;
            r.h.dispatch({ type: "GIFT_CODE_REDEEM", code: e });
            try {
                let t = await s.Bo.post({
                    url: a.Rsh.GIFT_CODE_REDEEM(e),
                    body: { channel_id: u, payment_source_id: c?.id, gateway_checkout_context: await (0, l.ob)(c) },
                    oldFormErrors: !0,
                    rejectWithError: (0, s.fT)(),
                });
                return (
                    r.h.dispatch({ type: "GIFT_CODE_REDEEM_SUCCESS", code: e, entitlement: t.body }),
                    d?.(),
                    { code: e, entitlement: t }
                );
            } catch (i) {
                let t = new n.Ey(i);
                throw (r.h.dispatch({ type: "GIFT_CODE_REDEEM_FAILURE", code: e, error: t }), p?.(t), t);
            }
        },
    };
