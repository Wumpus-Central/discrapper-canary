r.d(t, { y: () => o });
var n = r(544891),
    l = r(343817),
    i = r(411700),
    a = r(981631);
let o = async (e) => {
    try {
        return (
            await n.tn.get({
                url: a.ANM.COLLECTIBLES_SEARCH,
                query: e,
                rejectWithError: !0
            })
        ).body;
    } catch (t) {
        let e = new l.Hx(t);
        throw ((0, i.G)(e), e);
    }
};
