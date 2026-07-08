s.d(n, { Antifraud: () => c });
var t = s(248702),
    a = s(899656),
    d = s(458741),
    e = s(443781),
    h = s(868282),
    r = s(895173),
    u = ({ onFinish: i }) => {
        let [n, s] = (0, a.o)(() => (0, r.g)());
        return (
            (0, t._)(() => {
                s.load();
            }, [s]),
            (0, t._)(() => {
                "finished" === n.status && i?.();
            }, [n.status, i]),
            (0, t.v)(e.t, { fullScreen: !0 })
        );
    },
    c = ({ onFinish: i }) => (0, t.v)(d.t, { children: (0, t.v)(u, { onFinish: i }) });
(0, h.t)(c, "incode-antifraud");
