n.d(t, { Z: () => s }), n(953529);
var r = n(951288);
n(647438);
var i = n(481060),
    a = n(36703),
    o = n(684554);
function s(e) {
    let { volume: t, title: n, description: s, label: l, onVolumeChange: c } = e;
    return (0, r.jsxs)("div", {
        className: o.soundboardRow,
        children: [
            (0, r.jsx)("div", {
                className: o.soundboardColumn,
                children: (0, r.jsx)(i.xJW, {
                    title: n,
                    children: (0, r.jsx)(i.R94, { children: s }),
                }),
            }),
            (0, r.jsx)("div", {
                className: o.soundboardColumn,
                children: (0, r.jsx)(i.iRW, {
                    label: l,
                    initialValue: (0, a.P)(t),
                    maxValue: 100,
                    onValueRender: (e) => "".concat(e.toFixed(0), "%"),
                    onValueChange: c,
                }),
            }),
        ],
    });
}
