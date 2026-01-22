i.d(e, { H: () => o });
var n = i(864145),
    l = i(419954),
    s = i(824744),
    r = i(253932),
    u = i(780964),
    a = i(985018);
let o = (0, l.sN)(u.X.SOUNDMOJI_VOLUME_SETTING, {
    useTitle: () => a.intl.string(a.t["2JbvKw"]),
    useSubtitle: () => a.intl.string(a.t.INenzY),
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
        return "".concat(t.toFixed(0), "%");
    },
    usePredicate: function () {
        return (0, n.X9)({ location: "SoundmojiVolumeSetting" });
    },
});
