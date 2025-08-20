r.d(t, { Z: () => d }), r(35282);
var n = r(951288),
    i = r(647438),
    l = r(843611),
    s = r(215569);
function o(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {},
            n = Object.keys(r);
        "function" == typeof Object.getOwnPropertySymbols &&
            (n = n.concat(
                Object.getOwnPropertySymbols(r).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(r, e).enumerable;
                }),
            )),
            n.forEach(function (t) {
                var n;
                (n = r[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: n,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = n);
            });
    }
    return e;
}
function c(e, t) {
    return (
        (t = null != t ? t : {}),
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
        e
    );
}
function a(e, t) {
    if (null == e) return {};
    var r,
        n,
        i = (function (e, t) {
            if (null == e) return {};
            var r,
                n,
                i = {},
                l = Object.keys(e);
            for (n = 0; n < l.length; n++) (r = l[n]), t.indexOf(r) >= 0 || (i[r] = e[r]);
            return i;
        })(e, t);
    if (Object.getOwnPropertySymbols) {
        var l = Object.getOwnPropertySymbols(e);
        for (n = 0; n < l.length; n++)
            (r = l[n]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
    }
    return i;
}
class u extends i.Component {
    render() {
        let e = this.props,
            { children: t, location: r, history: u, staticContext: d, match: h } = e,
            f = a(e, ["children", "location", "history", "staticContext", "match"]),
            p = null,
            x = null;
        return (
            i.Children.forEach(t, (e) => {
                if (null == p && i.isValidElement(e)) {
                    let t = e.props,
                        { component: n, render: s } = t,
                        h = a(t, ["component", "render"]),
                        f = h.path || h.from;
                    null != (p = null != f ? (0, l.LX)(r.pathname, c(o({}, h), { path: f })) : null) &&
                        ((h = c(o({}, h), {
                            key: f,
                            location: r,
                            match: p,
                            history: u,
                            staticContext: d,
                        })),
                        null != n ? (x = i.createElement(n, h)) : null != s && (x = s(h)));
                }
            }),
            (0, n.jsx)(s.W, c(o({}, f), { children: x }))
        );
    }
}
let d = (0, l.EN)(u);
