i.d(e, { A: () => T });
var n = i(627968),
    l = i(64700),
    r = i(954571),
    s = i(975571),
    d = i(115063),
    a = i(253932),
    u = i(112469),
    _ = i(106148),
    S = i(650832),
    o = i(542457),
    g = i(355097);
i(927693);
var E = i(652215),
    A = i(985018);
function c(t) {
    let { ingress: e, guildId: i } = t,
        u = a.pE.useSetting().includes(i),
        g = l.useCallback(
            (t) => {
                let n = (0, d.CN)();
                t ? n.delete(i) : n.add(i),
                    a.pE.updateSetting([...n]),
                    r.default.track(E.HAw.USER_SERVER_PRIVACY_SETTINGS_ACTION, {
                        action: o.m.RESTRICT_GUILD_ACTIVITY_JOIN_TOGGLE,
                        ingress: e,
                        guild_id: i,
                    });
            },
            [e, i],
        );
    return "0" === i
        ? null
        : (0, n.jsx)(_.h, {
              children: (0, n.jsx)(S.Ay, {
                  title: A.intl.string(A.t["T+nevN"]),
                  value: !u,
                  onChange: g,
                  note: A.intl.format(A.t.jXKQCu, {
                      helpdeskArticle: s.A.getArticleURL(E.MVz.ACTIVITY_STATUS_SETTINGS),
                  }),
              }),
          });
}
function T(t) {
    let { ingress: e = g.bf.USER_SETTINGS_PRIVACY_SAFETY, guildId: i } = t,
        l = (0, u.Tx)();
    return (0, n.jsx)(c, { ingress: e, guildId: i ?? l });
}
