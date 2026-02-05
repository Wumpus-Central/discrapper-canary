l.d(t, { A: () => d });
var n = l(562465),
    r = l(73153),
    i = l(198982),
    s = l(739508),
    o = l(652215);
let a = Object.freeze({}),
    d = {
        redeemGiftCode: async function (e) {
            let { code: t, options: l = a, onRedeemed: d, onError: c } = e,
                { channelId: u = null, paymentSource: E = null } = l;
            r.h.dispatch({ type: "GIFT_CODE_REDEEM", code: t });
            try {
                let e = await n.Bo.post({
                    url: o.Rsh.GIFT_CODE_REDEEM(t),
                    body: { channel_id: u, payment_source_id: E?.id, gateway_checkout_context: await (0, s.ob)(E) },
                    oldFormErrors: !0,
                    rejectWithError: !1,
                });
                return (
                    r.h.dispatch({ type: "GIFT_CODE_REDEEM_SUCCESS", code: t, entitlement: e.body }),
                    d?.(),
                    { code: t, entitlement: e }
                );
            } catch (l) {
                let e = new i.Ey(l);
                throw (r.h.dispatch({ type: "GIFT_CODE_REDEEM_FAILURE", code: t, error: e }), c?.(e), e);
            }
        },
    };
