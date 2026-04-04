n.d(t, { g: () => g });
var i = n(284009),
    s = n.n(i),
    l = n(311907),
    a = n(552122),
    r = n(419954),
    o = n(965957),
    d = n(312671),
    c = n(780964),
    u = n(235079),
    m = n(985018);
let g = (0, r.zD)(c.X.NOTIFICATION_HOLIDAY_SOUNDPACK, {
    useTitle: () => {
        let e = a.A.useHolidaySoundpack();
        return null == e ? "" : m.intl.format(m.t["E/OyBr"], { soundpack: m.intl.string(e.soundpackLabel) });
    },
    useValue: function () {
        let e = (0, l.bG)([d.A], () => d.A.getSoundpack()),
            t = a.A.useHolidaySoundpack();
        return e === t?.soundpack;
    },
    setValue: function (e) {
        let t = a.A.getHolidaySoundpack();
        s()(null != t, "predicate should fail if no soundpack is available"), (0, o.p)(e ? t : u.i.CLASSIC);
    },
    usePredicate: a.A.useIsEligible,
});
