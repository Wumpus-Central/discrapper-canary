n.d(t, {
    A: () => h,
});
var a = n(627968),
    l = n(64700),
    i = n(397927),
    r = n(198982),
    s = n(839214),
    o = n(98919),
    c = n(174768),
    d = n(137365),
    u = n(278274),
    m = n(652215);
let p = (0, s.D)(() => ({
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
        f = l.useRef(""),
        x = l.useCallback(() => {
            let { results: e, query: t } = c.A.getProps();
            (h.current !== e || f.current !== t) && ((h.current = e), (f.current = t), (0, d._S)());
        }, []);
    l.useEffect(() => {
        if (e) return c.A.addChangeListener(x), () => c.A.removeChangeListener(x);
    }, [x, e]);
    let b = l.useCallback(async () => {
        let { isUploading: e } = p.getState();
        if (!e)
            try {
                p.setState({
                    isRecording: !1,
                    isUploading: !0,
                    errorMessage: null,
                    isSuccess: !1,
                }),
                    await (0, o.a)(m.Umv.WEB_APP),
                    p.setState({
                        isSuccess: !0,
                        errorMessage: null,
                    });
            } catch (t) {
                let e = new r.LG(t);
                p.setState({
                    errorMessage: e.getAnyErrorMessage(),
                });
            } finally {
                p.setState({
                    isUploading: !1,
                });
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
                        onClick: () =>
                            p.setState({
                                isRecording: !e,
                            }),
                        text: e ? "Stop Recording" : "Start Recording",
                    }),
                    (0, a.jsx)(u.q, {
                        isUploading: t,
                        isSuccess: n,
                        errorMessage: s,
                        onClick: b,
                        title: "Upload Session Logs",
                    }),
                ],
            }),
        ],
    });
}
