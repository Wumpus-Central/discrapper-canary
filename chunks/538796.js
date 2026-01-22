n.d(t, {
    A: () => o,
});
var r = n(627968);
n(64700);
var i = n(503698),
    s = n.n(i),
    l = n(854378),
    a = n(478018);

function o(e) {
    var t, n;
    let { children: i, className: o } = e,
        c = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                i,
                s = {};
            if ("u" > typeof Reflect && Reflect.ownKeys) {
                for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++)
                    (r = n[i]),
                        !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (s[r] = e[r]);
                return s;
            }
            if (
                ((s = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        r,
                        i = {},
                        s = Object.getOwnPropertyNames(e);
                    for (r = 0; r < s.length; r++)
                        (n = s[r]),
                            !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
                    return i;
                })(e, t)),
                Object.getOwnPropertySymbols)
            )
                for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++)
                    (r = n[i]),
                        !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (s[r] = e[r]);
            return s;
        })(e, ["children", "className"]),
        u = i();
    return (0, r.jsx)(
        l.Ay,
        ((t = (function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {},
                    r = Object.keys(n);
                "function" == typeof Object.getOwnPropertySymbols &&
                    (r = r.concat(
                        Object.getOwnPropertySymbols(n).filter(function (e) {
                            return Object.getOwnPropertyDescriptor(n, e).enumerable;
                        }),
                    )),
                    r.forEach(function (t) {
                        var r;
                        (r = n[t]),
                            t in e
                                ? Object.defineProperty(e, t, {
                                      value: r,
                                      enumerable: !0,
                                      configurable: !0,
                                      writable: !0,
                                  })
                                : (e[t] = r);
                    });
            }
            return e;
        })({}, c)),
        (n = n =
            {
                className: s()(o, a.kL),
                contentClassName: a.Qs,
                children: u.map((e, t) =>
                    (0, r.jsx)(
                        "div",
                        {
                            className: a.fi,
                            style: {
                                flexBasis: "".concat(100 / u.length, "%"),
                            },
                            children: e,
                        },
                        t,
                    ),
                ),
            }),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(n)).forEach(function (e) {
                  Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
              }),
        t),
    );
}
