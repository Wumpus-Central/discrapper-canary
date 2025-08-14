n.d(t, {
    T: () => o,
    k: () => a,
});
var r = n(570140),
    i = n(155414);
async function o(e, t) {
    r.Z.dispatch({
        type: "CREATOR_MONETIZATION_PRICE_TIERS_FETCH",
        guildId: e,
        priceTierType: t,
    });
    try {
        let n = await i.X(e, t);
        r.Z.dispatch({
            type: "CREATOR_MONETIZATION_PRICE_TIERS_FETCH_SUCCESS",
            guildId: e,
            priceTierType: t,
            priceTiers: n,
        });
    } catch (n) {
        r.Z.dispatch({
            type: "CREATOR_MONETIZATION_PRICE_TIERS_FETCH_FAILURE",
            guildId: e,
            priceTierType: t,
        });
    }
}
function a(e) {
    r.Z.dispatch({
        type: "CREATOR_MONETIZATION_SET_HAS_SEEN_ONBOARDING_FOR_GUILD",
        guildId: e,
    });
}
