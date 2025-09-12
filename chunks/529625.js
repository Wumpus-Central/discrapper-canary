n.d(t, { Z: () => x });
var a = n(951288),
    r = n(647438),
    l = n(481060),
    i = n(881052),
    s = n(972959),
    o = n(729345),
    c = n(823385),
    d = n(620481),
    u = n(608934),
    m = n(981631),
    h = n(530146);
let p = (0, s.H)(() => ({
    isRecording: !1,
    isUploading: !1,
    isSuccess: !1,
    errorMessage: null,
}));
function x() {
    let e = p.useField("isRecording"),
        t = p.useField("isUploading"),
        n = p.useField("isSuccess"),
        s = p.useField("errorMessage"),
        x = r.useRef([]),
        b = r.useRef(""),
        f = r.useCallback(() => {
            let { results: e, query: t } = c.Z.getProps();
            (x.current !== e || b.current !== t) && ((x.current = e), (b.current = t), (0, d.OC)());
        }, []);
    r.useEffect(() => {
        if (e) return c.Z.addChangeListener(f), () => c.Z.removeChangeListener(f);
    }, [f, e]);
    let g = r.useCallback(async () => {
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
                let e = new i.Hx(t);
                p.setState({ errorMessage: e.getAnyErrorMessage() });
            } finally {
                p.setState({ isUploading: !1 });
            }
    }, []);
    return (0, a.jsxs)(l.hjN, {
        title: "Debug Logs Session",
        tag: l.RB0.H3,
        className: h.panelGroup,
        children: [
            (0, a.jsx)(l.R94, {
                type: l.geA.DESCRIPTION,
                className: h.subtitle,
                children:
                    "Click to emit debug logs as you search in the Quick Switcher. Includes your search term and all results. For each result, includes the record id, associated names, and frecency scores.",
            }),
            (0, a.jsx)(l.R94, {
                type: l.geA.DESCRIPTION,
                className: h.subtitle,
                children: "When you are done, please remember to upload the logs.",
            }),
            (0, a.jsxs)(l.hE2, {
                children: [
                    (0, a.jsx)(l.zxk, {
                        variant: e ? "critical-primary" : "primary",
                        onClick: () => p.setState({ isRecording: !e }),
                        text: e ? "Stop Recording" : "Start Recording",
                    }),
                    (0, a.jsx)(u.a, {
                        isUploading: t,
                        isSuccess: n,
                        errorMessage: s,
                        onClick: g,
                        title: "Upload Session Logs",
                    }),
                ],
            }),
        ],
    });
}
