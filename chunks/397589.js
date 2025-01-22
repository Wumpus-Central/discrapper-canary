var i = r(200651),
    a = r(192379),
    s = r(481060),
    o = r(782568),
    l = r(592125),
    u = r(594174),
    c = r(63063),
    d = r(5192),
    f = r(111810),
    _ = r(287941),
    h = r(477931),
    p = r(235894),
    m = r(981631),
    g = r(388032),
    E = r(814169);
let v = (e) => {
    var n;
    let { message: r } = e,
        v = a.useRef(null),
        I = (0, f.p7)('Message Header') && r.hasPotions(),
        T = l.Z.getChannel(r.getChannelId()),
        b = null === (n = r.potions) || void 0 === n ? void 0 : n[0],
        y = a.useMemo(() => {
            if (null == b) return null;
            let e = u.default.getUser(b.used_by);
            return (0, d.y)(null == T ? void 0 : T.getGuildId(), null == T ? void 0 : T.id, e);
        }, [b, T]),
        S = a.useCallback(() => {
            if (null != v.current && (0, p.U)(r)) {
                let { x: e, y: n, width: i, height: a } = v.current.getBoundingClientRect();
                (0, _.Z)(
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
            (0, o.Z)(c.Z.getArticleURL(m.BhN.CONFETTI_POTION));
        }, []);
    return I && null != y && (null == b ? void 0 : b.type) === h.B.CONFETTI
        ? (0, i.jsx)(s.Clickable, {
              onFocus: S,
              onClick: A,
              'aria-label': g.intl.string(g.t.Mp5k6O),
              children: (0, i.jsx)(s.Tooltip, {
                  text: g.intl.formatToPlainString(g.t['FE++aG'], { user: y }),
                  children: (e) =>
                      (0, i.jsxs)('div', {
                          ref: v,
                          className: E.potionBadge,
                          ...e,
                          children: [
                              (0, i.jsx)(s.ExperimentalConfettiIcon, {
                                  size: 'custom',
                                  color: 'currentColor',
                                  width: 12,
                                  height: 12
                              }),
                              (0, i.jsx)(s.Text, {
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
