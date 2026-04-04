n.d(t, { y: () => c });
var i = n(574381),
    s = n(419954),
    l = n(837921),
    a = n(780964),
    r = n(358776),
    o = n(22539),
    d = n(985018);
let c = (0, s.zD)(a.X.OS_MINIMIZE_TO_TRAY, {
    useTitle: () => ((0, r.bp)("OsMinimizeToTray") ? d.intl.string(d.t.dJ5MUh) : d.intl.string(d.t.abLFes)),
    useSubtitle: () => ((0, r.bp)("OsMinimizeToTray") ? d.intl.string(d.t.nQavHr) : d.intl.string(d.t["mVuX+j"])),
    usePredicate: () => i.Av && !(0, i.cX)(),
    useValue: () => o.fk.useState((e) => e.minimizeToTray),
    setValue: o.tA,
    initialize: () => {
        l.Ay.getSetting("MINIMIZE_TO_TRAY", !0).then((e) => o.fk.setState({ minimizeToTray: e }));
    },
});
