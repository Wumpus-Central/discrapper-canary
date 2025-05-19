n.d(t, { I: () => p });
var r = n(255367),
    i = n(73800),
    a = n(232418),
    o = n(442837),
    s = n(481060),
    l = n(748523),
    c = n(430824),
    u = n(496675),
    d = n(981631),
    f = n(388032),
    _ = n(922676);
let p = (e) => {
    let { guildId: t } = e,
        n = (0, o.e7)([c.Z, u.Z], () => {
            let e = c.Z.getGuild(t);
            return u.Z.can(d.Plq.CREATE_GUILD_EXPRESSIONS, e) && null != e ? e.id : null;
        }),
        p = i.useCallback(() => {
            (0, l.i)({ guildId: n });
        }, [n]);
    return null == n
        ? null
        : (0, r.jsx)('div', {
              className: _.link,
              children: (0, r.jsx)(s.Qjf, {
                  icon: a.S,
                  iconPosition: 'start',
                  onClick: p,
                  text: f.intl.string(f.t.iMJO39),
                  variant: 'link'
              })
          });
};
