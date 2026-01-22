n.d(t, { A: () => d });
var r = n(627968),
    i = n(871930),
    a = n(578746),
    s = n(975571),
    o = n(171316),
    l = n(652215),
    c = n(842130),
    u = n(985018);
function d() {
    let { hasConsented: e, updateConsent: t } = (0, o.lH)(l.YAq.PERSONALIZATION);
    return (0, r.jsx)(i.h, {
        children: (0, r.jsx)(a.Ay, {
            title: u.intl.string(c.default.XMPqUx),
            note: u.intl.format(c.default.Imp6Ns, {
                helpdeskArticle: s.A.getArticleURL(l.MVz.DATA_USED_FOR_RECOMMENDED),
            }),
            value: e,
            onChange: t,
        }),
    });
}
