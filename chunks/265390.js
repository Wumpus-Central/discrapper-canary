n.d(t, { Z: () => p });
var r = n(54381);
n(473749);
var i = n(915009),
    a = n(63063),
    o = n(695346),
    s = n(838436),
    l = n(51331),
    c = n(726985),
    u = n(981631),
    d = n(388032),
    f = n(225753);
function p() {
    let e = o.JT.useSetting(),
        t = o.bh.useSetting(),
        n = (0, i.LN)();
    return (0, r.jsx)(s.U, {
        setting: c.s6.PRIVACY_DATA_QUESTS_3P,
        children: (0, r.jsx)(l.ZP, {
            title: d.intl.string(d.t.CyLYKZ),
            note: d.intl.format(d.t["2QFDU/"], { helpdeskArticle: a.Z.getArticleURL(u.BhN.QUESTS_PRIVACY_CONTROLS) }),
            value: !e,
            onChange: (e) => o.JT.updateSetting(!e),
            disabled: t || n,
            tooltipText: n ? d.intl.string(f.default["6Af/cw"]) : void 0,
        }),
    });
}
