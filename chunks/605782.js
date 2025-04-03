n.d(t, { Z: () => d }), n(301563);
var r = n(200651),
    o = n(192379),
    i = n(512969),
    c = n(215569);
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
function a(e, t) {
    if (null == e) return {};
    var n,
        r,
        o = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                o = {},
                i = Object.keys(e);
            for (r = 0; r < i.length; r++) (n = i[r]), t.indexOf(n) >= 0 || (o[n] = e[n]);
            return o;
        })(e, t);
    if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(e);
        for (r = 0; r < i.length; r++) (n = i[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n]);
    }
    return o;
}
class u extends o.Component {
    render() {
        let e = this.props,
            { children: t, location: n, history: u, staticContext: d, match: h } = e,
            p = a(e, ['children', 'location', 'history', 'staticContext', 'match']),
            f = null,
            b = null;
        return (
            o.Children.forEach(t, (e) => {
                if (null == f && o.isValidElement(e)) {
                    let t = e.props,
                        { component: r, render: c } = t,
                        h = a(t, ['component', 'render']),
                        p = h.path || h.from;
                    null != (f = null != p ? (0, i.LX)(n.pathname, s(l({}, h), { path: p })) : null) &&
                        ((h = s(l({}, h), {
                            key: p,
                            location: n,
                            match: f,
                            history: u,
                            staticContext: d
                        })),
                        null != r ? (b = o.createElement(r, h)) : null != c && (b = c(h)));
                }
            }),
            (0, r.jsx)(c.W, s(l({}, p), { children: b }))
        );
    }
}
let d = (0, i.EN)(u);
