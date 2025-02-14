n.d(t, { Z: () => C }), n(47120);
var i = n(200651),
    s = n(192379),
    r = n(626135),
    l = n(63063),
    a = n(88658),
    o = n(695346),
    c = n(639814),
    d = n(838436),
    u = n(51331),
    m = n(703115),
    h = n(526761),
    g = n(726985),
    x = n(736530),
    _ = n(981631),
    p = n(388032);
function E(e) {
    let { ingress: t, guildId: n } = e,
        c = o.iH.useSetting().includes(n),
        h = s.useCallback(
            (e) => {
                let i = (0, a.rr)();
                e ? i.delete(n) : i.add(n),
                    o.iH.updateSetting([...i]),
                    r.default.track(_.rMx.USER_SERVER_PRIVACY_SETTINGS_ACTION, {
                        action: m.Y.RESTRICT_GUILD_ACTIVITY_JOIN_TOGGLE,
                        ingress: t,
                        guild_id: n
                    });
            },
            [t, n]
        );
    return n === x.T
        ? null
        : (0, i.jsx)(d.U, {
              setting: g.s6.PRIVACY_SERVER_SPECIFIC_PRIVACY_ACTIVITY_JOINING_V2,
              children: (0, i.jsx)(u.Z, {
                  title: p.intl.string(p.t['T+nevL']),
                  value: !c,
                  onChange: h,
                  note: p.intl.format(p.t.jXKQCg, { helpdeskArticle: l.Z.getArticleURL(_.BhN.ACTIVITY_STATUS_SETTINGS) })
              })
          });
}
function C(e) {
    let { ingress: t = h.f4.USER_SETTINGS_PRIVACY_SAFETY, guildId: n } = e,
        s = (0, c.is)();
    return (0, i.jsx)(E, {
        ingress: t,
        guildId: null != n ? n : s
    });
}
