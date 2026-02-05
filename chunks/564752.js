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
    let { hasConsented: e, updateConsent: t } = (0, l.lH)(o.YAq.USAGE_STATISTICS);
    return (0, i.jsx)(s.h, {
        children: (0, i.jsx)(r.Ay, {
            title: d.intl.string(c.default.HjstRR),
            note: d.intl.format(c.default.Z5yJZy, { helpdeskArticle: a.A.getArticleURL(o.MVz.DATA_PRIVACY_CONTROLS) }),
            value: e,
            onChange: t,
        }),
    });
}
