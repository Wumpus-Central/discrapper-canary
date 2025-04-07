n.d(t, { Z: () => I }), n(388685);
var r = n(200651),
    i = n(192379),
    o = n(442837),
    a = n(481060),
    s = n(493773),
    l = n(594174),
    c = n(184301),
    u = n(347475),
    d = n(228168),
    f = n(231338),
    _ = n(744790);
function p(e, t, n) {
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
function h(e) {
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
                p(e, t, n[t]);
            });
    }
    return e;
}
function m(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function g(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : m(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function E(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = b(e, t);
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        for (r = 0; r < o.length; r++) (n = o[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function b(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        o = Object.keys(e);
    for (r = 0; r < o.length; r++) (n = o[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
let y = (0, a.pxk)(a.EFr.SIZE_80),
    v = {
        onMouseDown: f.dG,
        onClick: f.dG,
        onKeyDown: f.dG,
        'aria-controls': void 0,
        'aria-expanded': !1
    },
    O = {
        isShown: !1,
        position: void 0
    };
function I(e) {
    var { children: t, userId: n, user: f, guildId: p, channelId: m, avatarUrl: b, preload: I, renderPopout: S, onRequestClose: T, onClosePopout: N, shouldShow: A, shouldPreload: C = !0, shouldShowOnHover: R = !1 } = e,
        P = E(e, ['children', 'userId', 'user', 'guildId', 'channelId', 'avatarUrl', 'preload', 'renderPopout', 'onRequestClose', 'onClosePopout', 'shouldShow', 'shouldPreload', 'shouldShowOnHover']);
    let w = (0, o.e7)([l.default], () => l.default.getCurrentUser()),
        D = (0, o.e7)([l.default], () => (null != f ? f : l.default.getUser(n))),
        [L, x] = i.useState(!1),
        [M, k] = i.useState(!1),
        j = i.useRef(!1),
        U = i.useRef(void 0),
        G = i.useRef(void 0),
        B = i.useRef(void 0);
    if (
        ((0, s.zq)(() => {
            clearTimeout(U.current), clearTimeout(G.current), clearTimeout(B.current);
        }),
        null == D || null == w)
    )
        return t(v, O);
    let V = () =>
            null != I
                ? I()
                : (0, c.Z)(D.id, null != b ? b : D.getAvatarURL(p, y), {
                      guildId: p,
                      channelId: m
                  }),
        F = (e) =>
            M
                ? (0, r.jsx)(a.xxz, {})
                : null != S
                  ? S(e)
                  : (0, r.jsx)(
                        u.Z,
                        g(h({}, P, e), {
                            userId: D.id,
                            user: D,
                            guildId: p,
                            channelId: m,
                            closePopout: () => {
                                e.closePopout(), null == N || N();
                            }
                        })
                    );
    return R
        ? (0, r.jsx)('div', {
              className: _.hoverable,
              onMouseEnter: () => {
                  (j.current = !0),
                      C &&
                          (U.current = setTimeout(async () => {
                              if (j.current)
                                  try {
                                      k(!0), await V();
                                  } finally {
                                      k(!1);
                                  }
                          }, d.a6)),
                      (G.current = setTimeout(() => {
                          !(0, a.$sL)() && j.current && x(!0);
                      }, d.JX));
              },
              onMouseLeave: () => {
                  (j.current = !1),
                      (B.current = setTimeout(() => {
                          j.current || x(!1);
                      }, d.Ig));
              },
              children: (0, r.jsx)(
                  a.yRy,
                  g(
                      h(
                          {
                              shouldShow: !0 === A || L,
                              preload: !C || M || L ? void 0 : V,
                              renderPopout: F,
                              onRequestClose: () => {
                                  x(!1), null == T || T();
                              }
                          },
                          P
                      ),
                      { children: t }
                  )
              )
          })
        : (0, r.jsx)(
              a.yRy,
              g(
                  h(
                      {
                          shouldShow: A,
                          preload: C ? V : void 0,
                          renderPopout: F,
                          onRequestClose: T
                      },
                      P
                  ),
                  { children: t }
              )
          );
}
