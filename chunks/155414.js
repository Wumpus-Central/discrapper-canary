n.d(t, { X: () => s });
var i = n(544891),
    l = n(881052),
    r = n(981631);
let s = async (e, t) => {
    try {
        return (
            await i.tn.get({
                url: r.ANM.PRICE_TIERS,
                query: {
                    price_tier_type: t,
                    guild_id: e
                },
                rejectWithError: !1
            })
        ).body;
    } catch (e) {
        throw new l.Hx(e);
    }
};
