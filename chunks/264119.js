e.d(n, { Z: () => o }), e(953529);
var a = e(54381);
e(473749);
var r = e(481060),
    i = e(388032),
    l = e(780187),
    s = e(800010);
function o(t) {
    let { email: n, onClose: e, transitionState: o } = t;
    return (0, a.jsx)(r.Ioy, {
        graphic: {
            type: "image",
            src: s,
        },
        title: i.intl.string(i.t["8O+nF7"]),
        onClose: e,
        transitionState: o,
        actions: [
            {
                variant: "primary",
                text: i.intl.string(i.t.BddRzS),
                onClick: e,
            },
        ],
        children: (0, a.jsxs)(a.Fragment, {
            children: [
                (0, a.jsx)(r.Text, {
                    className: l.description,
                    variant: "text-md/normal",
                    children: i.intl.format(i.t.Zvx0O3, { email: n }),
                }),
                (0, a.jsx)(r.Text, {
                    className: l.tooltip,
                    variant: "text-sm/normal",
                    children: i.intl.string(i.t.yb7itQ),
                }),
            ],
        }),
    });
}
