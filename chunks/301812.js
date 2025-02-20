n.d(t, { Z: () => x }), n(47120);
var r = n(200651),
    i = n(192379),
    s = n(626135),
    a = n(63063),
    l = n(88658),
    o = n(695346),
    c = n(639814),
    d = n(838436),
    u = n(51331),
    m = n(703115),
    g = n(526761),
    p = n(726985),
    h = n(736530),
    f = n(981631),
    b = n(388032);
function N(e) {
    let { ingress: t, guildId: n } = e,
        c = o.SE.useSetting().includes(n),
        g = i.useCallback(
            (e) => {
                let r = (0, l._o)();
                e ? r.delete(n) : r.add(n),
                    o.SE.updateSetting([...r]),
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
        : (0, r.jsx)(d.U, {
              setting: p.s6.PRIVACY_SERVER_SPECIFIC_PRIVACY_ACTIVITY_STATUS_V2,
              children: (0, r.jsx)(u.Z, {
                  title: b.NW.string(b.t.IQO6Bg),
                  value: !c,
                  onChange: g,
                  note: b.NW.format(b.t.v03Xpq, { helpdeskArticle: a.Z.getArticleURL(f.BhN.ACTIVITY_STATUS_SETTINGS) })
              })
          });
}
function x(e) {
    let { ingress: t = g.f4.USER_SETTINGS_PRIVACY_SAFETY, guildId: n } = e,
        i = (0, c.is)();
    return (0, r.jsx)(N, {
        ingress: t,
        guildId: null != n ? n : i
    });
}
