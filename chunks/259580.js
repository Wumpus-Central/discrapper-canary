n.d(t, { Z: () => g });
var r = n(200651);
n(192379);
var i = n(120356),
    o = n.n(i),
    a = n(481060),
    s = n(325767),
    l = n(991870);
function c(e, t, n) {
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
function u(e) {
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
                c(e, t, n[t]);
            });
    }
    return e;
}
function d(e, t) {
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
function f(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : d(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function p(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = _(e, t);
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        for (r = 0; r < o.length; r++) (n = o[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function _(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        o = Object.keys(e);
    for (r = 0; r < o.length; r++) (n = o[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
let h = {
        UP: l.directionUp,
        RIGHT: l.directionRight,
        DOWN: l.directionDown,
        LEFT: l.directionLeft
    },
    m = (e) => {
        var { direction: t = h.DOWN, width: n = 24, height: i = 24, color: c = 'currentColor', transition: d = l.transition, className: _, foreground: m, expanded: g } = e,
            E = p(e, ['direction', 'width', 'height', 'color', 'transition', 'className', 'foreground', 'expanded']);
        let { enabled: v } = (0, a.bWb)(),
            b = t;
        if ((!0 === g ? (b = h.DOWN) : !1 === g && (b = h.RIGHT), v)) {
            let e = {
                [h.UP]: a.u04,
                [h.DOWN]: a.CJ0,
                [h.LEFT]: a.V7D,
                [h.RIGHT]: a.Fbu
            }[b];
            return (0, r.jsx)(
                e,
                f(u({}, E), {
                    className: _,
                    size: 'custom',
                    width: n,
                    height: i,
                    color: null != c ? c : 'currentColor',
                    colorClass: m
                })
            );
        }
        return (0, r.jsx)(
            'svg',
            f(
                u(
                    {
                        className: o()(_, d, b),
                        width: n,
                        height: i,
                        viewBox: '0 0 24 24'
                    },
                    (0, s.Z)(E)
                ),
                {
                    children: (0, r.jsx)('path', {
                        className: m,
                        fill: 'none',
                        stroke: c,
                        strokeWidth: '2',
                        strokeLinecap: 'round',
                        strokeLinejoin: 'round',
                        d: 'M7 10L12 15 17 10',
                        'aria-hidden': !0
                    })
                }
            )
        );
    };
m.Directions = h;
let g = m;
