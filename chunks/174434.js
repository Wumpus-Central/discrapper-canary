i.r(s);
var a = i(783285),
    c = i(768611),
    e = i(200503),
    n = i(628926),
    u = i(242268),
    o = i(612346),
    h = i(918676),
    d = i(533903),
    l = i(776820),
    r = ({ onFinish: t }) => {
        let { t: s } = (0, a.n)(),
            [i, n] = (0, e.u)(() => (0, l.createCustomWatchlistManager)());
        return ((0, c._)(() => {
            n.load();
        }, [n]),
        (0, e.c)({ status: "finished" === i.status ? "finished" : "loading", onFinish: t }),
        "success" === i.status)
            ? (0, c.v)(d.t, { variant: "success", icon: (0, c.v)(o.t, { size: 64 }), title: s("customWatchlist.done") })
            : (0, c.v)(d.t, {
                  variant: "loading",
                  icon: (0, c.v)(u.t, { size: 64 }),
                  title: s("watchList.processing"),
                  subtitle: s("customWatchlist.wontTake"),
              });
    },
    v = ({ onFinish: t }) => (0, c.v)(n.t, { children: (0, c.v)(r, { onFinish: t }) });
((0, h.t)(v, "incode-custom-watchlist"), i.d(s, {}, { CustomWatchlist: v }));
