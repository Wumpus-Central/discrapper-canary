n.d(e, { $: () => c });
var i = n(100527),
    l = n(509613),
    s = n(208049),
    u = n(242291),
    r = n(63063),
    a = n(36703),
    o = n(313789),
    S = n(981631),
    T = n(388032);
let c = (0, l.UO)(o.n.SOUNDBOARD_VOLUME_SETTING, {
    useTitle: () => T.intl.string(T.t.kbFsAD),
    useSubtitle: () => T.intl.format(T.t.BPbGq7, { helpCenterArticle: r.Z.getArticleURL(S.BhN.SOUNDBOARD) }),
    setValue: function (t) {
        let e = [i.Z.USER_SETTINGS_VOICE_AND_VIDEO],
            n = (0, a.A)(t);
        (0, s.xz)(n, e);
    },
    minValue: 0,
    maxValue: 100,
    getInitialValue: function () {
        let t = (0, u.pI)();
        return (0, a.P)(t);
    },
    onValueRender: function (t) {
        return "".concat(t.toFixed(0), "%");
    },
});
