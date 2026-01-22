n.d(t, {
    L: () => p,
});
var r = n(627968);
n(64700);
var i = n(827734),
    a = n(996682),
    s = n(27989);

function o(e, t, n) {
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

function l(e) {
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
                o(e, t, n[t]);
            });
    }
    return e;
}

function c(e, t) {
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

function u(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : c(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}

function d(e, t) {
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
    if (((a = f(e, t)), Object.getOwnPropertySymbols))
        for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++)
            (r = n[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a;
}

function f(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.getOwnPropertyNames(e);
    for (r = 0; r < a.length; r++)
        (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    return i;
}
let p = (e) => {
    var t, n;
    let { size: o = "md", width: c, height: f, color: p = i.A.colors.INTERACTIVE_ICON_DEFAULT, colorClass: _ = "" } = e,
        h = d(e, ["size", "width", "height", "color", "colorClass"]),
        m = (0, s.J)(o),
        g = null != (t = null == m ? void 0 : m.width) ? t : c,
        E = null != (n = null == m ? void 0 : m.height) ? n : f;
    return (0, r.jsx)(
        "svg",
        u(l({}, (0, a.A)(h)), {
            xmlns: "http://www.w3.org/2000/svg",
            width: g,
            height: E,
            fill: "none",
            viewBox: "0 0 24 24",
            children: (0, r.jsx)("path", {
                fill: "string" == typeof p ? p : p.css,
                d: "m19.03 11.78-1.38 1.93a.3.3 0 0 1-.49-.01c-.48-.83-2.03-1.6-3.1-2.07a5.16 5.16 0 0 0-2.03-.41H4.58A2.53 2.53 0 0 0 2 13.4a2.44 2.44 0 0 0 2.43 2.7h14.85a2.53 2.53 0 0 0 2.57-2.2 2.44 2.44 0 0 0-1.55-2.52 1.1 1.1 0 0 0-1.28.4ZM3.43 18.1h17.01a.79.79 0 0 1 .79.79A3.11 3.11 0 0 1 18.12 22H5.75a3.11 3.11 0 0 1-3.11-3.11.79.79 0 0 1 .79-.79ZM11.93 2c4.77 0 8.7 2.74 9.29 6.28a.83.83 0 0 1-.86.92H3.5a.83.83 0 0 1-.86-.92C3.23 4.74 7.17 2 11.93 2Zm-2.3 4.7c-.63 0-1.13.34-1.13.76s.5.76 1.13.76c.62 0 1.12-.34 1.12-.76s-.5-.76-1.12-.76Zm4.55 0c-.62 0-1.12.34-1.12.76s.5.76 1.12.76c.63 0 1.13-.34 1.13-.76s-.5-.76-1.13-.76ZM7.37 4.3c-.63 0-1.13.33-1.13.75s.5.76 1.13.76c.62 0 1.12-.34 1.12-.76S8 4.3 7.37 4.3Zm9.13 0c-.62 0-1.12.33-1.12.75s.5.76 1.12.76c.62 0 1.13-.34 1.13-.76s-.5-.76-1.13-.76Zm-4.57-.77c-.62 0-1.12.34-1.12.76s.5.76 1.12.76c.63 0 1.13-.34 1.13-.76s-.5-.76-1.13-.76Z",
                className: _,
            }),
        }),
    );
};
