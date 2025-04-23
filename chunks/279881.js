n.d(t, { I: () => a }), n(388685);
var r = n(290486),
    i = n(731965),
    l = n(699553);
let s = new Map(),
    a = (0, r.U)((e, t) => ({
        topGames: new Map(),
        tryFetchTopGames: async (n) => {
            let r = t().topGames,
                a = s.get(n);
            if (null != a && Date.now() - a < 3600000) {
                var o;
                return null != (o = r.get(n)) ? o : {};
            }
            let c = await (0, l.MA)(n),
                u = new Map(r);
            return (
                u.set(n, c),
                (0, i.j)(() => {
                    e({ topGames: u });
                }),
                s.set(n, Date.now()),
                c
            );
        }
    }));
