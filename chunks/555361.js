n.d(t, { Z: () => a }), n(388685);
var r = n(54381),
    l = n(473749),
    i = n(481060),
    o = n(550964);
function a(e) {
    let { node: t } = e,
        {
            setValue: n,
            getInitialValue: a,
            minValue: s,
            maxValue: c,
            useTitle: u,
            useSubtitle: d,
            useDisabled: f,
            onValueRender: p,
            asValueChanges: b,
            markers: y,
            onMarkerRender: g,
        } = t,
        [v] = l.useState(() => a()),
        m = u(),
        h = null == d ? void 0 : d(),
        x = null == f ? void 0 : f();
    return (0, r.jsx)(o.X, {
        children: (0, r.jsx)(i.iRW, {
            label: m,
            description: h,
            disabled: x,
            initialValue: v,
            minValue: s,
            maxValue: c,
            onValueRender: p,
            asValueChanges: b,
            onValueChange: n,
            orientation: "horizontal",
            markers: y,
            onMarkerRender: g,
        }),
    });
}
