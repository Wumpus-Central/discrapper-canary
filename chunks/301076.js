n.d(t, { Z: () => a });
var i = n(54381);
n(473749);
var r = n(562129),
    l = n(871499);
function a(e) {
    var { isActivityActive: t, onMouseEnter: n, onMouseLeave: a, onClick: o } = e,
        s = (function (e, t) {
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
        })(e, ["isActivityActive", "onMouseEnter", "onMouseLeave", "onClick"]);
    let { Component: c, events: u, play: d } = (0, r.Z)("ActivityButton");
    return (0, i.jsx)(
        l.d,
        (function (e) {
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
        })(
            {
                isTrayButton: !0,
                isActive: t,
                color: t ? "green" : void 0,
                iconComponent: c,
                onMouseEnter: (e) => {
                    null == n || n(e), u.onMouseEnter();
                },
                onMouseLeave: (e) => {
                    null == a || a(e), u.onMouseLeave();
                },
                onClick: (e) => {
                    null == o || o(e), d();
                },
            },
            s,
        ),
    );
}
