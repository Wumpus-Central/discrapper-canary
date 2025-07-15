r.d(t, { y: () => a });
var n = r(544891),
    l = r(343817),
    i = r(411700),
    o = r(981631);
let a = async (e) => {
    try {
        return (
            await n.tn.get({
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
