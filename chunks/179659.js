n.d(e, { A: () => c });
var a = n(627968);
n(64700);
var r = n(772707),
    i = n(834730),
    s = n(985018),
    l = n(680281),
    o = n(37229);
function c(t) {
    let { email: e, onClose: n, transitionState: c } = t;
    return (0, a.jsx)(r.k, {
        graphic: { type: "image", src: o },
        title: s.intl.string(s.t["8O+nF7"]),
        onClose: n,
        transitionState: c,
        actions: [{ variant: "primary", text: s.intl.string(s.t.BddRzS), onClick: n }],
        children: (0, a.jsxs)(a.Fragment, {
            children: [
                (0, a.jsx)(i.E, {
                    className: l.h_,
                    variant: "text-md/normal",
                    children: s.intl.format(s.t.Zvx0O3, { email: e }),
                }),
                (0, a.jsx)(i.E, { className: l.YL, variant: "text-sm/normal", children: s.intl.string(s.t.yb7itQ) }),
            ],
        }),
    });
}
