n.d(t, { A: () => m });
var i = n(627968),
    s = n(64700),
    l = n(158954),
    a = n(975571),
    r = n(809505),
    o = n(253932),
    d = n(84373),
    c = n(106148),
    u = n(652215),
    _ = n(985018);
function m() {
    let e = (0, d.o)(),
        t = s.useMemo(() => (0, r.YS)(), []);
    return (0, i.jsxs)(c.h, {
        children: [
            (0, i.jsx)(c._, {
                header: _.intl.string(_.t.tiCXaH),
                description: _.intl.format(_.t.RvjRRI, { appealLink: a.A.getArticleURL(u.MVz.SAFE_DIRECT_MESSAGING) }),
            }),
            (0, i.jsx)(l.z6M, { value: e, options: t, onChange: (e) => o.he.updateSetting(e) }),
        ],
    });
}
