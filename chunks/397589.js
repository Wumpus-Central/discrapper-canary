var i = r(200651),
    a = r(192379),
    s = r(481060),
    o = r(592125),
    l = r(594174),
    u = r(5192),
    c = r(111810),
    d = r(287941),
    f = r(477931),
    _ = r(235894),
    h = r(388032),
    p = r(814169);
let m = (e) => {
    var n;
    let { message: r } = e,
        m = (0, c.p7)('Message Header') && r.hasPotions(),
        g = o.Z.getChannel(r.getChannelId()),
        E = null === (n = r.potions) || void 0 === n ? void 0 : n[0],
        v = a.useMemo(() => {
            if (null == E) return null;
            let e = l.default.getUser(E.used_by);
            return (0, u.y)(null == g ? void 0 : g.getGuildId(), null == g ? void 0 : g.id, e);
        }, [E, g]),
        I = a.useCallback(() => {
            (0, _.U)(r) && (0, d.Z)(r);
        }, [r]);
    return m && null != v && (null == E ? void 0 : E.type) === f.B.CONFETTI
        ? (0, i.jsx)(s.Clickable, {
              onFocus: I,
              children: (0, i.jsx)(s.Tooltip, {
                  text: h.intl.formatToPlainString(h.t['FE++aG'], { user: v }),
                  children: (e) =>
                      (0, i.jsxs)('div', {
                          className: p.potionBadge,
                          ...e,
                          children: [
                              (0, i.jsx)(s.StarShootingIcon, {
                                  size: 'custom',
                                  color: 'currentColor',
                                  width: 12,
                                  height: 12
                              }),
                              (0, i.jsx)(s.Text, {
                                  variant: 'text-xs/bold',
                                  color: 'currentColor',
                                  children: h.intl.string(h.t['8Rrro6'])
                              })
                          ]
                      })
              })
          })
        : null;
};
n.Z = m;
