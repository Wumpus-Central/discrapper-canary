n.d(e, { Z: () => c });
var i = n(846027),
    r = n(100527),
    l = n(509613),
    s = n(131951),
    u = n(36703),
    a = n(313789),
    o = n(388032);
let c = (0, l.UO)(a.n.VOICE_INPUT_VOLUME_SETTING, {
    useTitle: () => o.intl.string(o.t.Rtsr6w),
    minValue: 0,
    maxValue: 100,
    getInitialValue: function () {
        let t = s.Z.getInputVolume();
        return (0, u.P)(t);
    },
    asValueChanges: function (t) {
        let e = [r.Z.USER_SETTINGS_VOICE_AND_VIDEO],
            n = (0, u.A)(t);
        i.Z.setInputVolume(n, { analyticsLocations: e });
    },
    useSearchTerms: () => [o.intl.string(o.t.eATD2B), o.intl.string(o.t["3182VD"]), o.intl.string(o.t["DGq/PR"])],
});
