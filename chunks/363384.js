i.d(e, { f: () => d });
var n = i(827343),
    l = i(793574),
    s = i(419954),
    r = i(430452),
    a = i(824744),
    u = i(780964),
    o = i(985018);
let d = (0, s.sN)(u.X.VOICE_INPUT_VOLUME_SETTING, {
    useTitle: () => o.intl.string(o.t.Rtsr6w),
    useSearchTerms: () => [o.intl.string(o.t.eATD2B), o.intl.string(o.t["3182VD"]), o.intl.string(o.t["DGq/PR"])],
    minValue: 0,
    maxValue: 100,
    getInitialValue: function () {
        let t = r.A.getInputVolume();
        return (0, a.M)(t);
    },
    asValueChanges: function (t) {
        let e = [l.A.USER_SETTINGS_VOICE_AND_VIDEO],
            i = (0, a.w)(t);
        n.A.setInputVolume(i, { analyticsLocations: e });
    },
});
