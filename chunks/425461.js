a.d(s, { CrossDocumentDataMatch: () => r });
var c = a(287822),
    d = a(748922),
    e = a(898159),
    i = a(211396),
    n = a(296767),
    u = a(86843),
    h = ({ onFinish: t }) => {
        let [s, a] = (0, d.u)(() => (0, u.w)());
        return (
            (0, c._)(() => {
                a.load();
            }, [a]),
            (0, d.c)({ status: "finished" === s.status ? "finished" : "loading", onFinish: t }),
            (0, c.v)(i.t, { fullScreen: !0 })
        );
    },
    r = ({ onFinish: t }) => (0, c.v)(e.t, { children: (0, c.v)(h, { onFinish: t }) });
(0, n.t)(r, "incode-cross-document-data-match");
