n.d(t, { Z: () => m });
var r = n(951288);
n(647438);
var i = n(524437),
    a = n(755721),
    o = n(63063),
    s = n(78451),
    l = n(695346),
    c = n(838436),
    u = n(973005),
    d = n(726985),
    f = n(981631),
    _ = n(388032),
    p = n(918526);
function h(e, t) {
    var n;
    return e !== i.Xr.DEFAULT_UNSET ? e : null != (n = u.O7.get(t)) ? n : i.Xr.NON_FRIENDS;
}
function m() {
    let e = h(l.Xr.useSetting(), l.UP.useSetting());
    return (0, r.jsxs)(c.U, {
        setting: d.s6.PRIVACY_DIRECT_MESSAGE_SPAM_FILTER_V2,
        children: [
            (0, r.jsx)(c.H, {
                header: _.intl.string(_.t.tiCXaH),
                description: _.intl.format(_.t.RvjRRI, { appealLink: o.Z.getArticleURL(f.BhN.SAFE_DIRECT_MESSAGING) }),
            }),
            (0, r.jsx)(a.Gu, {
                className: p.radioGroup,
                radioItemClassName: p.radioGroupItem,
                value: e,
                options: (0, s.c7)(),
                onChange: (e) => {
                    let { value: t } = e;
                    return l.Xr.updateSetting(t);
                },
            }),
        ],
    });
}
