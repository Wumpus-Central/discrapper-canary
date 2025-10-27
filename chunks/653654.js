n.d(t, { y: () => s });
var r = n(544891),
    l = n(343817),
    i = n(411700),
    a = n(981631);
let s = async (e) => {
    try {
        return (
            await r.tn.get({
                url: a.ANM.COLLECTIBLES_SEARCH,
                query: e,
                rejectWithError: !0,
            })
        ).body;
    } catch (t) {
        let e = new l.Hx(t);
        throw ((0, i.G)(e), e);
    }
};
