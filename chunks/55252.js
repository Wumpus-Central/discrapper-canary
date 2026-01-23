n.d(t, {
    C: () => f,
});
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
    let { size: s = "md", width: l, height: d } = e,
        f = u(e, ["size", "width", "height"]),
        p = (0, a.J)(s),
        _ = null != (t = null == p ? void 0 : p.width) ? t : l,
        h = null != (n = null == p ? void 0 : p.height) ? n : d;
    return (0, r.jsxs)(
        "svg",
        c(o({}, (0, i.A)(f)), {
            xmlns: "http://www.w3.org/2000/svg",
            width: _,
            height: h,
            fill: "none",
            viewBox: "0 0 24 24",
            children: [
                (0, r.jsx)("path", {
                    fill: "#006FCF",
                    fillRule: "evenodd",
                    d: "M2.4 4C1.07 4 0 4.9 0 6v12c0 1.1 1.07 2 2.4 2h19.2c1.32 0 2.4-.9 2.4-2V6c0-1.1-1.08-2-2.4-2H2.4Z",
                    clipRule: "evenodd",
                }),
                (0, r.jsx)("path", {
                    fill: "#fff",
                    d: "m14.64 8.53.25-.58.25.58.5 1.2h-1.45l.45-1.2Z",
                }),
                (0, r.jsx)("path", {
                    fill: "#fff",
                    fillRule: "evenodd",
                    d: "m17.7 11.49.04.1h-.04v-.1Z",
                    clipRule: "evenodd",
                }),
                (0, r.jsx)("path", {
                    fill: "#fff",
                    fillRule: "evenodd",
                    d: "m21.43 6-.58 1.53-.54-1.49h-3.43v1.45l-.67-1.45h-2.77l-2.85 6.42h2.27V18h6.87l.91-1.03.91 1.03H24v-1.86l-1.32-1.36 1.32-1.33.01-1.87h-1.2V7.94l-.2.63-1.17 3.06h-1.07L19.2 8.57l-.25-.63V11.58h-2.56l-.37-.9h-2.28l-.37.9H12l2.07-4.67h1.6l2.03 4.58V6.91h2l.9 2.36.25.66.25-.66.91-2.36H24V6h-2.57ZM13.8 17.13V12.5h3.9v.99h-2.74v.83h2.65v1h-2.65v.82h2.73v1h-3.89Zm9.81-.04H22.1L20.6 15.6l-1.4 1.54h-1.5l2.2-2.32-2.2-2.36h1.58l1.4 1.53 1.41-1.53h1.53l-2.19 2.32 2.2 2.31Z",
                    clipRule: "evenodd",
                }),
            ],
        }),
    );
};
