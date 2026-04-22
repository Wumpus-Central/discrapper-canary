n.d(t, { f: () => a });
var i = n(353640),
    l = n(121894),
    s = n(250527);
let r = new Map(),
    a = (0, i.v)((e, t) => ({
        topGames: new Map(),
        tryFetchTopGames: async (n) => {
            let i = t().topGames,
                a = r.get(n);
            if (null != a && Date.now() - a < 36e5) return i.get(n) ?? {};
            let o = await (0, s.U7)(n),
                d = new Map(i);
            return (
                d.set(n, o),
                (0, l.r)(() => {
                    e({ topGames: d });
                }),
                r.set(n, Date.now()),
                o
            );
        },
    }));
