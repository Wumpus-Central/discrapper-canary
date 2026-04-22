n.d(t, { A: () => a });
var i = n(627968);
n(64700);
var l = n(265872),
    s = n(283354);
let a = (e) => {
    let { entry: t, hideEditButton: n, children: a, onRequestOpen: r, onRequestClose: o, targetElementRef: d } = e;
    return (0, i.jsx)(l.Y, {
        targetElementRef: d,
        onRequestOpen: r,
        onRequestClose: o,
        animation: l.Y.Animation.NONE,
        position: "bottom",
        spacing: 4,
        align: "right",
        renderPopout: (e) => {
            let { closePopout: l } = e;
            return (0, i.jsx)(s.default, { entry: t, closePopout: l, hideEditButton: n });
        },
        children: a,
    });
};
