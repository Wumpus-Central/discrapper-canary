i.d(s, { CustomWatchlist: () => v });
var c = i(689097),
    a = i(382591),
    e = i(52891),
    n = i(55586),
    u = i(931320),
    o = i(701798),
    d = i(230104),
    h = i(799035),
    l = i(684853),
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
