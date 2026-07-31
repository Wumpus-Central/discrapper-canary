i.d(s, { Watchlist: () => p });
var a = i(323766),
    c = i(515322),
    e = i(356462),
    n = i(897347),
    h = i(902237),
    d = i(626091),
    u = i(584627),
    l = i(794520),
    o = i(730667),
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
