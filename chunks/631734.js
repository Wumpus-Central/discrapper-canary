n.d(t, { a: () => o });
var i = n(54381);
n(473749);
var r = n(692547),
    a = n(390507),
    l = n(325767);
let o = (e) => {
    var t,
        n,
        o,
        s,
        { size: c = "md", width: u, height: d, color: f = r.Z.colors.INTERACTIVE_TEXT_DEFAULT, colorClass: h = "" } = e,
        p = (function (e, t) {
            if (null == e) return {};
            var n,
                i,
                r = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        i,
                        r = {},
                        a = Object.keys(e);
                    for (i = 0; i < a.length; i++) (n = a[i]), t.indexOf(n) >= 0 || (r[n] = e[n]);
                    return r;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(e);
                for (i = 0; i < a.length; i++)
                    (n = a[i]),
                        !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
            }
            return r;
        })(e, ["size", "width", "height", "color", "colorClass"]);
    let m = (0, a.m)(c),
        g = null != (o = null == m ? void 0 : m.width) ? o : u,
        b = null != (s = null == m ? void 0 : m.height) ? s : d;
    return (0, i.jsxs)(
        "svg",
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
        })({}, (0, l.Z)(p))),
        (n = n =
            {
                xmlns: "http://www.w3.org/2000/svg",
                width: g,
                height: b,
                fill: "none",
                viewBox: "0 0 24 24",
                children: [
                    (0, i.jsx)("path", {
                        d: "M9 8.99976V6.99976H11V8.99976H9Z",
                        fill: "string" == typeof f ? f : f.css,
                        className: h,
                    }),
                    (0, i.jsx)("path", {
                        d: "M13 9V11H11V9H13Z",
                        fill: "string" == typeof f ? f : f.css,
                        className: h,
                    }),
                    (0, i.jsx)("path", {
                        d: "M8.99994 9V11H6.99994V9H8.99994Z",
                        fill: "string" == typeof f ? f : f.css,
                        className: h,
                    }),
                    (0, i.jsx)("path", {
                        d: "M12.9999 8.99976H14.9999V10.9998H16.9999V8.99976H14.9999V6.99976H12.9999V8.99976Z",
                        fill: "string" == typeof f ? f : f.css,
                        className: h,
                    }),
                    (0, i.jsx)("path", {
                        d: "M22 15C22.55 15 23 15.45 23 16V22C23 22.55 22.55 23 22 23C21.45 23 21 22.55 21 22V18.41L16.71 22.7C16.32 23.09 15.69 23.09 15.3 22.7C14.91 22.31 14.91 21.68 15.3 21.29L19.59 17H16C15.45 17 15 16.55 15 16C15 15.45 15.45 15 16 15H22Z",
                        fill: "string" == typeof f ? f : f.css,
                        className: h,
                    }),
                    (0, i.jsx)("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M15 12.14V11H13V13H11V11H9V13H7V11H5V9H7V7H5V5H7V7H9V5H11V7H13V5H15V7H17V5H19V7H17V9H19V11H17V12H22V5C22 3.34 20.66 2 19 2H5C3.34 2 2 3.34 2 5V13C2 14.66 3.34 16 5 16H12C12 14.14 13.28 12.59 15 12.14Z",
                        fill: "string" == typeof f ? f : f.css,
                        className: h,
                    }),
                    (0, i.jsx)("path", {
                        d: "M13 18.59C12.6 18.13 12.3 17.6 12.14 17H11.5C11.22 17 11 17.22 11 17.5V19.5C11 19.78 10.78 20 10.5 20H9C8.45 20 8 20.45 8 21C8 21.55 8.45 22 9 22H12C12 21.06 12.34 20.13 13 19.38V18.59Z",
                        fill: "string" == typeof f ? f : f.css,
                        className: h,
                    }),
                ],
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
};
