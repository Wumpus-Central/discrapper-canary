n.d(t, { A: () => E }), n(896048);
var r = n(627968),
    i = n(64700),
    a = n(954571),
    s = n(975571),
    o = n(115063),
    l = n(253932),
    c = n(112469),
    u = n(871930),
    d = n(578746),
    f = n(542457),
    p = n(355097),
    _ = n(531525);
n(820575);
var h = n(652215),
    m = n(985018);
function g(e) {
    let { ingress: t, guildId: n } = e,
        c = l.pE.useSetting().includes(n),
        p = i.useCallback(
            (e) => {
                let r = (0, o.CN)();
                e ? r.delete(n) : r.add(n),
                    l.pE.updateSetting([...r]),
                    a.default.track(h.HAw.USER_SERVER_PRIVACY_SETTINGS_ACTION, {
                        action: f.m.RESTRICT_GUILD_ACTIVITY_JOIN_TOGGLE,
                        ingress: t,
                        guild_id: n,
                    });
            },
            [t, n],
        );
    return "0" === n
        ? null
        : (0, r.jsx)(u.h, {
              setting: _.H.PRIVACY_SERVER_SPECIFIC_PRIVACY_ACTIVITY_JOINING_V2,
              children: (0, r.jsx)(d.Ay, {
                  title: m.intl.string(m.t["T+nevN"]),
                  value: !c,
                  onChange: p,
                  note: m.intl.format(m.t.jXKQCu, {
                      helpdeskArticle: s.A.getArticleURL(h.MVz.ACTIVITY_STATUS_SETTINGS),
                  }),
              }),
          });
}
function E(e) {
    let { ingress: t = p.bf.USER_SETTINGS_PRIVACY_SAFETY, guildId: n } = e,
        i = (0, c.Tx)();
    return (0, r.jsx)(g, {
        ingress: t,
        guildId: null != n ? n : i,
    });
}
