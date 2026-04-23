n.d(t, { F: () => a, G: () => s });
var i = n(73153),
    l = n(881268);
async function a(e, t) {
    i.h.dispatch({ type: "CREATOR_MONETIZATION_PRICE_TIERS_FETCH", guildId: e, priceTierType: t });
    try {
        let n = await l.X(e, t);
        i.h.dispatch({
            type: "CREATOR_MONETIZATION_PRICE_TIERS_FETCH_SUCCESS",
            guildId: e,
            priceTierType: t,
            priceTiers: n,
        });
    } catch (n) {
        i.h.dispatch({ type: "CREATOR_MONETIZATION_PRICE_TIERS_FETCH_FAILURE", guildId: e, priceTierType: t });
    }
}
function s(e) {
    i.h.dispatch({ type: "CREATOR_MONETIZATION_SET_HAS_SEEN_ONBOARDING_FOR_GUILD", guildId: e });
}
