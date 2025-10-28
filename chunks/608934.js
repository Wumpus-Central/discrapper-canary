n.d(t, { a: () => i });
var a = n(951288);
n(647438);
var r = n(481060),
    l = n(530146);
function i(e) {
    let { isUploading: t, isSuccess: n, errorMessage: i, onClick: o, title: s } = e;
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)(r.Button, {
                variant: "primary",
                onClick: o,
                loading: t,
                disabled: t,
                text: t ? "Uploading\u2026" : s,
            }),
            null != i &&
                (0, a.jsx)(r.Text, {
                    variant: "text-sm/normal",
                    color: "text-feedback-critical",
                    className: l.statusText,
                    children: i,
                }),
            n &&
                (0, a.jsx)(r.Text, {
                    variant: "text-sm/normal",
                    color: "text-feedback-positive",
                    className: l.statusText,
                    children: "Logs uploaded successfully",
                }),
        ],
    });
}
