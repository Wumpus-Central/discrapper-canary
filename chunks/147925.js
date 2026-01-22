n.d(t, { A: () => _ });
var r = n(627968);
n(64700);
var i = n(397927),
    a = n(849881);
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
let f = {
        UP: a.hv,
        RIGHT: a.kL,
        DOWN: a.Gb,
        LEFT: a.PI,
    },
    p = (e) => {
        let {
                direction: t = f.DOWN,
                width: n = 24,
                height: a = 24,
                color: s = "currentColor",
                className: l,
                foreground: d,
                expanded: p,
            } = e,
            _ = u(e, ["direction", "width", "height", "color", "className", "foreground", "expanded"]),
            h = t;
        !0 === p ? (h = f.DOWN) : !1 === p && (h = f.RIGHT);
        let m = {
            [f.UP]: i.tN5,
            [f.DOWN]: i.abt,
            [f.LEFT]: i.n2b,
            [f.RIGHT]: i._BQ,
        }[h];
        return (0, r.jsx)(
            m,
            c(o({}, _), {
                className: l,
                size: "custom",
                width: n,
                height: a,
                color: null != s ? s : "currentColor",
                colorClass: d,
            }),
        );
    };
p.Directions = f;
let _ = p;
