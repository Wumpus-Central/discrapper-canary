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
    var { children: t, userId: n, user: p, guildId: m, channelId: E, avatarUrl: v, preload: T, renderPopout: N, onRequestOpen: A, onRequestClose: C, onClosePopout: P, shouldShow: R, shouldPreload: w = !0, shouldShowOnHover: D = !1 } = e,
        L = y(e, ['children', 'userId', 'user', 'guildId', 'channelId', 'avatarUrl', 'preload', 'renderPopout', 'onRequestOpen', 'onRequestClose', 'onClosePopout', 'shouldShow', 'shouldPreload', 'shouldShowOnHover']);
    let x = (0, o.e7)([c.default], () => c.default.getCurrentUser()),
        M = (0, o.e7)([c.default], () => (null != p ? p : c.default.getUser(n))),
        [k, j] = i.useState(!1),
        [U, G] = i.useState(!1),
        B = i.useRef(!1),
        V = i.useRef(void 0),
        F = i.useRef(void 0),
        Z = i.useRef(void 0),
        H = i.useRef(void 0),
        W = (0, u.Z)(),
        Y = (0, l.Z)(W),
        K = i.useCallback(() => {
            clearTimeout(V.current), clearTimeout(F.current), clearTimeout(Z.current);
        }, []);
    if (((0, s.zq)(K), null == M || null == x)) return t(I, S);
    let z = () =>
            null != T
                ? T()
                : (0, d.Z)(M.id, null != v ? v : M.getAvatarURL(m, O), {
                      withMutualGuilds: M.id !== x.id,
                      withMutualFriends: !M.bot && M.id !== x.id,
                      guildId: m,
                      channelId: E
                  }),
        q = (e) =>
            (null == H.current && (H.current = Date.now()), U)
                ? (0, r.jsx)(a.xxz, {})
                : null != N
                  ? N(e, H.current)
                  : (0, r.jsx)(
                        f.Z,
                        b(g({}, L, e), {
                            userId: M.id,
                            user: M,
                            guildId: m,
                            channelId: E,
                            openedAt: H.current,
                            closePopout: () => {
                                e.closePopout(), null == P || P();
                            }
                        })
                    );
    return D
        ? (0, r.jsx)('div', {
              className: h.hoverable,
              onMouseEnter: () => {
                  K(),
                      (B.current = !0),
                      w &&
                          (V.current = setTimeout(async () => {
                              if (B.current)
                                  try {
                                      G(!0), await z();
                                  } finally {
                                      G(!1);
                                  }
                          }, _.a6)),
                      (F.current = setTimeout(() => {
                          (0, a.$sL)() || Y.current || (B.current && (null == H.current && (H.current = Date.now()), j(!0)));
                      }, _.JX));
              },
              onMouseLeave: () => {
                  K(),
                      (B.current = !1),
                      (Z.current = setTimeout(() => {
                          B.current || ((H.current = void 0), j(!1));
                      }, _.Ig));
              },
              children: (0, r.jsx)(
                  a.yRy,
                  b(
                      g(
                          {
                              popoutKey: _.Tg,
                              shouldShow: !0 === R || k,
                              preload: !w || U || k ? void 0 : z,
                              renderPopout: q,
                              onRequestOpen: () => {
                                  null == H.current && (H.current = Date.now()), null == A || A();
                              },
                              onRequestClose: () => {
                                  (H.current = void 0), j(!1), null == C || C();
                              }
                          },
                          L
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
                          preload: w ? z : void 0,
                          renderPopout: q,
                          onRequestOpen: () => {
                              null == H.current && (H.current = Date.now()), null == A || A();
                          },
                          onRequestClose: () => {
                              (H.current = void 0), null == C || C();
                          }
                      },
                      L
                  ),
                  { children: t }
              )
          );
}
