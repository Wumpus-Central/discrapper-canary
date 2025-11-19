n.d(t, { Z: () => s });
var r = n(54381);
n(473749);
var i = n(27457),
    l = n(131951),
    a = n(723262);
function s(e) {
    var { aspectRatio: t, className: n, children: s, width: o } = e,
        c = (function (e, t) {
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
        })(e, ["aspectRatio", "className", "children", "width"]);
    let d = l.Z.getVideoComponent();
    return (0, r.jsx)("div", {
        style: { width: o },
        className: a.spaceBetweenTiles,
        children: (0, r.jsxs)("div", {
            className: a.tileSizer,
            style: { aspectRatio: t },
            children: [
                (0, r.jsx)(
                    i.ZP,
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
                            className: n,
                            videoComponent: d,
                            width: o,
                        },
                        c,
                    ),
                ),
                s,
            ],
        }),
    });
}
