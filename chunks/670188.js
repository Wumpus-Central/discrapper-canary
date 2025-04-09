n.d(t, { Z: () => T }), n(388685);
var r = n(200651),
    i = n(192379),
    o = n(442837),
    a = n(481060),
    s = n(493773),
    l = n(237617),
    c = n(594174),
    u = n(122521),
    d = n(184301),
    f = n(347475),
    _ = n(228168),
    p = n(231338),
    h = n(744790);
function m(e, t, n) {
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
function g(e) {
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
                m(e, t, n[t]);
            });
    }
    return e;
}
function E(e, t) {
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
function b(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : E(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function y(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = v(e, t);
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        for (r = 0; r < o.length; r++) (n = o[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function v(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        o = Object.keys(e);
    for (r = 0; r < o.length; r++) (n = o[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
let O = (0, a.pxk)(a.EFr.SIZE_80),
    I = {
        onMouseDown: p.dG,
        onClick: p.dG,
        onKeyDown: p.dG,
        'aria-controls': void 0,
        'aria-expanded': !1
    },
    S = {
        isShown: !1,
        position: void 0
    };
function T(e) {
    var { children: t, userId: n, user: p, guildId: m, channelId: E, avatarUrl: v, preload: T, renderPopout: N, onRequestClose: A, onClosePopout: C, shouldShow: R, shouldPreload: P = !0, shouldShowOnHover: w = !1 } = e,
        D = y(e, ['children', 'userId', 'user', 'guildId', 'channelId', 'avatarUrl', 'preload', 'renderPopout', 'onRequestClose', 'onClosePopout', 'shouldShow', 'shouldPreload', 'shouldShowOnHover']);
    let L = (0, o.e7)([c.default], () => c.default.getCurrentUser()),
        x = (0, o.e7)([c.default], () => (null != p ? p : c.default.getUser(n))),
        [M, k] = i.useState(!1),
        [j, U] = i.useState(!1),
        G = i.useRef(!1),
        B = i.useRef(void 0),
        V = i.useRef(void 0),
        F = i.useRef(void 0),
        Z = (0, u.Z)(),
        H = (0, l.Z)(Z);
    if (
        ((0, s.zq)(() => {
            clearTimeout(B.current), clearTimeout(V.current), clearTimeout(F.current);
        }),
        null == x || null == L)
    )
        return t(I, S);
    let W = () =>
            null != T
                ? T()
                : (0, d.Z)(x.id, null != v ? v : x.getAvatarURL(m, O), {
                      guildId: m,
                      channelId: E
                  }),
        Y = (e) =>
            j
                ? (0, r.jsx)(a.xxz, {})
                : null != N
                  ? N(e)
                  : (0, r.jsx)(
                        f.Z,
                        b(g({}, D, e), {
                            userId: x.id,
                            user: x,
                            guildId: m,
                            channelId: E,
                            closePopout: () => {
                                e.closePopout(), null == C || C();
                            }
                        })
                    );
    return w
        ? (0, r.jsx)('div', {
              className: h.hoverable,
              onMouseEnter: () => {
                  (G.current = !0),
                      P &&
                          (B.current = setTimeout(async () => {
                              if (G.current)
                                  try {
                                      U(!0), await W();
                                  } finally {
                                      U(!1);
                                  }
                          }, _.a6)),
                      (V.current = setTimeout(() => {
                          (0, a.$sL)() || H.current || (G.current && k(!0));
                      }, _.JX));
              },
              onMouseLeave: () => {
                  (G.current = !1),
                      (F.current = setTimeout(() => {
                          G.current || k(!1);
                      }, _.Ig));
              },
              children: (0, r.jsx)(
                  a.yRy,
                  b(
                      g(
                          {
                              popoutKey: _.Tg,
                              shouldShow: !0 === R || M,
                              preload: !P || j || M ? void 0 : W,
                              renderPopout: Y,
                              onRequestClose: () => {
                                  k(!1), null == A || A();
                              }
                          },
                          D
                      ),
                      { children: t }
                  )
              )
          })
        : (0, r.jsx)(
              a.yRy,
              b(
                  g(
                      {
                          popoutKey: _.Tg,
                          shouldShow: R,
                          preload: P ? W : void 0,
                          renderPopout: Y,
                          onRequestClose: A
                      },
                      D
                  ),
                  { children: t }
              )
          );
}
