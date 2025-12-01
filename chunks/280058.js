n.d(t, { t: () => m });
var r = n(54381);
n(473749);
var i = n(168107),
    a = n(480916),
    o = n(750832),
    s = n(722687),
    l = n(838436),
    c = n(51331),
    u = n(63063),
    d = n(915009),
    f = n(652262),
    p = n(981631),
    _ = n(388032);
function m() {
    var e;
    let t = null != (e = (0, f.M)()) ? e : void 0,
        n = (0, d.q1)(),
        m = s.IU.useControlledSetting(t);
    function h(e) {
        if (!e && (0, o.S)())
            return void i.Z.showAgeVerificationGetStartedModal({ entryPoint: a.cU.MESSAGE_REQUESTS_SETTINGS });
        s.IU.updateControlledSetting(t, !e);
    }
    return (0, r.jsx)(l.U, {
        children: (0, r.jsx)(c.ZP, {
            title: _.intl.string(_.t["3o2ojh"]),
            value: !n && !m,
            onChange: (e) => h(e),
            disabled: n,
            note: _.intl.format(_.t.IoztJ0, { helpdeskArticle: u.Z.getArticleURL(p.BhN.MESSAGE_REQUESTS) }),
        }),
    });
}
