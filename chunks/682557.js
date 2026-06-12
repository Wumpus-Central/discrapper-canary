n.d(e, { A: () => a });
var r = n(627968);
n(64700);
var i = n(922016),
    c = n(283354);
let a = (t) => {
    let { entry: e, hideEditButton: n, children: a, onRequestOpen: l, onRequestClose: o, targetElementRef: E } = t;
    return (0, r.jsx)(i.Y, {
        targetElementRef: E,
        onRequestOpen: l,
        onRequestClose: o,
        animation: i.Y.Animation.NONE,
        position: "bottom",
        spacing: 4,
        align: "right",
        renderPopout: (t) => {
            let { closePopout: i } = t;
            return (0, r.jsx)(c.default, { entry: e, closePopout: i, hideEditButton: n });
        },
        children: a,
    });
};
