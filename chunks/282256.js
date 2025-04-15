n.d(t, { Z: () => p }), n(388685);
var r = n(200651),
    l = n(192379),
    i = n(120356),
    o = n.n(i),
    a = n(393903),
    s = n(448986),
    c = n(353093),
    u = n(979264),
    d = n(464271);
let p = l.memo(function (e) {
    var t,
        n,
        { children: i, isOverlay: p, contextGuildId: f } = e,
        m = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                l = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        r,
                        l = {},
                        i = Object.keys(e);
                    for (r = 0; r < i.length; r++) (n = i[r]), t.indexOf(n) >= 0 || (l[n] = e[n]);
                    return l;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                for (r = 0; r < i.length; r++) (n = i[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n]);
            }
            return l;
        })(e, ['children', 'isOverlay', 'contextGuildId']);
    let [g, b] = l.useState({ maskImage: 'none' }),
        O = l.useRef(null),
        y = (0, s.Z)(() => {
            var e, t, n, r;
            let l = null != (n = null == (e = h.current) ? void 0 : e.getBoundingClientRect()) ? n : null,
                i = null != (r = null == (t = O.current) ? void 0 : t.getBoundingClientRect()) ? r : null;
            if (p || null == l || null == i) return void b({ maskImage: 'none' });
            let o = i.right - l.right,
                a = i.width - o;
            if (a > i.width) return void b({ maskImage: 'none' });
            b({ maskImage: 'linear-gradient(to right, rgba(0, 0, 0, 1) 0, rgba(0, 0, 0, 0) '.concat(a, 'px)') });
        }),
        h = (0, a.y)(y),
        v = (0, c.p0)(m.userId, f);
    return (0, r.jsxs)('div', {
        className: o()(d.container, p && d.isOverlayContainer),
        ref: h,
        children: [
            (0, r.jsx)('div', {
                className: d.usernameContainer,
                children: i
            }),
            (0, r.jsx)('div', {
                className: d.chipletParent,
                children: (0, r.jsx)('span', {
                    className: o()(d.chipletContainer, !v && p && d.noPadding),
                    ref: O,
                    style: g,
                    children: (0, r.jsx)(
                        u.ZP,
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
                        })({}, m)),
                        (n = n =
                            {
                                contextGuildId: f,
                                className: o()(m.className, p && d.isOverlayTag)
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
                    )
                })
            })
        ]
    });
});
