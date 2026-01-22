n.d(t, {
    A: () => s,
}),
    n(228524);
var r = n(627968),
    i = n(397927),
    a = n(824744);

function s(e) {
    let { volume: t, description: n, label: s, onVolumeChange: o } = e;
    return (0, r.jsx)(i.Apm, {
        label: s,
        description: n,
        initialValue: (0, a.M)(t),
        maxValue: 100,
        onValueRender: (e) => "".concat(e.toFixed(0), "%"),
        onValueChange: o,
    });
}
