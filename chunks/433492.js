n.d(t, {
    K: () => p,
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
                d: "M13.76 4.97a1 1 0 0 1-.73-1.21l.5-2a1 1 0 1 1 1.94.48l-.5 2a1 1 0 0 1-1.21.73ZM19.2 3.8a1 1 0 0 1 0 1.4l-1.5 1.5a1 1 0 1 1-1.4-1.4l1.5-1.5a1 1 0 0 1 1.4 0ZM7.46 11.05 9.6 8.2a3 3 0 0 1 4.8 0l2.14 2.85-.83.83a1 1 0 0 1-1.42 0l-.17-.17a3 3 0 0 0-4.24 0l-.17.17a1 1 0 0 1-1.42 0l-.83-.83ZM6.25 12.67 2.4 17.8A2 2 0 0 0 4 21h16a2 2 0 0 0 1.6-3.2l-3.85-5.13-.63.62a3 3 0 0 1-4.24 0l-.17-.17a1 1 0 0 0-1.42 0l-.17.17a3 3 0 0 1-4.24 0l-.63-.62ZM4.8 5.2a1 1 0 0 1 1.4-1.4l1.5 1.5a1 1 0 0 1-1.4 1.4L4.8 5.2ZM21.97 8.26a1 1 0 0 1-.73 1.21l-2 .5a1 1 0 1 1-.48-1.94l2-.5a1 1 0 0 1 1.21.73ZM2.76 9.47a1 1 0 1 1 .48-1.94l2 .5a1 1 0 1 1-.48 1.94l-2-.5ZM10.97 3.76a1 1 0 0 1-1.94.48l-.5-2a1 1 0 1 1 1.94-.48l.5 2Z",
                className: _,
            }),
        }),
    );
};
