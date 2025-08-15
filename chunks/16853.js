n.d(t, { Z: () => a });
var r = n(951288);
n(647438);
var i = n(481060),
    l = n(643560);
let a = (e) => {
    let { entry: t, hideEditButton: n, children: a, onRequestOpen: o, onRequestClose: s, targetElementRef: c } = e;
    return (0, r.jsx)(i.yRy, {
        targetElementRef: c,
        onRequestOpen: o,
        onRequestClose: s,
        animation: i.yRy.Animation.NONE,
        position: "bottom",
        spacing: 4,
        align: "right",
        renderPopout: (e) => {
            let { closePopout: i } = e;
            return (0, r.jsx)(l.default, {
                entry: t,
                closePopout: i,
                hideEditButton: n,
            });
        },
        children: a,
    });
};
