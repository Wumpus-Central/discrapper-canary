i.d(s, { CustomWatchlist: () => v });
var c = i(31144),
    e = i(248702),
    n = i(899656),
    a = i(458741),
    u = i(517e3),
    o = i(886567),
    h = i(868282),
    l = i(352715),
    r = i(442266),
    d = ({ onFinish: t }) => {
        let { t: s } = (0, c.n)(),
            [i, a] = (0, n.o)(() => (0, r._)()),
            h = (0, e.l)(null);
        return (
            (0, e._)(() => {
                a.load();
            }, [a]),
            (0, e._)(() => {
                "finished" === i.status && t?.();
            }, [i.status, t]),
            (0, e._)(() => {
                "success" === i.status && h.current?.focus();
            }, [i.status]),
            "success" === i.status
                ? (0, e.v)(l.t, {
                      variant: "success",
                      icon: (0, e.v)(o.t, { size: 64 }),
                      title: s("customWatchlist.done"),
                      titleRef: h,
                  })
                : (0, e.v)(l.t, {
                      variant: "loading",
                      icon: (0, e.v)(u.t, { size: 64 }),
                      title: s("watchList.processing"),
                      subtitle: s("customWatchlist.wontTake"),
                  })
        );
    },
    v = ({ onFinish: t }) => (0, e.v)(a.t, { children: (0, e.v)(d, { onFinish: t }) });
(0, h.t)(v, "incode-custom-watchlist");
