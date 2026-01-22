n.d(e, { A: () => c }), n(228524);
var a = n(627968);
n(64700);
var r = n(397927),
    i = n(87404),
    l = n(985018),
    s = n(297002),
    o = n(117816);
function c(t) {
    let { onNext: e, onClose: n, transitionState: c } = t;
    return (0, a.jsxs)(r.kpP, {
        graphic: {
            type: "image",
            src: o.A,
        },
        title: l.intl.string(l.t.hhR7gX),
        onClose: n,
        transitionState: c,
        actions: [
            {
                variant: "secondary",
                text: l.intl.string(l.t.rwTBFs),
                onClick: e,
            },
            {
                variant: "primary",
                text: l.intl.string(l.t["ETE/oC"]),
                onClick: n,
            },
        ],
        children: [
            (0, a.jsx)(r.Text, {
                className: s.h_,
                variant: "text-md/normal",
                children: l.intl.format(l.t.rqWXUf, { hcArticle: i.kP }),
            }),
            (0, a.jsx)(r.Text, {
                className: s.h_,
                variant: "text-md/normal",
                children: l.intl.string(l.t["3LW10C"]),
            }),
        ],
    });
}
