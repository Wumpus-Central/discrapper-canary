n.d(t, { Z: () => d }), n(415506);
var r,
    i = n(255367);
n(73800);
var l = n(120356),
    o = n.n(l),
    a = n(325767),
    s = n(789700),
    c = (((r = {}).LEFT = 'LEFT'), (r.RIGHT = 'RIGHT'), (r.UP = 'UP'), (r.DOWN = 'DOWN'), (r.UP_LEFT = 'UP_LEFT'), (r.DOWN_RIGHT = 'DOWN_RIGHT'), r);
let u = (e) => {
    var t,
        n,
        { width: r = 24, height: l = 24, color: c = 'currentColor', direction: u, foreground: d, className: h, title: g } = e,
        p = (function (e, t) {
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
        })(e, ['width', 'height', 'color', 'direction', 'foreground', 'className', 'title']);
    return (0, i.jsxs)(
        'svg',
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
        })({}, (0, a.Z)(p))),
        (n = n =
            {
                width: r,
                height: l,
                className: o()(
                    h,
                    (function (e) {
                        switch (e) {
                            case 'LEFT':
                                return s.left;
                            case 'RIGHT':
                                return s.right;
                            case 'UP':
                                return null;
                            case 'DOWN':
                                return s.down;
                            case 'UP_LEFT':
                                return s.upLeft;
                            case 'DOWN_RIGHT':
                                return s.downRight;
                            default:
                                throw Error('Invalid Direction '.concat(e));
                        }
                    })(u)
                ),
                viewBox: '0 0 24 24',
                children: [
                    null != g ? (0, i.jsx)('title', { children: g }) : null,
                    (0, i.jsx)('polygon', {
                        className: d,
                        fill: c,
                        fillRule: 'nonzero',
                        points: '13 20 11 20 11 8 5.5 13.5 4.08 12.08 12 4.16 19.92 12.08 18.5 13.5 13 8'
                    })
                ]
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
    );
};
u.Directions = c;
let d = u;
