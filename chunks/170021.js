n.d(t, { H: () => d });
var i = n(864145),
    s = n(419954),
    l = n(824744),
    a = n(253932),
    r = n(780964),
    o = n(985018);
let d = (0, s.sN)(r.X.SOUNDMOJI_VOLUME_SETTING, {
    useTitle: () => o.intl.string(o.t["2JbvKw"]),
    useSubtitle: () => o.intl.string(o.t.INenzY),
    setValue: function (e) {
        let t = (0, l.w)(e);
        a.HO.updateSetting(t);
    },
    minValue: 0,
    maxValue: 100,
    getInitialValue: function () {
        let e = a.HO.getSetting();
        return (0, l.M)(e);
    },
    onValueRender: function (e) {
        return `${e.toFixed(0)}%`;
    },
    usePredicate: function () {
        return (0, i.X)({ location: "SoundmojiVolumeSetting" });
    },
});
