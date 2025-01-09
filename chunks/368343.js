n.d(t, {
    B: function () {
        return a;
    }
}),
    n(47120);
var i = n(15729),
    r = n(731965),
    l = n(520623);
let s = new Map(),
    a = (0, i.U)((e, t) => ({
        topGames: new Map(),
        tryFetchTopGames: async (n) => {
            let i = t().topGames,
                a = s.get(n);
            if (null != a && Date.now() - a < 3600000) {
                var o;
                return null !== (o = i.get(n)) && void 0 !== o ? o : {};
            }
            let c = await (0, l.M)(n),
                d = new Map(i);
            return (
                d.set(n, c),
                (0, r.j)(() => {
                    e({ topGames: d });
                }),
                s.set(n, Date.now()),
                c
            );
        }
    }));
