e.d(n, { Z: () => o }), e(953529);
var r = e(54381);
e(473749);
var i = e(481060),
    a = e(388032),
    l = e(36884),
    s = e(800010);
function o(t) {
    let { email: n, onClose: e, transitionState: o } = t;
    return (0, r.jsx)(i.Ioy, {
        graphic: {
            type: "image",
            src: s,
        },
        title: a.intl.string(a.t["8O+nF7"]),
        onClose: e,
        transitionState: o,
        actions: [
            {
                variant: "primary",
                text: a.intl.string(a.t.BddRzS),
                onClick: e,
            },
        ],
        children: (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(i.Text, {
                    className: l.description,
                    variant: "text-md/normal",
                    children: a.intl.format(a.t.Zvx0O3, { email: n }),
                }),
                (0, r.jsx)(i.Text, {
                    className: l.tooltip,
                    variant: "text-sm/normal",
                    children: a.intl.string(a.t.yb7itQ),
                }),
            ],
        }),
    });
}
