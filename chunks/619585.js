n.d(t, {
    f: () => p,
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
                    d: "M9.97 2.65c0-.76.4-1.56 1.16-1.62a11.15 11.15 0 0 1 1.74 0c.76.06 1.16.86 1.16 1.62 0 .92.37 1.68 1.03 1.96.66.27 1.46 0 2.11-.66.54-.53 1.4-.81 1.97-.32.44.38.85.79 1.23 1.23.5.58.21 1.43-.32 1.97-.65.65-.93 1.45-.66 2.1.28.67 1.04 1.03 1.96 1.04.76 0 1.56.4 1.62 1.16a11.17 11.17 0 0 1 0 1.74c-.03.38-.25.67-.55.86-.17.11-.38.06-.53-.08l-.77-.77a3 3 0 0 0-4.24 0l-.86.86a.2.2 0 0 1-.28 0 .2.2 0 0 1-.04-.22A3.99 3.99 0 0 0 12 8a4 4 0 1 0 1.52 7.7.2.2 0 0 1 .22.04.2.2 0 0 1 0 .28l-.86.86a3 3 0 0 0 .7 4.76c.22.12.37.37.26.6-.2.4-.52.7-.97.73a11.12 11.12 0 0 1-1.74 0c-.76-.06-1.16-.86-1.16-1.62 0-.92-.37-1.68-1.03-1.96-.66-.27-1.46 0-2.11.66-.54.53-1.4.81-1.97.32-.44-.38-.85-.79-1.23-1.23-.5-.58-.21-1.43.32-1.97.65-.65.93-1.45.66-2.1-.28-.67-1.04-1.03-1.96-1.04-.76 0-1.56-.4-1.62-1.16a11.15 11.15 0 0 1 0-1.74c.06-.76.86-1.16 1.62-1.16.92 0 1.68-.37 1.96-1.03.27-.66 0-1.46-.66-2.11-.53-.54-.81-1.4-.32-1.97.38-.44.79-.85 1.23-1.23.58-.5 1.43-.21 1.97.32.65.65 1.45.93 2.1.66.67-.28 1.03-1.04 1.04-1.96Z",
                    className: _,
                }),
                (0, r.jsx)("path", {
                    fill: "string" == typeof p ? p : p.css,
                    d: "M18.3 14.3a1 1 0 0 1 1.4 0l4 4a1 1 0 0 1-1.4 1.4L20 17.42V23a1 1 0 0 1-2 0v-5.59l-2.3 2.3a1 1 0 0 1-1.4-1.42l4-4Z",
                    className: _,
                }),
            ],
        }),
    );
};
