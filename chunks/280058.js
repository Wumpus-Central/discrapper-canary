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
    let e = (0, c.F)(),
        t = (0, l.q1)(),
        n = i.IU.useControlledSetting(null == e ? void 0 : e.id);
    function f(t) {
        i.IU.updateControlledSetting(null == e ? void 0 : e.id, !t);
    }
    return (0, r.jsx)(a.U, {
        children: (0, r.jsx)(o.Z, {
            title: d.intl.string(d.t["3o2ojo"]),
            value: !t && !n,
            onChange: (e) => f(e),
            disabled: t,
            note: d.intl.format(d.t.IoztJy, { helpdeskArticle: s.Z.getArticleURL(u.BhN.MESSAGE_REQUESTS) }),
        }),
    });
}
