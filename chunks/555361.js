n.d(t, { Z: () => s }), n(388685);
var r = n(54381),
    i = n(473749),
    a = n(481060),
    o = n(550964);
function s(e) {
    let { node: t } = e,
        {
            setValue: n,
            getInitialValue: s,
            minValue: l,
            maxValue: c,
            useTitle: u,
            useSubtitle: d,
            useDisabled: f,
            onValueRender: p,
            asValueChanges: _,
            markers: m,
            onMarkerRender: h,
            stickToMarkers: g,
        } = t,
        [E] = i.useState(() => s()),
        b = u(),
        y = null == d ? void 0 : d(),
        O = null == f ? void 0 : f();
    return (0, r.jsx)(o.X, {
        children: (0, r.jsx)(a.iRW, {
            label: b,
            description: y,
            disabled: O,
            initialValue: E,
            minValue: l,
            maxValue: c,
            onValueRender: p,
            asValueChanges: _,
            onValueChange: n,
            orientation: "horizontal",
            markers: m,
            onMarkerRender: h,
            stickToMarkers: g,
        }),
    });
}
