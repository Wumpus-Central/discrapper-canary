n.d(e, { Z: () => o });
var i = n(722932),
    l = n(509613),
    u = n(36703),
    r = n(695346),
    s = n(313789),
    a = n(388032);
let o = (0, l.UO)(s.n.SOUNDMOJI_VOLUME_SETTING, {
    useTitle: () => a.intl.string(a.t["2JbvKw"]),
    useSubtitle: () => a.intl.string(a.t.INenzY),
    minValue: 0,
    maxValue: 100,
    getInitialValue: function () {
        let t = r.AY.getSetting();
        return (0, u.P)(t);
    },
    usePredicate: function () {
        return (0, i.X0)({ location: "SoundmojiVolumeSetting" });
    },
    setValue: function (t) {
        let e = (0, u.A)(t);
        r.AY.updateSetting(e);
    },
    onValueRender: function (t) {
        return "".concat(t.toFixed(0), "%");
    },
});
