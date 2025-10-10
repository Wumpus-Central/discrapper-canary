n.d(t, { t: () => f });
var r = n(951288);
n(647438);
var i = n(722687),
    a = n(838436),
    o = n(51331),
    s = n(63063),
    l = n(915009),
    c = n(652262),
    u = n(981631),
    d = n(388032);
function f() {
    var e;
    let t = null != (e = (0, c.M)()) ? e : void 0,
        n = (0, l.q1)(),
        f = i.IU.useControlledSetting(t);
    function _(e) {
        i.IU.updateControlledSetting(t, !e);
    }
    return (0, r.jsx)(a.U, {
        children: (0, r.jsx)(o.ZP, {
            title: d.intl.string(d.t["3o2ojo"]),
            value: !n && !f,
            onChange: (e) => _(e),
            disabled: n,
            note: d.intl.format(d.t.IoztJy, { helpdeskArticle: s.Z.getArticleURL(u.BhN.MESSAGE_REQUESTS) }),
        }),
    });
}
