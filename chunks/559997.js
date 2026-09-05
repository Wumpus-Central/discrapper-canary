a.d(s, { CrossDocumentDataMatch: () => r });
var c = a(252422),
    d = a(773362),
    e = a(501447),
    i = a(425052),
    n = a(363015),
    u = a(136966),
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
