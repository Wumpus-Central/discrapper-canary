e.d(n, {
    X: function () {
        return u;
    }
});
var i = e(544891),
    r = e(881052),
    l = e(981631);
let u = async (t, n) => {
    try {
        return (
            await i.tn.get({
                url: l.ANM.PRICE_TIERS,
                query: {
                    price_tier_type: n,
                    guild_id: t
                },
                rejectWithError: !1
            })
        ).body;
    } catch (t) {
        throw new r.Hx(t);
    }
};
