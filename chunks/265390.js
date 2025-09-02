n.d(t, { Z: () => d });
var r = n(951288);
n(647438);
var i = n(63063),
    a = n(695346),
    o = n(838436),
    s = n(51331),
    l = n(726985),
    c = n(981631),
    u = n(388032);
function d() {
    let e = a.JT.useSetting(),
        t = a.bh.useSetting();
    return (0, r.jsx)(o.U, {
        setting: l.s6.PRIVACY_DATA_QUESTS_3P,
        children: (0, r.jsx)(s.Z, {
            title: u.intl.string(u.t.CyLYKS),
            note: u.intl.format(u.t["2QFDU1"], { helpdeskArticle: i.Z.getArticleURL(c.BhN.QUESTS_PRIVACY_CONTROLS) }),
            value: !e,
            onChange: (e) => a.JT.updateSetting(!e),
            disabled: t,
        }),
    });
}
