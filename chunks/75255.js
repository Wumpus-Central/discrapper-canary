"use strict";
n.d(t, { A: () => u });
var i = n(636537),
    r = n(228366),
    s = n(913122),
    a = n(739508),
    o = n(652215);
let l = Object.freeze({}),
    u = {
        redeemGiftCode: async function (e) {
            let { code: t, options: n = l, onRedeemed: u, onError: c } = e,
                { channelId: d = null, paymentSource: _ = null } = n;
            r.h.dispatch({ type: "GIFT_CODE_REDEEM", code: t });
            try {
                let e = await i.Bo.post({
                    url: o.Rsh.GIFT_CODE_REDEEM(t),
                    body: { channel_id: d, payment_source_id: _?.id, gateway_checkout_context: await (0, a.ob)(_) },
                    oldFormErrors: !0,
                    rejectWithError: !1,
                });
                return (
                    r.h.dispatch({ type: "GIFT_CODE_REDEEM_SUCCESS", code: t, entitlement: e.body }),
                    u?.(),
                    { code: t, entitlement: e }
                );
            } catch (n) {
                let e = new s.Ey(n);
                throw (r.h.dispatch({ type: "GIFT_CODE_REDEEM_FAILURE", code: t, error: e }), c?.(e), e);
            }
        },
    };
