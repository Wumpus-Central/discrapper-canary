n.d(t, {
    k: () => c,
}),
    n(896048);
var r = n(627968);
n(64700);
var i = n(260612);

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

function s(e) {
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

function o(e, t) {
    if (null == e) return {};
    var n,
        r,
        i,
        a = {};
    if ("u" > typeof Reflect && Reflect.ownKeys) {
        for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++)
            (r = n[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
        return a;
    }
    if (((a = l(e, t)), Object.getOwnPropertySymbols))
        for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++)
            (r = n[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a;
}

function l(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.getOwnPropertyNames(e);
    for (r = 0; r < a.length; r++)
        (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    return i;
}
let c = function (e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    return function (n) {
        var a, l, c, u, d;
        let { color: f } = n,
            p = o(n, ["color"]),
            _ = "currentColor";
        null != f && (_ = "string" != typeof f && "css" in f ? f.css : f);
        let h = null != (a = p.size) ? a : "md",
            m = (0, i.J)(h),
            g = {
                color: _,
                width: null != (l = null != (c = null == m ? void 0 : m.width) ? c : p.width) ? l : 24,
                height: null != (u = null != (d = null == m ? void 0 : m.height) ? d : p.height) ? u : 24,
                foreground: p.colorClass,
            };
        for (let [e, n] of Object.entries(t)) null != p[e] && (g[n] = p[e]);
        return (0, r.jsx)(e, s({}, p, g));
    };
};
