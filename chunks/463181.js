n.d(t, { Z: () => f });
var r = n(54381);
n(473749);
var i = n(722687),
    a = n(838436),
    o = n(51331),
    s = n(63063),
    l = n(652262),
    c = n(981631),
    u = n(313570),
    d = n(388032);
function f() {
    var e;
    let t = null != (e = (0, l.M)()) ? e : void 0,
        n = i.J7.useControlledSetting(t),
        f = i.O8.useControlledSetting(t);
    return null == t
        ? null
        : (0, r.jsx)(a.U, {
              children: (0, r.jsx)(o.ZP, {
                  title: d.intl.string(d.t.CyLYKZ),
                  note: d.intl.format(u.default["6mK5Pz"], {
                      helpdeskArticle: s.Z.getArticleURL(c.BhN.QUESTS_PRIVACY_CONTROLS),
                  }),
                  value: !n,
                  onChange: (e) => i.J7.updateControlledSetting(t, !e),
                  disabled: f,
              }),
          });
}
