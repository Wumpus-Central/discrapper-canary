i.d(s, { Watchlist: () => p });
var a = i(529058),
    c = i(287822),
    e = i(748922),
    n = i(898159),
    h = i(898369),
    d = i(430671),
    u = i(296767),
    l = i(317660),
    o = i(435628),
    r = ({ onFinish: t }) => {
        let { t: s } = (0, a.n)(),
            [i, n] = (0, e.u)(() => (0, o.L)());
        return ((0, c._)(() => {
            n.load();
        }, [n]),
        (0, e.c)({ status: "finished" === i.status ? "finished" : "loading", onFinish: t }),
        "success" === i.status)
            ? (0, c.v)(l.t, { variant: "success", icon: (0, c.v)(d.t, { size: 64 }), title: s("watchList.complete") })
            : (0, c.v)(l.t, {
                  variant: "loading",
                  icon: (0, c.v)(h.t, { size: 64 }),
                  title: s("watchList.processing"),
                  subtitle: s("watchList.wontTake"),
              });
    },
    p = ({ onFinish: t }) => (0, c.v)(n.t, { children: (0, c.v)(r, { onFinish: t }) });
(0, u.t)(p, "incode-watchlist");
