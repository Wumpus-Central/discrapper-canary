n.d(e, { h: () => T });
var i = n(846027),
    l = n(100527),
    s = n(509613),
    u = n(131951),
    r = n(36703),
    a = n(313789),
    o = n(388032);
let T = (0, s.UO)(a.n.VOICE_INPUT_VOLUME_SETTING, {
    useTitle: () => o.intl.string(o.t.Rtsr6w),
    useSearchTerms: () => [o.intl.string(o.t.eATD2B), o.intl.string(o.t["3182VD"]), o.intl.string(o.t["DGq/PR"])],
    minValue: 0,
    maxValue: 100,
    getInitialValue: function () {
        let t = u.Z.getInputVolume();
        return (0, r.P)(t);
    },
    asValueChanges: function (t) {
        let e = [l.Z.USER_SETTINGS_VOICE_AND_VIDEO],
            n = (0, r.A)(t);
        i.Z.setInputVolume(n, { analyticsLocations: e });
    },
});
