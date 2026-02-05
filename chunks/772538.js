n.d(t, { A: () => p });
var i = n(627968),
    s = n(64700),
    r = n(954571),
    a = n(975571),
    l = n(115063),
    o = n(253932),
    c = n(112469),
    d = n(871930),
    u = n(578746),
    _ = n(542457),
    m = n(355097),
    A = n(531525);
n(820575);
var g = n(652215),
    E = n(985018);
function h(e) {
    let { ingress: t, guildId: n } = e,
        c = o.pE.useSetting().includes(n),
        m = s.useCallback(
            (e) => {
                let i = (0, l.CN)();
                e ? i.delete(n) : i.add(n),
                    o.pE.updateSetting([...i]),
                    r.default.track(g.HAw.USER_SERVER_PRIVACY_SETTINGS_ACTION, {
                        action: _.m.RESTRICT_GUILD_ACTIVITY_JOIN_TOGGLE,
                        ingress: t,
                        guild_id: n,
                    });
            },
            [t, n],
        );
    return "0" === n
        ? null
        : (0, i.jsx)(d.h, {
              setting: A.H.PRIVACY_SERVER_SPECIFIC_PRIVACY_ACTIVITY_JOINING_V2,
              children: (0, i.jsx)(u.Ay, {
                  title: E.intl.string(E.t["T+nevN"]),
                  value: !c,
                  onChange: m,
                  note: E.intl.format(E.t.jXKQCu, {
                      helpdeskArticle: a.A.getArticleURL(g.MVz.ACTIVITY_STATUS_SETTINGS),
                  }),
              }),
          });
}
function p(e) {
    let { ingress: t = m.bf.USER_SETTINGS_PRIVACY_SAFETY, guildId: n } = e,
        s = (0, c.Tx)();
    return (0, i.jsx)(h, { ingress: t, guildId: n ?? s });
}
