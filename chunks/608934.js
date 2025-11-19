n.d(t, { a: () => i });
var a = n(54381);
n(473749);
var l = n(481060),
    r = n(575043);
function i(e) {
    let { isUploading: t, isSuccess: n, errorMessage: i, onClick: s, title: o } = e;
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)(l.Button, {
                variant: "primary",
                onClick: s,
                loading: t,
                disabled: t,
                text: t ? "Uploading\u2026" : o,
            }),
            null != i &&
                (0, a.jsx)(l.Text, {
                    variant: "text-sm/normal",
                    color: "text-feedback-critical",
                    className: r.statusText,
                    children: i,
                }),
            n &&
                (0, a.jsx)(l.Text, {
                    variant: "text-sm/normal",
                    color: "text-feedback-positive",
                    className: r.statusText,
                    children: "Logs uploaded successfully",
                }),
        ],
    });
}
