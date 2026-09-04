i.d(e, { A: () => c });
var s = i(636537),
    r = i(228366),
    n = i(913122),
    o = i(739508),
    l = i(652215);
let a = Object.freeze({}),
    c = {
        redeemGiftCode: async function (t) {
            let { code: e, options: i = a, onRedeemed: c, onError: p } = t,
                { channelId: d = null, paymentSource: u = null } = i;
            r.h.dispatch({ type: "GIFT_CODE_REDEEM", code: e });
            try {
                let t = await s.Bo.post({
                    url: l.Rsh.GIFT_CODE_REDEEM(e),
                    body: { channel_id: d, payment_source_id: u?.id, gateway_checkout_context: await (0, o.ob)(u) },
                    oldFormErrors: !0,
                    rejectWithError: (0, s.fT)(),
                });
                return (
                    r.h.dispatch({ type: "GIFT_CODE_REDEEM_SUCCESS", code: e, entitlement: t.body }),
                    c?.(),
                    { code: e, entitlement: t }
                );
            } catch (i) {
                let t = new n.Ey(i);
                throw (r.h.dispatch({ type: "GIFT_CODE_REDEEM_FAILURE", code: e, error: t }), p?.(t), t);
            }
        },
    };
