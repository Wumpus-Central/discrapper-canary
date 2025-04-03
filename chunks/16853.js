n.d(t, { Z: () => o });
var r = n(200651);
n(192379);
var i = n(481060),
    l = n(643560);
let o = (e) => {
    let { entry: t, hideEditButton: n, children: o, onRequestOpen: a, onRequestClose: s, targetElementRef: c } = e;
    return (0, r.jsx)(i.yRy, {
        targetElementRef: c,
        onRequestOpen: a,
        onRequestClose: s,
        animation: i.yRy.Animation.NONE,
        position: 'bottom',
        spacing: 4,
        align: 'right',
        renderPopout: (e) => {
            let { closePopout: i } = e;
            return (0, r.jsx)(l.default, {
                entry: t,
                closePopout: i,
                hideEditButton: n
            });
        },
        children: o
    });
};
