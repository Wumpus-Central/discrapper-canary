n.d(t, { A: () => _ });
var i = n(627968);
n(64700);
var s = n(93857),
    r = n(871930),
    a = n(578746),
    l = n(975571),
    o = n(500470),
    c = n(652215),
    d = n(842130),
    u = n(985018);
function _() {
    let e = (0, o.k)() ?? void 0,
        t = s.kf.useControlledSetting(e);
    return (0, i.jsx)(r.h, {
        children: (0, i.jsx)(a.Ay, {
            title: u.intl.string(d.default.ZhaNu8),
            note: u.intl.format(d.default.cnCK6b, {
                helpdeskArticle: l.A.getArticleURL(c.MVz.QUESTS_PRIVACY_CONTROLS),
            }),
            value: !t,
            onChange: (t) => s.kf.updateControlledSetting(e, !t),
        }),
    });
}
