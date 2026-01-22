n.d(t, { A: () => _ });
var r = n(627968),
    i = n(64700),
    a = n(158954),
    s = n(975571),
    o = n(809505),
    l = n(253932),
    c = n(84373),
    u = n(871930),
    d = n(531525),
    f = n(652215),
    p = n(985018);
function _() {
    let e = (0, c.o)(),
        t = i.useMemo(() => (0, o.YS)(), []);
    return (0, r.jsxs)(u.h, {
        setting: d.H.PRIVACY_DIRECT_MESSAGE_SPAM_FILTER_V2,
        children: [
            (0, r.jsx)(u._, {
                header: p.intl.string(p.t.tiCXaH),
                description: p.intl.format(p.t.RvjRRI, { appealLink: s.A.getArticleURL(f.MVz.SAFE_DIRECT_MESSAGING) }),
            }),
            (0, r.jsx)(a.z6M, {
                value: e,
                options: t,
                onChange: (e) => l.he.updateSetting(e),
            }),
        ],
    });
}
