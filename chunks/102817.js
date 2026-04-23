n.d(t, { A: () => s });
var i = n(627968);
n(64700);
var l = n(990078),
    a = n(408278);
function s(e) {
    let { text: t, icon: n, onClick: s, disabled: r, submitting: o } = e;
    return (0, i.jsx)(l.m, {
        __unsupportedReactNodeAsText: t ?? void 0,
        children: (0, i.jsx)(a.K, {
            icon: n,
            variant: "secondary",
            onClick: s,
            disabled: r,
            loading: o,
            "aria-label": t,
            size: "sm",
        }),
    });
}
