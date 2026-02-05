i.d(e, { g: () => S });
var n = i(284009),
    l = i.n(n),
    s = i(311907),
    r = i(552122),
    a = i(419954),
    u = i(965957),
    o = i(312671),
    d = i(780964),
    T = i(235079),
    A = i(985018);
let S = (0, a.zD)(d.X.NOTIFICATION_HOLIDAY_SOUNDPACK, {
    useTitle: () => {
        let t = r.A.useHolidaySoundpack();
        return null == t ? "" : A.intl.format(A.t["E/OyBr"], { soundpack: A.intl.string(t.soundpackLabel) });
    },
    useValue: function () {
        let t = (0, s.bG)([o.A], () => o.A.getSoundpack()),
            e = r.A.useHolidaySoundpack();
        return t === e?.soundpack;
    },
    setValue: function (t) {
        let e = r.A.getHolidaySoundpack();
        l()(null != e, "predicate should fail if no soundpack is available"), (0, u.p)(t ? e : T.i.CLASSIC);
    },
    usePredicate: r.A.useIsEligible,
});
