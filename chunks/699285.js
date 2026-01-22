n.d(t, {
    d: () => p,
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
    return (0, r.jsxs)(
        "svg",
        u(l({}, (0, a.A)(h)), {
            xmlns: "http://www.w3.org/2000/svg",
            width: g,
            height: E,
            fill: "none",
            viewBox: "0 0 24 24",
            children: [
                (0, r.jsx)("path", {
                    fill: "string" == typeof p ? p : p.css,
                    d: "M19 4a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h14Zm0-2H5a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3Z",
                    className: _,
                }),
                (0, r.jsx)("path", {
                    fill: "string" == typeof p ? p : p.css,
                    d: "M8.78 16.15a3.16 3.16 0 0 1-2.95-1.76 4.39 4.39 0 0 1-.43-2.01c0-.77.14-1.44.43-2 .29-.58.69-1 1.2-1.31.5-.3 1.1-.46 1.75-.46 1.3 0 2.23.5 2.77 1.52l-1.14.9a1.86 1.86 0 0 0-.67-.76c-.3-.18-.61-.28-.96-.28a1.7 1.7 0 0 0-1.6 1.1c-.17.35-.25.78-.25 1.29 0 .5.08.94.24 1.3.16.36.38.63.67.8a1.73 1.73 0 0 0 1.89 0c.29-.17.52-.43.68-.75l1.14.9c-.26.5-.64.87-1.11 1.13-.47.26-1.02.39-1.66.39ZM15.53 16.15c-.66 0-1.25-.15-1.76-.45-.5-.31-.9-.75-1.2-1.32a4.39 4.39 0 0 1-.42-2c0-.77.14-1.44.43-2 .28-.58.68-1 1.2-1.31.5-.3 1.09-.46 1.75-.46 1.3 0 2.23.5 2.77 1.52l-1.15.9a1.86 1.86 0 0 0-.67-.76c-.28-.18-.6-.28-.95-.28a1.7 1.7 0 0 0-1.6 1.1c-.17.35-.25.78-.25 1.29 0 .5.08.94.24 1.3a1.7 1.7 0 0 0 1.6 1.08 1.83 1.83 0 0 0 1.63-1.03l1.15.9c-.27.5-.64.87-1.11 1.13-.47.26-1.03.39-1.66.39Z",
                    className: _,
                }),
            ],
        }),
    );
};
