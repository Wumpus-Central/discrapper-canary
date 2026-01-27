n.d(t, {
    Z: () => g,
});
var r = n(627968);
n(64700);
var i = n(935649),
    l = n(847599),
    s = n(152076),
    a = n(93857),
    o = n(871930),
    c = n(578746),
    d = n(975571),
    u = n(171316),
    _ = n(500470),
    p = n(652215),
    m = n(985018);

function g() {
    var e;
    let t = null != (e = (0, _.k)()) ? e : void 0,
        n = (0, u.KK)(),
        g = a.ES.useControlledSetting(t);
    return (0, r.jsx)(o.h, {
        children: (0, r.jsx)(c.Ay, {
            title: m.intl.string(m.t["3o2ojh"]),
            value: !n && !g,
            onChange: (e) => {
                !e && (0, s.w)()
                    ? i.A.showAgeVerificationGetStartedModal({
                          entryPoint: l.q1.MESSAGE_REQUESTS_SETTINGS,
                      })
                    : a.ES.updateControlledSetting(t, !e);
            },
            disabled: n,
            note: m.intl.format(m.t.IoztJ0, {
                helpdeskArticle: d.A.getArticleURL(p.MVz.MESSAGE_REQUESTS),
            }),
        }),
    });
}
