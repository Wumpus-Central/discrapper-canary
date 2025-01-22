n.d(t, {
    Z: function () {
        return _;
    }
}),
    n(47120);
var i = n(200651),
    r = n(192379),
    s = n(626135),
    a = n(63063),
    l = n(88658),
    o = n(695346),
    c = n(639814),
    d = n(838436),
    u = n(51331),
    m = n(703115),
    g = n(526761),
    h = n(726985),
    p = n(736530),
    x = n(981631),
    f = n(388032);
function E(e) {
    let { ingress: t, guildId: n } = e,
        c = o.SE.useSetting().includes(n),
        g = r.useCallback(
            (e) => {
                let i = (0, l._o)();
                e ? i.delete(n) : i.add(n),
                    o.SE.updateSetting([...i]),
                    s.default.track(x.rMx.USER_SERVER_PRIVACY_SETTINGS_ACTION, {
                        action: m.Y.RESTRICT_GUILD_ACTIVITY_STATUS_TOGGLE,
                        ingress: t,
                        guild_id: n
                    });
            },
            [t, n]
        );
    return n === p.T
        ? null
        : (0, i.jsx)(d.U, {
              setting: h.s6.PRIVACY_SERVER_SPECIFIC_PRIVACY_ACTIVITY_STATUS_V2,
              children: (0, i.jsx)(u.Z, {
                  title: f.intl.string(f.t.IQO6Bg),
                  value: !c,
                  onChange: g,
                  note: f.intl.format(f.t.v03Xpq, { helpdeskArticle: a.Z.getArticleURL(x.BhN.ACTIVITY_STATUS_SETTINGS) })
              })
          });
}
function _(e) {
    let { ingress: t = g.f4.USER_SETTINGS_PRIVACY_SAFETY, guildId: n } = e,
        r = (0, c.is)();
    return (0, i.jsx)(E, {
        ingress: t,
        guildId: null != n ? n : r
    });
}
