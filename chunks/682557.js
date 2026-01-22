n.d(t, {
    A: () => a,
});
var r = n(627968);
n(64700);
var l = n(397927),
    i = n(283354);
let a = (e) => {
    let { entry: t, hideEditButton: n, children: a, onRequestOpen: s, onRequestClose: o, targetElementRef: c } = e;
    return (0, r.jsx)(l.YNO, {
        targetElementRef: c,
        onRequestOpen: s,
        onRequestClose: o,
        animation: l.YNO.Animation.NONE,
        position: "bottom",
        spacing: 4,
        align: "right",
        renderPopout: (e) => {
            let { closePopout: l } = e;
            return (0, r.jsx)(i.default, {
                entry: t,
                closePopout: l,
                hideEditButton: n,
            });
        },
        children: a,
    });
};
