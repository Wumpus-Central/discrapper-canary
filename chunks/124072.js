(n.d(t, { Z: () => g }), n(388685));
var r = n(255367),
    i = n(73800),
    a = n(120356),
    o = n.n(a),
    s = n(866442),
    l = n(481060),
    c = n(779699),
    u = n(477524);
function d(e, t, n) {
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
function _(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                d(e, t, n[t]);
            }));
    }
    return e;
}
function f(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        (t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r));
    }
    return n;
}
function p(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : f(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function h(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = m(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++) ((n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]));
    }
    return i;
}
function m(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) ((n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]));
    return i;
}
let g = (e) => {
    var { ref: t, children: n, className: a, color: d, roleColors: f, iconType: m, onMouseEnter: g, onMouseLeave: E } = e,
        b = h(e, ['ref', 'children', 'className', 'color', 'roleColors', 'iconType', 'onMouseEnter', 'onMouseLeave']);
    let [y, O] = i.useState(!1),
        { gradientStyle: v, gradientClassname: I } = (0, l.Icv)({
            colorStrings: null != f ? f : null,
            roleStyle: 'username',
            animateGradient: y
        }),
        T = i.useCallback(
            (e) => {
                (O(!0), null == g || g(e));
            },
            [O, g]
        ),
        S = i.useCallback(
            (e) => {
                (O(!1), null == E || E(e));
            },
            [O, E]
        ),
        A = {};
    return (
        null != d &&
            (A = {
                color: (0, s.Rf)(d),
                backgroundColor: y ? (0, s.br)(d, 0.3) : (0, s.br)(d, 0.1)
            }),
        (0, r.jsx)(
            l.P3F,
            p(_({}, b), {
                innerRef: t,
                tag: 'span',
                className: o()(a, {
                    [u.wrapper]: !0,
                    interactive: b.onClick
                }),
                onMouseEnter: T,
                onMouseLeave: S,
                style: A,
                tabIndex: null != b.onClick ? 0 : -1,
                children:
                    null != m
                        ? (0, r.jsx)(c.Z, {
                              iconType: m,
                              children: n
                          })
                        : null != f
                          ? (0, r.jsx)('span', {
                                style: _({}, v),
                                className: I,
                                children: n
                            })
                          : n
            })
        )
    );
};
