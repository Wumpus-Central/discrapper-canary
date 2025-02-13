n.d(t, { Z: () => x });
var a = n(200651),
    o = n(192379),
    i = n(481060),
    r = n(782568),
    s = n(592125),
    l = n(594174),
    c = n(63063),
    u = n(5192),
    d = n(992970),
    p = n(111810),
    m = n(287941),
    g = n(477931),
    _ = n(235894),
    h = n(981631),
    f = n(388032),
    C = n(158913);
let x = (e) => {
    var t;
    let { message: n } = e,
        x = o.useRef(null),
        v = (0, p.p7)('Message Header') && n.hasPotions(),
        b = s.Z.getChannel(n.getChannelId()),
        T = null === (t = n.potions) || void 0 === t ? void 0 : t[0],
        I = o.useMemo(() => {
            var e;
            if (null == T) return null;
            let t = l.default.getUser(T.used_by);
            return null !== (e = (0, u.y)(null == b ? void 0 : b.getGuildId(), null == b ? void 0 : b.id, t)) && void 0 !== e ? e : null == t ? void 0 : t.globalName;
        }, [T, b]),
        y = o.useCallback(() => {
            if (null != x.current && (0, _.Uw)(n)) {
                let { x: e, y: t, width: a, height: o } = x.current.getBoundingClientRect();
                (0, m.Z)(
                    n,
                    {
                        x: e,
                        y: t,
                        w: a,
                        h: o
                    },
                    !0,
                    d.LL.UserTriggered
                );
            }
        }, [n]),
        N = o.useCallback(() => {
            (0, r.Z)(c.Z.getArticleURL(h.BhN.CONFETTI_POTION));
        }, []);
    return v && null != I && (null == T ? void 0 : T.type) === g.B.CONFETTI
        ? (0, a.jsx)(i.P3F, {
              onFocus: y,
              onClick: N,
              'aria-label': f.intl.string(f.t.Mp5k6O),
              children: (0, a.jsx)(i.ua7, {
                  text: f.intl.formatToPlainString(f.t['FE++aG'], { user: I }),
                  children: (e) =>
                      (0, a.jsxs)('div', {
                          ref: x,
                          className: C.potionBadge,
                          ...e,
                          children: [
                              (0, a.jsx)(i.l22, {
                                  size: 'custom',
                                  color: 'currentColor',
                                  width: 12,
                                  height: 12
                              }),
                              (0, a.jsx)(i.Text, {
                                  variant: 'text-xs/bold',
                                  color: 'currentColor',
                                  children: f.intl.string(f.t['8Rrro6'])
                              })
                          ]
                      })
              })
          })
        : null;
};
