n.d(t, { Z: () => d });
var r = n(54381);
n(473749);
var i = n(838436),
    a = n(51331),
    o = n(63063),
    s = n(915009),
    l = n(981631),
    c = n(313570),
    u = n(388032);
function d() {
    let { hasConsented: e, updateConsent: t } = (0, s.aR)(l.pjP.USAGE_STATISTICS);
    return (0, r.jsx)(i.U, {
        children: (0, r.jsx)(a.ZP, {
            title: u.intl.string(c.default.HjstRR),
            note: u.intl.format(c.default.Z5yJZy, { helpdeskArticle: o.Z.getArticleURL(l.BhN.DATA_PRIVACY_CONTROLS) }),
            value: e,
            onChange: t,
        }),
    });
}
