t.r(e);
var i = t(768611),
    n = t(200503),
    r = t(628926),
    d = t(538553),
    s = t(918676),
    c = t(282804),
    u = ({ manager: a, onFinish: e }) => {
        let [t, r] = (0, n.u)(() => a ?? (0, c.createAntifraudManager)(), { manageLifecycle: !a });
        return (
            (0, i._)(() => {
                a || r.load();
            }, [r, a]),
            (0, n.c)({ status: "finished" === t.status ? "finished" : "loading", onFinish: e }),
            (0, i.v)(d.t, { fullScreen: !0 })
        );
    },
    h = ({ manager: a, onFinish: e }) => (0, i.v)(r.t, { children: (0, i.v)(u, { manager: a, onFinish: e }) });
((0, s.t)(h, "incode-antifraud"), t.d(e, {}, { Antifraud: h }));
