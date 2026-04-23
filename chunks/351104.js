l.d(t, { Z: () => g });
var n = l(627968);
l(64700);
var i = l(935649),
    s = l(847599),
    a = l(152076),
    r = l(93857),
    d = l(106148),
    c = l(650832),
    u = l(975571),
    o = l(171316),
    x = l(500470),
    h = l(652215),
    m = l(985018);
function g() {
    let e = (0, x.k)() ?? void 0,
        t = (0, o.KK)(),
        l = r.ES.useControlledSetting(e);
    return (0, n.jsx)(d.h, {
        children: (0, n.jsx)(c.Ay, {
            title: m.intl.string(m.t["3o2ojh"]),
            value: !t && !l,
            onChange: (t) => {
                !t && (0, a.w)()
                    ? i.A.showAgeVerificationGetStartedModal({ entryPoint: s.q1.MESSAGE_REQUESTS_SETTINGS })
                    : r.ES.updateControlledSetting(e, !t);
            },
            disabled: t,
            note: m.intl.format(m.t.IoztJ0, { helpdeskArticle: u.A.getArticleURL(h.MVz.MESSAGE_REQUESTS) }),
        }),
    });
}
