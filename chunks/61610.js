n.d(e, { A: () => E });
var i = n(627968),
    l = n(64700),
    r = n(954571),
    u = n(115063),
    d = n(253932),
    s = n(112469),
    a = n(106148),
    o = n(650832),
    c = n(542457),
    g = n(355097);
n(927693);
var S = n(652215),
    _ = n(985018),
    T = n(536482);
function A(t) {
    let { ingress: e, guildId: n } = t,
        s = d.JG.useSetting().includes(n),
        g = l.useCallback(
            (t) => {
                let i = (0, u.Kk)();
                t ? i.delete(n) : i.add(n),
                    d.JG.updateSetting([...i]),
                    r.default.track(S.HAw.USER_SERVER_PRIVACY_SETTINGS_ACTION, {
                        action: c.m.RESTRICT_GUILD_ACTIVITY_STATUS_TOGGLE,
                        ingress: e,
                        guild_id: n,
                    });
            },
            [e, n],
        );
    return "0" === n
        ? null
        : (0, i.jsx)(a.h, {
              children: (0, i.jsx)(o.Ay, {
                  title: _.intl.string(T.default.WhdCGP),
                  value: !s,
                  onChange: g,
                  note: _.intl.string(T.default.UQ9RHJ),
              }),
          });
}
function E(t) {
    let { ingress: e = g.bf.USER_SETTINGS_PRIVACY_SAFETY, guildId: n } = t,
        l = (0, s.Tx)();
    return (0, i.jsx)(A, { ingress: e, guildId: n ?? l });
}
