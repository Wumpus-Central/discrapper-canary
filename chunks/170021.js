i.d(e, { H: () => o });
var n = i(864145),
    l = i(419954),
    s = i(824744),
    r = i(253932),
    a = i(780964),
    u = i(985018);
let o = (0, l.sN)(a.X.SOUNDMOJI_VOLUME_SETTING, {
    useTitle: () => u.intl.string(u.t["2JbvKw"]),
    useSubtitle: () => u.intl.string(u.t.INenzY),
    setValue: function (t) {
        let e = (0, s.w)(t);
        r.HO.updateSetting(e);
    },
    minValue: 0,
    maxValue: 100,
    getInitialValue: function () {
        let t = r.HO.getSetting();
        return (0, s.M)(t);
    },
    onValueRender: function (t) {
        return `${t.toFixed(0)}%`;
    },
    usePredicate: function () {
        return (0, n.X9)({ location: "SoundmojiVolumeSetting" });
    },
});
