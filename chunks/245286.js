n.d(t, { default: () => c });
var r = n(951288);
n(647438);
var l = n(481060),
    i = n(82084),
    o = n(131051),
    s = n(996733),
    a = n(914578),
    u = n(920952);
function c(e) {
    let t = (0, s.Z7)(),
        { node: n, directory: l } = (0, o.Z)(u.Z, t);
    return (0, r.jsx)(
        i.Z,
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
                root: n,
                directory: l,
                sidebarHeader: d,
                sidebarFooter: a.Z,
            },
            e,
        ),
    );
}
function d() {
    let e = (0, s.Z7)();
    return (0, r.jsx)("div", {
        children: (0, r.jsx)(l.E1j, {
            size: "md",
            query: e,
            onChange: s.yN,
            onClear: () => (0, s.yN)(""),
        }),
    });
}
