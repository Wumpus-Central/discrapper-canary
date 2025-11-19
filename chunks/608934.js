n.d(t, { a: () => r });
var a = n(54381);
n(473749);
var l = n(481060),
    i = n(530146);
function r(e) {
    let { isUploading: t, isSuccess: n, errorMessage: r, onClick: s, title: o } = e;
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)(l.Button, {
                variant: "primary",
                onClick: s,
                loading: t,
                disabled: t,
                text: t ? "Uploading\u2026" : o,
            }),
            null != r &&
                (0, a.jsx)(l.Text, {
                    variant: "text-sm/normal",
                    color: "text-feedback-critical",
                    className: i.statusText,
                    children: r,
                }),
            n &&
                (0, a.jsx)(l.Text, {
                    variant: "text-sm/normal",
                    color: "text-feedback-positive",
                    className: i.statusText,
                    children: "Logs uploaded successfully",
                }),
        ],
    });
}
