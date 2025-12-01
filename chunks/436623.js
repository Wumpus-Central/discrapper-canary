n.d(e, { Z: () => o });
var i = n(722932),
    r = n(509613),
    l = n(36703),
    u = n(695346),
    s = n(313789),
    a = n(388032);
let o = (0, r.UO)(s.n.SOUNDMOJI_VOLUME_SETTING, {
    useTitle: () => a.intl.string(a.t["2JbvKw"]),
    useSubtitle: () => a.intl.string(a.t.INenzY),
    minValue: 0,
    maxValue: 100,
    getInitialValue: function () {
        let t = u.AY.getSetting();
        return (0, l.P)(t);
    },
    usePredicate: function () {
        return (0, i.X0)({ location: "SoundmojiVolumeSetting" });
    },
    setValue: function (t) {
        let e = (0, l.A)(t);
        u.AY.updateSetting(e);
    },
    onValueRender: function (t) {
        return "".concat(t.toFixed(0), "%");
    },
});
