let r;
n.d(t, { Z: () => m });
var i = n(544891),
    a = n(570140),
    l = n(728345),
    o = n(812206),
    s = n(625128),
    c = n(335131),
    u = n(669079),
    d = n(981631),
    p = n(474936);
r = n(775644).Z;
let m = (function (e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = r);
            });
    }
    return e;
})(
    {
        resolveGiftCode: async function (e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
            a.Z.dispatch({
                type: 'GIFT_CODE_RESOLVE',
                code: e
            });
            try {
                let r = await (0, u.bT)(e, t, n);
                if (null != r.application_id && r.application_id !== p.CL) {
                    let e = o.Z.getApplication(r.application_id);
                    if (null == e)
                        try {
                            await l.ZP.fetchApplication(r.application_id);
                        } catch (e) {}
                }
                return (
                    r.application_id === d.XAJ && (await (0, c.jr)(r.sku_id)),
                    a.Z.dispatch({
                        type: 'GIFT_CODE_RESOLVE_SUCCESS',
                        giftCode: r
                    }),
                    { giftCode: r }
                );
            } catch (t) {
                throw (
                    (a.Z.dispatch({
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
            a.Z.dispatch({
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
                a.Z.dispatch({
                    type: 'GIFT_CODES_FETCH_SUCCESS',
                    giftCodes: n.body,
                    skuId: e,
                    subscriptionPlanId: t
                });
            } catch (n) {
                a.Z.dispatch({
                    type: 'GIFT_CODES_FETCH_FAILURE',
                    skuId: e,
                    subscriptionPlanId: t
                });
            }
        },
        async createGiftCode(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
            a.Z.dispatch({
                type: 'GIFT_CODE_CREATE_START',
                skuId: e,
                subscriptionPlanId: t
            });
            try {
                let r = await i.tn.post({
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
                    a.Z.dispatch({
                        type: 'GIFT_CODE_CREATE_SUCCESS',
                        giftCode: r.body
                    }),
                    r.body
                );
            } catch (n) {
                a.Z.dispatch({
                    type: 'GIFT_CODE_CREATE_FAILURE',
                    skuId: e,
                    subscriptionPlanId: t
                });
            }
        },
        async revokeGiftCode(e) {
            a.Z.dispatch({
                type: 'GIFT_CODE_REVOKE',
                code: e
            });
            try {
                await i.tn.del({
                    url: d.ANM.USER_GIFT_CODE_REVOKE(e),
                    oldFormErrors: !0,
                    rejectWithError: !0
                }),
                    a.Z.dispatch({
                        type: 'GIFT_CODE_REVOKE_SUCCESS',
                        code: e
                    });
            } catch (t) {
                a.Z.dispatch({
                    type: 'GIFT_CODE_REVOKE_FAILURE',
                    code: e
                });
            }
        },
        openNativeGiftCodeModal(e) {
            s.Z.openNativeAppModal(e, d.Etm.GIFT_CODE_BROWSER);
        }
    },
    r
);
