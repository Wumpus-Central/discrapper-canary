n.d(t, { Z: () => o }), n(953529);
var r = n(54381),
    i = n(481060),
    a = n(36703);
function o(e) {
    let { volume: t, description: n, label: o, onVolumeChange: s } = e;
    return (0, r.jsx)(i.iRW, {
        label: o,
        description: n,
        initialValue: (0, a.P)(t),
        maxValue: 100,
        onValueRender: (e) => "".concat(e.toFixed(0), "%"),
        onValueChange: s,
    });
}
