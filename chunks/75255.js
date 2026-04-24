n.d(t, { A: () => u });
var r = n(636537),
    l = n(228366),
    i = n(845584),
    a = n(739508),
    s = n(652215);
let o = Object.freeze({}),
    u = {
        redeemGiftCode: async function (e) {
            let { code: t, options: n = o, onRedeemed: u, onError: c } = e,
                { channelId: d = null, paymentSource: _ = null } = n;
            l.h.dispatch({ type: "GIFT_CODE_REDEEM", code: t });
            try {
                let e = await r.Bo.post({
                    url: s.Rsh.GIFT_CODE_REDEEM(t),
                    body: { channel_id: d, payment_source_id: _?.id, gateway_checkout_context: await (0, a.ob)(_) },
                    oldFormErrors: !0,
                    rejectWithError: !1,
                });
                return (
                    l.h.dispatch({ type: "GIFT_CODE_REDEEM_SUCCESS", code: t, entitlement: e.body }),
                    u?.(),
                    { code: t, entitlement: e }
                );
            } catch (n) {
                let e = new i.Ey(n);
                throw (l.h.dispatch({ type: "GIFT_CODE_REDEEM_FAILURE", code: t, error: e }), c?.(e), e);
            }
        },
    };
