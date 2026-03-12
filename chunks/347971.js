n.d(t, { A: () => u });
var a = n(627968),
    i = n(64700),
    s = n(158954),
    l = n(397927),
    r = n(839214),
    o = n(849823),
    d = n(840065);
let c = (0, r.D)(() => ({ urlString: "", error: null }));
function u() {
    let e = c.useField("error"),
        t = i.useCallback(() => {
            let e = c.getField("urlString");
            if (null == e || "" === e) return void c.setState({ error: "URL is required" });
            let t = (0, o.default)({ path: e });
            ((0, o.trackParseSettingsUrl)(t, "devtools"), null == t.target)
                ? c.setState({ error: "String did not match expected format" })
                : (0, d.openUserSettings)(t.target, { path: t.path });
        }, []);
    return (0, a.jsxs)(s.nVY, {
        label: "Settings Deep Link Tool",
        children: [
            (0, a.jsx)(l.ksK, {
                label: "URL",
                placeholder: "e.g. /settings/appearance",
                onChange: (e) => c.setState({ urlString: e, error: null }),
            }),
            (0, a.jsx)(s.$nd, { variant: "primary", onClick: t, text: "Open User Settings for URL" }),
            null != e && (0, a.jsx)(s.EYj, { variant: "text-sm/normal", color: "text-feedback-critical", children: e }),
        ],
    });
}
