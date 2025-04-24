n.d(t, { Z: () => h }), n(388685);
var r = n(200651),
    i = n(192379),
    l = n(120356),
    o = n.n(l),
    s = n(393903),
    a = n(448986),
    c = n(731722),
    u = n(172751),
    d = n(842747);
let h = i.memo(function (e) {
    var t,
        n,
        { children: l, isOverlay: h, contextGuildId: p } = e,
        f = (function (e, t) {
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
        })(e, ['children', 'isOverlay', 'contextGuildId']);
    let [g, m] = i.useState({ maskImage: 'none' }),
        b = i.useRef(null),
        y = (0, a.Z)(() => {
            var e, t, n, r;
            let i = null != (n = null == (e = _.current) ? void 0 : e.getBoundingClientRect()) ? n : null,
                l = null != (r = null == (t = b.current) ? void 0 : t.getBoundingClientRect()) ? r : null;
            if (h || null == i || null == l) return void m({ maskImage: 'none' });
            let o = l.right - i.right,
                s = l.width - o;
            if (s > l.width) return void m({ maskImage: 'none' });
            m({ maskImage: 'linear-gradient(to right, rgba(0, 0, 0, 1) 0, rgba(0, 0, 0, 0) '.concat(s, 'px)') });
        }),
        _ = (0, s.y)(y),
        O = (0, c.yF)(f.userId, p);
    return (0, r.jsxs)('div', {
        className: o()(d.container, h && d.isOverlayContainer),
        ref: _,
        children: [
            (0, r.jsx)('div', {
                className: d.usernameContainer,
                children: l
            }),
            (0, r.jsx)('div', {
                className: d.chipletParent,
                children: (0, r.jsx)('span', {
                    className: o()(d.chipletContainer, !O && h && d.noPadding),
                    ref: b,
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
                        })({}, f)),
                        (n = n =
                            {
                                contextGuildId: p,
                                className: o()(f.className, h && d.isOverlayTag),
                                disableGuildProfile: !0
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
