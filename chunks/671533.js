n.d(t, { Z: () => u }), n(415506);
var a,
    r = n(200651);
n(192379);
var l = n(120356),
    i = n.n(l),
    s = n(325767),
    o = n(789700),
    c = (((a = {}).LEFT = 'LEFT'), (a.RIGHT = 'RIGHT'), (a.UP = 'UP'), (a.DOWN = 'DOWN'), (a.UP_LEFT = 'UP_LEFT'), (a.DOWN_RIGHT = 'DOWN_RIGHT'), a);
let d = (e) => {
    var t,
        n,
        { width: a = 24, height: l = 24, color: c = 'currentColor', direction: d, foreground: u, className: m, title: x } = e,
        h = (function (e, t) {
            if (null == e) return {};
            var n,
                a,
                r = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        a,
                        r = {},
                        l = Object.keys(e);
                    for (a = 0; a < l.length; a++) (n = l[a]), t.indexOf(n) >= 0 || (r[n] = e[n]);
                    return r;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var l = Object.getOwnPropertySymbols(e);
                for (a = 0; a < l.length; a++) (n = l[a]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
            }
            return r;
        })(e, ['width', 'height', 'color', 'direction', 'foreground', 'className', 'title']);
    return (0, r.jsxs)(
        'svg',
        ((t = (function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {},
                    a = Object.keys(n);
                'function' == typeof Object.getOwnPropertySymbols &&
                    (a = a.concat(
                        Object.getOwnPropertySymbols(n).filter(function (e) {
                            return Object.getOwnPropertyDescriptor(n, e).enumerable;
                        })
                    )),
                    a.forEach(function (t) {
                        var a;
                        (a = n[t]),
                            t in e
                                ? Object.defineProperty(e, t, {
                                      value: a,
                                      enumerable: !0,
                                      configurable: !0,
                                      writable: !0
                                  })
                                : (e[t] = a);
                    });
            }
            return e;
        })({}, (0, s.Z)(h))),
        (n = n =
            {
                width: a,
                height: l,
                className: i()(
                    m,
                    (function (e) {
                        switch (e) {
                            case 'LEFT':
                                return o.left;
                            case 'RIGHT':
                                return o.right;
                            case 'UP':
                                return null;
                            case 'DOWN':
                                return o.down;
                            case 'UP_LEFT':
                                return o.upLeft;
                            case 'DOWN_RIGHT':
                                return o.downRight;
                            default:
                                throw Error('Invalid Direction '.concat(e));
                        }
                    })(d)
                ),
                viewBox: '0 0 24 24',
                children: [
                    null != x ? (0, r.jsx)('title', { children: x }) : null,
                    (0, r.jsx)('polygon', {
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
                      var a = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, a);
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
