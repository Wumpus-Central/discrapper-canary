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
            minValue: c,
            maxValue: s,
            useTitle: u,
            useSubtitle: d,
            useDisabled: f,
            onValueRender: b,
            asValueChanges: y,
            markers: p,
            onMarkerRender: v,
        } = t,
        [j] = l.useState(() => a()),
        g = u(),
        m = null == d ? void 0 : d(),
        h = null == f ? void 0 : f();
    return (0, r.jsx)(o.X, {
        children: (0, r.jsx)(i.iRW, {
            label: g,
            description: m,
            disabled: h,
            initialValue: j,
            minValue: c,
            maxValue: s,
            onValueRender: b,
            asValueChanges: y,
            onValueChange: n,
            orientation: "horizontal",
            markers: p,
            onMarkerRender: v,
        }),
    });
}
