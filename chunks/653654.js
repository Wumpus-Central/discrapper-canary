r.d(t, { y: () => o });
var n = r(544891),
    l = r(343817),
    a = r(411700),
    i = r(981631);
let o = async (e) => {
    try {
        return (
            await n.tn.get({
                url: i.ANM.COLLECTIBLES_SEARCH,
                query: e,
                rejectWithError: !0,
            })
        ).body;
    } catch (t) {
        let e = new l.Hx(t);
        throw ((0, a.G)(e), e);
    }
};
