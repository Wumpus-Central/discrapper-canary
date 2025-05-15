n.d(t, { Z: () => o });
var r = n(255367),
    i = n(73800),
    l = n(481060),
    a = n(643560);
let o = (e) => {
    let { entry: t, hideEditButton: n, children: o, onRequestOpen: s, onRequestClose: c, targetElementRef: u } = e,
        d = i.useRef(null);
    return (0, r.jsx)(l.yRy, {
        targetElementRef: null != u ? u : d,
        onRequestOpen: s,
        onRequestClose: c,
        animation: l.yRy.Animation.NONE,
        position: 'bottom',
        spacing: 4,
        align: 'right',
        renderPopout: (e) => {
            let { closePopout: i } = e;
            return (0, r.jsx)(a.default, {
                entry: t,
                closePopout: i,
                hideEditButton: n
            });
        },
        children: o
    });
};
