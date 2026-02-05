n.d(t, { A: () => x });
var a = n(627968),
    s = n(64700),
    i = n(397927),
    l = n(198982),
    r = n(839214),
    o = n(98919),
    d = n(174768),
    c = n(137365),
    u = n(278274),
    m = n(652215);
let h = (0, r.D)(() => ({ isRecording: !1, isUploading: !1, isSuccess: !1, errorMessage: null }));
function x() {
    let e = h.useField("isRecording"),
        t = h.useField("isUploading"),
        n = h.useField("isSuccess"),
        r = h.useField("errorMessage"),
        x = s.useRef([]),
        p = s.useRef(""),
        g = s.useCallback(() => {
            let { results: e, query: t } = d.A.getProps();
            (x.current !== e || p.current !== t) && ((x.current = e), (p.current = t), (0, c._S)());
        }, []);
    s.useEffect(() => {
        if (e) return d.A.addChangeListener(g), () => d.A.removeChangeListener(g);
    }, [g, e]);
    let _ = s.useCallback(async () => {
        let { isUploading: e } = h.getState();
        if (!e)
            try {
                h.setState({ isRecording: !1, isUploading: !0, errorMessage: null, isSuccess: !1 }),
                    await (0, o.a)(m.Umv.WEB_APP),
                    h.setState({ isSuccess: !0, errorMessage: null });
            } catch (t) {
                let e = new l.LG(t);
                h.setState({ errorMessage: e.getAnyErrorMessage() });
            } finally {
                h.setState({ isUploading: !1 });
            }
    }, []);
    return (0, a.jsxs)(i.nVY, {
        label: "Debug Logs Session",
        description:
            "Click to emit debug logs as you search in the Quick Switcher. Includes your search term and all results. For each result, includes the record id, associated names, and frecency scores.",
        children: [
            (0, a.jsx)(i.po8, {
                messageType: i.YCn.INFO,
                children: "When you are done, please remember to upload the logs.",
            }),
            (0, a.jsxs)(i.ButtonGroup, {
                children: [
                    (0, a.jsx)(i.Button, {
                        variant: e ? "critical-primary" : "primary",
                        onClick: () => h.setState({ isRecording: !e }),
                        text: e ? "Stop Recording" : "Start Recording",
                    }),
                    (0, a.jsx)(u.q, {
                        isUploading: t,
                        isSuccess: n,
                        errorMessage: r,
                        onClick: _,
                        title: "Upload Session Logs",
                    }),
                ],
            }),
        ],
    });
}
