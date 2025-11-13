n.d(e, { Z: () => d });
var i = n(100527),
    l = n(509613),
    u = n(208049),
    r = n(242291),
    s = n(63063),
    a = n(36703),
    o = n(313789),
    c = n(981631),
    E = n(388032);
let d = (0, l.UO)(o.n.SOUNDBOARD_VOLUME_SETTING, {
    useTitle: () => E.intl.string(E.t.kbFsAD),
    useSubtitle: () => E.intl.format(E.t.BPbGq7, { helpCenterArticle: s.Z.getArticleURL(c.BhN.SOUNDBOARD) }),
    minValue: 0,
    maxValue: 100,
    getInitialValue: function () {
        let t = (0, r.pI)();
        return (0, a.P)(t);
    },
    setValue: function (t) {
        let e = [i.Z.USER_SETTINGS_VOICE_AND_VIDEO],
            n = (0, a.A)(t);
        (0, u.xz)(n, e);
    },
    onValueRender: function (t) {
        return "".concat(t.toFixed(0), "%");
    },
});
