i.d(s, { CustomWatchlist: () => v });
var c = i(529058),
    a = i(287822),
    e = i(748922),
    n = i(898159),
    u = i(898369),
    o = i(430671),
    d = i(296767),
    h = i(317660),
    l = i(751667),
    r = ({ onFinish: t }) => {
        let { t: s } = (0, c.n)(),
            [i, n] = (0, e.u)(() => (0, l._)());
        return ((0, a._)(() => {
            n.load();
        }, [n]),
        (0, e.c)({ status: "finished" === i.status ? "finished" : "loading", onFinish: t }),
        "success" === i.status)
            ? (0, a.v)(h.t, { variant: "success", icon: (0, a.v)(o.t, { size: 64 }), title: s("customWatchlist.done") })
            : (0, a.v)(h.t, {
                  variant: "loading",
                  icon: (0, a.v)(u.t, { size: 64 }),
                  title: s("watchList.processing"),
                  subtitle: s("customWatchlist.wontTake"),
              });
    },
    v = ({ onFinish: t }) => (0, a.v)(n.t, { children: (0, a.v)(r, { onFinish: t }) });
(0, d.t)(v, "incode-custom-watchlist");
