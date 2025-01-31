n.d(t, { T: () => r });
var i = n(570140),
    l = n(155414);
async function r(e, t) {
    i.Z.dispatch({
        type: 'CREATOR_MONETIZATION_PRICE_TIERS_FETCH',
        guildId: e,
        priceTierType: t
    });
    try {
        let n = await l.X(e, t);
        i.Z.dispatch({
            type: 'CREATOR_MONETIZATION_PRICE_TIERS_FETCH_SUCCESS',
            guildId: e,
            priceTierType: t,
            priceTiers: n
        });
    } catch (n) {
        i.Z.dispatch({
            type: 'CREATOR_MONETIZATION_PRICE_TIERS_FETCH_FAILURE',
            guildId: e,
            priceTierType: t
        });
    }
}
