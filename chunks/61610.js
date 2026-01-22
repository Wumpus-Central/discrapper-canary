n.d(t, { A: () => E }), n(896048);
var r = n(627968),
    i = n(64700),
    a = n(954571),
    s = n(115063),
    o = n(253932),
    l = n(112469),
    c = n(871930),
    u = n(578746),
    d = n(542457),
    f = n(355097),
    p = n(531525);
n(820575);
var _ = n(652215),
    h = n(985018),
    m = n(536482);
function g(e) {
    let { ingress: t, guildId: n } = e,
        l = o.JG.useSetting().includes(n),
        f = i.useCallback(
            (e) => {
                let r = (0, s.Kk)();
                e ? r.delete(n) : r.add(n),
                    o.JG.updateSetting([...r]),
                    a.default.track(_.HAw.USER_SERVER_PRIVACY_SETTINGS_ACTION, {
                        action: d.m.RESTRICT_GUILD_ACTIVITY_STATUS_TOGGLE,
                        ingress: t,
                        guild_id: n,
                    });
            },
            [t, n],
        );
    return "0" === n
        ? null
        : (0, r.jsx)(c.h, {
              setting: p.H.PRIVACY_SERVER_SPECIFIC_PRIVACY_ACTIVITY_STATUS_V2,
              children: (0, r.jsx)(u.Ay, {
                  title: h.intl.string(m.default.WhdCGP),
                  value: !l,
                  onChange: f,
                  note: h.intl.string(m.default.UQ9RHJ),
              }),
          });
}
function E(e) {
    let { ingress: t = f.bf.USER_SETTINGS_PRIVACY_SAFETY, guildId: n } = e,
        i = (0, l.Tx)();
    return (0, r.jsx)(g, {
        ingress: t,
        guildId: null != n ? n : i,
    });
}
