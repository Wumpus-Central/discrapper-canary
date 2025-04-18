n.d(t, { Z: () => h });
var r = n(200651);
n(192379);
var i = n(524437),
    s = n(481060),
    a = n(63063),
    l = n(78451),
    o = n(695346),
    c = n(838436),
    d = n(973005),
    u = n(726985),
    m = n(981631),
    g = n(388032),
    p = n(889652);
function h() {
    var e;
    let t = o.Xr.useSetting(),
        n = o.UP.useSetting(),
        h = t !== i.Xr.DEFAULT_UNSET ? t : null != (e = d.O7.get(n)) ? e : i.Xr.NON_FRIENDS;
    return (0, r.jsxs)(c.U, {
        setting: u.s6.PRIVACY_DIRECT_MESSAGE_SPAM_FILTER_V2,
        children: [
            (0, r.jsx)(c.H, {
                header: g.NW.string(g.t.tiCXaG),
                description: g.NW.format(g.t.RvjRRE, { appealLink: a.Z.getArticleURL(m.BhN.SAFE_DIRECT_MESSAGING) })
            }),
            (0, r.jsx)(s.FXm, {
                className: p.radioGroup,
                radioItemClassName: p.radioGroupItem,
                value: h,
                options: (0, l.c7)(),
                onChange: (e) => {
                    let { value: t } = e;
                    return o.Xr.updateSetting(t);
                }
            })
        ]
    });
}
