n.d(e, { A: () => E });
var i = n(627968),
    l = n(64700),
    r = n(954571),
    u = n(975571),
    d = n(115063),
    s = n(253932),
    a = n(112469),
    o = n(106148),
    c = n(650832),
    g = n(542457),
    S = n(355097);
n(927693);
var _ = n(652215),
    T = n(985018);
function A(t) {
    let { ingress: e, guildId: n } = t,
        a = s.pE.useSetting().includes(n),
        S = l.useCallback(
            (t) => {
                let i = (0, d.CN)();
                t ? i.delete(n) : i.add(n),
                    s.pE.updateSetting([...i]),
                    r.default.track(_.HAw.USER_SERVER_PRIVACY_SETTINGS_ACTION, {
                        action: g.m.RESTRICT_GUILD_ACTIVITY_JOIN_TOGGLE,
                        ingress: e,
                        guild_id: n,
                    });
            },
            [e, n],
        );
    return "0" === n
        ? null
        : (0, i.jsx)(o.h, {
              children: (0, i.jsx)(c.Ay, {
                  title: T.intl.string(T.t["T+nevN"]),
                  value: !a,
                  onChange: S,
                  note: T.intl.format(T.t.jXKQCu, {
                      helpdeskArticle: u.A.getArticleURL(_.MVz.ACTIVITY_STATUS_SETTINGS),
                  }),
              }),
          });
}
function E(t) {
    let { ingress: e = S.bf.USER_SETTINGS_PRIVACY_SAFETY, guildId: n } = t,
        l = (0, a.Tx)();
    return (0, i.jsx)(A, { ingress: e, guildId: n ?? l });
}
