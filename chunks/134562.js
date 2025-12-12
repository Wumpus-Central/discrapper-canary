e.d(n, { Z: () => c }), e(953529);
var r = e(54381);
e(473749);
var i = e(481060),
    a = e(308569),
    l = e(388032),
    s = e(36884),
    o = e(73377);
function c(t) {
    let { onNext: n, onClose: e, transitionState: c } = t;
    return (0, r.jsxs)(i.Ioy, {
        graphic: {
            type: "image",
            src: o.Z,
        },
        title: l.intl.string(l.t.hhR7gX),
        onClose: e,
        transitionState: c,
        actions: [
            {
                variant: "secondary",
                text: l.intl.string(l.t.rwTBFs),
                onClick: n,
            },
            {
                variant: "primary",
                text: l.intl.string(l.t["ETE/oC"]),
                onClick: e,
            },
        ],
        children: [
            (0, r.jsx)(i.Text, {
                className: s.description,
                variant: "text-md/normal",
                children: l.intl.format(l.t.rqWXUf, { hcArticle: a.j1 }),
            }),
            (0, r.jsx)(i.Text, {
                className: s.description,
                variant: "text-md/normal",
                children: l.intl.string(l.t["3LW10C"]),
            }),
        ],
    });
}
