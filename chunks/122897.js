n.d(t, { Z: () => p });
var r = n(951288);
n(647438);
var i = n(755721),
    a = n(63063),
    o = n(78451),
    s = n(695346),
    l = n(580183),
    c = n(838436),
    u = n(726985),
    d = n(981631),
    f = n(388032),
    _ = n(918526);
function p() {
    let e = (0, l.m)();
    return (0, r.jsxs)(c.U, {
        setting: u.s6.PRIVACY_DIRECT_MESSAGE_SPAM_FILTER_V2,
        children: [
            (0, r.jsx)(c.H, {
                header: f.intl.string(f.t.tiCXaH),
                description: f.intl.format(f.t.RvjRRI, { appealLink: a.Z.getArticleURL(d.BhN.SAFE_DIRECT_MESSAGING) }),
            }),
            (0, r.jsx)(i.Gu, {
                className: _.radioGroup,
                radioItemClassName: _.radioGroupItem,
                value: e,
                options: (0, o.c7)(),
                onChange: (e) => {
                    let { value: t } = e;
                    return s.Xr.updateSetting(t);
                },
            }),
        ],
    });
}
