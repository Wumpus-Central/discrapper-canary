i.d(e, { A: () => T });
var n = i(627968),
    l = i(64700),
    r = i(954571),
    s = i(115063),
    d = i(253932),
    a = i(112469),
    u = i(106148),
    _ = i(650832),
    S = i(542457),
    o = i(355097);
i(927693);
var g = i(652215),
    E = i(985018),
    A = i(395277);
function c(t) {
    let { ingress: e, guildId: i } = t,
        a = d.JG.useSetting().includes(i),
        o = l.useCallback(
            (t) => {
                let n = (0, s.Kk)();
                t ? n.delete(i) : n.add(i),
                    d.JG.updateSetting([...n]),
                    r.default.track(g.HAw.USER_SERVER_PRIVACY_SETTINGS_ACTION, {
                        action: S.m.RESTRICT_GUILD_ACTIVITY_STATUS_TOGGLE,
                        ingress: e,
                        guild_id: i,
                    });
            },
            [e, i],
        );
    return "0" === i
        ? null
        : (0, n.jsx)(u.h, {
              children: (0, n.jsx)(_.Ay, {
                  title: E.intl.string(A.default.WhdCGP),
                  value: !a,
                  onChange: o,
                  note: E.intl.string(A.default.UQ9RHJ),
              }),
          });
}
function T(t) {
    let { ingress: e = o.bf.USER_SETTINGS_PRIVACY_SAFETY, guildId: i } = t,
        l = (0, a.Tx)();
    return (0, n.jsx)(c, { ingress: e, guildId: i ?? l });
}
