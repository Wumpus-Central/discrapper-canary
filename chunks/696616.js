n.d(t, {
    A: () => f,
});
var r = n(627968);
n(64700);
var i = n(93857),
    a = n(871930),
    s = n(578746),
    o = n(975571),
    l = n(500470),
    c = n(652215),
    u = n(842130),
    d = n(985018);

function f() {
    var e;
    let t = null != (e = (0, l.k)()) ? e : void 0,
        n = i.kf.useControlledSetting(t);
    return (0, r.jsx)(a.h, {
        children: (0, r.jsx)(s.Ay, {
            title: d.intl.string(u.default.ZhaNu8),
            note: d.intl.format(u.default.cnCK6b, {
                helpdeskArticle: o.A.getArticleURL(c.MVz.QUESTS_PRIVACY_CONTROLS),
            }),
            value: !n,
            onChange: (e) => i.kf.updateControlledSetting(t, !e),
        }),
    });
}
