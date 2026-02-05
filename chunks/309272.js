n.d(t, { A: () => A });
var i = n(627968);
n(64700);
var s = n(632553),
    r = n(171316),
    a = n(975571),
    l = n(253932),
    o = n(871930),
    c = n(578746),
    d = n(531525),
    u = n(652215),
    _ = n(985018),
    m = n(842130);
function A() {
    let e = l.H1.useSetting(),
        t = (0, r.uM)(),
        n = _.t.sJYh5t,
        A = _.t.cf9mvV,
        g = (0, s.g)();
    return (0, i.jsx)(o.h, {
        setting: d.H.PRIVACY_DATA_QUESTS_V2,
        children: (0, i.jsx)(c.Ay, {
            title: _.intl.string(n),
            note: _.intl.format(A, { helpdeskArticle: a.A.getArticleURL(u.MVz.QUESTS_PRIVACY_CONTROLS) }),
            value: !e,
            onChange: (e) => l.H1.updateSetting(!e),
            disabled: g || t,
            tooltipText: t ? _.intl.string(m.default["6Af/cw"]) : void 0,
        }),
    });
}
