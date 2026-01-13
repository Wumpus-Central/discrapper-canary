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
            useDefaultValue: u,
            useTitle: d,
            useSubtitle: f,
            useHintText: p,
            useDisabled: _,
            onValueRender: m,
            asValueChanges: h,
            markers: g,
            onMarkerRender: E,
            stickToMarkers: b,
            fieldLayout: y,
        } = t,
        [O] = i.useState(() => s()),
        v = d(),
        S = null == f ? void 0 : f(),
        I = null == p ? void 0 : p(),
        T = null == _ ? void 0 : _(),
        C = null == u ? void 0 : u();
    return (0, r.jsxs)(o.X, {
        children: [
            (0, r.jsx)(a.iRW, {
                label: v,
                description: S,
                disabled: T,
                initialValue: O,
                minValue: l,
                maxValue: c,
                defaultValue: C,
                onValueRender: m,
                asValueChanges: h,
                onValueChange: n,
                orientation: "horizontal",
                markers: g,
                onMarkerRender: E,
                stickToMarkers: b,
                layout: y,
            }),
            null != I &&
                (0, r.jsx)(a.Text, {
                    variant: "text-xs/normal",
                    color: "text-muted",
                    children: I,
                }),
        ],
    });
}
