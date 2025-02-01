n.d(t, { Z: () => v });
var i = n(200651),
    r = n(192379),
    a = n(481060),
    s = n(782568),
    o = n(592125),
    l = n(594174),
    u = n(63063),
    c = n(5192),
    d = n(992970),
    f = n(111810),
    _ = n(287941),
    p = n(477931),
    h = n(235894),
    m = n(981631),
    g = n(388032),
    E = n(814169);
let v = (e) => {
    var t;
    let { message: n } = e,
        v = r.useRef(null),
        y = (0, f.p7)('Message Header') && n.hasPotions(),
        I = o.Z.getChannel(n.getChannelId()),
        T = null === (t = n.potions) || void 0 === t ? void 0 : t[0],
        b = r.useMemo(() => {
            var e;
            if (null == T) return null;
            let t = l.default.getUser(T.used_by);
            return null !== (e = (0, c.y)(null == I ? void 0 : I.getGuildId(), null == I ? void 0 : I.id, t)) && void 0 !== e ? e : null == t ? void 0 : t.globalName;
        }, [T, I]),
        S = r.useCallback(() => {
            if (null != v.current && (0, h.Uw)(n)) {
                let { x: e, y: t, width: i, height: r } = v.current.getBoundingClientRect();
                (0, _.Z)(
                    n,
                    {
                        x: e,
                        y: t,
                        w: i,
                        h: r
                    },
                    !0,
                    d.LL.UserTriggered
                );
            }
        }, [n]),
        A = r.useCallback(() => {
            (0, s.Z)(u.Z.getArticleURL(m.BhN.CONFETTI_POTION));
        }, []);
    return y && null != b && (null == T ? void 0 : T.type) === p.B.CONFETTI
        ? (0, i.jsx)(a.P3F, {
              onFocus: S,
              onClick: A,
              'aria-label': g.intl.string(g.t.Mp5k6O),
              children: (0, i.jsx)(a.ua7, {
                  text: g.intl.formatToPlainString(g.t['FE++aG'], { user: b }),
                  children: (e) =>
                      (0, i.jsxs)('div', {
                          ref: v,
                          className: E.potionBadge,
                          ...e,
                          children: [
                              (0, i.jsx)(a.l22, {
                                  size: 'custom',
                                  color: 'currentColor',
                                  width: 12,
                                  height: 12
                              }),
                              (0, i.jsx)(a.Text, {
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
