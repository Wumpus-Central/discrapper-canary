i.d(e, { _: () => A });
var n = i(793574),
    l = i(419954),
    s = i(796774),
    r = i(536432),
    a = i(975571),
    u = i(824744),
    o = i(780964),
    d = i(652215),
    T = i(985018);
let A = (0, l.sN)(o.X.SOUNDBOARD_VOLUME_SETTING, {
    useTitle: () => T.intl.string(T.t.kbFsAD),
    useSubtitle: () => T.intl.format(T.t.BPbGq7, { helpCenterArticle: a.A.getArticleURL(d.MVz.SOUNDBOARD) }),
    setValue: function (t) {
        let e = [n.A.USER_SETTINGS_VOICE_AND_VIDEO],
            i = (0, u.w)(t);
        (0, s.iy)(i, e);
    },
    minValue: 0,
    maxValue: 100,
    getInitialValue: function () {
        let t = (0, r.wH)();
        return (0, u.M)(t);
    },
    onValueRender: function (t) {
        return `${t.toFixed(0)}%`;
    },
});
