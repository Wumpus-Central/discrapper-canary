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
            useHintText: f,
            useDisabled: p,
            onValueRender: _,
            asValueChanges: m,
            markers: h,
            onMarkerRender: g,
            stickToMarkers: E,
            fieldLayout: b,
        } = t,
        [y] = i.useState(() => s()),
        O = u(),
        v = null == d ? void 0 : d(),
        S = null == f ? void 0 : f(),
        I = null == p ? void 0 : p();
    return (0, r.jsxs)(o.X, {
        children: [
            (0, r.jsx)(a.iRW, {
                label: O,
                description: v,
                disabled: I,
                initialValue: y,
                minValue: l,
                maxValue: c,
                onValueRender: _,
                asValueChanges: m,
                onValueChange: n,
                orientation: "horizontal",
                markers: h,
                onMarkerRender: g,
                stickToMarkers: E,
                layout: b,
            }),
            null != S &&
                (0, r.jsx)(a.Text, {
                    variant: "text-xs/normal",
                    color: "text-muted",
                    children: S,
                }),
        ],
    });
}
