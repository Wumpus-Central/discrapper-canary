n.d(t, { Z: () => y });
var r = n(200651),
    o = n(192379),
    a = n(481060),
    i = n(782568),
    s = n(592125),
    c = n(594174),
    l = n(63063),
    u = n(5192),
    d = n(992970),
    p = n(111810),
    g = n(287941),
    m = n(477931),
    f = n(235894),
    _ = n(981631),
    b = n(388032),
    h = n(277586);
let y = (e) => {
    var t;
    let { message: n } = e,
        y = o.useRef(null),
        v = (0, p.p7)('Message Header') && n.hasPotions(),
        O = s.Z.getChannel(n.getChannelId()),
        x = null == (t = n.potions) ? void 0 : t[0],
        C = o.useMemo(() => {
            var e;
            if (null == x) return null;
            let t = c.default.getUser(x.used_by);
            return null != (e = (0, u.y)(null == O ? void 0 : O.getGuildId(), null == O ? void 0 : O.id, t)) ? e : null == t ? void 0 : t.globalName;
        }, [x, O]),
        j = o.useCallback(() => {
            if (null != y.current && (0, f.Uw)(n)) {
                let { x: e, y: t, width: r, height: o } = y.current.getBoundingClientRect();
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
            (0, i.Z)(l.Z.getArticleURL(_.BhN.CONFETTI_POTION));
        }, []);
    return v && null != C && (null == x ? void 0 : x.type) === m.B.CONFETTI
        ? (0, r.jsx)(a.P3F, {
              onFocus: j,
              onClick: P,
              'aria-label': b.NW.string(b.t.Mp5k6O),
              children: (0, r.jsx)(a.ua7, {
                  text: b.NW.formatToPlainString(b.t['FE++aG'], { user: C }),
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
                                  ref: y,
                                  className: h.potionBadge
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
                                          children: b.NW.string(b.t['8Rrro6'])
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
