e.d(n, {
    T: function () {
        return l;
    }
});
var i = e(570140),
    r = e(155414);
async function l(t, n) {
    i.Z.dispatch({
        type: 'CREATOR_MONETIZATION_PRICE_TIERS_FETCH',
        guildId: t,
        priceTierType: n
    });
    try {
        let e = await r.X(t, n);
        i.Z.dispatch({
            type: 'CREATOR_MONETIZATION_PRICE_TIERS_FETCH_SUCCESS',
            guildId: t,
            priceTierType: n,
            priceTiers: e
        });
    } catch (e) {
        i.Z.dispatch({
            type: 'CREATOR_MONETIZATION_PRICE_TIERS_FETCH_FAILURE',
            guildId: t,
            priceTierType: n
        });
    }
}
