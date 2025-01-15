let i;
var r = n(544891),
    l = n(570140),
    a = n(728345),
    o = n(812206),
    s = n(625128),
    c = n(335131),
    d = n(669079),
    u = n(981631),
    m = n(474936);
async function h(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    l.Z.dispatch({
        type: 'GIFT_CODE_RESOLVE',
        code: e
    });
    try {
        let i = await (0, d.bT)(e, t, n);
        if (null != i.application_id && i.application_id !== m.CL) {
            let e = o.Z.getApplication(i.application_id);
            if (null == e)
                try {
                    await a.ZP.fetchApplication(i.application_id);
                } catch (e) {}
        }
        if (i.application_id === u.XAJ)
            try {
                await (0, c.jr)(i.sku_id);
            } catch (e) {}
        return (
            l.Z.dispatch({
                type: 'GIFT_CODE_RESOLVE_SUCCESS',
                giftCode: i
            }),
            { giftCode: i }
        );
    } catch (t) {
        throw (
            (l.Z.dispatch({
                type: 'GIFT_CODE_RESOLVE_FAILURE',
                code: e,
                error: t
            }),
            t)
        );
    }
}
(i = n(775644).Z),
    (t.Z = {
        resolveGiftCode: h,
        async fetchUserGiftCodesForSKU(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
            l.Z.dispatch({
                type: 'GIFT_CODES_FETCH',
                skuId: e,
                subscriptionPlanId: t
            });
            try {
                let n = await r.tn.get({
                    url: u.ANM.USER_GIFT_CODES,
                    query: {
                        sku_id: e,
                        subscription_plan_id: t
                    },
                    oldFormErrors: !0,
                    rejectWithError: !0
                });
                l.Z.dispatch({
                    type: 'GIFT_CODES_FETCH_SUCCESS',
                    giftCodes: n.body,
                    skuId: e,
                    subscriptionPlanId: t
                });
            } catch (n) {
                l.Z.dispatch({
                    type: 'GIFT_CODES_FETCH_FAILURE',
                    skuId: e,
                    subscriptionPlanId: t
                });
            }
        },
        async createGiftCode(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
            l.Z.dispatch({
                type: 'GIFT_CODE_CREATE_START',
                skuId: e,
                subscriptionPlanId: t
            });
            try {
                let i = await r.tn.post({
                    url: u.ANM.USER_GIFT_CODE_CREATE,
                    body: {
                        sku_id: e,
                        subscription_plan_id: t,
                        gift_style: n
                    },
                    oldFormErrors: !0,
                    rejectWithError: !0
                });
                return (
                    l.Z.dispatch({
                        type: 'GIFT_CODE_CREATE_SUCCESS',
                        giftCode: i.body
                    }),
                    i.body
                );
            } catch (n) {
                l.Z.dispatch({
                    type: 'GIFT_CODE_CREATE_FAILURE',
                    skuId: e,
                    subscriptionPlanId: t
                });
            }
        },
        async revokeGiftCode(e) {
            l.Z.dispatch({
                type: 'GIFT_CODE_REVOKE',
                code: e
            });
            try {
                await r.tn.del({
                    url: u.ANM.USER_GIFT_CODE_REVOKE(e),
                    oldFormErrors: !0,
                    rejectWithError: !0
                }),
                    l.Z.dispatch({
                        type: 'GIFT_CODE_REVOKE_SUCCESS',
                        code: e
                    });
            } catch (t) {
                l.Z.dispatch({
                    type: 'GIFT_CODE_REVOKE_FAILURE',
                    code: e
                });
            }
        },
        openNativeGiftCodeModal(e) {
            s.Z.openNativeAppModal(e, u.Etm.GIFT_CODE_BROWSER);
        },
        ...i
    });
