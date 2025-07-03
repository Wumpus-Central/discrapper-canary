n.d(t, { y: () => a });
var r = n(544891),
    l = n(343817),
    i = n(411700),
    o = n(981631);
let a = async (e) => {
    try {
        return (
            await r.tn.get({
                url: o.ANM.COLLECTIBLES_SEARCH,
                query: e,
                rejectWithError: !0
            })
        ).body;
    } catch (t) {
        let e = new l.Hx(t);
        throw ((0, i.G)(e), e);
    }
};
