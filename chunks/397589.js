n.d(t, { Z: () => y });
var r = n(255367),
    l = n(73800),
    o = n(481060),
    i = n(782568),
    a = n(592125),
    s = n(594174),
    c = n(63063),
    u = n(5192),
    d = n(992970),
    p = n(111810),
    m = n(287941),
    g = n(477931),
    f = n(235894),
    b = n(981631),
    h = n(388032),
    O = n(277586);
let y = (e) => {
    var t;
    let { message: n } = e,
        y = l.useRef(null),
        v = (0, p.p7)('Message Header') && n.hasPotions(),
        j = a.Z.getChannel(n.getChannelId()),
        P = null == (t = n.potions) ? void 0 : t[0],
        x = l.useMemo(() => {
            var e;
            if (null == P) return null;
            let t = s.default.getUser(P.used_by);
            return null != (e = (0, u.y)(null == j ? void 0 : j.getGuildId(), null == j ? void 0 : j.id, t)) ? e : null == t ? void 0 : t.globalName;
        }, [P, j]),
        w = l.useCallback(() => {
            if (null != y.current && (0, f.Uw)(n)) {
                let { x: e, y: t, width: r, height: l } = y.current.getBoundingClientRect();
                (0, m.Z)(
                    n,
                    {
                        x: e,
                        y: t,
                        w: r,
                        h: l
                    },
                    !0,
                    d.LL.UserTriggered
                );
            }
        }, [n]),
        C = l.useCallback(() => {
            (0, i.Z)(c.Z.getArticleURL(b.BhN.CONFETTI_POTION));
        }, []);
    return v && null != x && (null == P ? void 0 : P.type) === g.B.CONFETTI
        ? (0, r.jsx)(o.P3F, {
              onFocus: w,
              onClick: C,
              'aria-label': h.intl.string(h.t.Mp5k6O),
              children: (0, r.jsx)(o.ua7, {
                  text: h.intl.formatToPlainString(h.t['FE++aG'], { user: x }),
                  children: (e) => {
                      var t, n;
                      return (0, r.jsxs)(
                          'div',
                          ((t = (function (e) {
                              for (var t = 1; t < arguments.length; t++) {
                                  var n = null != arguments[t] ? arguments[t] : {},
                                      r = Object.keys(n);
                                  ('function' == typeof Object.getOwnPropertySymbols &&
                                      (r = r.concat(
                                          Object.getOwnPropertySymbols(n).filter(function (e) {
                                              return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                          })
                                      )),
                                      r.forEach(function (t) {
                                          var r;
                                          ((r = n[t]),
                                              t in e
                                                  ? Object.defineProperty(e, t, {
                                                        value: r,
                                                        enumerable: !0,
                                                        configurable: !0,
                                                        writable: !0
                                                    })
                                                  : (e[t] = r));
                                      }));
                              }
                              return e;
                          })(
                              {
                                  ref: y,
                                  className: O.potionBadge
                              },
                              e
                          )),
                          (n = n =
                              {
                                  children: [
                                      (0, r.jsx)(o.l22, {
                                          size: 'custom',
                                          color: 'currentColor',
                                          width: 12,
                                          height: 12
                                      }),
                                      (0, r.jsx)(o.Text, {
                                          variant: 'text-xs/bold',
                                          color: 'currentColor',
                                          children: h.intl.string(h.t['8Rrro6'])
                                      })
                                  ]
                              }),
                          Object.getOwnPropertyDescriptors
                              ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
                              : (function (e, t) {
                                    var n = Object.keys(e);
                                    if (Object.getOwnPropertySymbols) {
                                        var r = Object.getOwnPropertySymbols(e);
                                        n.push.apply(n, r);
                                    }
                                    return n;
                                })(Object(n)).forEach(function (e) {
                                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                                }),
                          t)
                      );
                  }
              })
          })
        : null;
};
