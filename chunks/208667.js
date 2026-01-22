n.d(t, {
    A: () => p,
});
var r = n(627968),
    l = n(64700),
    i = n(110259),
    a = n(837381),
    s = n(397927),
    o = n(928039),
    c = n(139286),
    u = n(688895),
    d = n(456425),
    f = n(1347);

function p(e) {
    let { initialized: t, items: n, loading: p, loadMore: h } = e,
        b = l.useRef(null),
        g = (0, o.A)("for-you", b);
    (0, c.A)(
        {
            type: i.ImpressionTypes.VIEW,
            name: i.ImpressionNames.NOTIFICATION_CENTER_LANDING,
            properties: {
                empty: 0 === n.length,
            },
        },
        {
            disableTrack: !t,
        },
        [t],
    );
    let m = () => {
        var e;
        let t = null == (e = b.current) ? void 0 : e.getScrollerState();
        null == t || (t.scrollHeight - t.scrollTop - t.offsetHeight < 1500 && h());
    };
    return t
        ? 0 === n.length
            ? (0, r.jsx)(u.H, {})
            : (0, r.jsx)(a.hD, {
                  navigator: g,
                  children: (0, r.jsx)(a.PR, {
                      children: (e) => {
                          var t, l;
                          let { ref: i } = e,
                              a = (function (e, t) {
                                  if (null == e) return {};
                                  var n,
                                      r,
                                      l,
                                      i = {};
                                  if ("u" > typeof Reflect && Reflect.ownKeys) {
                                      for (l = 0, n = Reflect.ownKeys(e); l < n.length; l++)
                                          (r = n[l]),
                                              !(t.indexOf(r) >= 0) &&
                                                  Object.prototype.propertyIsEnumerable.call(e, r) &&
                                                  (i[r] = e[r]);
                                      return i;
                                  }
                                  if (
                                      ((i = (function (e, t) {
                                          if (null == e) return {};
                                          var n,
                                              r,
                                              l = {},
                                              i = Object.getOwnPropertyNames(e);
                                          for (r = 0; r < i.length; r++)
                                              (n = i[r]),
                                                  !(t.indexOf(n) >= 0) &&
                                                      Object.prototype.propertyIsEnumerable.call(e, n) &&
                                                      (l[n] = e[n]);
                                          return l;
                                      })(e, t)),
                                      Object.getOwnPropertySymbols)
                                  )
                                      for (l = 0, n = Object.getOwnPropertySymbols(e); l < n.length; l++)
                                          (r = n[l]),
                                              !(t.indexOf(r) >= 0) &&
                                                  Object.prototype.propertyIsEnumerable.call(e, r) &&
                                                  (i[r] = e[r]);
                                  return i;
                              })(e, ["ref"]);
                          return (0, r.jsxs)(
                              s.T7Y,
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
                              })(
                                  {
                                      className: f.kL,
                                      ref: (e) => {
                                          var t;
                                          (b.current = e),
                                              (i.current =
                                                  null != (t = null == e ? void 0 : e.getScrollerNode()) ? t : null);
                                      },
                                  },
                                  a,
                              )),
                              (l = l =
                                  {
                                      onScroll: m,
                                      children: [
                                          (0, r.jsx)(d.$, {
                                              items: n,
                                          }),
                                          p
                                              ? (0, r.jsx)(s.y$y, {
                                                    className: f.u1,
                                                })
                                              : null,
                                      ],
                                  }),
                              Object.getOwnPropertyDescriptors
                                  ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(l))
                                  : (function (e, t) {
                                        var n = Object.keys(e);
                                        if (Object.getOwnPropertySymbols) {
                                            var r = Object.getOwnPropertySymbols(e);
                                            n.push.apply(n, r);
                                        }
                                        return n;
                                    })(Object(l)).forEach(function (e) {
                                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(l, e));
                                    }),
                              t),
                          );
                      },
                  }),
              })
        : (0, r.jsx)(s.y$y, {
              className: f.k$,
          });
}
