n.d(t, {
    A: () => d,
});
var i = n(627968);
n(64700);
var s = n(503698),
    r = n.n(s),
    l = n(397927),
    o = n(985018),
    a = n(995631);

function d(e) {
    var t, n;
    let { className: s, "aria-label": d } = e,
        u = (function (e, t) {
            if (null == e) return {};
            var n,
                i,
                s,
                r = {};
            if ("u" > typeof Reflect && Reflect.ownKeys) {
                for (s = 0, n = Reflect.ownKeys(e); s < n.length; s++)
                    (i = n[s]),
                        !(t.indexOf(i) >= 0) && Object.prototype.propertyIsEnumerable.call(e, i) && (r[i] = e[i]);
                return r;
            }
            if (
                ((r = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        i,
                        s = {},
                        r = Object.getOwnPropertyNames(e);
                    for (i = 0; i < r.length; i++)
                        (n = r[i]),
                            !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (s[n] = e[n]);
                    return s;
                })(e, t)),
                Object.getOwnPropertySymbols)
            )
                for (s = 0, n = Object.getOwnPropertySymbols(e); s < n.length; s++)
                    (i = n[s]),
                        !(t.indexOf(i) >= 0) && Object.prototype.propertyIsEnumerable.call(e, i) && (r[i] = e[i]);
            return r;
        })(e, ["className", "aria-label"]);
    return (0, i.jsx)(
        l.DUT,
        ((t = (function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {},
                    i = Object.keys(n);
                "function" == typeof Object.getOwnPropertySymbols &&
                    (i = i.concat(
                        Object.getOwnPropertySymbols(n).filter(function (e) {
                            return Object.getOwnPropertyDescriptor(n, e).enumerable;
                        }),
                    )),
                    i.forEach(function (t) {
                        var i;
                        (i = n[t]),
                            t in e
                                ? Object.defineProperty(e, t, {
                                      value: i,
                                      enumerable: !0,
                                      configurable: !0,
                                      writable: !0,
                                  })
                                : (e[t] = i);
                    });
            }
            return e;
        })({}, u)),
        (n = n =
            {
                "aria-label": null != d ? d : o.intl.string(o.t.N86XcP),
                className: r()(a.x, s),
                children: (0, i.jsx)(l.aXh, {
                    size: "xs",
                    color: "currentColor",
                }),
            }),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var i = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, i);
                  }
                  return n;
              })(Object(n)).forEach(function (e) {
                  Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
              }),
        t),
    );
}
