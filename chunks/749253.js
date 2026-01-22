i.d(e, {
    V: () => a,
});
var n = i(311907),
    l = i(926919),
    s = i(419954),
    r = i(111162),
    u = i(780964);
let a = (0, s.zD)(u.X.LAYOUT_DEBUGGING, {
    useTitle: () => "Enable Layout Debugging",
    useSubtitle: () => "Renders a grid on top of the app to help debug layout alignment issues.",
    useValue: () => (0, n.bG)([r.default], () => r.default.layoutDebuggingEnabled),
    setValue: (t) => {
        (0, l.x)({
            layoutDebuggingEnabled: t,
        });
    },
});
