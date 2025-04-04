n.d(t, { G: () => c }), n(47120);
var r = n(200651);
n(192379);
var i = n(390507);
function o(e, t, n) {
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
function a(e) {
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
                o(e, t, n[t]);
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
        var o = Object.getOwnPropertySymbols(e);
        for (r = 0; r < o.length; r++) (n = o[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function l(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        o = Object.keys(e);
    for (r = 0; r < o.length; r++) (n = o[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
let c = function (e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    return function (n) {
        var o,
            l,
            c,
            u,
            d,
            { color: f } = n,
            _ = s(n, ['color']);
        let p = 'currentColor';
        null != f && (p = 'string' != typeof f && 'css' in f ? f.css : f);
        let h = null != (o = _.size) ? o : 'md',
            m = (0, i.m)(h),
            g = {
                color: p,
                width: null != (c = null != (l = null == m ? void 0 : m.width) ? l : _.width) ? c : 24,
                height: null != (d = null != (u = null == m ? void 0 : m.height) ? u : _.height) ? d : 24,
                foreground: _.colorClass
            };
        for (let [e, n] of Object.entries(t)) null != _[e] && (g[n] = _[e]);
        return (0, r.jsx)(e, a({}, _, g));
    };
};
