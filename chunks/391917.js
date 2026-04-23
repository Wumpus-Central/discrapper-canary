n.d(t, { P: () => d });
var i = n(574381),
    s = n(419954),
    l = n(837921),
    a = n(780964),
    r = n(22539),
    o = n(985018);
let d = (0, s.zD)(a.X.OS_OPEN_ON_STARTUP, {
    useTitle: () => o.intl.string(o.t["3BeZti"]),
    usePredicate: () => i.Av && !(0, i.cX)(),
    useValue: () => r.fk.useState((e) => e.openOnStartup),
    setValue: r.Cp,
    initialize: () => {
        l.Ay.getOpenOnStart().then((e) => r.fk.setState({ openOnStartup: e }));
    },
});
