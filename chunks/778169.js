n.d(t, { k: () => o });
var i = n(54381),
    r = n(331595),
    l = n(793030),
    a = n(692547);
let o = (e) => {
    var t,
        n,
        o,
        s,
        { size: c = "md", width: u, height: d, color: p = a.Z.colors.INTERACTIVE_TEXT_DEFAULT, colorClass: f = "" } = e,
        h = (function (e, t) {
            if (null == e) return {};
            var n,
                i,
                r = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        i,
                        r = {},
                        l = Object.keys(e);
                    for (i = 0; i < l.length; i++) (n = l[i]), t.indexOf(n) >= 0 || (r[n] = e[n]);
                    return r;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var l = Object.getOwnPropertySymbols(e);
                for (i = 0; i < l.length; i++)
                    (n = l[i]),
                        !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
            }
            return r;
        })(e, ["size", "width", "height", "color", "colorClass"]);
    let m = (0, l.m2R)(c),
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
        })({}, (0, r.Z)(h))),
        (n = n =
            {
                width: g,
                height: b,
                viewBox: "0 0 20 20",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                children: [
                    (0, i.jsx)("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M10 8.33203C10.9205 8.33203 11.6667 9.07822 11.6667 9.9987V17.4987C11.6667 18.4192 10.9205 19.1654 10 19.1654H2.50004C1.57957 19.1654 0.833374 18.4192 0.833374 17.4987L0.833374 9.9987C0.833374 9.07822 1.57957 8.33203 2.50004 8.33203H10ZM3.75004 14.9987C3.05968 14.9987 2.50004 15.5583 2.50004 16.2487C2.50004 16.9391 3.05968 17.4987 3.75004 17.4987C4.4404 17.4987 5.00004 16.9391 5.00004 16.2487C5.00004 15.5583 4.4404 14.9987 3.75004 14.9987ZM8.75004 14.9987C8.05969 14.9987 7.50004 15.5583 7.50004 16.2487C7.50004 16.9391 8.05969 17.4987 8.75004 17.4987C9.4404 17.4987 10 16.9391 10 16.2487C10 15.5583 9.4404 14.9987 8.75004 14.9987ZM3.75004 9.9987C3.05968 9.9987 2.50004 10.5583 2.50004 11.2487C2.50004 11.9391 3.05968 12.4987 3.75004 12.4987C4.4404 12.4987 5.00004 11.9391 5.00004 11.2487C5.00004 10.5583 4.4404 9.9987 3.75004 9.9987ZM8.75004 9.9987C8.05969 9.9987 7.50004 10.5583 7.50004 11.2487C7.50004 11.9391 8.05969 12.4987 8.75004 12.4987C9.4404 12.4987 10 11.9391 10 11.2487C10 10.5583 9.4404 9.9987 8.75004 9.9987Z",
                        fill: "string" == typeof p ? p : p.css,
                        className: f,
                    }),
                    (0, i.jsx)("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M17.5 0.832031C18.4205 0.832031 19.1667 1.57822 19.1667 2.4987V9.9987C19.1667 10.9192 18.4205 11.6654 17.5 11.6654H13.3334V9.9987C13.3334 8.15775 11.841 6.66536 10 6.66536H8.33337V2.4987C8.33337 1.57822 9.07957 0.832031 10 0.832031L17.5 0.832031ZM16.25 7.4987C15.5597 7.4987 15 8.05834 15 8.7487C15 9.43905 15.5597 9.9987 16.25 9.9987C16.9404 9.9987 17.5 9.43905 17.5 8.7487C17.5 8.05834 16.9404 7.4987 16.25 7.4987ZM11.25 2.4987C10.5597 2.4987 10 3.05834 10 3.7487C10 4.43905 10.5597 4.9987 11.25 4.9987C11.9404 4.9987 12.5 4.43905 12.5 3.7487C12.5 3.05834 11.9404 2.4987 11.25 2.4987Z",
                        fill: "string" == typeof p ? p : p.css,
                        className: f,
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
