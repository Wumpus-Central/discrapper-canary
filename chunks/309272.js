n.d(t, { A: () => _ });
var r = n(627968);
n(64700);
var i = n(632553),
    a = n(171316),
    s = n(975571),
    o = n(253932),
    l = n(871930),
    c = n(578746),
    u = n(531525),
    d = n(652215),
    f = n(985018),
    p = n(842130);
function _() {
    let e = o.H1.useSetting(),
        t = (0, a.uM)(),
        n = f.t.sJYh5t,
        _ = f.t.cf9mvV,
        h = (0, i.g)();
    return (0, r.jsx)(l.h, {
        setting: u.H.PRIVACY_DATA_QUESTS_V2,
        children: (0, r.jsx)(c.Ay, {
            title: f.intl.string(n),
            note: f.intl.format(_, { helpdeskArticle: s.A.getArticleURL(d.MVz.QUESTS_PRIVACY_CONTROLS) }),
            value: !e,
            onChange: (e) => o.H1.updateSetting(!e),
            disabled: h || t,
            tooltipText: t ? f.intl.string(p.default["6Af/cw"]) : void 0,
        }),
    });
}
