n.d(t, {
    Z: function () {
        return p;
    }
});
var i = n(200651);
n(192379);
var r = n(524437),
    s = n(481060),
    a = n(63063),
    l = n(78451),
    o = n(695346),
    c = n(838436),
    d = n(973005),
    u = n(726985),
    m = n(981631),
    g = n(388032),
    h = n(763396);
function p() {
    var e, t, n;
    let p = o.Xr.useSetting(),
        x = o.UP.useSetting();
    let f = ((e = p), (t = x), e !== r.Xr.DEFAULT_UNSET ? e : null !== (n = d.O7.get(t)) && void 0 !== n ? n : r.Xr.NON_FRIENDS);
    return (0, i.jsxs)(c.U, {
        setting: u.s6.PRIVACY_DIRECT_MESSAGE_SPAM_FILTER_V2,
        children: [
            (0, i.jsx)(c.H, {
                header: g.intl.string(g.t.tiCXaG),
                description: g.intl.format(g.t.RvjRRE, { appealLink: a.Z.getArticleURL(m.BhN.SAFE_DIRECT_MESSAGING) })
            }),
            (0, i.jsx)(s.RadioGroup, {
                className: h.radioGroup,
                radioItemClassName: h.radioGroupItem,
                value: f,
                options: (0, l.c7)(),
                onChange: (e) => {
                    let { value: t } = e;
                    return o.Xr.updateSetting(t);
                }
            })
        ]
    });
}
