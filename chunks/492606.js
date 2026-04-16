n.d(t, { y: () => d });
var i = n(574381),
    s = n(419954),
    l = n(837921),
    r = n(780964),
    a = n(22539),
    o = n(985018);
let d = (0, s.zD)(r.X.OS_MINIMIZE_TO_TRAY, {
    useTitle: () => o.intl.string(o.t.dJ5MUh),
    useSubtitle: () => o.intl.string(o.t.nQavHr),
    usePredicate: () => i.Av && !(0, i.cX)(),
    useValue: () => a.fk.useState((e) => e.minimizeToTray),
    setValue: a.tA,
    initialize: () => {
        l.Ay.getSetting("MINIMIZE_TO_TRAY", !0).then((e) => a.fk.setState({ minimizeToTray: e }));
    },
});
