n.d(t, { a: () => l });
var a = n(951288);
n(647438);
var i = n(481060),
    r = n(530146);
function l(e) {
    let { isUploading: t, isSuccess: n, errorMessage: l, onClick: s, title: o } = e;
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)(i.Button, {
                variant: "primary",
                onClick: s,
                loading: t,
                disabled: t,
                text: t ? "Uploading\u2026" : o,
            }),
            null != l &&
                (0, a.jsx)(i.Text, {
                    variant: "text-sm/normal",
                    color: "text-feedback-critical",
                    className: r.statusText,
                    children: l,
                }),
            n &&
                (0, a.jsx)(i.Text, {
                    variant: "text-sm/normal",
                    color: "text-feedback-positive",
                    className: r.statusText,
                    children: "Logs uploaded successfully",
                }),
        ],
    });
}
