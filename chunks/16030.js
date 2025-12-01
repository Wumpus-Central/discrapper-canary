n.d(t, { G: () => c }), n(388685);
var r = n(54381);
n(473749);
var i = n(390507);
function a(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function o(e) {
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
                a(e, t, n[t]);
            });
    }
    return e;
}
function s(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = l(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++)
            (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function l(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
let c = function (e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    return function (n) {
        var a,
            l,
            c,
            u,
            d,
            { color: f } = n,
            p = s(n, ["color"]);
        let _ = "currentColor";
        null != f && (_ = "string" != typeof f && "css" in f ? f.css : f);
        let m = null != (a = p.size) ? a : "md",
            h = (0, i.m)(m),
            g = {
                color: _,
                width: null != (c = null != (l = null == h ? void 0 : h.width) ? l : p.width) ? c : 24,
                height: null != (d = null != (u = null == h ? void 0 : h.height) ? u : p.height) ? d : 24,
                foreground: p.colorClass,
            };
        for (let [e, n] of Object.entries(t)) null != p[e] && (g[n] = p[e]);
        return (0, r.jsx)(e, o({}, p, g));
    };
};
