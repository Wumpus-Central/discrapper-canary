n.d(t, { A: () => a });
var r = n(627968);
n(64700);
var l = n(697744),
    i = n(709562);
function a(e) {
    let { isActivityActive: t, onMouseEnter: n, onMouseLeave: a, onClick: s } = e,
        o = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                l,
                i = {};
            if ("u" > typeof Reflect && Reflect.ownKeys) {
                for (l = 0, n = Reflect.ownKeys(e); l < n.length; l++)
                    (r = n[l]),
                        !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
                return i;
            }
            if (
                ((i = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        r,
                        l = {},
                        i = Object.getOwnPropertyNames(e);
                    for (r = 0; r < i.length; r++)
                        (n = i[r]),
                            !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n]);
                    return l;
                })(e, t)),
                Object.getOwnPropertySymbols)
            )
                for (l = 0, n = Object.getOwnPropertySymbols(e); l < n.length; l++)
                    (r = n[l]),
                        !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
            return i;
        })(e, ["isActivityActive", "onMouseEnter", "onMouseLeave", "onClick"]),
        { Component: c, events: u, play: d } = (0, l.c)();
    return (0, r.jsx)(
        i.l,
        (function (e) {
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
                    null == s || s(e), d();
                },
            },
            o,
        ),
    );
}
