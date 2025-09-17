n.d(t, { default: () => d });
var r = n(951288);
n(647438);
var i = n(481060),
    l = n(82084),
    o = n(131051),
    a = n(996733),
    s = n(313789),
    u = n(914578),
    c = n(920952);
function d(e) {
    var t,
        { target: n } = e,
        i = (function (e, t) {
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
                for (r = 0; r < l.length; r++)
                    (n = l[r]),
                        !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
            }
            return i;
        })(e, ["target"]);
    let d = (0, a.Z7)(),
        { node: f, directory: y } = (0, o.Z)(c.Z, d),
        O = ((t = s.n.ACCOUNT_PANEL), null == y.entry(n) ? t : n);
    return (0, r.jsx)(
        l.Z,
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
                root: f,
                directory: y,
                sidebarHeader: g,
                sidebarFooter: u.Z,
                target: O,
            },
            i,
        ),
    );
}
function g() {
    let e = (0, a.Z7)();
    return (0, r.jsx)("div", {
        children: (0, r.jsx)(i.E1j, {
            size: "md",
            query: e,
            onChange: a.yN,
            onClear: () => (0, a.yN)(""),
        }),
    });
}
