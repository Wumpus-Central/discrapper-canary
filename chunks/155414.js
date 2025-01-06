n.d(e, {
    X: function () {
        return o;
    }
});
var i = n(544891),
    r = n(881052),
    l = n(981631);
let o = async (t, e) => {
    try {
        return (
            await i.tn.get({
                url: l.ANM.PRICE_TIERS,
                query: {
                    price_tier_type: e,
                    guild_id: t
                },
                rejectWithError: !1
            })
        ).body;
    } catch (t) {
        throw new r.Hx(t);
    }
};
