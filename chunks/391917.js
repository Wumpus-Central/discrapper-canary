n.d(t, { P: () => d });
var i = n(574381),
    s = n(419954),
    l = n(837921),
    r = n(780964),
    a = n(22539),
    o = n(985018);
let d = (0, s.zD)(r.X.OS_OPEN_ON_STARTUP, {
    useTitle: () => o.intl.string(o.t["3BeZti"]),
    usePredicate: () => i.Av && !(0, i.cX)(),
    useValue: () => a.fk.useState((e) => e.openOnStartup),
    setValue: a.Cp,
    initialize: () => {
        l.Ay.getOpenOnStart().then((e) => a.fk.setState({ openOnStartup: e }));
    },
});
