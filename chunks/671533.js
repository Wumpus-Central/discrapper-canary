n.d(t, { Z: () => g }), n(415506);
var r = n(54381);
n(473749);
var i = n(120356),
    a = n.n(i),
    o = n(325767),
    s = n(922013);
function l(e, t, n) {
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
function c(e) {
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
                l(e, t, n[t]);
            });
    }
    return e;
}
function u(e, t) {
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
function d(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : u(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function f(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = _(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++)
            (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function _(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
var p = (function (e) {
    return (
        (e.LEFT = "LEFT"),
        (e.RIGHT = "RIGHT"),
        (e.UP = "UP"),
        (e.DOWN = "DOWN"),
        (e.UP_LEFT = "UP_LEFT"),
        (e.DOWN_RIGHT = "DOWN_RIGHT"),
        e
    );
})({});
function h(e) {
    switch (e) {
        case "LEFT":
            return s.left;
        case "RIGHT":
            return s.right;
        case "UP":
            return null;
        case "DOWN":
            return s.down;
        case "UP_LEFT":
            return s.upLeft;
        case "DOWN_RIGHT":
            return s.downRight;
        default:
            throw Error("Invalid Direction ".concat(e));
    }
}
let m = (e) => {
    var {
            width: t = 24,
            height: n = 24,
            color: i = "currentColor",
            direction: s,
            foreground: l,
            className: u,
            title: _,
        } = e,
        p = f(e, ["width", "height", "color", "direction", "foreground", "className", "title"]);
    return (0, r.jsxs)(
        "svg",
        d(c({}, (0, o.Z)(p)), {
            width: t,
            height: n,
            className: a()(u, h(s)),
            viewBox: "0 0 24 24",
            children: [
                null != _ ? (0, r.jsx)("title", { children: _ }) : null,
                (0, r.jsx)("polygon", {
                    className: l,
                    fill: i,
                    fillRule: "nonzero",
                    points: "13 20 11 20 11 8 5.5 13.5 4.08 12.08 12 4.16 19.92 12.08 18.5 13.5 13 8",
                }),
            ],
        }),
    );
};
m.Directions = p;
let g = m;
