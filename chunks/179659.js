n.d(e, { A: () => o });
var a = n(627968);
n(64700);
var r = n(397927),
    i = n(985018),
    s = n(128393),
    l = n(222872);
function o(t) {
    let { email: e, onClose: n, transitionState: o } = t;
    return (0, a.jsx)(r.kpP, {
        graphic: { type: "image", src: l },
        title: i.intl.string(i.t["8O+nF7"]),
        onClose: n,
        transitionState: o,
        actions: [{ variant: "primary", text: i.intl.string(i.t.BddRzS), onClick: n }],
        children: (0, a.jsxs)(a.Fragment, {
            children: [
                (0, a.jsx)(r.Text, {
                    className: s.h_,
                    variant: "text-md/normal",
                    children: i.intl.format(i.t.Zvx0O3, { email: e }),
                }),
                (0, a.jsx)(r.Text, { className: s.YL, variant: "text-sm/normal", children: i.intl.string(i.t.yb7itQ) }),
            ],
        }),
    });
}
