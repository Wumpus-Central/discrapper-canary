n.d(t, { A: () => p });
var i = n(627968),
    s = n(64700),
    r = n(954571),
    a = n(115063),
    l = n(253932),
    o = n(112469),
    c = n(871930),
    d = n(578746),
    u = n(542457),
    _ = n(355097),
    m = n(531525);
n(820575);
var A = n(652215),
    g = n(985018),
    E = n(536482);
function h(e) {
    let { ingress: t, guildId: n } = e,
        o = l.JG.useSetting().includes(n),
        _ = s.useCallback(
            (e) => {
                let i = (0, a.Kk)();
                e ? i.delete(n) : i.add(n),
                    l.JG.updateSetting([...i]),
                    r.default.track(A.HAw.USER_SERVER_PRIVACY_SETTINGS_ACTION, {
                        action: u.m.RESTRICT_GUILD_ACTIVITY_STATUS_TOGGLE,
                        ingress: t,
                        guild_id: n,
                    });
            },
            [t, n],
        );
    return "0" === n
        ? null
        : (0, i.jsx)(c.h, {
              setting: m.H.PRIVACY_SERVER_SPECIFIC_PRIVACY_ACTIVITY_STATUS_V2,
              children: (0, i.jsx)(d.Ay, {
                  title: g.intl.string(E.default.WhdCGP),
                  value: !o,
                  onChange: _,
                  note: g.intl.string(E.default.UQ9RHJ),
              }),
          });
}
function p(e) {
    let { ingress: t = _.bf.USER_SETTINGS_PRIVACY_SAFETY, guildId: n } = e,
        s = (0, o.Tx)();
    return (0, i.jsx)(h, { ingress: t, guildId: n ?? s });
}
