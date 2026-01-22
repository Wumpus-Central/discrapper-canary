n.d(t, { Z: () => h });
var r = n(627968);
n(64700);
var i = n(935649),
    a = n(847599),
    s = n(152076),
    o = n(93857),
    l = n(871930),
    c = n(578746),
    u = n(975571),
    d = n(171316),
    f = n(500470),
    p = n(652215),
    _ = n(985018);
function h() {
    var e;
    let t = null != (e = (0, f.k)()) ? e : void 0,
        n = (0, d.KK)(),
        h = o.ES.useControlledSetting(t);
    function m(e) {
        !e && (0, s.w)()
            ? i.A.showAgeVerificationGetStartedModal({ entryPoint: a.q1.MESSAGE_REQUESTS_SETTINGS })
            : o.ES.updateControlledSetting(t, !e);
    }
    return (0, r.jsx)(l.h, {
        children: (0, r.jsx)(c.Ay, {
            title: _.intl.string(_.t["3o2ojh"]),
            value: !n && !h,
            onChange: (e) => m(e),
            disabled: n,
            note: _.intl.format(_.t.IoztJ0, { helpdeskArticle: u.A.getArticleURL(p.MVz.MESSAGE_REQUESTS) }),
        }),
    });
}
