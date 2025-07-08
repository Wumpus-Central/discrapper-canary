n.d(t, { y: () => a });
var r = n(544891),
    l = n(343817),
    o = n(411700),
    i = n(981631);
let a = async (e) => {
    try {
        return (
            await r.tn.get({
                url: i.ANM.COLLECTIBLES_SEARCH,
                query: e,
                rejectWithError: !0
            })
        ).body;
    } catch (t) {
        let e = new l.Hx(t);
        throw ((0, o.G)(e), e);
    }
};
