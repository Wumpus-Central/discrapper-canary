n.d(e, { Z: () => o }), n(953529);
var a = n(54381);
n(473749);
var r = n(481060),
    i = n(388032),
    l = n(780187),
    s = n(800010);
function o(t) {
    let { email: e, onClose: n, transitionState: o } = t;
    return (0, a.jsx)(r.Ioy, {
        graphic: {
            type: "image",
            src: s,
        },
        title: i.intl.string(i.t["8O+nF7"]),
        onClose: n,
        transitionState: o,
        actions: [
            {
                variant: "primary",
                text: i.intl.string(i.t.BddRzS),
                onClick: n,
            },
        ],
        children: (0, a.jsxs)(a.Fragment, {
            children: [
                (0, a.jsx)(r.Text, {
                    className: l.description,
                    variant: "text-md/normal",
                    children: i.intl.format(i.t.Zvx0O3, { email: e }),
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
