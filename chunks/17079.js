n.d(e, {
    T: function () {
        return l;
    }
});
var i = n(570140),
    r = n(155414);
async function l(t, e) {
    i.Z.dispatch({
        type: 'CREATOR_MONETIZATION_PRICE_TIERS_FETCH',
        guildId: t,
        priceTierType: e
    });
    try {
        let n = await r.X(t, e);
        i.Z.dispatch({
            type: 'CREATOR_MONETIZATION_PRICE_TIERS_FETCH_SUCCESS',
            guildId: t,
            priceTierType: e,
            priceTiers: n
        });
    } catch (n) {
        i.Z.dispatch({
            type: 'CREATOR_MONETIZATION_PRICE_TIERS_FETCH_FAILURE',
            guildId: t,
            priceTierType: e
        });
    }
}
