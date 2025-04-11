n.d(t, { Z: () => _ });
var r = n(200651),
    o = n(192379),
    a = n(481060),
    i = n(782568),
    s = n(592125),
    l = n(594174),
    c = n(63063),
    u = n(5192),
    d = n(992970),
    p = n(111810),
    g = n(287941),
    m = n(477931),
    f = n(235894),
    b = n(981631),
    h = n(388032),
    y = n(277586);
let _ = (e) => {
    var t;
    let { message: n } = e,
        _ = o.useRef(null),
        O = (0, p.p7)('Message Header') && n.hasPotions(),
        v = s.Z.getChannel(n.getChannelId()),
        j = null == (t = n.potions) ? void 0 : t[0],
        x = o.useMemo(() => {
            var e;
            if (null == j) return null;
            let t = l.default.getUser(j.used_by);
            return null != (e = (0, u.y)(null == v ? void 0 : v.getGuildId(), null == v ? void 0 : v.id, t)) ? e : null == t ? void 0 : t.globalName;
        }, [j, v]),
        C = o.useCallback(() => {
            if (null != _.current && (0, f.Uw)(n)) {
                let { x: e, y: t, width: r, height: o } = _.current.getBoundingClientRect();
                (0, g.Z)(
                    n,
                    {
                        x: e,
                        y: t,
                        w: r,
                        h: o
                    },
                    !0,
                    d.LL.UserTriggered
                );
            }
        }, [n]),
        P = o.useCallback(() => {
            (0, i.Z)(c.Z.getArticleURL(b.BhN.CONFETTI_POTION));
        }, []);
    return O && null != x && (null == j ? void 0 : j.type) === m.B.CONFETTI
        ? (0, r.jsx)(a.P3F, {
              onFocus: C,
              onClick: P,
              'aria-label': h.NW.string(h.t.Mp5k6O),
              children: (0, r.jsx)(a.ua7, {
                  text: h.NW.formatToPlainString(h.t['FE++aG'], { user: x }),
                  children: (e) => {
                      var t, n;
                      return (0, r.jsxs)(
                          'div',
                          ((t = (function (e) {
                              for (var t = 1; t < arguments.length; t++) {
                                  var n = null != arguments[t] ? arguments[t] : {},
                                      r = Object.keys(n);
                                  'function' == typeof Object.getOwnPropertySymbols &&
                                      (r = r.concat(
                                          Object.getOwnPropertySymbols(n).filter(function (e) {
                                              return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                          })
                                      )),
                                      r.forEach(function (t) {
                                          var r;
                                          (r = n[t]),
                                              t in e
                                                  ? Object.defineProperty(e, t, {
                                                        value: r,
                                                        enumerable: !0,
                                                        configurable: !0,
                                                        writable: !0
                                                    })
                                                  : (e[t] = r);
                                      });
                              }
                              return e;
                          })(
                              {
                                  ref: _,
                                  className: y.potionBadge
                              },
                              e
                          )),
                          (n = n =
                              {
                                  children: [
                                      (0, r.jsx)(a.l22, {
                                          size: 'custom',
                                          color: 'currentColor',
                                          width: 12,
                                          height: 12
                                      }),
                                      (0, r.jsx)(a.Text, {
                                          variant: 'text-xs/bold',
                                          color: 'currentColor',
                                          children: h.NW.string(h.t['8Rrro6'])
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
