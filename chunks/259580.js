n.d(t, { Z: () => p });
var r = n(255367);
n(73800);
var i = n(481060),
    a = n(372584);
function o(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function s(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                o(e, t, n[t]);
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
        i = d(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++) (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function d(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
let f = {
        UP: a.directionUp,
        RIGHT: a.directionRight,
        DOWN: a.directionDown,
        LEFT: a.directionLeft
    },
    _ = (e) => {
        var { direction: t = f.DOWN, width: n = 24, height: a = 24, color: o = 'currentColor', className: l, foreground: d, expanded: _ } = e,
            p = u(e, ['direction', 'width', 'height', 'color', 'className', 'foreground', 'expanded']);
        let h = t;
        !0 === _ ? (h = f.DOWN) : !1 === _ && (h = f.RIGHT);
        let m = {
            [f.UP]: i.u04,
            [f.DOWN]: i.CJ0,
            [f.LEFT]: i.V7D,
            [f.RIGHT]: i.Fbu
        }[h];
        return (0, r.jsx)(
            m,
            c(s({}, p), {
                className: l,
                size: 'custom',
                width: n,
                height: a,
                color: null != o ? o : 'currentColor',
                colorClass: d
            })
        );
    };
_.Directions = f;
let p = _;
