n.d(t, {
    o: () => s,
});
var r = n(627968);
n(64700);
var l = n(996682),
    a = n(158954),
    i = n(827734);
let s = (e) => {
    var t, n, s, o;
    let { size: c = "md", width: u, height: d, color: m = i.A.colors.INTERACTIVE_TEXT_DEFAULT, colorClass: f = "" } = e,
        p = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                l,
                a = {};
            if ("u" > typeof Reflect && Reflect.ownKeys) {
                for (l = 0, n = Reflect.ownKeys(e); l < n.length; l++)
                    (r = n[l]),
                        !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
                return a;
            }
            if (
                ((a = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        r,
                        l = {},
                        a = Object.getOwnPropertyNames(e);
                    for (r = 0; r < a.length; r++)
                        (n = a[r]),
                            !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n]);
                    return l;
                })(e, t)),
                Object.getOwnPropertySymbols)
            )
                for (l = 0, n = Object.getOwnPropertySymbols(e); l < n.length; l++)
                    (r = n[l]),
                        !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
            return a;
        })(e, ["size", "width", "height", "color", "colorClass"]),
        h = (0, a.JtX)(c),
        b = null != (t = null == h ? void 0 : h.width) ? t : u,
        g = null != (n = null == h ? void 0 : h.height) ? n : d;
    return (0, r.jsx)(
        "svg",
        ((s = (function (e) {
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
        })({}, (0, l.A)(p))),
        (o = o =
            {
                xmlns: "http://www.w3.org/2000/svg",
                width: b,
                height: g,
                fill: "none",
                viewBox: "0 0 24 24",
                children: (0, r.jsx)("path", {
                    fill: "string" == typeof m ? m : m.css,
                    fillRule: "evenodd",
                    d: "M11 22C17.0751 22 22 17.0751 22 11C22 4.92487 17.0751 0 11 0C4.92487 0 0 4.92487 0 11C0 17.0751 4.92487 22 11 22ZM5.5 12C6.32843 12 7 11.3284 7 10.5C7 9.67157 6.32843 9 5.5 9C4.67157 9 4 9.67157 4 10.5C4 11.3284 4.67157 12 5.5 12ZM16.5 12C17.3284 12 18 11.3284 18 10.5C18 9.67157 17.3284 9 16.5 9C15.6716 9 15 9.67157 15 10.5C15 11.3284 15.6716 12 16.5 12ZM6.70142 15.831C7.16038 16.1382 7.78148 16.0152 8.08869 15.5563C8.71825 14.6158 9.78736 14 10.9999 14C12.2124 14 13.2815 14.6158 13.9111 15.5563C14.2183 16.0152 14.8394 16.1382 15.2984 15.831C15.7573 15.5238 15.8803 14.9027 15.5731 14.4437C14.5881 12.9723 12.9078 12 10.9999 12C9.09204 12 7.41166 12.9723 6.42669 14.4437C6.11947 14.9027 6.24247 15.5238 6.70142 15.831Z",
                    clipRule: "evenodd",
                    className: f,
                }),
            }),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(s, Object.getOwnPropertyDescriptors(o))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(o)).forEach(function (e) {
                  Object.defineProperty(s, e, Object.getOwnPropertyDescriptor(o, e));
              }),
        s),
    );
};
