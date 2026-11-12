var i = n(620632),
    r = n(73153),
    a = n(627784),
    s = n(949192),
    l = n(652215);
let o = Object.freeze({});
n.d(
    t,
    {},
    {
        A: {
            redeemGiftCode: async function (e) {
                let { code: t, options: n = o, onRedeemed: d, onError: c } = e,
                    { channelId: u = null, paymentSource: _ = null, loadId: E } = n;
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
                    throw (r.h.dispatch({ type: "GIFT_CODE_REDEEM_FAILURE", code: t, error: e, loadId: E }), c?.(e), e);
                }
            },
        },
    },
);
