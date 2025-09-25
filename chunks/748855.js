n.d(t, { L: () => f }), n(388685);
var r = n(951288),
    i = n(647438),
    l = n(120356),
    a = n.n(l),
    o = n(442837),
    s = n(692547),
    c = n(481060),
    u = n(106301),
    d = n(388032),
    p = n(103198),
    h = n(515527);
function f(e) {
    let { label: t, icon: n, isSelected: l = !1, setStatus: f, clearStatus: m, isFavorited: g, onFavoriteClick: b } = e,
        [y, C] = i.useState(!1),
        _ = (0, o.e7)([u.Z], () => u.Z.getFavoritedStatuses().length >= u.o),
        v = y && l,
        x = v ? d.intl.string(d.t.S90Fub) : t,
        O = i.useCallback(() => {
            v ? null == m || m() : f();
        }, [v, m, f]),
        j = i.useCallback(
            (e) => {
                e.stopPropagation(), null == b || b();
            },
            [b],
        ),
        E = g ? c.r7p : c.vxU;
    return (0, r.jsxs)(c.P3F, {
        onClick: O,
        onMouseEnter: () => {
            C(!0);
        },
        onMouseLeave: () => {
            C(!1);
        },
        className: a()(h.item, h.labelContainer, p.container, { [p.isSelected]: l }),
        children: [
            n,
            (0, r.jsx)(c.Text, {
                variant: "text-md/normal",
                className: p.itemText,
                children: x,
            }),
            l
                ? (0, r.jsx)(c.k$p, {
                      className: p.closeIcon,
                      color: y ? s.Z.colors.ICON_PRIMARY : s.Z.colors.ICON_SECONDARY,
                  })
                : y &&
                  null != b &&
                  (0, r.jsx)(c.ua7, {
                      text: _ && !g ? d.intl.string(d.t.YSDH9v) : void 0,
                      children: (e) => {
                          var t, n;
                          return (0, r.jsx)(
                              c.P3F,
                              ((t = (function (e) {
                                  for (var t = 1; t < arguments.length; t++) {
                                      var n = null != arguments[t] ? arguments[t] : {},
                                          r = Object.keys(n);
                                      "function" == typeof Object.getOwnPropertySymbols &&
                                          (r = r.concat(
                                              Object.getOwnPropertySymbols(n).filter(function (e) {
                                                  return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                              }),
                                          )),
                                          r.forEach(function (t) {
                                              var r;
                                              (r = n[t]),
                                                  t in e
                                                      ? Object.defineProperty(e, t, {
                                                            value: r,
                                                            enumerable: !0,
                                                            configurable: !0,
                                                            writable: !0,
                                                        })
                                                      : (e[t] = r);
                                          });
                                  }
                                  return e;
                              })({}, e)),
                              (n = n =
                                  {
                                      className: p.centerAlign,
                                      onClick: j,
                                      children: (0, r.jsx)(E, {
                                          className: p.closeIcon,
                                          color: g ? s.Z.colors.ICON_FEEDBACK_WARNING : void 0,
                                      }),
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
                              t),
                          );
                      },
                  }),
        ],
    });
}
