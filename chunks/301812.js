n.d(t, { Z: () => b }), n(388685);
var r = n(54381),
    i = n(473749),
    a = n(626135),
    o = n(88658),
    s = n(695346),
    l = n(639814),
    c = n(838436),
    u = n(51331),
    d = n(703115),
    f = n(526761),
    _ = n(726985),
    p = n(736530),
    h = n(981631),
    m = n(388032),
    g = n(361742);
function E(e) {
    let { ingress: t, guildId: n } = e,
        l = s.SE.useSetting().includes(n),
        f = i.useCallback(
            (e) => {
                let r = (0, o._o)();
                e ? r.delete(n) : r.add(n),
                    s.SE.updateSetting([...r]),
                    a.default.track(h.rMx.USER_SERVER_PRIVACY_SETTINGS_ACTION, {
                        action: d.Y.RESTRICT_GUILD_ACTIVITY_STATUS_TOGGLE,
                        ingress: t,
                        guild_id: n,
                    });
            },
            [t, n],
        );
    return n === p.T
        ? null
        : (0, r.jsx)(c.U, {
              setting: _.s6.PRIVACY_SERVER_SPECIFIC_PRIVACY_ACTIVITY_STATUS_V2,
              children: (0, r.jsx)(u.ZP, {
                  title: m.intl.string(g.default.WhdCGP),
                  value: !l,
                  onChange: f,
                  note: m.intl.string(g.default.UQ9RHJ),
              }),
          });
}
function b(e) {
    let { ingress: t = f.f4.USER_SETTINGS_PRIVACY_SAFETY, guildId: n } = e,
        i = (0, l.is)();
    return (0, r.jsx)(E, {
        ingress: t,
        guildId: null != n ? n : i,
    });
}
