i.d(e, { S: () => T });
var n = i(827343),
    l = i(793574),
    s = i(419954),
    r = i(430452),
    u = i(824744),
    a = i(780964),
    o = i(985018);
let T = (0, s.sN)(a.X.VOICE_OUTPUT_VOLUME_SETTING, {
    useTitle: () => o.intl.string(o.t.aUJ062),
    useSearchTerms: () => [o.intl.string(o.t.eATD2B), o.intl.string(o.t["3182VD"]), o.intl.string(o.t["DGq/PR"])],
    minValue: 0,
    maxValue: 200,
    getInitialValue: function () {
        let t = r.A.getOutputVolume();
        return (0, u.M)(t);
    },
    onValueRender: function (t) {
        return "".concat(t.toFixed(0), "%");
    },
    asValueChanges: function (t) {
        let e = [l.A.USER_SETTINGS_VOICE_AND_VIDEO],
            i = (0, u.w)(t);
        n.A.setOutputVolume(i, { analyticsLocations: e });
    },
});
