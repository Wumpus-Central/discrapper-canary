i.d(e, { Z: () => d }), i(35282);
var s = i(54381),
    n = i(473749),
    r = i(828700),
    a = i(215569);
function h(t) {
    for (var e = 1; e < arguments.length; e++) {
        var i = null != arguments[e] ? arguments[e] : {},
            s = Object.keys(i);
        "function" == typeof Object.getOwnPropertySymbols &&
            (s = s.concat(
                Object.getOwnPropertySymbols(i).filter(function (t) {
                    return Object.getOwnPropertyDescriptor(i, t).enumerable;
                }),
            )),
            s.forEach(function (e) {
                var s;
                (s = i[e]),
                    e in t
                        ? Object.defineProperty(t, e, {
                              value: s,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (t[e] = s);
            });
    }
    return t;
}
function l(t, e) {
    return (
        (e = null != e ? e : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(e))
            : (function (t, e) {
                  var i = Object.keys(t);
                  if (Object.getOwnPropertySymbols) {
                      var s = Object.getOwnPropertySymbols(t);
                      i.push.apply(i, s);
                  }
                  return i;
              })(Object(e)).forEach(function (i) {
                  Object.defineProperty(t, i, Object.getOwnPropertyDescriptor(e, i));
              }),
        t
    );
}
function o(t, e) {
    if (null == t) return {};
    var i,
        s,
        n = (function (t, e) {
            if (null == t) return {};
            var i,
                s,
                n = {},
                r = Object.keys(t);
            for (s = 0; s < r.length; s++) (i = r[s]), e.indexOf(i) >= 0 || (n[i] = t[i]);
            return n;
        })(t, e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(t);
        for (s = 0; s < r.length; s++)
            (i = r[s]), !(e.indexOf(i) >= 0) && Object.prototype.propertyIsEnumerable.call(t, i) && (n[i] = t[i]);
    }
    return n;
}
class c extends n.Component {
    render() {
        let t = this.props,
            { children: e, location: i, history: c, staticContext: d, match: u } = t,
            p = o(t, ["children", "location", "history", "staticContext", "match"]),
            f = null,
            m = null;
        return (
            n.Children.forEach(e, (t) => {
                if (null == f && n.isValidElement(t)) {
                    let e = t.props,
                        { component: s, render: a } = e,
                        u = o(e, ["component", "render"]),
                        p = u.path || u.from;
                    null != (f = null != p ? (0, r.LX)(i.pathname, l(h({}, u), { path: p })) : null) &&
                        ((u = l(h({}, u), {
                            key: p,
                            location: i,
                            match: f,
                            history: c,
                            staticContext: d,
                        })),
                        null != s ? (m = n.createElement(s, u)) : null != a && (m = a(u)));
                }
            }),
            (0, s.jsx)(a.W, l(h({}, p), { children: m }))
        );
    }
}
let d = (0, r.EN)(c);
