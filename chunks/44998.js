n.d(t, {
    A: () => d,
});
var r = n(627968);
n(64700);
var i = n(953727);

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

function l(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : o(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}

function c(e, t) {
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
    if (((a = u(e, t)), Object.getOwnPropertySymbols))
        for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++)
            (r = n[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a;
}

function u(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.getOwnPropertyNames(e);
    for (r = 0; r < a.length; r++)
        (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    return i;
}

function d(e) {
    let { width: t = 12, height: n = 12, color: a = "currentColor", foreground: o } = e,
        u = c(e, ["width", "height", "color", "foreground"]);
    return (0, r.jsxs)(
        "svg",
        l(s({}, (0, i.A)(u)), {
            width: t,
            height: n,
            viewBox: "0 0 12 12",
            children: [
                (0, r.jsx)("path", {
                    className: o,
                    d: "M7.00168 1.08381C7.00168 0.485238 6.51645 0 5.91788 0C5.31931 0 4.83408 0.485238 4.83408 1.08381V2.18568C4.83408 2.78425 5.31931 3.26949 5.91788 3.26949C6.51645 3.26949 7.00168 2.78425 7.00168 2.18568V1.08381Z",
                    fill: a,
                }),
                (0, r.jsx)("path", {
                    className: o,
                    d: "M7.00159 9.81428C7.00159 9.21571 6.51636 8.73047 5.91779 8.73047C5.31922 8.73047 4.83398 9.21571 4.83398 9.81428V10.9161C4.83398 11.5147 5.31922 12 5.91779 12C6.51636 12 7.00159 11.5147 7.00159 10.9161V9.81428Z",
                    fill: a,
                }),
                (0, r.jsx)("path", {
                    className: o,
                    d: "M10.9162 7.10561C11.5148 7.10561 12 6.62037 12 6.0218C12 5.42323 11.5148 4.93799 10.9162 4.93799H9.81433C9.21576 4.93799 8.73053 5.42323 8.73053 6.0218C8.73053 6.62037 9.21576 7.10561 9.81433 7.10561H10.9162Z",
                    fill: a,
                }),
                (0, r.jsx)("path", {
                    className: o,
                    d: "M2.18573 7.04555C2.7843 7.04555 3.26953 6.56031 3.26953 5.96174C3.26953 5.36317 2.7843 4.87793 2.18573 4.87793H1.08386C0.485292 4.87793 5.67436e-05 5.36317 5.67436e-05 5.96174C5.67436e-05 6.56031 0.485292 7.04555 1.08386 7.04555H2.18573Z",
                    fill: a,
                }),
            ],
        }),
    );
}
