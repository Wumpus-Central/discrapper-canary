r.d(t, { Z: () => d });
var n,
    i = r(200651),
    o = r(192379),
    l = r(120356),
    a = r.n(l),
    c = r(384383);
function u(e, t, r) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = r),
        e
    );
}
class s extends (n = o.PureComponent) {
    render() {
        var e, t;
        let r = this.props,
            { tag: n, children: o, hoverText: l, className: s, forceHover: d } = r,
            p = (function (e, t) {
                if (null == e) return {};
                var r,
                    n,
                    i = (function (e, t) {
                        if (null == e) return {};
                        var r,
                            n,
                            i = {},
                            o = Object.keys(e);
                        for (n = 0; n < o.length; n++) (r = o[n]), t.indexOf(r) >= 0 || (i[r] = e[r]);
                        return i;
                    })(e, t);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(e);
                    for (n = 0; n < o.length; n++) (r = o[n]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
                }
                return i;
            })(r, ['tag', 'children', 'hoverText', 'className', 'forceHover']);
        return (0, i.jsxs)(
            'div',
            ((e = (function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {},
                        n = Object.keys(r);
                    'function' == typeof Object.getOwnPropertySymbols &&
                        (n = n.concat(
                            Object.getOwnPropertySymbols(r).filter(function (e) {
                                return Object.getOwnPropertyDescriptor(r, e).enumerable;
                            })
                        )),
                        n.forEach(function (t) {
                            u(e, t, r[t]);
                        });
                }
                return e;
            })({}, p)),
            (t = t =
                {
                    className: a()(s, c.hoverRoll, {
                        [c.disabled]: null == l,
                        [c.forceHover]: d
                    }),
                    children: [
                        (0, i.jsx)(n, {
                            className: c.hovered,
                            children: l
                        }),
                        (0, i.jsx)(n, {
                            className: c.default,
                            children: o
                        })
                    ]
                }),
            Object.getOwnPropertyDescriptors
                ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
                : (function (e, t) {
                      var r = Object.keys(e);
                      if (Object.getOwnPropertySymbols) {
                          var n = Object.getOwnPropertySymbols(e);
                          r.push.apply(r, n);
                      }
                      return r;
                  })(Object(t)).forEach(function (r) {
                      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
                  }),
            e)
        );
    }
}
u(s, 'defaultProps', {
    tag: 'div',
    forceHover: !1
});
let d = s;
