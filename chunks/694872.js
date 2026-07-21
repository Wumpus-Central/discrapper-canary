i.d(e, { Antifraud: () => h });
var t = i(158547),
    d = i(635687),
    n = i(327022),
    s = i(673801),
    c = i(582052),
    r = i(995605),
    u = ({ manager: a, onFinish: e }) => {
        let [i, n] = (0, d.u)(() => a ?? (0, r.g)(), { manageLifecycle: !a });
        return (
            (0, t._)(() => {
                a || n.load();
            }, [n, a]),
            (0, d.c)({ status: "finished" === i.status ? "finished" : "loading", onFinish: e }),
            (0, t.v)(s.t, { fullScreen: !0 })
        );
    },
    h = ({ manager: a, onFinish: e }) => (0, t.v)(n.t, { children: (0, t.v)(u, { manager: a, onFinish: e }) });
(0, c.t)(h, "incode-antifraud");
