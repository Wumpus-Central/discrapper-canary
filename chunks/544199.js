n.d(t, {
    F: () => a,
    G: () => s,
});
var r = n(73153),
    i = n(881268);
async function a(e, t) {
    r.h.dispatch({
        type: "CREATOR_MONETIZATION_PRICE_TIERS_FETCH",
        guildId: e,
        priceTierType: t,
    });
    try {
        let n = await i.X(e, t);
        r.h.dispatch({
            type: "CREATOR_MONETIZATION_PRICE_TIERS_FETCH_SUCCESS",
            guildId: e,
            priceTierType: t,
            priceTiers: n,
        });
    } catch (n) {
        r.h.dispatch({
            type: "CREATOR_MONETIZATION_PRICE_TIERS_FETCH_FAILURE",
            guildId: e,
            priceTierType: t,
        });
    }
}

function s(e) {
    r.h.dispatch({
        type: "CREATOR_MONETIZATION_SET_HAS_SEEN_ONBOARDING_FOR_GUILD",
        guildId: e,
    });
}
