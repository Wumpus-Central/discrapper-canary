n.d(t, { q: () => l });
var a = n(627968);
n(64700);
var s = n(397927),
    i = n(520657);
function l(e) {
    let { isUploading: t, isSuccess: n, errorMessage: l, onClick: r, title: o } = e;
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)(s.Button, {
                variant: "primary",
                onClick: r,
                loading: t,
                disabled: t,
                text: t ? "Uploading…" : o,
            }),
            null != l &&
                (0, a.jsx)(s.Text, {
                    variant: "text-sm/normal",
                    color: "text-feedback-critical",
                    className: i.qS,
                    children: l,
                }),
            n &&
                (0, a.jsx)(s.Text, {
                    variant: "text-sm/normal",
                    color: "text-feedback-positive",
                    className: i.qS,
                    children: "Logs uploaded successfully",
                }),
        ],
    });
}
