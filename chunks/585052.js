n.d(t, { A: () => A });
var i = n(627968),
    s = n(64700),
    r = n(158954),
    a = n(975571),
    l = n(809505),
    o = n(253932),
    c = n(84373),
    d = n(871930),
    u = n(531525),
    _ = n(652215),
    m = n(985018);
function A() {
    let e = (0, c.o)(),
        t = s.useMemo(() => (0, l.YS)(), []);
    return (0, i.jsxs)(d.h, {
        setting: u.H.PRIVACY_DIRECT_MESSAGE_SPAM_FILTER_V2,
        children: [
            (0, i.jsx)(d._, {
                header: m.intl.string(m.t.tiCXaH),
                description: m.intl.format(m.t.RvjRRI, { appealLink: a.A.getArticleURL(_.MVz.SAFE_DIRECT_MESSAGING) }),
            }),
            (0, i.jsx)(r.z6M, { value: e, options: t, onChange: (e) => o.he.updateSetting(e) }),
        ],
    });
}
