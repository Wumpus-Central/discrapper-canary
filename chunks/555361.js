n.d(t, { Z: () => a }), n(388685);
var r = n(951288),
    l = n(647438),
    o = n(481060),
    i = n(550964);
function a(e) {
    let { node: t } = e,
        { setValue: n, getInitialValue: a, minValue: c, maxValue: s, useTitle: u, useSubtitle: d, useDisabled: f } = t,
        [b] = l.useState(() => a()),
        p = u(),
        y = null == d ? void 0 : d(),
        j = null == f ? void 0 : f();
    return (0, r.jsx)(i.X, {
        children: (0, r.jsx)(o.iRW, {
            label: p,
            description: y,
            disabled: j,
            initialValue: b,
            minValue: c,
            maxValue: s,
            onValueChange: n,
            orientation: "horizontal",
        }),
    });
}
