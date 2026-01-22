n.d(t, { A: () => u });
var a = n(627968),
    l = n(64700),
    i = n(158954),
    r = n(397927),
    s = n(839214),
    o = n(849823),
    c = n(840065);
let d = (0, s.D)(() => ({
    urlString: "",
    error: null,
}));
function u() {
    let e = d.useField("error"),
        t = l.useCallback(() => {
            let e = d.getField("urlString");
            if (null == e || "" === e) return void d.setState({ error: "URL is required" });
            let t = (0, o.default)(e);
            null == t
                ? d.setState({ error: "String did not match expected format" })
                : (0, c.openUserSettingsFromParsedUrl)({
                      match: t,
                      urlOrigin: "devtools",
                  });
        }, []);
    return (0, a.jsxs)(i.nVY, {
        label: "Settings Deep Link Tool",
        children: [
            (0, a.jsx)(r.ksK, {
                label: "URL",
                placeholder: "e.g. /settings/appearance",
                onChange: (e) =>
                    d.setState({
                        urlString: e,
                        error: null,
                    }),
            }),
            (0, a.jsx)(i.$nd, {
                variant: "primary",
                onClick: t,
                text: "Open User Settings for URL",
            }),
            null != e &&
                (0, a.jsx)(i.EYj, {
                    variant: "text-sm/normal",
                    color: "text-feedback-critical",
                    children: e,
                }),
        ],
    });
}
