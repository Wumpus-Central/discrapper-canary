i.d(s, { CustomWatchlist: () => v });
var c = i(526245),
    a = i(158547),
    e = i(635687),
    n = i(327022),
    u = i(412012),
    o = i(537674),
    d = i(582052),
    h = i(387391),
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
