n.d(t, { Z: () => d }), n(35282);
var r = n(200651),
    i = n(192379),
    o = n(512969),
    a = n(215569);
function l(e) {
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
}
function s(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function c(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                i = {},
                o = Object.keys(e);
            for (r = 0; r < o.length; r++) (n = o[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
            return i;
        })(e, t);
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        for (r = 0; r < o.length; r++) (n = o[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
class u extends i.Component {
    render() {
        let e = this.props,
            { children: t, location: n, history: u, staticContext: d, match: p } = e,
            g = c(e, ['children', 'location', 'history', 'staticContext', 'match']),
            h = null,
            f = null;
        return (
            i.Children.forEach(t, (e) => {
                if (null == h && i.isValidElement(e)) {
                    let t = e.props,
                        { component: r, render: a } = t,
                        p = c(t, ['component', 'render']),
                        g = p.path || p.from;
                    null != (h = null != g ? (0, o.LX)(n.pathname, s(l({}, p), { path: g })) : null) &&
                        ((p = s(l({}, p), {
                            key: g,
                            location: n,
                            match: h,
                            history: u,
                            staticContext: d
                        })),
                        null != r ? (f = i.createElement(r, p)) : null != a && (f = a(p)));
                }
            }),
            (0, r.jsx)(a.W, s(l({}, g), { children: f }))
        );
    }
}
let d = (0, o.EN)(u);
