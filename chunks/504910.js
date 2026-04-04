n.d(t, { K: () => o });
var i = n(311907),
    s = n(926919),
    l = n(419954),
    a = n(111162),
    r = n(780964);
let o = (0, l.zD)(r.X.AXE_AUDITING, {
    useTitle: () => "Enable Accessibility Auditing",
    useSubtitle: () =>
        "Runs Axe auditing for accessibility while using the app. Violations get logged to the console. Only available in development.",
    usePredicate: () => !1,
    useValue: () => (0, i.bG)([a.default], () => a.default.isAxeEnabled),
    setValue: (e) => (0, s.x)({ axeEnabled: e }),
});
