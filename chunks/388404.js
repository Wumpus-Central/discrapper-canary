n.d(e, { Z: () => E });
var i = n(100527),
    l = n(509613),
    s = n(208049),
    r = n(242291),
    u = n(63063),
    a = n(36703),
    o = n(313789),
    c = n(981631),
    d = n(388032);
let E = (0, l.UO)(o.n.SOUNDBOARD_VOLUME_SETTING, {
    useTitle: () => d.intl.string(d.t.kbFsAD),
    useSubtitle: () => d.intl.format(d.t.BPbGq7, { helpCenterArticle: u.Z.getArticleURL(c.BhN.SOUNDBOARD) }),
    minValue: 0,
    maxValue: 100,
    getInitialValue: function () {
        let t = (0, r.pI)();
        return (0, a.P)(t);
    },
    setValue: function (t) {
        let e = [i.Z.USER_SETTINGS_VOICE_AND_VIDEO],
            n = (0, a.A)(t);
        (0, s.xz)(n, e);
    },
    onValueRender: function (t) {
        return "".concat(t.toFixed(0), "%");
    },
});
