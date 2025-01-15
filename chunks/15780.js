n.d(t, {
    Z: function () {
        return h;
    }
});
var i = n(200651),
    s = n(192379),
    r = n(120356),
    a = n.n(r),
    l = n(481060),
    o = n(630388),
    c = n(88658),
    d = n(695346),
    u = n(981631),
    m = n(388032),
    g = n(232186);
function h() {
    let e = d.xq.useSetting(),
        t = s.useMemo(() => (0, c.bL)(e), [e]);
    return (0, i.jsx)(l.FormSection, {
        tag: l.FormTitleTags.H1,
        title: m.intl.string(m.t.fyA119),
        children: (0, i.jsxs)(l.FormSection, {
            title: m.intl.string(m.t.vyodkJ),
            className: g.marginBottom40,
            children: [
                (0, i.jsx)(l.FormSwitch, {
                    className: a()(g.marginTop8, g.marginBottom20),
                    value: t.all,
                    onChange: (e) => d.xq.updateSetting(e ? u.HGf : u.HGf & ~u.SOq.NO_RELATION),
                    children: m.intl.string(m.t.mGr3CQ)
                }),
                (0, i.jsx)(l.FormSwitch, {
                    value: t.all || t.mutualFriends,
                    onChange: (t) => d.xq.updateSetting(t ? o.pj(e, u.SOq.MUTUAL_FRIENDS) : o.M1(e, u.SOq.MUTUAL_FRIENDS, u.SOq.NO_RELATION)),
                    children: m.intl.string(m.t.IqlCSk)
                }),
                (0, i.jsx)(l.FormSwitch, {
                    value: t.all || t.mutualGuilds,
                    onChange: (t) => d.xq.updateSetting(t ? o.pj(e, u.SOq.MUTUAL_GUILDS) : o.M1(e, u.SOq.MUTUAL_GUILDS, u.SOq.NO_RELATION)),
                    children: m.intl.string(m.t.mozb8f)
                })
            ]
        })
    });
}
