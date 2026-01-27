n.d(t, {
    A: () => _,
});
var r = n(627968);
n(64700);
var i = n(688810),
    l = n(796774),
    s = n(536432),
    a = n(975571),
    o = n(824744),
    c = n(420650),
    d = n(652215),
    u = n(985018);

function _() {
    let e = (0, s.wH)(),
        { analyticsLocations: t } = (0, i.Ay)();
    return (0, r.jsx)(c.A, {
        description: u.intl.format(u.t.BPbGq7, {
            helpCenterArticle: a.A.getArticleURL(d.MVz.SOUNDBOARD),
        }),
        label: u.intl.string(u.t.kbFsAD),
        volume: e,
        onVolumeChange: function (n) {
            (e = (0, o.w)(n)), (0, l.iy)(e, t);
        },
    });
}
