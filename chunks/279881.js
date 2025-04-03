n.d(t, { I: () => l }), n(47120);
var r = n(230383),
    i = n(731965),
    s = n(699553);
let a = new Map(),
    l = (0, r.U)((e, t) => ({
        topGames: new Map(),
        tryFetchTopGames: async (n) => {
            let r = t().topGames,
                l = a.get(n);
            if (null != l && Date.now() - l < 3600000) {
                var o;
                return null != (o = r.get(n)) ? o : {};
            }
            let c = await (0, s.MA)(n),
                d = new Map(r);
            return (
                d.set(n, c),
                (0, i.j)(() => {
                    e({ topGames: d });
                }),
                a.set(n, Date.now()),
                c
            );
        }
    }));
