n.d(t, { y: () => d });
var i = n(574381),
    s = n(419954),
    l = n(837921),
    a = n(780964),
    r = n(22539),
    o = n(985018);
let d = (0, s.zD)(a.X.OS_MINIMIZE_TO_TRAY, {
    useTitle: () => o.intl.string(o.t.dJ5MUh),
    useSubtitle: () => o.intl.string(o.t.nQavHr),
    usePredicate: () => i.Av && !(0, i.cX)(),
    useValue: () => r.fk.useState((e) => e.minimizeToTray),
    setValue: r.tA,
    initialize: () => {
        l.Ay.getSetting("MINIMIZE_TO_TRAY", !0).then((e) => r.fk.setState({ minimizeToTray: e }));
    },
});
