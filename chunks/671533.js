n.d(t, { Z: () => u }), n(411104);
var r,
    a = n(200651);
n(192379);
var i = n(120356),
    l = n.n(i),
    o = n(325767),
    s = n(821047),
    c = (((r = {}).LEFT = 'LEFT'), (r.RIGHT = 'RIGHT'), (r.UP = 'UP'), (r.DOWN = 'DOWN'), (r.UP_LEFT = 'UP_LEFT'), (r.DOWN_RIGHT = 'DOWN_RIGHT'), r);
let d = (e) => {
    var t,
        n,
        { width: r = 24, height: i = 24, color: c = 'currentColor', direction: d, foreground: u, className: h, title: m } = e,
        x = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                a = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        r,
                        a = {},
                        i = Object.keys(e);
                    for (r = 0; r < i.length; r++) (n = i[r]), t.indexOf(n) >= 0 || (a[n] = e[n]);
                    return a;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                for (r = 0; r < i.length; r++) (n = i[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (a[n] = e[n]);
            }
            return a;
        })(e, ['width', 'height', 'color', 'direction', 'foreground', 'className', 'title']);
    return (0, a.jsxs)(
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
        })({}, (0, o.Z)(x))),
        (n = n =
            {
                width: r,
                height: i,
                className: l()(
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
                    })(d)
                ),
                viewBox: '0 0 24 24',
                children: [
                    null != m ? (0, a.jsx)('title', { children: m }) : null,
                    (0, a.jsx)('polygon', {
                        className: u,
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
d.Directions = c;
let u = d;
