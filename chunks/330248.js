n.d(e, { A: () => c });
var a = n(627968);
n(64700);
var r = n(397927),
    i = n(87404),
    s = n(985018),
    l = n(128393),
    o = n(117816);
function c(t) {
    let { onNext: e, onClose: n, transitionState: c } = t;
    return (0, a.jsxs)(r.kpP, {
        graphic: { type: "image", src: o.A },
        title: s.intl.string(s.t.hhR7gX),
        onClose: n,
        transitionState: c,
        actions: [
            { variant: "secondary", text: s.intl.string(s.t.rwTBFs), onClick: e },
            { variant: "primary", text: s.intl.string(s.t["ETE/oC"]), onClick: n },
        ],
        children: [
            (0, a.jsx)(r.Text, {
                className: l.h_,
                variant: "text-md/normal",
                children: s.intl.format(s.t.rqWXUf, { hcArticle: i.kP }),
            }),
            (0, a.jsx)(r.Text, { className: l.h_, variant: "text-md/normal", children: s.intl.string(s.t["3LW10C"]) }),
        ],
    });
}
