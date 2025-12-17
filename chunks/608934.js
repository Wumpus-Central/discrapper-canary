n.d(t, { a: () => i });
var a = n(54381);
n(473749);
var r = n(481060),
    l = n(605716);
function i(e) {
    let { isUploading: t, isSuccess: n, errorMessage: i, onClick: s, title: o } = e;
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)(r.Button, {
                variant: "primary",
                onClick: s,
                loading: t,
                disabled: t,
                text: t ? "Uploading\u2026" : o,
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
