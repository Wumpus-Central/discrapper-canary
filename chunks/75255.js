E.d(t, { A: () => c });
var n = E(636537),
    l = E(228366),
    r = E(845584),
    i = E(739508),
    _ = E(652215);
let o = Object.freeze({}),
    c = {
        redeemGiftCode: async function (e) {
            let { code: t, options: E = o, onRedeemed: c, onError: s } = e,
                { channelId: a = null, paymentSource: d = null } = E;
            l.h.dispatch({ type: "GIFT_CODE_REDEEM", code: t });
            try {
                let e = await n.Bo.post({
                    url: _.Rsh.GIFT_CODE_REDEEM(t),
                    body: { channel_id: a, payment_source_id: d?.id, gateway_checkout_context: await (0, i.ob)(d) },
                    oldFormErrors: !0,
                    rejectWithError: !1,
                });
                return (
                    l.h.dispatch({ type: "GIFT_CODE_REDEEM_SUCCESS", code: t, entitlement: e.body }),
                    c?.(),
                    { code: t, entitlement: e }
                );
            } catch (E) {
                let e = new r.Ey(E);
                throw (l.h.dispatch({ type: "GIFT_CODE_REDEEM_FAILURE", code: t, error: e }), s?.(e), e);
            }
        },
    };
