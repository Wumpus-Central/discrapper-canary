n.d(t, { I: () => a }), n(388685);
var r = n(290486),
    i = n(731965),
    s = n(699553);
let l = new Map(),
    a = (0, r.U)((e, t) => ({
        topGames: new Map(),
        tryFetchTopGames: async (n) => {
            let r = t().topGames,
                a = l.get(n);
            if (null != a && Date.now() - a < 3600000) {
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
                l.set(n, Date.now()),
                c
            );
        }
    }));
