n.d(t, {
    Z: function () {
        return p;
    }
}),
    n(47120);
var i = n(200651),
    s = n(192379),
    r = n(63063),
    a = n(88658),
    l = n(695346),
    o = n(639814),
    c = n(838436),
    d = n(51331),
    u = n(726985),
    m = n(736530),
    g = n(981631),
    h = n(388032);
function p() {
    let e = (0, o.is)(),
        t = l.SE.useSetting().includes(e),
        n = s.useCallback(
            (t) => {
                let n = (0, a._o)();
                t ? n.delete(e) : n.add(e), l.SE.updateSetting([...n]);
            },
            [e]
        );
    return e === m.T
        ? null
        : (0, i.jsx)(c.U, {
              setting: u.s6.PRIVACY_SERVER_SPECIFIC_PRIVACY_ACTIVITY_STATUS_V2,
              children: (0, i.jsx)(d.Z, {
                  title: h.intl.string(h.t.IQO6Bg),
                  value: !t,
                  onChange: n,
                  note: h.intl.format(h.t.v03Xpq, { helpdeskArticle: r.Z.getArticleURL(g.BhN.ACTIVITY_STATUS_SETTINGS) })
              })
          });
}
