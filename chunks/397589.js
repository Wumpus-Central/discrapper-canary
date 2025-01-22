var i = r(200651),
    a = r(192379),
    o = r(481060),
    s = r(782568),
    l = r(592125),
    u = r(594174),
    c = r(63063),
    d = r(5192),
    f = r(111810),
    p = r(287941),
    h = r(477931),
    _ = r(235894),
    m = r(981631),
    g = r(388032),
    E = r(814169);
let v = (e) => {
    var n;
    let { message: r } = e,
        v = a.useRef(null),
        y = (0, f.p7)('Message Header') && r.hasPotions(),
        b = l.Z.getChannel(r.getChannelId()),
        I = null === (n = r.potions) || void 0 === n ? void 0 : n[0],
        T = a.useMemo(() => {
            if (null == I) return null;
            let e = u.default.getUser(I.used_by);
            return (0, d.y)(null == b ? void 0 : b.getGuildId(), null == b ? void 0 : b.id, e);
        }, [I, b]),
        S = a.useCallback(() => {
            if (null != v.current && (0, _.U)(r)) {
                let { x: e, y: n, width: i, height: a } = v.current.getBoundingClientRect();
                (0, p.Z)(
                    r,
                    {
                        x: e,
                        y: n,
                        w: i,
                        h: a
                    },
                    !0
                );
            }
        }, [r]),
        A = a.useCallback(() => {
            (0, s.Z)(c.Z.getArticleURL(m.BhN.CONFETTI_POTION));
        }, []);
    return y && null != T && (null == I ? void 0 : I.type) === h.B.CONFETTI
        ? (0, i.jsx)(o.Clickable, {
              onFocus: S,
              onClick: A,
              'aria-label': g.intl.string(g.t.Mp5k6O),
              children: (0, i.jsx)(o.Tooltip, {
                  text: g.intl.formatToPlainString(g.t['FE++aG'], { user: T }),
                  children: (e) =>
                      (0, i.jsxs)('div', {
                          ref: v,
                          className: E.potionBadge,
                          ...e,
                          children: [
                              (0, i.jsx)(o.ExperimentalConfettiIcon, {
                                  size: 'custom',
                                  color: 'currentColor',
                                  width: 12,
                                  height: 12
                              }),
                              (0, i.jsx)(o.Text, {
                                  variant: 'text-xs/bold',
                                  color: 'currentColor',
                                  children: g.intl.string(g.t['8Rrro6'])
                              })
                          ]
                      })
              })
          })
        : null;
};
n.Z = v;
