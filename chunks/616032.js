n.d(t, { Z: () => m });
var r = n(255367),
    i = n(73800),
    l = n(990547),
    a = n(91192),
    o = n(481060),
    s = n(724757),
    c = n(213609),
    u = n(441358),
    d = n(426521),
    p = n(823123);
function m(e) {
    let { initialized: t, items: n, loading: m, loadMore: f } = e,
        h = i.useRef(null),
        g = (0, s.Z)('for-you', h);
    (0, c.Z)(
        {
            type: l.ImpressionTypes.VIEW,
            name: l.ImpressionNames.NOTIFICATION_CENTER_LANDING,
            properties: { empty: 0 === n.length }
        },
        { disableTrack: !t },
        [t]
    );
    let _ = () => {
        var e;
        let t = null == (e = h.current) ? void 0 : e.getScrollerState();
        null != t && t.scrollHeight - t.scrollTop - t.offsetHeight < 1500 && f();
    };
    return t
        ? 0 === n.length
            ? (0, r.jsx)(u.v, {})
            : (0, r.jsx)(a.bG, {
                  navigator: g,
                  children: (0, r.jsx)(a.SJ, {
                      children: (e) => {
                          var t,
                              i,
                              { ref: l } = e,
                              a = (function (e, t) {
                                  if (null == e) return {};
                                  var n,
                                      r,
                                      i = (function (e, t) {
                                          if (null == e) return {};
                                          var n,
                                              r,
                                              i = {},
                                              l = Object.keys(e);
                                          for (r = 0; r < l.length; r++) (n = l[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
                                          return i;
                                      })(e, t);
                                  if (Object.getOwnPropertySymbols) {
                                      var l = Object.getOwnPropertySymbols(e);
                                      for (r = 0; r < l.length; r++) (n = l[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
                                  }
                                  return i;
                              })(e, ['ref']);
                          return (0, r.jsxs)(
                              o.Den,
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
                                      className: p.container,
                                      ref: (e) => {
                                          var t;
                                          (h.current = e), (l.current = null != (t = null == e ? void 0 : e.getScrollerNode()) ? t : null);
                                      }
                                  },
                                  a
                              )),
                              (i = i =
                                  {
                                      onScroll: _,
                                      children: [(0, r.jsx)(d.U, { items: n }), m ? (0, r.jsx)(o.$jN, { className: p.spinner }) : null]
                                  }),
                              Object.getOwnPropertyDescriptors
                                  ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i))
                                  : (function (e, t) {
                                        var n = Object.keys(e);
                                        if (Object.getOwnPropertySymbols) {
                                            var r = Object.getOwnPropertySymbols(e);
                                            n.push.apply(n, r);
                                        }
                                        return n;
                                    })(Object(i)).forEach(function (e) {
                                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(i, e));
                                    }),
                              t)
                          );
                      }
                  })
              })
        : (0, r.jsx)(o.$jN, { className: p.loadingPlaceholder });
}
