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
    p = r(240090);
let m = (e) => {
    var n;
    let { message: r } = e,
        m = a.useRef(null),
        g = (0, c.p7)('Message Header') && r.hasPotions(),
        E = o.Z.getChannel(r.getChannelId()),
        v = null === (n = r.potions) || void 0 === n ? void 0 : n[0],
        I = a.useMemo(() => {
            if (null == v) return null;
            let e = l.default.getUser(v.used_by);
            return (0, u.y)(null == E ? void 0 : E.getGuildId(), null == E ? void 0 : E.id, e);
        }, [v, E]),
        T = a.useCallback(() => {
            if (null != m.current && (0, _.U)(r)) {
                let { x: e, y: n, width: i, height: a } = m.current.getBoundingClientRect();
                (0, d.Z)(r, {
                    x: e,
                    y: n,
                    w: i,
                    h: a
                });
            }
        }, [r]);
    return g && null != I && (null == v ? void 0 : v.type) === f.B.CONFETTI
        ? (0, i.jsx)(s.Clickable, {
              onFocus: T,
              children: (0, i.jsx)(s.Tooltip, {
                  text: h.intl.formatToPlainString(h.t['FE++aG'], { user: I }),
                  children: (e) =>
                      (0, i.jsxs)('div', {
                          ref: m,
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
