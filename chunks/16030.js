n.d(t, { G: () => c }), n(388685);
var r = n(255367);
n(73800);
var i = n(390507);
function a(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function o(e) {
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
        for (r = 0; r < a.length; r++) (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
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
            { color: _ } = n,
            f = s(n, ['color']);
        let p = 'currentColor';
        null != _ && (p = 'string' != typeof _ && 'css' in _ ? _.css : _);
        let h = null != (a = f.size) ? a : 'md',
            m = (0, i.m)(h),
            g = {
                color: p,
                width: null != (c = null != (l = null == m ? void 0 : m.width) ? l : f.width) ? c : 24,
                height: null != (d = null != (u = null == m ? void 0 : m.height) ? u : f.height) ? d : 24,
                foreground: f.colorClass
            };
        for (let [e, n] of Object.entries(t)) null != f[e] && (g[n] = f[e]);
        return (0, r.jsx)(e, o({}, f, g));
    };
};
