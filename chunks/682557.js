"use strict";
n.d(t, { A: () => r });
var i = n(627968);
n(64700);
var s = n(397927),
    l = n(283354);
let r = (e) => {
    let { entry: t, hideEditButton: n, children: r, onRequestOpen: a, onRequestClose: o, targetElementRef: c } = e;
    return (0, i.jsx)(s.YNO, {
        targetElementRef: c,
        onRequestOpen: a,
        onRequestClose: o,
        animation: s.YNO.Animation.NONE,
        position: "bottom",
        spacing: 4,
        align: "right",
        renderPopout: (e) => {
            let { closePopout: s } = e;
            return (0, i.jsx)(l.default, { entry: t, closePopout: s, hideEditButton: n });
        },
        children: r,
    });
};
