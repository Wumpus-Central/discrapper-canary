l.d(t, {
    A: () => i,
});
var n = l(627968);
l(64700);
var r = l(953727);

function i(e) {
    var t, l;
    let { width: i = 24, height: a = 24, color: s = "currentColor", foreground: c } = e,
        o = (function (e, t) {
            if (null == e) return {};
            var l,
                n,
                r,
                i = {};
            if ("u" > typeof Reflect && Reflect.ownKeys) {
                for (r = 0, l = Reflect.ownKeys(e); r < l.length; r++)
                    (n = l[r]),
                        !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
                return i;
            }
            if (
                ((i = (function (e, t) {
                    if (null == e) return {};
                    var l,
                        n,
                        r = {},
                        i = Object.getOwnPropertyNames(e);
                    for (n = 0; n < i.length; n++)
                        (l = i[n]),
                            !(t.indexOf(l) >= 0) && Object.prototype.propertyIsEnumerable.call(e, l) && (r[l] = e[l]);
                    return r;
                })(e, t)),
                Object.getOwnPropertySymbols)
            )
                for (r = 0, l = Object.getOwnPropertySymbols(e); r < l.length; r++)
                    (n = l[r]),
                        !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
            return i;
        })(e, ["width", "height", "color", "foreground"]);
    return (0, n.jsx)(
        "svg",
        ((t = (function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var l = null != arguments[t] ? arguments[t] : {},
                    n = Object.keys(l);
                "function" == typeof Object.getOwnPropertySymbols &&
                    (n = n.concat(
                        Object.getOwnPropertySymbols(l).filter(function (e) {
                            return Object.getOwnPropertyDescriptor(l, e).enumerable;
                        }),
                    )),
                    n.forEach(function (t) {
                        var n;
                        (n = l[t]),
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
        })({}, (0, r.A)(o))),
        (l = l =
            {
                width: i,
                height: a,
                viewBox: "0 0 18 20",
                children: (0, n.jsx)("path", {
                    fill: s,
                    className: c,
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M8.17187 0H9.83854V0.833333H8.17187V0ZM8.17324 0.833419V1.75009H9.83991V0.833419H8.17324ZM8.17324 4.16662V5.41675H9.83991V4.16662H11.5066V5.83325H15.6719V14.1666H11.5066V15.8333H16.5052C16.9654 15.8333 17.3385 15.4602 17.3385 14.9999V4.99992C17.3385 4.53968 16.9654 4.16659 16.5052 4.16659H9.83991V3.58342H8.17324V4.16659H1.50521C1.04497 4.16659 0.671875 4.53968 0.671875 4.99992V14.9999C0.671875 15.4602 1.04497 15.8333 1.50521 15.8333H6.50658V14.1666H2.33854V5.83325H6.50658V4.16662H8.17324ZM8.17324 7.25008V9.08342H9.83991V7.25008H8.17324ZM8.17324 10.9167V12.7501H9.83991V10.9167H8.17324ZM8.17324 14.5834V16.4167H9.83991V14.5834H8.17324ZM9.83854 19.1668V20H8.17187V19.1667H8.17324V18.2501H9.83991V19.1668H9.83854Z",
                }),
            }),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(l))
            : (function (e, t) {
                  var l = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var n = Object.getOwnPropertySymbols(e);
                      l.push.apply(l, n);
                  }
                  return l;
              })(Object(l)).forEach(function (e) {
                  Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(l, e));
              }),
        t),
    );
}
