a.d(t, { A: () => _ });
var n = a(627968),
    l = a(64700),
    i = a(270003),
    s = a(825484),
    r = a(821609),
    o = a(834730),
    d = a(783878),
    c = a(292666),
    u = a(839214),
    m = a(718446),
    h = a(858897),
    p = a(957565),
    x = a(652215),
    g = a(355097);
let v = (0, u.D)(() => ({ urlString: "", error: null })),
    b = Object.entries(g.od).map((e) => {
        let [t, a] = e;
        return { id: t, label: a, value: t };
    });
function _() {
    let [e, t] = l.useState(),
        a = v.useField("urlString"),
        u = v.useField("error"),
        _ = l.useCallback(() => {
            let e = v.getField("urlString");
            if (null == e || "" === e) return void v.setState({ error: "URL is required" });
            let t = (0, m.parseSettingsUrl)({ path: e });
            ((0, m.trackParseSettingsUrl)(t, "devtools"), null == t.target)
                ? v.setState({ error: "String did not match expected format" })
                : (0, h.openUserSettings)(t.target, { path: t.path });
        }, []);
    return (0, n.jsxs)(i.n, {
        label: "Settings Deep Link Tool",
        children: [
            (0, n.jsx)(d.Z, {
                label: "[optional] Choose a path",
                clearable: !0,
                value: e,
                placeholder: "Select a settings path",
                options: b,
                selectionMode: "single",
                onSelectionChange: (e) => {
                    if ((t(e), null != e)) {
                        let [t, a] = g.od[e].split("/");
                        v.setState({ urlString: x.BVt.SETTINGS(t, a), error: null });
                    }
                },
                fullWidth: !0,
            }),
            (0, n.jsx)(c.k, {
                label: "URL",
                placeholder: "e.g. /settings/appearance",
                value: a,
                onChange: (e) => v.setState({ urlString: e, error: null }),
            }),
            (0, n.jsxs)(s.e, {
                children: [
                    (0, n.jsx)(r.$, {
                        variant: "primary",
                        onClick: _,
                        text: "Open User Settings for URL",
                        disabled: "" === a,
                    }),
                    (0, n.jsx)(r.$, {
                        variant: "secondary",
                        onClick: () => (0, p.C)(`${window.location.origin}${a}`),
                        disabled: "" === a,
                        text: "Copy URL",
                    }),
                ],
            }),
            null != u && (0, n.jsx)(o.E, { variant: "text-sm/normal", color: "text-feedback-critical", children: u }),
        ],
    });
}
