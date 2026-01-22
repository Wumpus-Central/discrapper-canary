n.d(t, {
    f: () => a,
}),
    n(896048);
var r = n(353640),
    i = n(121894),
    l = n(250527);
let s = new Map(),
    a = (0, r.v)((e, t) => ({
        topGames: new Map(),
        tryFetchTopGames: async (n) => {
            let r = t().topGames,
                a = s.get(n);
            if (null != a && Date.now() - a < 36e5) {
                var c;
                return null != (c = r.get(n)) ? c : {};
            }
            let o = await (0, l.U7)(n),
                d = new Map(r);
            return (
                d.set(n, o),
                (0, i.r)(() => {
                    e({
                        topGames: d,
                    });
                }),
                s.set(n, Date.now()),
                o
            );
        },
    }));
