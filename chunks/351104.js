n.d(t, { Z: () => g });
var i = n(627968);
n(64700);
var s = n(935649),
    r = n(847599),
    a = n(152076),
    l = n(93857),
    o = n(871930),
    c = n(578746),
    d = n(975571),
    u = n(171316),
    _ = n(500470),
    m = n(652215),
    A = n(985018);
function g() {
    let e = (0, _.k)() ?? void 0,
        t = (0, u.KK)(),
        n = l.ES.useControlledSetting(e);
    return (0, i.jsx)(o.h, {
        children: (0, i.jsx)(c.Ay, {
            title: A.intl.string(A.t["3o2ojh"]),
            value: !t && !n,
            onChange: (t) => {
                !t && (0, a.w)()
                    ? s.A.showAgeVerificationGetStartedModal({ entryPoint: r.q1.MESSAGE_REQUESTS_SETTINGS })
                    : l.ES.updateControlledSetting(e, !t);
            },
            disabled: t,
            note: A.intl.format(A.t.IoztJ0, { helpdeskArticle: d.A.getArticleURL(m.MVz.MESSAGE_REQUESTS) }),
        }),
    });
}
