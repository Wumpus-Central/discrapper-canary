n.d(t, {
    P: () => j,
}),
    n(896048);
var i = n(627968),
    l = n(64700),
    r = n(349288),
    o = n(473193),
    a = n(397927),
    s = n(793574),
    u = n(688810),
    c = n(609425),
    d = n(922301),
    p = n(750112),
    h = n(73392),
    m = n(676608),
    f = n(342296),
    g = n(734057),
    b = n(841549),
    y = n(560936);

function O(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            i = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            i.forEach(function (t) {
                var i;
                (i = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: i,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = i);
            });
    }
    return e;
}

function v(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var i = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, i);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}

function j(e) {
    let {
            user: t,
            channelId: n,
            guildId: j,
            messageId: A,
            stopPropagation: T = !1,
            ariaLabel: E,
            enableDisplayNameStyles: I = !1,
        } = e,
        S = l.useRef(null),
        { analyticsLocations: x } = (0, u.Ay)(s.A.USERNAME),
        N = (0, m.Ay)(j, null == t ? void 0 : t.id),
        R = (0, c.A)({
            userId: null == t ? void 0 : t.id,
            guildId: j,
        }),
        P = (0, h.a)({
            displayNameStyles: R,
        }),
        C = l.useCallback(
            (e) => {
                let i = g.A.getChannel(n);
                null != i && null != t && (0, b.wQ)(e, t, i);
            },
            [t, n],
        ),
        w = l.useContext(o.C);
    return (
        (0, y.A)({
            subscribeToGroupId: A,
            authorId: null == t ? void 0 : t.id,
            shouldSubscribe: I && null != R && null == j,
        }),
        l.useCallback(
            (e) => (l, o) => {
                let s = null == e ? void 0 : e.colorStrings,
                    c = N && null != s && null != s.primaryColor && null != s.secondaryColor,
                    h = (t, n) => {
                        var o, u, h;
                        if (!I || null == R || null != j)
                            return (0, i.jsx)(
                                a.V30,
                                v(O({}, null != t ? t : {}), {
                                    ref: S,
                                    onContextMenu: C,
                                    name: null != (u = (0, a.Oer)(l)) ? u : "",
                                    colorString: null != (h = null == e ? void 0 : e.colorString) ? h : null,
                                    roleName: null == e ? void 0 : e.colorRoleName,
                                    colorStrings: c ? s : null,
                                    "aria-label": E,
                                    className: P,
                                }),
                            );
                        {
                            let e =
                                (null == w ? void 0 : w.animate) || (null == n ? void 0 : n.isShown)
                                    ? d.G.ANIMATED
                                    : d.G.PLAIN;
                            return (0, i.jsx)(
                                r.Anchor,
                                v(O({}, null != t ? t : {}), {
                                    ref: S,
                                    onContextMenu: C,
                                    "aria-label": E,
                                    children: (0, i.jsx)(p.A, {
                                        userName: null != (o = (0, a.Oer)(l)) ? o : "",
                                        displayNameStyles: R,
                                        effectDisplayType: e,
                                        shouldUnderlineOnHover: !0,
                                        loop: !0,
                                    }),
                                }),
                            );
                        }
                    };
                return (0, i.jsx)(
                    u.f5,
                    {
                        value: x,
                        children:
                            null != t
                                ? (0, i.jsx)(f.A, {
                                      targetElementRef: S,
                                      user: t,
                                      guildId: j,
                                      channelId: n,
                                      messageId: A,
                                      roleId: null == e ? void 0 : e.colorRoleId,
                                      clickTrap: !0,
                                      children: (e, t) => {
                                          let [n, ...i] = [e, t],
                                              { onClick: l } = n,
                                              r = (function (e, t) {
                                                  if (null == e) return {};
                                                  var n,
                                                      i,
                                                      l,
                                                      r = {};
                                                  if ("u" > typeof Reflect && Reflect.ownKeys) {
                                                      for (l = 0, n = Reflect.ownKeys(e); l < n.length; l++)
                                                          (i = n[l]),
                                                              !(t.indexOf(i) >= 0) &&
                                                                  Object.prototype.propertyIsEnumerable.call(e, i) &&
                                                                  (r[i] = e[i]);
                                                      return r;
                                                  }
                                                  if (
                                                      ((r = (function (e, t) {
                                                          if (null == e) return {};
                                                          var n,
                                                              i,
                                                              l = {},
                                                              r = Object.getOwnPropertyNames(e);
                                                          for (i = 0; i < r.length; i++)
                                                              (n = r[i]),
                                                                  !(t.indexOf(n) >= 0) &&
                                                                      Object.prototype.propertyIsEnumerable.call(
                                                                          e,
                                                                          n,
                                                                      ) &&
                                                                      (l[n] = e[n]);
                                                          return l;
                                                      })(e, t)),
                                                      Object.getOwnPropertySymbols)
                                                  )
                                                      for (
                                                          l = 0, n = Object.getOwnPropertySymbols(e);
                                                          l < n.length;
                                                          l++
                                                      )
                                                          (i = n[l]),
                                                              !(t.indexOf(i) >= 0) &&
                                                                  Object.prototype.propertyIsEnumerable.call(e, i) &&
                                                                  (r[i] = e[i]);
                                                  return r;
                                              })(n, ["onClick"]),
                                              [o] = i;
                                          return h(
                                              O(
                                                  {
                                                      onClick: (e) => {
                                                          T && null != e && e.stopPropagation(), l(e);
                                                      },
                                                  },
                                                  r,
                                              ),
                                              o,
                                          );
                                      },
                                  })
                                : h(void 0, void 0),
                    },
                    o,
                );
            },
            [x, t, n, j, A, C, T, E, N, P, null == w ? void 0 : w.animate, R, I],
        )
    );
}
