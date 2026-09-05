i.d(e, { Antifraud: () => h });
var t = i(252422),
    d = i(773362),
    n = i(501447),
    s = i(425052),
    c = i(363015),
    r = i(588080),
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
