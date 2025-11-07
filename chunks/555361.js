n.d(t, { Z: () => a }), n(388685);
var r = n(951288),
    l = n(647438),
    o = n(481060),
    i = n(550964);
function a(e) {
    let { node: t } = e,
        {
            setValue: n,
            getInitialValue: a,
            minValue: c,
            maxValue: s,
            useTitle: u,
            useSubtitle: d,
            useDisabled: f,
            onValueRender: b,
            asValueChanges: p,
        } = t,
        [y] = l.useState(() => a()),
        j = u(),
        m = null == d ? void 0 : d(),
        v = null == f ? void 0 : f();
    return (0, r.jsx)(i.X, {
        children: (0, r.jsx)(o.iRW, {
            label: j,
            description: m,
            disabled: v,
            initialValue: y,
            minValue: c,
            maxValue: s,
            onValueRender: b,
            asValueChanges: p,
            onValueChange: n,
            orientation: "horizontal",
        }),
    });
}
