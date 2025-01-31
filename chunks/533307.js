n.d(t, { Z: () => m });
var i = n(544891),
    l = n(570140),
    a = n(728345),
    r = n(812206),
    s = n(625128),
    o = n(335131),
    c = n(669079),
    d = n(981631),
    u = n(474936);
let m = {
    resolveGiftCode: async function (e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        l.Z.dispatch({
            type: 'GIFT_CODE_RESOLVE',
            code: e
        });
        try {
            let i = await (0, c.bT)(e, t, n);
            if (null != i.application_id && i.application_id !== u.CL) {
                let e = r.Z.getApplication(i.application_id);
                if (null == e)
                    try {
                        await a.ZP.fetchApplication(i.application_id);
                    } catch (e) {}
            }
            return (
                i.application_id === d.XAJ && (await (0, o.jr)(i.sku_id)),
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
    },
    async fetchUserGiftCodesForSKU(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        l.Z.dispatch({
            type: 'GIFT_CODES_FETCH',
            skuId: e,
            subscriptionPlanId: t
        });
        try {
            let n = await i.tn.get({
                url: d.ANM.USER_GIFT_CODES,
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
            let a = await i.tn.post({
                url: d.ANM.USER_GIFT_CODE_CREATE,
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
                    giftCode: a.body
                }),
                a.body
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
            await i.tn.del({
                url: d.ANM.USER_GIFT_CODE_REVOKE(e),
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
        s.Z.openNativeAppModal(e, d.Etm.GIFT_CODE_BROWSER);
    },
    ...n(775644).Z
};
