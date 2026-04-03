n.d(t, { A: () => p });
var a = n(627968),
    i = n(64700),
    s = n(158954),
    l = n(397927),
    r = n(839214),
    o = n(718446),
    d = n(858897),
    c = n(957565),
    u = n(652215),
    m = n(355097);
let h = (0, r.D)(() => ({ urlString: "", error: null })),
    x = Object.entries(m.od).map((e) => {
        let [t, n] = e;
        return { id: t, label: n, value: t };
    });
function p() {
    let [e, t] = i.useState(),
        n = h.useField("urlString"),
        r = h.useField("error"),
        p = i.useCallback(() => {
            let e = h.getField("urlString");
            if (null == e || "" === e) return void h.setState({ error: "URL is required" });
            let t = (0, o.parseSettingsUrl)({ path: e });
            ((0, o.trackParseSettingsUrl)(t, "devtools"), null == t.target)
                ? h.setState({ error: "String did not match expected format" })
                : (0, d.openUserSettings)(t.target, { path: t.path });
        }, []);
    return (0, a.jsxs)(s.nVY, {
        label: "Settings Deep Link Tool",
        children: [
            (0, a.jsx)(l.ZiE, {
                label: "[optional] Choose a path",
                clearable: !0,
                value: e,
                placeholder: "Select a settings path",
                options: x,
                selectionMode: "single",
                onSelectionChange: (e) => {
                    if ((t(e), null != e)) {
                        let [t, n] = m.od[e].split("/");
                        h.setState({ urlString: u.BVt.SETTINGS(t, n), error: null });
                    }
                },
                fullWidth: !0,
            }),
            (0, a.jsx)(l.ksK, {
                label: "URL",
                placeholder: "e.g. /settings/appearance",
                value: n,
                onChange: (e) => h.setState({ urlString: e, error: null }),
            }),
            (0, a.jsxs)(s.e2v, {
                children: [
                    (0, a.jsx)(s.$nd, {
                        variant: "primary",
                        onClick: p,
                        text: "Open User Settings for URL",
                        disabled: "" === n,
                    }),
                    (0, a.jsx)(s.$nd, {
                        variant: "secondary",
                        onClick: () => (0, c.C)(`${window.location.origin}${n}`),
                        disabled: "" === n,
                        text: "Copy URL",
                    }),
                ],
            }),
            null != r && (0, a.jsx)(s.EYj, { variant: "text-sm/normal", color: "text-feedback-critical", children: r }),
        ],
    });
}
