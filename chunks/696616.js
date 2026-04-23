l.d(t, { A: () => x });
var n = l(627968);
l(64700);
var i = l(93857),
    s = l(106148),
    a = l(650832),
    r = l(975571),
    d = l(500470),
    c = l(652215),
    u = l(602339),
    o = l(985018);
function x() {
    let e = (0, d.k)() ?? void 0,
        t = i.kf.useControlledSetting(e);
    return (0, n.jsx)(s.h, {
        children: (0, n.jsx)(a.Ay, {
            title: o.intl.string(u.default.ZhaNu8),
            note: o.intl.format(u.default.cnCK6b, {
                helpdeskArticle: r.A.getArticleURL(c.MVz.QUESTS_PRIVACY_CONTROLS),
            }),
            value: !t,
            onChange: (t) => i.kf.updateControlledSetting(e, !t),
        }),
    });
}
