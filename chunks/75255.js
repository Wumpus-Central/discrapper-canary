i.d(e, { A: () => p });
var s = i(636537),
    r = i(228366),
    n = i(913122),
    l = i(739508),
    o = i(652215);
let a = Object.freeze({}),
    p = {
        redeemGiftCode: async function (t) {
            let { code: e, options: i = a, onRedeemed: p, onError: c } = t,
                { channelId: d = null, paymentSource: u = null } = i;
            r.h.dispatch({ type: "GIFT_CODE_REDEEM", code: e });
            try {
                let t = await s.Bo.post({
                    url: o.Rsh.GIFT_CODE_REDEEM(e),
                    body: { channel_id: d, payment_source_id: u?.id, gateway_checkout_context: await (0, l.ob)(u) },
                    oldFormErrors: !0,
                    rejectWithError: (0, s.fT)(),
                });
                return (
                    r.h.dispatch({ type: "GIFT_CODE_REDEEM_SUCCESS", code: e, entitlement: t.body }),
                    p?.(),
                    { code: e, entitlement: t }
                );
            } catch (i) {
                let t = new n.Ey(i);
                throw (r.h.dispatch({ type: "GIFT_CODE_REDEEM_FAILURE", code: e, error: t }), c?.(t), t);
            }
        },
    };
