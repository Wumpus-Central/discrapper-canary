n.d(t, { Z: () => O }), n(388685);
var r = n(200651),
    i = n(192379),
    o = n(442837),
    a = n(481060),
    s = n(493773),
    l = n(594174),
    c = n(184301),
    u = n(347475),
    d = n(228168),
    f = n(231338);
function _(e, t, n) {
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
function p(e) {
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
                _(e, t, n[t]);
            });
    }
    return e;
}
function h(e, t) {
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
function m(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : h(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function g(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = E(e, t);
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        for (r = 0; r < o.length; r++) (n = o[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function E(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        o = Object.keys(e);
    for (r = 0; r < o.length; r++) (n = o[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
let b = (0, a.pxk)(a.EFr.SIZE_80),
    y = {
        onMouseDown: f.dG,
        onClick: f.dG,
        onKeyDown: f.dG,
        'aria-controls': void 0,
        'aria-expanded': !1
    },
    v = {
        isShown: !1,
        position: void 0
    };
function O(e) {
    var { children: t, userId: n, user: f, guildId: _, channelId: h, avatarUrl: E, preload: O, renderPopout: I, onRequestClose: S, onClosePopout: T, shouldShow: N, shouldPreload: A = !0, shouldShowOnHover: C = !1 } = e,
        R = g(e, ['children', 'userId', 'user', 'guildId', 'channelId', 'avatarUrl', 'preload', 'renderPopout', 'onRequestClose', 'onClosePopout', 'shouldShow', 'shouldPreload', 'shouldShowOnHover']);
    let P = (0, o.e7)([l.default], () => l.default.getCurrentUser()),
        w = (0, o.e7)([l.default], () => (null != f ? f : l.default.getUser(n))),
        [D, L] = i.useState(!1),
        [x, M] = i.useState(!1),
        k = i.useRef(!1),
        j = i.useRef(void 0),
        U = i.useRef(void 0),
        G = i.useRef(void 0);
    if (
        ((0, s.zq)(() => {
            clearTimeout(j.current), clearTimeout(U.current), clearTimeout(G.current);
        }),
        null == w || null == P)
    )
        return t(y, v);
    let B = () =>
            null != O
                ? O()
                : (0, c.Z)(w.id, null != E ? E : w.getAvatarURL(_, b), {
                      guildId: _,
                      channelId: h
                  }),
        V = (e) =>
            x
                ? (0, r.jsx)(a.xxz, {})
                : null != I
                  ? I(e)
                  : (0, r.jsx)(
                        u.Z,
                        m(p({}, R, e), {
                            userId: w.id,
                            user: w,
                            guildId: _,
                            channelId: h,
                            closePopout: () => {
                                e.closePopout(), null == T || T();
                            }
                        })
                    );
    return C
        ? (0, r.jsx)('div', {
              onMouseEnter: () => {
                  (k.current = !0),
                      A &&
                          (j.current = setTimeout(async () => {
                              if (k.current)
                                  try {
                                      M(!0), await B();
                                  } finally {
                                      M(!1);
                                  }
                          }, d.a6)),
                      (U.current = setTimeout(() => {
                          !(0, a.$sL)() && k.current && L(!0);
                      }, d.JX));
              },
              onMouseLeave: () => {
                  (k.current = !1),
                      (G.current = setTimeout(() => {
                          k.current || L(!1);
                      }, d.Ig));
              },
              children: (0, r.jsx)(
                  a.yRy,
                  m(
                      p(
                          {
                              shouldShow: !0 === N || D,
                              preload: !A || x || D ? void 0 : B,
                              renderPopout: V,
                              onRequestClose: () => {
                                  L(!1), null == S || S();
                              }
                          },
                          R
                      ),
                      { children: t }
                  )
              )
          })
        : (0, r.jsx)(
              a.yRy,
              m(
                  p(
                      {
                          shouldShow: N,
                          preload: A ? B : void 0,
                          renderPopout: V,
                          onRequestClose: S
                      },
                      R
                  ),
                  { children: t }
              )
          );
}
