a.d(t, { q: () => r });
var n = a(627968);
a(64700);
var l = a(821609),
    i = a(834730),
    s = a(929948);
function r(e) {
    let { isUploading: t, isSuccess: a, errorMessage: r, onClick: o, title: d } = e;
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsx)(l.$, { variant: "primary", onClick: o, loading: t, disabled: t, text: t ? "Uploading…" : d }),
            null != r &&
                (0, n.jsx)(i.E, {
                    variant: "text-sm/normal",
                    color: "text-feedback-critical",
                    className: s.qS,
                    children: r,
                }),
            a &&
                (0, n.jsx)(i.E, {
                    variant: "text-sm/normal",
                    color: "text-feedback-positive",
                    className: s.qS,
                    children: "Logs uploaded successfully",
                }),
        ],
    });
}
