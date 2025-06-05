r.d(t, {
    ZO: () => o,
    df: () => u,
    hF: () => c,
    j2: () => s,
    qD: () => d
});
var n = r(544891),
    a = r(570140),
    l = r(881052),
    i = r(981631);
async function o() {
    a.Z.wait(() => {
        a.Z.dispatch({ type: 'VIRTUAL_CURRENCY_BALANCE_FETCH' });
    });
    try {
        let e = await n.tn.get({
                url: i.ANM.VIRTUAL_CURRENCY_USER_BALANCE,
                rejectWithError: !1
            }),
            t = e.body.balance;
        return (
            a.Z.dispatch({
                type: 'VIRTUAL_CURRENCY_BALANCE_FETCH_SUCCESS',
                balance: t
            }),
            e.body
        );
    } catch (t) {
        let e = t instanceof l.HF ? t : new l.HF(t);
        a.Z.dispatch({
            type: 'VIRTUAL_CURRENCY_BALANCE_FETCH_FAIL',
            error: e
        });
    }
}
async function u(e) {
    let { skuId: t, loadId: r, onRedeemStart: u, onRedeemSucceed: c, onRedeemFail: s, shouldRefetchBalance: d = !0 } = e;
    a.Z.wait(() => {
        a.Z.dispatch({
            type: 'VIRTUAL_CURRENCY_REDEEM_START',
            skuId: t
        });
    }),
        null == u || u();
    try {
        let e = (
            await n.tn.post({
                url: i.ANM.VIRTUAL_CURRENCY_SKU_REDEEM(t),
                body: { checkout_session_id: r },
                rejectWithError: !1
            })
        ).body;
        return (
            a.Z.dispatch({
                type: 'VIRTUAL_CURRENCY_REDEEM_SUCCESS',
                skuId: t,
                entitlements: e
            }),
            d && o(),
            null == c || c(e),
            e
        );
    } catch (r) {
        let e = r instanceof l.HF ? r : new l.HF(r);
        a.Z.dispatch({
            type: 'VIRTUAL_CURRENCY_REDEEM_FAIL',
            skuId: t,
            error: e
        }),
            d && o(),
            null == s || s(e);
    }
}
function c(e) {
    let { earnedOrbsQuantity: t, dedupeKey: r } = e;
    return a.Z.dispatch({
        type: 'VIRTUAL_CURRENCY_EARNED_ORBS_COACHMARK_OPEN',
        earnedOrbsQuantity: t,
        dedupeKey: r
    });
}
function s() {
    return a.Z.dispatch({ type: 'VIRTUAL_CURRENCY_EARNED_ORBS_COACHMARK_CLOSE' });
}
function d(e) {
    return a.Z.dispatch({
        type: 'VIRTUAL_CURRENCY_SET_BALANCE_PILL_OVERLAY',
        balancePillOverlay: e
    });
}
