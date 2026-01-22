n.d(t, {
    b: () => o,
});
var i = n(627968);
n(64700);
var r = n(827734),
    l = n(260612),
    a = n(953727);
let o = (e) => {
    var t, n, o, s;
    let { size: c = "md", width: u, height: d, color: p = r.A.colors.INTERACTIVE_TEXT_DEFAULT, colorClass: h = "" } = e,
        f = (function (e, t) {
            if (null == e) return {};
            var n,
                i,
                r,
                l = {};
            if ("u" > typeof Reflect && Reflect.ownKeys) {
                for (r = 0, n = Reflect.ownKeys(e); r < n.length; r++)
                    (i = n[r]),
                        !(t.indexOf(i) >= 0) && Object.prototype.propertyIsEnumerable.call(e, i) && (l[i] = e[i]);
                return l;
            }
            if (
                ((l = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        i,
                        r = {},
                        l = Object.getOwnPropertyNames(e);
                    for (i = 0; i < l.length; i++)
                        (n = l[i]),
                            !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
                    return r;
                })(e, t)),
                Object.getOwnPropertySymbols)
            )
                for (r = 0, n = Object.getOwnPropertySymbols(e); r < n.length; r++)
                    (i = n[r]),
                        !(t.indexOf(i) >= 0) && Object.prototype.propertyIsEnumerable.call(e, i) && (l[i] = e[i]);
            return l;
        })(e, ["size", "width", "height", "color", "colorClass"]),
        m = (0, l.J)(c),
        g = null != (t = null == m ? void 0 : m.width) ? t : u,
        y = null != (n = null == m ? void 0 : m.height) ? n : d;
    return (0, i.jsxs)(
        "svg",
        ((o = (function (e) {
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
        })({}, (0, a.A)(f))),
        (s = s =
            {
                xmlns: "http://www.w3.org/2000/svg",
                width: g,
                height: y,
                fill: "none",
                viewBox: "0 0 24 24",
                children: [
                    (0, i.jsx)("path", {
                        d: "M9 8.99976V6.99976H11V8.99976H9Z",
                        fill: "string" == typeof p ? p : p.css,
                        className: h,
                    }),
                    (0, i.jsx)("path", {
                        d: "M13 9V11H11V9H13Z",
                        fill: "string" == typeof p ? p : p.css,
                        className: h,
                    }),
                    (0, i.jsx)("path", {
                        d: "M8.99994 9V11H6.99994V9H8.99994Z",
                        fill: "string" == typeof p ? p : p.css,
                        className: h,
                    }),
                    (0, i.jsx)("path", {
                        d: "M12.9999 8.99976H14.9999V10.9998H16.9999V8.99976H14.9999V6.99976H12.9999V8.99976Z",
                        fill: "string" == typeof p ? p : p.css,
                        className: h,
                    }),
                    (0, i.jsx)("path", {
                        d: "M22 15C22.55 15 23 15.45 23 16V22C23 22.55 22.55 23 22 23C21.45 23 21 22.55 21 22V18.41L16.71 22.7C16.32 23.09 15.69 23.09 15.3 22.7C14.91 22.31 14.91 21.68 15.3 21.29L19.59 17H16C15.45 17 15 16.55 15 16C15 15.45 15.45 15 16 15H22Z",
                        fill: "string" == typeof p ? p : p.css,
                        className: h,
                    }),
                    (0, i.jsx)("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M15 12.14V11H13V13H11V11H9V13H7V11H5V9H7V7H5V5H7V7H9V5H11V7H13V5H15V7H17V5H19V7H17V9H19V11H17V12H22V5C22 3.34 20.66 2 19 2H5C3.34 2 2 3.34 2 5V13C2 14.66 3.34 16 5 16H12C12 14.14 13.28 12.59 15 12.14Z",
                        fill: "string" == typeof p ? p : p.css,
                        className: h,
                    }),
                    (0, i.jsx)("path", {
                        d: "M13 18.59C12.6 18.13 12.3 17.6 12.14 17H11.5C11.22 17 11 17.22 11 17.5V19.5C11 19.78 10.78 20 10.5 20H9C8.45 20 8 20.45 8 21C8 21.55 8.45 22 9 22H12C12 21.06 12.34 20.13 13 19.38V18.59Z",
                        fill: "string" == typeof p ? p : p.css,
                        className: h,
                    }),
                ],
            }),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(o, Object.getOwnPropertyDescriptors(s))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var i = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, i);
                  }
                  return n;
              })(Object(s)).forEach(function (e) {
                  Object.defineProperty(o, e, Object.getOwnPropertyDescriptor(s, e));
              }),
        o),
    );
};
