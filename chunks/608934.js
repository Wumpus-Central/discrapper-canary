n.d(t, { a: () => r });
var a = n(951288);
n(647438);
var i = n(481060),
    l = n(530146);
function r(e) {
    let { isUploading: t, isSuccess: n, errorMessage: r, onClick: s, title: o } = e;
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)(i.Button, {
                variant: "primary",
                onClick: s,
                loading: t,
                disabled: t,
                text: t ? "Uploading\u2026" : o,
            }),
            null != r &&
                (0, a.jsx)(i.Text, {
                    variant: "text-sm/normal",
                    color: "text-feedback-critical",
                    className: l.statusText,
                    children: r,
                }),
            n &&
                (0, a.jsx)(i.Text, {
                    variant: "text-sm/normal",
                    color: "text-feedback-positive",
                    className: l.statusText,
                    children: "Logs uploaded successfully",
                }),
        ],
    });
}
