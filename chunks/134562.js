n.d(e, { Z: () => c }), n(953529);
var a = n(54381);
n(473749);
var r = n(481060),
    i = n(308569),
    l = n(388032),
    s = n(780187),
    o = n(75277);
function c(t) {
    let { onNext: e, onClose: n, transitionState: c } = t;
    return (0, a.jsxs)(r.Ioy, {
        graphic: {
            type: "image",
            src: o,
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
                className: s.description,
                variant: "text-md/normal",
                children: l.intl.format(l.t.rqWXUf, { hcArticle: i.j1 }),
            }),
            (0, a.jsx)(r.Text, {
                className: s.description,
                variant: "text-md/normal",
                children: l.intl.string(l.t["3LW10C"]),
            }),
        ],
    });
}
