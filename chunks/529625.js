n.d(t, { Z: () => h });
var a = n(54381),
    l = n(473749),
    i = n(481060),
    r = n(881052),
    s = n(972959),
    o = n(729345),
    c = n(823385),
    d = n(620481),
    u = n(608934),
    m = n(981631);
let p = (0, s.H)(() => ({
    isRecording: !1,
    isUploading: !1,
    isSuccess: !1,
    errorMessage: null,
}));
function h() {
    let e = p.useField("isRecording"),
        t = p.useField("isUploading"),
        n = p.useField("isSuccess"),
        s = p.useField("errorMessage"),
        h = l.useRef([]),
        x = l.useRef(""),
        g = l.useCallback(() => {
            let { results: e, query: t } = c.Z.getProps();
            (h.current !== e || x.current !== t) && ((h.current = e), (x.current = t), (0, d.OC)());
        }, []);
    l.useEffect(() => {
        if (e) return c.Z.addChangeListener(g), () => c.Z.removeChangeListener(g);
    }, [g, e]);
    let f = l.useCallback(async () => {
        let { isUploading: e } = p.getState();
        if (!e)
            try {
                p.setState({
                    isRecording: !1,
                    isUploading: !0,
                    errorMessage: null,
                    isSuccess: !1,
                }),
                    await (0, o.E)(m.GU0.WEB_APP),
                    p.setState({
                        isSuccess: !0,
                        errorMessage: null,
                    });
            } catch (t) {
                let e = new r.Hx(t);
                p.setState({ errorMessage: e.getAnyErrorMessage() });
            } finally {
                p.setState({ isUploading: !1 });
            }
    }, []);
    return (0, a.jsxs)(i.C3N, {
        label: "Debug Logs Session",
        description:
            "Click to emit debug logs as you search in the Quick Switcher. Includes your search term and all results. For each result, includes the record id, associated names, and frecency scores.",
        children: [
            (0, a.jsx)(i.Wn, {
                messageType: i.QYI.INFO,
                children: "When you are done, please remember to upload the logs.",
            }),
            (0, a.jsxs)(i.ButtonGroup, {
                children: [
                    (0, a.jsx)(i.Button, {
                        variant: e ? "critical-primary" : "primary",
                        onClick: () => p.setState({ isRecording: !e }),
                        text: e ? "Stop Recording" : "Start Recording",
                    }),
                    (0, a.jsx)(u.a, {
                        isUploading: t,
                        isSuccess: n,
                        errorMessage: s,
                        onClick: f,
                        title: "Upload Session Logs",
                    }),
                ],
            }),
        ],
    });
}
