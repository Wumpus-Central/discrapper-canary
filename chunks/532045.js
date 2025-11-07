n.d(e, { Z: () => c });
var i = n(846027),
    l = n(100527),
    r = n(509613),
    u = n(131951),
    s = n(36703),
    a = n(313789),
    o = n(388032);
let c = (0, r.UO)(a.n.VOICE_OUTPUT_VOLUME_SETTING, {
    useTitle: () => o.intl.string(o.t.aUJ062),
    minValue: 0,
    maxValue: 200,
    getInitialValue: function () {
        let t = u.Z.getOutputVolume();
        return (0, s.P)(t);
    },
    onValueRender: function (t) {
        return "".concat(t.toFixed(0), "%");
    },
    asValueChanges: function (t) {
        let e = [l.Z.USER_SETTINGS_VOICE_AND_VIDEO],
            n = (0, s.A)(t);
        i.Z.setOutputVolume(n, { analyticsLocations: e });
    },
    useSearchTerms: () => [o.intl.string(o.t.eATD2B), o.intl.string(o.t["3182VD"]), o.intl.string(o.t["DGq/PR"])],
});
