i.d(e, {
    q: () => a,
});
var n = i(311907),
    l = i(172272),
    s = i(419954),
    r = i(111162),
    u = i(780964);
let a = (0, s.sN)(u.X.LAYOUT_DEBUGGING_HORIZONTAL_SPACING, {
    useTitle: () => "Horizontal Grid Spacing",
    useSubtitle: () => "Adjust the spacing between horizontal grid lines. Set to 0 to disable horizontal grid lines.",
    usePredicate: () => (0, n.bG)([r.default], () => r.default.layoutDebuggingEnabled),
    minValue: 0,
    maxValue: l.YR,
    markers: Array.from(
        {
            length: l.YR + 1,
        },
        (t, e) => e,
    ),
    onValueRender: (t) => "".concat(Math.round(t), "px"),
    onMarkerRender: (t) => (t % 4 == 0 ? "".concat(t) : void 0),
    getInitialValue: () => l.Or.getState().horizontalSpacing,
    asValueChanges: (t) => {
        l.Or.getState().setHorizontalSpacing(t);
    },
});
