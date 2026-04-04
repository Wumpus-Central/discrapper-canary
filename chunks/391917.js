n.d(t, { P: () => c });
var i = n(574381),
    s = n(419954),
    l = n(837921),
    a = n(780964),
    r = n(358776),
    o = n(22539),
    d = n(985018);
let c = (0, s.zD)(a.X.OS_OPEN_ON_STARTUP, {
    useTitle: () => ((0, r.bp)("OpenOnStartup") ? d.intl.string(d.t["3BeZti"]) : d.intl.string(d.t.WQm4p1)),
    useSubtitle: () => ((0, r.bp)("OpenOnStartup") ? void 0 : d.intl.string(d.t["s/cQrU"])),
    usePredicate: () => i.Av && !(0, i.cX)(),
    useValue: () => o.fk.useState((e) => e.openOnStartup),
    setValue: o.Cp,
    initialize: () => {
        l.Ay.getOpenOnStart().then((e) => o.fk.setState({ openOnStartup: e }));
    },
});
