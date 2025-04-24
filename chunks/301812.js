n.d(t, { Z: () => x }), n(388685);
var i = n(200651),
    r = n(192379),
    s = n(626135),
    l = n(63063),
    a = n(88658),
    o = n(695346),
    c = n(639814),
    d = n(838436),
    u = n(51331),
    m = n(703115),
    p = n(526761),
    g = n(726985),
    h = n(736530),
    f = n(981631),
    b = n(388032);
function _(e) {
    let { ingress: t, guildId: n } = e,
        c = o.SE.useSetting().includes(n),
        p = r.useCallback(
            (e) => {
                let i = (0, a._o)();
                e ? i.delete(n) : i.add(n),
                    o.SE.updateSetting([...i]),
                    s.default.track(f.rMx.USER_SERVER_PRIVACY_SETTINGS_ACTION, {
                        action: m.Y.RESTRICT_GUILD_ACTIVITY_STATUS_TOGGLE,
                        ingress: t,
                        guild_id: n
                    });
            },
            [t, n]
        );
    return n === h.T
        ? null
        : (0, i.jsx)(d.U, {
              setting: g.s6.PRIVACY_SERVER_SPECIFIC_PRIVACY_ACTIVITY_STATUS_V2,
              children: (0, i.jsx)(u.Z, {
                  title: b.intl.string(b.t.IQO6Bg),
                  value: !c,
                  onChange: p,
                  note: b.intl.format(b.t.v03Xpq, { helpdeskArticle: l.Z.getArticleURL(f.BhN.ACTIVITY_STATUS_SETTINGS) })
              })
          });
}
function x(e) {
    let { ingress: t = p.f4.USER_SETTINGS_PRIVACY_SAFETY, guildId: n } = e,
        r = (0, c.is)();
    return (0, i.jsx)(_, {
        ingress: t,
        guildId: null != n ? n : r
    });
}
