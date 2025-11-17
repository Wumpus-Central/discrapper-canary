n.d(t, { Z: () => b }), n(388685);
var r = n(54381),
    i = n(473749),
    a = n(626135),
    o = n(63063),
    s = n(88658),
    l = n(695346),
    c = n(639814),
    u = n(838436),
    d = n(51331),
    f = n(703115),
    _ = n(526761),
    p = n(726985),
    h = n(736530),
    m = n(981631),
    g = n(388032);
function E(e) {
    let { ingress: t, guildId: n } = e,
        c = l.iH.useSetting().includes(n),
        _ = i.useCallback(
            (e) => {
                let r = (0, s.rr)();
                e ? r.delete(n) : r.add(n),
                    l.iH.updateSetting([...r]),
                    a.default.track(m.rMx.USER_SERVER_PRIVACY_SETTINGS_ACTION, {
                        action: f.Y.RESTRICT_GUILD_ACTIVITY_JOIN_TOGGLE,
                        ingress: t,
                        guild_id: n,
                    });
            },
            [t, n],
        );
    return n === h.T
        ? null
        : (0, r.jsx)(u.U, {
              setting: p.s6.PRIVACY_SERVER_SPECIFIC_PRIVACY_ACTIVITY_JOINING_V2,
              children: (0, r.jsx)(d.ZP, {
                  title: g.intl.string(g.t["T+nevN"]),
                  value: !c,
                  onChange: _,
                  note: g.intl.format(g.t.jXKQCu, {
                      helpdeskArticle: o.Z.getArticleURL(m.BhN.ACTIVITY_STATUS_SETTINGS),
                  }),
              }),
          });
}
function b(e) {
    let { ingress: t = _.f4.USER_SETTINGS_PRIVACY_SAFETY, guildId: n } = e,
        i = (0, c.is)();
    return (0, r.jsx)(E, {
        ingress: t,
        guildId: null != n ? n : i,
    });
}
