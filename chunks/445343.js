n.d(t, { A: () => _ });
var i = n(627968);
n(64700);
var s = n(93857),
    r = n(871930),
    a = n(578746),
    l = n(975571),
    o = n(500470),
    c = n(652215),
    d = n(842130),
    u = n(985018);
function _() {
    let e = (0, o.k)() ?? void 0,
        t = s.yH.useControlledSetting(e),
        n = s.kf.useControlledSetting(e);
    return null == e
        ? null
        : (0, i.jsx)(r.h, {
              children: (0, i.jsx)(a.Ay, {
                  title: u.intl.string(u.t.CyLYKZ),
                  note: u.intl.format(d.default["6mK5Pz"], {
                      helpdeskArticle: l.A.getArticleURL(c.MVz.QUESTS_PRIVACY_CONTROLS),
                  }),
                  value: !t,
                  onChange: (t) => s.yH.updateControlledSetting(e, !t),
                  disabled: n,
              }),
          });
}
