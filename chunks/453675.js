a.d(t, { A: () => v });
var n = a(627968),
    l = a(64700),
    i = a(270003),
    s = a(512950),
    r = a(825484),
    o = a(821609),
    d = a(198982),
    c = a(839214),
    u = a(98919),
    m = a(174768),
    h = a(137365),
    p = a(278274),
    x = a(652215);
let g = (0, c.D)(() => ({ isRecording: !1, isUploading: !1, isSuccess: !1, errorMessage: null }));
function v() {
    let e = g.useField("isRecording"),
        t = g.useField("isUploading"),
        a = g.useField("isSuccess"),
        c = g.useField("errorMessage"),
        v = l.useRef([]),
        b = l.useRef(""),
        _ = l.useCallback(() => {
            let { results: e, query: t } = m.A.getProps();
            (v.current !== e || b.current !== t) && ((v.current = e), (b.current = t), (0, h._S)());
        }, []);
    l.useEffect(() => {
        if (e) return m.A.addChangeListener(_), () => m.A.removeChangeListener(_);
    }, [_, e]);
    let f = l.useCallback(async () => {
        let { isUploading: e } = g.getState();
        if (!e)
            try {
                g.setState({ isRecording: !1, isUploading: !0, errorMessage: null, isSuccess: !1 }),
                    await (0, u.a)(x.Umv.WEB_APP),
                    g.setState({ isSuccess: !0, errorMessage: null });
            } catch (t) {
                let e = new d.LG(t);
                g.setState({ errorMessage: e.getAnyErrorMessage() });
            } finally {
                g.setState({ isUploading: !1 });
            }
    }, []);
    return (0, n.jsxs)(i.n, {
        label: "Debug Logs Session",
        description:
            "Click to emit debug logs as you search in the Quick Switcher. Includes your search term and all results. For each result, includes the record id, associated names, and frecency scores.",
        children: [
            (0, n.jsx)(s.p, {
                messageType: s.Y.INFO,
                children: "When you are done, please remember to upload the logs.",
            }),
            (0, n.jsxs)(r.e, {
                children: [
                    (0, n.jsx)(o.$, {
                        variant: e ? "critical-primary" : "primary",
                        onClick: () => g.setState({ isRecording: !e }),
                        text: e ? "Stop Recording" : "Start Recording",
                    }),
                    (0, n.jsx)(p.q, {
                        isUploading: t,
                        isSuccess: a,
                        errorMessage: c,
                        onClick: f,
                        title: "Upload Session Logs",
                    }),
                ],
            }),
        ],
    });
}
