n.d(t, { X: () => a });
var r = n(544891),
    i = n(881052),
    l = n(981631);
let a = async (e, t) => {
    try {
        return (
            await r.tn.get({
                url: l.ANM.PRICE_TIERS,
                query: {
                    price_tier_type: t,
                    guild_id: e
                },
                rejectWithError: !1
            })
        ).body;
    } catch (e) {
        throw new i.Hx(e);
    }
};
