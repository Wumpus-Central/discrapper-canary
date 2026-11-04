E.d(_, { F: () => e, G: () => i });
var c = E(73153),
    r = E(620632),
    R = E(627784),
    T = E(652215);
async function e(t, _) {
    c.h.dispatch({ type: "CREATOR_MONETIZATION_PRICE_TIERS_FETCH", guildId: t, priceTierType: _ });
    try {
        let E = await (async function (t, _) {
            try {
                return (
                    await r.Bo.get({
                        url: T.Rsh.PRICE_TIERS,
                        query: { price_tier_type: _, guild_id: t },
                        rejectWithError: !1,
                    })
                ).body;
            } catch (t) {
                throw new R.LG(t);
            }
        })(t, _);
        c.h.dispatch({
            type: "CREATOR_MONETIZATION_PRICE_TIERS_FETCH_SUCCESS",
            guildId: t,
            priceTierType: _,
            priceTiers: E,
        });
    } catch (E) {
        c.h.dispatch({ type: "CREATOR_MONETIZATION_PRICE_TIERS_FETCH_FAILURE", guildId: t, priceTierType: _ });
    }
}
function i(t) {
    c.h.dispatch({ type: "CREATOR_MONETIZATION_SET_HAS_SEEN_ONBOARDING_FOR_GUILD", guildId: t });
}
