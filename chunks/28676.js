n.d(t, { Z: () => d });
var r = n(54381),
    i = n(838436),
    a = n(51331),
    o = n(63063),
    s = n(915009),
    l = n(981631),
    c = n(517319),
    u = n(388032);
function d() {
    let { hasConsented: e, updateConsent: t } = (0, s.aR)(l.pjP.PERSONALIZATION);
    return (0, r.jsx)(i.U, {
        children: (0, r.jsx)(a.ZP, {
            title: u.intl.string(c.default.XMPqUx),
            note: u.intl.format(c.default.Imp6Ns, {
                helpdeskArticle: o.Z.getArticleURL(l.BhN.DATA_USED_FOR_RECOMMENDED),
            }),
            value: e,
            onChange: t,
        }),
    });
}
