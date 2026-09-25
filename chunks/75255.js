n.d(t, { A: () => d });
var i = n(636537),
    r = n(228366),
    a = n(913122),
    s = n(739508),
    l = n(652215);
let o = Object.freeze({}),
    d = {
        redeemGiftCode: async function (e) {
            let { code: t, options: n = o, onRedeemed: d, onError: c } = e,
                { channelId: u = null, paymentSource: _ = null } = n;
            r.h.dispatch({ type: "GIFT_CODE_REDEEM", code: t });
            try {
                let e = await i.Bo.post({
                    url: l.Rsh.GIFT_CODE_REDEEM(t),
                    body: { channel_id: u, payment_source_id: _?.id, gateway_checkout_context: await (0, s.ob)(_) },
                    oldFormErrors: !0,
                    rejectWithError: (0, i.fT)(),
                });
                return (
                    r.h.dispatch({ type: "GIFT_CODE_REDEEM_SUCCESS", code: t, entitlement: e.body }),
                    d?.(),
                    { code: t, entitlement: e }
                );
            } catch (n) {
                let e = new a.Ey(n);
                throw (r.h.dispatch({ type: "GIFT_CODE_REDEEM_FAILURE", code: t, error: e }), c?.(e), e);
            }
        },
    };
