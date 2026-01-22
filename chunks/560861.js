i.d(e, { g: () => E });
var n = i(284009),
    l = i.n(n),
    s = i(311907),
    r = i(552122),
    u = i(419954),
    a = i(965957),
    o = i(312671),
    T = i(780964),
    A = i(235079),
    S = i(985018);
let E = (0, u.zD)(T.X.NOTIFICATION_HOLIDAY_SOUNDPACK, {
    useTitle: () => {
        let t = r.A.useHolidaySoundpack();
        return null == t ? "" : S.intl.format(S.t["E/OyBr"], { soundpack: S.intl.string(t.soundpackLabel) });
    },
    useValue: function () {
        let t = (0, s.bG)([o.A], () => o.A.getSoundpack()),
            e = r.A.useHolidaySoundpack();
        return t === (null == e ? void 0 : e.soundpack);
    },
    setValue: function (t) {
        let e = r.A.getHolidaySoundpack();
        l()(null != e, "predicate should fail if no soundpack is available"), (0, a.p)(t ? e : A.i.CLASSIC);
    },
    usePredicate: r.A.useIsEligible,
});
