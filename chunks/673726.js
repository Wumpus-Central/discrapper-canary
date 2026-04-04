n.d(t, { _: () => m });
var i = n(793574),
    s = n(419954),
    l = n(796774),
    a = n(536432),
    r = n(975571),
    o = n(824744),
    d = n(780964),
    c = n(652215),
    u = n(985018);
let m = (0, s.sN)(d.X.SOUNDBOARD_VOLUME_SETTING, {
    useTitle: () => u.intl.string(u.t.kbFsAD),
    useSubtitle: () => u.intl.format(u.t.BPbGq7, { helpCenterArticle: r.A.getArticleURL(c.MVz.SOUNDBOARD) }),
    setValue: function (e) {
        let t = [i.A.USER_SETTINGS_VOICE_AND_VIDEO],
            n = (0, o.w)(e);
        (0, l.iy)(n, t);
    },
    minValue: 0,
    maxValue: 100,
    getInitialValue: function () {
        let e = (0, a.wH)();
        return (0, o.M)(e);
    },
    onValueRender: function (e) {
        return `${e.toFixed(0)}%`;
    },
});
