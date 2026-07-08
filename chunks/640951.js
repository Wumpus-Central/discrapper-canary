i.d(s, { Watchlist: () => p });
var c = i(31144),
    e = i(248702),
    a = i(899656),
    n = i(458741),
    u = i(517e3),
    h = i(886567),
    o = i(868282),
    l = i(352715),
    r = i(915438),
    d = ({ onFinish: t }) => {
        let { t: s } = (0, c.n)(),
            [i, n] = (0, a.o)(() => (0, r.L)()),
            o = (0, e.l)(null);
        return (
            (0, e._)(() => {
                n.load();
            }, [n]),
            (0, e._)(() => {
                "finished" === i.status && t?.();
            }, [i.status, t]),
            (0, e._)(() => {
                "success" === i.status && o.current?.focus();
            }, [i.status]),
            "success" === i.status
                ? (0, e.v)(l.t, {
                      variant: "success",
                      icon: (0, e.v)(h.t, { size: 64 }),
                      title: s("watchList.complete"),
                      titleRef: o,
                  })
                : (0, e.v)(l.t, {
                      variant: "loading",
                      icon: (0, e.v)(u.t, { size: 64 }),
                      title: s("watchList.processing"),
                      subtitle: s("watchList.wontTake"),
                  })
        );
    },
    p = ({ onFinish: t }) => (0, e.v)(n.t, { children: (0, e.v)(d, { onFinish: t }) });
(0, o.t)(p, "incode-watchlist");
