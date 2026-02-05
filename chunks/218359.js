n.d(t, { A: () => u });
var i = n(627968),
    s = n(871930),
    r = n(578746),
    a = n(975571),
    l = n(171316),
    o = n(652215),
    c = n(842130),
    d = n(985018);
function u() {
    let { hasConsented: e, updateConsent: t } = (0, l.lH)(o.YAq.PERSONALIZATION);
    return (0, i.jsx)(s.h, {
        children: (0, i.jsx)(r.Ay, {
            title: d.intl.string(c.default.XMPqUx),
            note: d.intl.format(c.default.Imp6Ns, {
                helpdeskArticle: a.A.getArticleURL(o.MVz.DATA_USED_FOR_RECOMMENDED),
            }),
            value: e,
            onChange: t,
        }),
    });
}
