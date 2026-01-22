n.d(t, { A: () => r });
var l = n(627968);
n(64700);
var i = n(953727);
function r(e) {
    var t, n;
    let { color: r = "currentColor", foreground: s, backgroundColor: a = "none" } = e,
        o = (function (e, t) {
            if (null == e) return {};
            var n,
                l,
                i,
                r = {};
            if ("u" > typeof Reflect && Reflect.ownKeys) {
                for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++)
                    (l = n[i]),
                        !(t.indexOf(l) >= 0) && Object.prototype.propertyIsEnumerable.call(e, l) && (r[l] = e[l]);
                return r;
            }
            if (
                ((r = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        l,
                        i = {},
                        r = Object.getOwnPropertyNames(e);
                    for (l = 0; l < r.length; l++)
                        (n = r[l]),
                            !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
                    return i;
                })(e, t)),
                Object.getOwnPropertySymbols)
            )
                for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++)
                    (l = n[i]),
                        !(t.indexOf(l) >= 0) && Object.prototype.propertyIsEnumerable.call(e, l) && (r[l] = e[l]);
            return r;
        })(e, ["color", "foreground", "backgroundColor"]);
    return (0, l.jsxs)(
        "svg",
        ((t = (function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {},
                    l = Object.keys(n);
                "function" == typeof Object.getOwnPropertySymbols &&
                    (l = l.concat(
                        Object.getOwnPropertySymbols(n).filter(function (e) {
                            return Object.getOwnPropertyDescriptor(n, e).enumerable;
                        }),
                    )),
                    l.forEach(function (t) {
                        var l;
                        (l = n[t]),
                            t in e
                                ? Object.defineProperty(e, t, {
                                      value: l,
                                      enumerable: !0,
                                      configurable: !0,
                                      writable: !0,
                                  })
                                : (e[t] = l);
                    });
            }
            return e;
        })({}, (0, i.A)(o))),
        (n = n =
            {
                width: "272",
                height: "143",
                viewBox: "0 0 272 143",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                children: [
                    (0, l.jsx)("rect", {
                        className: s,
                        y: "15.5",
                        width: "272",
                        height: "112",
                        rx: "12",
                        fill: a,
                    }),
                    (0, l.jsx)("rect", {
                        className: s,
                        opacity: "0.5",
                        x: "12",
                        y: "27.5",
                        width: "168",
                        height: "8",
                        rx: "4",
                        fill: r,
                    }),
                    (0, l.jsx)("rect", {
                        className: s,
                        opacity: "0.5",
                        x: "12",
                        y: "43.5",
                        width: "96",
                        height: "8",
                        rx: "4",
                        fill: r,
                    }),
                    (0, l.jsx)("rect", {
                        className: s,
                        opacity: "0.5",
                        x: "12",
                        y: "67.5",
                        width: "168",
                        height: "8",
                        rx: "4",
                        fill: r,
                    }),
                    (0, l.jsx)("rect", {
                        className: s,
                        opacity: "0.5",
                        x: "12",
                        y: "83.5",
                        width: "168",
                        height: "8",
                        rx: "4",
                        fill: r,
                    }),
                    (0, l.jsx)("rect", {
                        className: s,
                        opacity: "0.5",
                        x: "196",
                        y: "27.5",
                        width: "64",
                        height: "64",
                        rx: "8",
                        fill: r,
                    }),
                    (0, l.jsx)("path", {
                        className: s,
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M222 49.5C219.791 49.5 218 51.2909 218 53.5V65.5C218 67.7091 219.791 69.5 222 69.5H234C236.209 69.5 238 67.7091 238 65.5V53.5C238 51.2909 236.209 49.5 234 49.5H222ZM226 55.5C226 54.3952 225.103 53.5 224 53.5C222.894 53.5 222 54.3952 222 55.5C222 56.6056 222.894 57.5 224 57.5C225.103 57.5 226 56.6056 226 55.5ZM225 61.5L222 65.5H234L231 58.5L227 63.5L225 61.5Z",
                        fill: "#C4C4C4",
                    }),
                    (0, l.jsx)("rect", {
                        className: s,
                        opacity: "0.5",
                        x: "12",
                        y: "107.5",
                        width: "32",
                        height: "8",
                        rx: "4",
                        fill: r,
                    }),
                    (0, l.jsx)("circle", {
                        className: s,
                        opacity: "0.5",
                        cx: "54",
                        cy: "111.5",
                        r: "2",
                        fill: r,
                        fillOpacity: "0.48",
                    }),
                    (0, l.jsx)("rect", {
                        className: s,
                        opacity: "0.5",
                        x: "64",
                        y: "107.5",
                        width: "32",
                        height: "8",
                        rx: "4",
                        fill: r,
                    }),
                    (0, l.jsx)("rect", {
                        className: s,
                        x: "0.5",
                        y: "16",
                        width: "271",
                        height: "111",
                        rx: "11.5",
                        stroke: r,
                        strokeOpacity: "0.3",
                    }),
                ],
            }),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var l = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, l);
                  }
                  return n;
              })(Object(n)).forEach(function (e) {
                  Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
              }),
        t),
    );
}
