i.d(e, { y: () => d });
var n = i(574381),
    l = i(419954),
    s = i(837921),
    r = i(780964),
    a = i(358776),
    u = i(604095),
    o = i(985018);
let d = (0, l.zD)(r.X.OS_MINIMIZE_TO_TRAY, {
    useTitle: () => ((0, a.bp)("OsMinimizeToTray") ? o.intl.string(o.t.dJ5MUh) : o.intl.string(o.t.abLFes)),
    useSubtitle: () => ((0, a.bp)("OsMinimizeToTray") ? o.intl.string(o.t.nQavHr) : o.intl.string(o.t["mVuX+j"])),
    usePredicate: () => n.Av && !(0, n.cX)(),
    useValue: () => u.fk.useState((t) => t.minimizeToTray),
    setValue: u.tA,
    initialize: () => {
        s.Ay.getSetting("MINIMIZE_TO_TRAY", !0).then((t) => u.fk.setState({ minimizeToTray: t }));
    },
});
