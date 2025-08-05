(a.d(t, { Z: () => u }), a(415506));
var n,
    r = a(255367);
a(73800);
var l = a(120356),
    i = a.n(l),
    s = a(325767),
    o = a(789700),
    c = (((n = {}).LEFT = 'LEFT'), (n.RIGHT = 'RIGHT'), (n.UP = 'UP'), (n.DOWN = 'DOWN'), (n.UP_LEFT = 'UP_LEFT'), (n.DOWN_RIGHT = 'DOWN_RIGHT'), n);
let d = (e) => {
    var t,
        a,
        { width: n = 24, height: l = 24, color: c = 'currentColor', direction: d, foreground: u, className: m, title: p } = e,
        x = (function (e, t) {
            if (null == e) return {};
            var a,
                n,
                r = (function (e, t) {
                    if (null == e) return {};
                    var a,
                        n,
                        r = {},
                        l = Object.keys(e);
                    for (n = 0; n < l.length; n++) ((a = l[n]), t.indexOf(a) >= 0 || (r[a] = e[a]));
                    return r;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var l = Object.getOwnPropertySymbols(e);
                for (n = 0; n < l.length; n++) ((a = l[n]), !(t.indexOf(a) >= 0) && Object.prototype.propertyIsEnumerable.call(e, a) && (r[a] = e[a]));
            }
            return r;
        })(e, ['width', 'height', 'color', 'direction', 'foreground', 'className', 'title']);
    return (0, r.jsxs)(
        'svg',
        ((t = (function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var a = null != arguments[t] ? arguments[t] : {},
                    n = Object.keys(a);
                ('function' == typeof Object.getOwnPropertySymbols &&
                    (n = n.concat(
                        Object.getOwnPropertySymbols(a).filter(function (e) {
                            return Object.getOwnPropertyDescriptor(a, e).enumerable;
                        })
                    )),
                    n.forEach(function (t) {
                        var n;
                        ((n = a[t]),
                            t in e
                                ? Object.defineProperty(e, t, {
                                      value: n,
                                      enumerable: !0,
                                      configurable: !0,
                                      writable: !0
                                  })
                                : (e[t] = n));
                    }));
            }
            return e;
        })({}, (0, s.Z)(x))),
        (a = a =
            {
                width: n,
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
                    null != p ? (0, r.jsx)('title', { children: p }) : null,
                    (0, r.jsx)('polygon', {
                        className: u,
                        fill: c,
                        fillRule: 'nonzero',
                        points: '13 20 11 20 11 8 5.5 13.5 4.08 12.08 12 4.16 19.92 12.08 18.5 13.5 13 8'
                    })
                ]
            }),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(a))
            : (function (e, t) {
                  var a = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var n = Object.getOwnPropertySymbols(e);
                      a.push.apply(a, n);
                  }
                  return a;
              })(Object(a)).forEach(function (e) {
                  Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(a, e));
              }),
        t)
    );
};
d.Directions = c;
let u = d;
