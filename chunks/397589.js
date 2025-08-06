n.d(t, { Z: () => I });
var r = n(255367),
    i = n(73800),
    o = n(481060),
    a = n(782568),
    s = n(592125),
    l = n(594174),
    c = n(63063),
    u = n(5192),
    d = n(992970),
    f = n(111810),
    _ = n(287941),
    p = n(477931),
    h = n(235894),
    m = n(981631),
    g = n(388032),
    E = n(277586);
function b(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function y(e) {
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
                b(e, t, n[t]);
            }));
    }
    return e;
}
function O(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        (t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r));
    }
    return n;
}
function v(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : O(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let I = (e) => {
    var t;
    let { message: n } = e,
        b = i.useRef(null),
        O = (0, f.p7)('Message Header') && n.hasPotions(),
        I = s.Z.getChannel(n.getChannelId()),
        T = null == (t = n.potions) ? void 0 : t[0],
        S = i.useMemo(() => {
            var e;
            if (null == T) return null;
            let t = l.default.getUser(T.used_by);
            return null != (e = (0, u.y)(null == I ? void 0 : I.getGuildId(), null == I ? void 0 : I.id, t)) ? e : null == t ? void 0 : t.globalName;
        }, [T, I]),
        A = i.useCallback(() => {
            if (null != b.current && (0, h.Uw)(n)) {
                let { x: e, y: t, width: r, height: i } = b.current.getBoundingClientRect();
                (0, _.Z)(
                    n,
                    {
                        x: e,
                        y: t,
                        w: r,
                        h: i
                    },
                    !0,
                    d.LL.UserTriggered
                );
            }
        }, [n]),
        N = i.useCallback(() => {
            (0, a.Z)(c.Z.getArticleURL(m.BhN.CONFETTI_POTION));
        }, []);
    return O && null != S && (null == T ? void 0 : T.type) === p.B.CONFETTI
        ? (0, r.jsx)(o.P3F, {
              onFocus: A,
              onClick: N,
              'aria-label': g.intl.string(g.t.Mp5k6O),
              children: (0, r.jsx)(o.ua7, {
                  text: g.intl.formatToPlainString(g.t['FE++aG'], { user: S }),
                  children: (e) =>
                      (0, r.jsxs)(
                          'div',
                          v(
                              y(
                                  {
                                      ref: b,
                                      className: E.potionBadge
                                  },
                                  e
                              ),
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
                                          children: g.intl.string(g.t['8Rrro6'])
                                      })
                                  ]
                              }
                          )
                      )
              })
          })
        : null;
};
