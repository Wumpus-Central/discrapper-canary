l.d(t, { A: () => o });
var n = l(627968),
    i = l(106148),
    s = l(650832),
    a = l(975571),
    r = l(171316),
    d = l(652215),
    c = l(602339),
    u = l(985018);
function o() {
    let { hasConsented: e, updateConsent: t } = (0, r.lH)(d.YAq.USAGE_STATISTICS);
    return (0, n.jsx)(i.h, {
        children: (0, n.jsx)(s.Ay, {
            title: u.intl.string(c.default.HjstRR),
            note: u.intl.format(c.default.Z5yJZy, { helpdeskArticle: a.A.getArticleURL(d.MVz.DATA_PRIVACY_CONTROLS) }),
            value: e,
            onChange: t,
        }),
    });
}
