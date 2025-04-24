n.d(t, { Z: () => d });
var i,
    r = n(200651),
    l = n(192379),
    o = n(120356),
    a = n.n(o),
    s = n(222465);
function c(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
class u extends (i = l.PureComponent) {
    render() {
        var e, t;
        let n = this.props,
            { tag: i, children: l, hoverText: o, className: u, forceHover: d } = n,
            f = (function (e, t) {
                if (null == e) return {};
                var n,
                    i,
                    r = (function (e, t) {
                        if (null == e) return {};
                        var n,
                            i,
                            r = {},
                            l = Object.keys(e);
                        for (i = 0; i < l.length; i++) (n = l[i]), t.indexOf(n) >= 0 || (r[n] = e[n]);
                        return r;
                    })(e, t);
                if (Object.getOwnPropertySymbols) {
                    var l = Object.getOwnPropertySymbols(e);
                    for (i = 0; i < l.length; i++) (n = l[i]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
                }
                return r;
            })(n, ['tag', 'children', 'hoverText', 'className', 'forceHover']);
        return (0, r.jsxs)(
            'div',
            ((e = (function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        i = Object.keys(n);
                    'function' == typeof Object.getOwnPropertySymbols &&
                        (i = i.concat(
                            Object.getOwnPropertySymbols(n).filter(function (e) {
                                return Object.getOwnPropertyDescriptor(n, e).enumerable;
                            })
                        )),
                        i.forEach(function (t) {
                            c(e, t, n[t]);
                        });
                }
                return e;
            })({}, f)),
            (t = t =
                {
                    className: a()(u, s.hoverRoll, {
                        [s.disabled]: null == o,
                        [s.forceHover]: d
                    }),
                    children: [
                        (0, r.jsx)(i, {
                            className: s.hovered,
                            children: o
                        }),
                        (0, r.jsx)(i, {
                            className: s.default,
                            children: l
                        })
                    ]
                }),
            Object.getOwnPropertyDescriptors
                ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
                : (function (e, t) {
                      var n = Object.keys(e);
                      if (Object.getOwnPropertySymbols) {
                          var i = Object.getOwnPropertySymbols(e);
                          n.push.apply(n, i);
                      }
                      return n;
                  })(Object(t)).forEach(function (n) {
                      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
                  }),
            e)
        );
    }
}
c(u, 'defaultProps', {
    tag: 'div',
    forceHover: !1
});
let d = u;
