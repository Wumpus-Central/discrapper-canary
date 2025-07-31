(r.d(t, {
    ZO: () => u,
    df: () => d,
    hF: () => p,
    j2: () => b,
    qD: () => h
}),
    r(415506));
var n = r(544891),
    a = r(570140),
    l = r(881052),
    i = r(710845),
    o = r(960048),
    s = r(981631);
let c = new i.Z('VirtualCurrencyActionCreators');
async function u() {
    a.Z.wait(() => {
        a.Z.dispatch({ type: 'VIRTUAL_CURRENCY_BALANCE_FETCH' });
    });
    try {
        let e = await n.tn.get({
                url: s.ANM.VIRTUAL_CURRENCY_USER_BALANCE,
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
async function d(e) {
    let { skuId: t, loadId: r, onRedeemStart: i, onRedeemSucceed: d, onRedeemFail: p, shouldRefetchBalance: b = !0 } = e;
    (a.Z.wait(() => {
        a.Z.dispatch({
            type: 'VIRTUAL_CURRENCY_REDEEM_START',
            skuId: t
        });
    }),
        null == i || i());
    try {
        let e = (
            await n.tn.post({
                url: s.ANM.VIRTUAL_CURRENCY_SKU_REDEEM(t),
                body: { checkout_session_id: r },
                rejectWithError: !1
            })
        ).body;
        if (null == e || !Array.isArray(e)) {
            let t = 'Could not read entitlements from Virtual Currency redemption response. Response: ',
                r = Error(t, e);
            throw (c.error(t, e), o.Z.captureException(r, { tags: { app_context: 'virtual_currency' } }), r);
        }
        return (
            a.Z.dispatch({
                type: 'VIRTUAL_CURRENCY_REDEEM_SUCCESS',
                skuId: t,
                entitlements: e
            }),
            b && u(),
            null == d || d(e),
            e
        );
    } catch (r) {
        let e = r instanceof l.HF ? r : new l.HF(r);
        (a.Z.dispatch({
            type: 'VIRTUAL_CURRENCY_REDEEM_FAIL',
            skuId: t,
            error: e
        }),
            b && u(),
            null == p || p(e));
    }
}
function p(e) {
    let { earnedOrbsQuantity: t, dedupeKey: r } = e;
    return a.Z.dispatch({
        type: 'VIRTUAL_CURRENCY_EARNED_ORBS_COACHMARK_OPEN',
        earnedOrbsQuantity: t,
        dedupeKey: r
    });
}
function b() {
    return a.Z.dispatch({ type: 'VIRTUAL_CURRENCY_EARNED_ORBS_COACHMARK_CLOSE' });
}
function h(e) {
    return a.Z.dispatch({
        type: 'VIRTUAL_CURRENCY_SET_BALANCE_PILL_OVERLAY',
        balancePillOverlay: e
    });
}
