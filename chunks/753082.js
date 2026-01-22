i.d(e, {
    g: () => a,
});
var n = i(311907),
    l = i(926919),
    s = i(419954),
    r = i(111162),
    u = i(780964);
let a = (0, s.zD)(u.X.CSS_DEBUGGING, {
    useTitle: () => "Enable CSS Debugging",
    useSubtitle: () => "Display raw colors as pink. Toggling this will refresh the browser.",
    useValue: () => (0, n.bG)([r.default], () => r.default.cssDebuggingEnabled),
    setValue: (t) => {
        (0, l.x)({
            cssDebuggingEnabled: t,
        }).then(() => {
            setTimeout(() => location.reload(), 500);
        });
    },
});
