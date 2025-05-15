n.d(t, { Z: () => a });
var r = n(255367);
n(73800);
var i = n(562129),
    l = n(871499);
function a(e) {
    var { isActivityActive: t, onMouseEnter: n, onMouseLeave: a, onClick: o } = e,
        s = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                i = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        r,
                        i = {},
                        l = Object.keys(e);
                    for (r = 0; r < l.length; r++) (n = l[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
                    return i;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var l = Object.getOwnPropertySymbols(e);
                for (r = 0; r < l.length; r++) (n = l[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
            }
            return i;
        })(e, ['isActivityActive', 'onMouseEnter', 'onMouseLeave', 'onClick']);
    let { Component: c, events: u, play: d } = (0, i.Z)('ActivityButton');
    return (0, r.jsx)(
        l.d,
        (function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {},
                    r = Object.keys(n);
                'function' == typeof Object.getOwnPropertySymbols &&
                    (r = r.concat(
                        Object.getOwnPropertySymbols(n).filter(function (e) {
                            return Object.getOwnPropertyDescriptor(n, e).enumerable;
                        })
                    )),
                    r.forEach(function (t) {
                        var r;
                        (r = n[t]),
                            t in e
                                ? Object.defineProperty(e, t, {
                                      value: r,
                                      enumerable: !0,
                                      configurable: !0,
                                      writable: !0
                                  })
                                : (e[t] = r);
                    });
            }
            return e;
        })(
            {
                isTrayButton: !0,
                isActive: t,
                color: t ? 'green' : void 0,
                iconComponent: c,
                onMouseEnter: (e) => {
                    null == n || n(e), u.onMouseEnter();
                },
                onMouseLeave: (e) => {
                    null == a || a(e), u.onMouseLeave();
                },
                onClick: (e) => {
                    null == o || o(e), d();
                }
            },
            s
        )
    );
}
