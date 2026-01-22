n.d(t, {
    q: () => r,
});
var a = n(627968);
n(64700);
var l = n(397927),
    i = n(520657);

function r(e) {
    let { isUploading: t, isSuccess: n, errorMessage: r, onClick: s, title: o } = e;
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)(l.Button, {
                variant: "primary",
                onClick: s,
                loading: t,
                disabled: t,
                text: t ? "Uploading…" : o,
            }),
            null != r &&
                (0, a.jsx)(l.Text, {
                    variant: "text-sm/normal",
                    color: "text-feedback-critical",
                    className: i.qS,
                    children: r,
                }),
            n &&
                (0, a.jsx)(l.Text, {
                    variant: "text-sm/normal",
                    color: "text-feedback-positive",
                    className: i.qS,
                    children: "Logs uploaded successfully",
                }),
        ],
    });
}
