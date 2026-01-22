n.d(t, { K: () => f });
var r = n(627968);
n(64700);
var i = n(996682),
    a = n(27989);
function s(e, t, n) {
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
                s(e, t, n[t]);
            });
    }
    return e;
}
function l(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function c(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : l(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function u(e, t) {
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
    if (((a = d(e, t)), Object.getOwnPropertySymbols))
        for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++)
            (r = n[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a;
}
function d(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.getOwnPropertyNames(e);
    for (r = 0; r < a.length; r++)
        (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    return i;
}
let f = (e) => {
    var t, n;
    let { size: s = "md", width: l, height: d, color: f = "#F78B24", colorClass: p = "" } = e,
        _ = u(e, ["size", "width", "height", "color", "colorClass"]),
        h = (0, a.J)(s),
        m = null != (t = null == h ? void 0 : h.width) ? t : l,
        g = null != (n = null == h ? void 0 : h.height) ? n : d;
    return (0, r.jsxs)(
        "svg",
        c(o({}, (0, i.A)(_)), {
            xmlns: "http://www.w3.org/2000/svg",
            width: m,
            height: g,
            fill: "none",
            viewBox: "0 0 24 24",
            children: [
                (0, r.jsx)("path", {
                    fill: "string" == typeof f ? f : f.css,
                    d: "M10.94 22.7a11.02 11.02 0 0 1-8.86-6.08A10.08 10.08 0 0 1 1 11.85c0-1.79.33-3.22 1.08-4.75a10.96 10.96 0 0 1 8.52-6.05c.8-.1 2.51-.07 3.27.07 1.57.28 2.98.84 4.24 1.69a10.8 10.8 0 0 1 4.86 9.64c-.03.06-.05 0-.07-.28a9.65 9.65 0 0 0-19.01-.88 9.25 9.25 0 0 0 .3 4.84 9.62 9.62 0 0 0 8.1 6.48c.67.05.5.1-.33.1-.46 0-.92-.02-1.02-.03Z",
                    className: p,
                }),
                (0, r.jsx)("path", {
                    fill: "string" == typeof f ? f : f.css,
                    d: "M13.27 21.34a7.7 7.7 0 0 1-7.06-8.7 7.7 7.7 0 0 1 6.6-6.5c.7-.1 1.94-.07 2.6.07a8.2 8.2 0 0 1 1.74.56l.39.18-.37.18a3.47 3.47 0 0 0-1.96 3.5 3.5 3.5 0 0 0 5.98 1.96c.16-.16.3-.28.3-.26.02.02.05.24.09.5a7.67 7.67 0 0 1-8.3 8.51Z",
                    className: p,
                }),
            ],
        }),
    );
};
