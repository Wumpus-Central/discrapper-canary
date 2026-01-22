i.d(e, {
    f: () => T,
});
var n = i(827343),
    l = i(793574),
    s = i(419954),
    r = i(430452),
    u = i(824744),
    a = i(780964),
    o = i(985018);
let T = (0, s.sN)(a.X.VOICE_INPUT_VOLUME_SETTING, {
    useTitle: () => o.intl.string(o.t.Rtsr6w),
    useSearchTerms: () => [o.intl.string(o.t.eATD2B), o.intl.string(o.t["3182VD"]), o.intl.string(o.t["DGq/PR"])],
    minValue: 0,
    maxValue: 100,
    getInitialValue: function () {
        let t = r.A.getInputVolume();
        return (0, u.M)(t);
    },
    asValueChanges: function (t) {
        let e = [l.A.USER_SETTINGS_VOICE_AND_VIDEO],
            i = (0, u.w)(t);
        n.A.setInputVolume(i, {
            analyticsLocations: e,
        });
    },
});
