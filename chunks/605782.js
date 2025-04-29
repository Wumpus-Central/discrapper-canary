n.d(t, { Z: () => d }), n(35282);
var r = n(255367),
    i = n(73800),
    l = n(114858),
    s = n(215569);
function o(e) {
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
function a(e, t) {
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
                l = Object.keys(e);
            for (r = 0; r < l.length; r++) (n = l[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
            return i;
        })(e, t);
    if (Object.getOwnPropertySymbols) {
        var l = Object.getOwnPropertySymbols(e);
        for (r = 0; r < l.length; r++) (n = l[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
class u extends i.Component {
    render() {
        let e = this.props,
            { children: t, location: n, history: u, staticContext: d, match: h } = e,
            p = c(e, ['children', 'location', 'history', 'staticContext', 'match']),
            g = null,
            f = null;
        return (
            i.Children.forEach(t, (e) => {
                if (null == g && i.isValidElement(e)) {
                    let t = e.props,
                        { component: r, render: s } = t,
                        h = c(t, ['component', 'render']),
                        p = h.path || h.from;
                    null != (g = null != p ? (0, l.LX)(n.pathname, a(o({}, h), { path: p })) : null) &&
                        ((h = a(o({}, h), {
                            key: p,
                            location: n,
                            match: g,
                            history: u,
                            staticContext: d
                        })),
                        null != r ? (f = i.createElement(r, h)) : null != s && (f = s(h)));
                }
            }),
            (0, r.jsx)(s.W, a(o({}, p), { children: f }))
        );
    }
}
let d = (0, l.EN)(u);
