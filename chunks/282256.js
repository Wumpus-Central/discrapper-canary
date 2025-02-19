n.d(t, { Z: () => p }), n(47120);
var r = n(200651),
    l = n(192379),
    i = n(120356),
    a = n.n(i),
    o = n(434650),
    s = n(393903),
    c = n(448986),
    u = n(353093),
    d = n(979264),
    f = n(978081);
let p = l.memo(function (e) {
    var t,
        n,
        { children: i, isOverlay: p, contextGuildId: m } = e,
        g = (function (e, t) {
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
    let y = l.useRef(null),
        [b, h] = l.useState({ maskImage: 'none' }),
        v = (0, c.Z)(() => {
            var e, t;
            if (p) {
                h({ maskImage: 'none' });
                return;
            }
            let n = null === (e = O.current) || void 0 === e ? void 0 : e.getBoundingClientRect(),
                r = null === (t = y.current) || void 0 === t ? void 0 : t.getBoundingClientRect();
            if (null == n || null == r) {
                h({ maskImage: 'none' });
                return;
            }
            let l = r.right - n.right,
                i = r.width - l;
            if (i > r.width) {
                h({ maskImage: 'none' });
                return;
            }
            h({ maskImage: 'linear-gradient(to right, rgba(0, 0, 0, 1) 0, rgba(0, 0, 0, 0) '.concat(i, 'px)') });
        }),
        O = (0, s.y)(v),
        j = (0, u.p0)(g.userId, m),
        S = {
            handleResize: v,
            positionTrackerRef: O
        },
        N = l.useRef(S);
    l.useEffect(() => {
        N.current = S;
    }),
        l.useEffect(() => {
            let { handleResize: e, positionTrackerRef: t } = N.current;
            null != t.current && e();
        }, [j]);
    let P = (0, o.O)(v);
    return (0, r.jsxs)('div', {
        className: a()(f.container, p && f.isOverlayContainer),
        ref: O,
        children: [
            (0, r.jsx)('div', {
                className: f.usernameContainer,
                children: i
            }),
            (0, r.jsx)('div', {
                className: f.chipletParent,
                ref: P,
                children: (0, r.jsx)('span', {
                    className: a()(f.chipletContainer, !j && p && f.noPadding),
                    ref: y,
                    style: b,
                    children: (0, r.jsx)(
                        d.ZP,
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
                        })({}, g)),
                        (n = n =
                            {
                                contextGuildId: m,
                                className: a()(g.className, p && f.isOverlayTag)
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
