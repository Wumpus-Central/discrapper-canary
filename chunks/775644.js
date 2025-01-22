var i = n(544891),
    r = n(570140),
    l = n(881052),
    a = n(122289),
    o = n(981631);
let s = Object.freeze({});
async function c(e) {
    let { code: t, options: n = s, onRedeemed: c, onError: u } = e,
        { channelId: d = null, paymentSource: m = null } = n;
    r.Z.dispatch({
        type: 'GIFT_CODE_REDEEM',
        code: t
    });
    try {
        let e = await i.tn.post({
            url: o.ANM.GIFT_CODE_REDEEM(t),
            body: {
                channel_id: d,
                payment_source_id: null == m ? void 0 : m.id,
                gateway_checkout_context: await (0, a.cn)(m)
            },
            oldFormErrors: !0,
            rejectWithError: !1
        });
        return (
            r.Z.dispatch({
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
        let e = new l.HF(n);
        throw (
            (r.Z.dispatch({
                type: 'GIFT_CODE_REDEEM_FAILURE',
                code: t,
                error: e
            }),
            null == u || u(e),
            e)
        );
    }
}
t.Z = { redeemGiftCode: c };
