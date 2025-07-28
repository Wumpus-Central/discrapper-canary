(n.d(t, { I: () => s }), n(388685));
var r = n(97519),
    i = n(731965),
    l = n(699553);
let a = new Map(),
    s = (0, r.U)((e, t) => ({
        topGames: new Map(),
        tryFetchTopGames: async (n) => {
            let r = t().topGames,
                s = a.get(n);
            if (null != s && Date.now() - s < 3600000) {
                var o;
                return null != (o = r.get(n)) ? o : {};
            }
            let c = await (0, l.MA)(n),
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
