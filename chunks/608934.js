n.d(t, { a: () => l });
var a = n(54381);
n(473749);
var r = n(481060),
    i = n(605716);
function l(e) {
    let { isUploading: t, isSuccess: n, errorMessage: l, onClick: s, title: o } = e;
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)(r.Button, {
                variant: "primary",
                onClick: s,
                loading: t,
                disabled: t,
                text: t ? "Uploading\u2026" : o,
            }),
            null != l &&
                (0, a.jsx)(r.Text, {
                    variant: "text-sm/normal",
                    color: "text-feedback-critical",
                    className: i.statusText,
                    children: l,
                }),
            n &&
                (0, a.jsx)(r.Text, {
                    variant: "text-sm/normal",
                    color: "text-feedback-positive",
                    className: i.statusText,
                    children: "Logs uploaded successfully",
                }),
        ],
    });
}
