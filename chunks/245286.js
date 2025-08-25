n.d(t, { default: () => b });
var o = n(951288),
    r = n(481060),
    i = n(82084),
    a = n(131051),
    c = n(996733),
    l = n(604227),
    s = n(920952);
function b(e) {
    let t = (0, c.Z7)(),
        n = (0, a.Z)(s.Z, t);
    return (0, o.jsx)(
        i.Z,
        (function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {},
                    o = Object.keys(n);
                "function" == typeof Object.getOwnPropertySymbols &&
                    (o = o.concat(
                        Object.getOwnPropertySymbols(n).filter(function (e) {
                            return Object.getOwnPropertyDescriptor(n, e).enumerable;
                        }),
                    )),
                    o.forEach(function (t) {
                        var o;
                        (o = n[t]),
                            t in e
                                ? Object.defineProperty(e, t, {
                                      value: o,
                                      enumerable: !0,
                                      configurable: !0,
                                      writable: !0,
                                  })
                                : (e[t] = o);
                    });
            }
            return e;
        })(
            {
                root: n,
                sidebarHeader: _,
                sidebarFooter: l.Z,
            },
            e,
        ),
    );
}
function _() {
    let e = (0, c.Z7)();
    return (0, o.jsx)("div", {
        children: (0, o.jsx)(r.E1j, {
            size: "md",
            query: e,
            onChange: c.yN,
            onClear: () => (0, c.yN)(""),
        }),
    });
}
