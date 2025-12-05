n.d(e, { A: () => o });
var i = n(722932),
    l = n(509613),
    s = n(36703),
    r = n(695346),
    u = n(313789),
    a = n(388032);
let o = (0, l.UO)(u.n.SOUNDMOJI_VOLUME_SETTING, {
    useTitle: () => a.intl.string(a.t["2JbvKw"]),
    useSubtitle: () => a.intl.string(a.t.INenzY),
    setValue: function (t) {
        let e = (0, s.A)(t);
        r.AY.updateSetting(e);
    },
    minValue: 0,
    maxValue: 100,
    getInitialValue: function () {
        let t = r.AY.getSetting();
        return (0, s.P)(t);
    },
    onValueRender: function (t) {
        return "".concat(t.toFixed(0), "%");
    },
    usePredicate: function () {
        return (0, i.X0)({ location: "SoundmojiVolumeSetting" });
    },
});
