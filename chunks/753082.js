i.d(e, { g: () => u });
var n = i(311907),
    l = i(926919),
    s = i(419954),
    r = i(111162),
    a = i(780964);
let u = (0, s.zD)(a.X.CSS_DEBUGGING, {
    useTitle: () => "Enable CSS Debugging",
    useSubtitle: () => "Display raw colors as pink. Toggling this will refresh the browser.",
    useValue: () => (0, n.bG)([r.default], () => r.default.cssDebuggingEnabled),
    setValue: (t) => {
        (0, l.x)({ cssDebuggingEnabled: t }).then(() => {
            setTimeout(() => location.reload(), 500);
        });
    },
});
