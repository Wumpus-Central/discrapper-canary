n.d(t, { Z: () => u });
var a = n(54381),
    l = n(473749),
    i = n(793030),
    r = n(481060),
    s = n(972959),
    o = n(722589),
    c = n(518596);
let d = (0, s.H)(() => ({
    urlString: "",
    error: null,
}));
function u() {
    let e = d.useField("error"),
        t = l.useCallback(() => {
            let e = d.getField("urlString");
            if (null == e || "" === e) return void d.setState({ error: "URL is required" });
            let t = (0, o.default)(e);
            if (null == t) return void d.setState({ error: "String did not match expected format" });
            (0, c.openUserSettingsFromParsedUrl)({
                match: t,
                urlOrigin: "devtools",
            });
        }, []);
    return (0, a.jsxs)(i.C3N, {
        label: "Settings Deep Link Tool",
        children: [
            (0, a.jsx)(r.oil, {
                label: "URL",
                placeholder: "e.g. /settings/appearance",
                onChange: (e) =>
                    d.setState({
                        urlString: e,
                        error: null,
                    }),
            }),
            (0, a.jsx)(i.zxk, {
                variant: "primary",
                onClick: t,
                text: "Open User Settings for URL",
            }),
            null != e &&
                (0, a.jsx)(i.xvT, {
                    variant: "text-sm/normal",
                    color: "text-feedback-critical",
                    children: e,
                }),
        ],
    });
}
