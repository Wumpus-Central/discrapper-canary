i.d(e, { V: () => o });
var n = i(574381),
    l = i(314116),
    s = i(419954),
    r = i(837921),
    a = i(780964),
    u = i(985018);
let o = (0, s.zD)(a.X.ADVANCED_HARDWARE_ACCELERATION, {
    useTitle: () => u.intl.string(u.t["/HIxyY"]),
    useSubtitle: () => u.intl.string(u.t.B0hqpb),
    usePredicate: () => n.Av && !(0, n.cX)(),
    useValue: () => r.Ay.getEnableHardwareAcceleration(),
    setValue: (t) => {
        var e;
        let i;
        return (
            (i = (e = t) ? u.intl.format(u.t.LYXRxL, {}) : u.intl.format(u.t.uDP3Kz, {})),
            void (0, l.A)({
                title: u.intl.string(u.t.aqpAvn),
                subtitle: i,
                confirmText: u.intl.string(u.t.vT7ckk),
                onConfirm: () => {
                    r.Ay.setEnableHardwareAcceleration(e);
                },
            })
        );
    },
});
