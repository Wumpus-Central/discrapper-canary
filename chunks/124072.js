n.d(t, { Z: () => g }), n(388685);
var r = n(255367),
    i = n(73800),
    o = n(120356),
    a = n.n(o),
    s = n(866442),
    l = n(481060),
    c = n(779699),
    u = n(578474);
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
function f(e) {
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
                d(e, t, n[t]);
            });
    }
    return e;
}
function _(e, t) {
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
function p(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : _(Object(t)).forEach(function (n) {
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
        var o = Object.getOwnPropertySymbols(e);
        for (r = 0; r < o.length; r++) (n = o[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function m(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        o = Object.keys(e);
    for (r = 0; r < o.length; r++) (n = o[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
let g = (e) => {
    var { ref: t, children: n, className: o, color: d, roleColors: _, iconType: m, onMouseEnter: g, onMouseLeave: E } = e,
        b = h(e, ['ref', 'children', 'className', 'color', 'roleColors', 'iconType', 'onMouseEnter', 'onMouseLeave']);
    let [y, O] = i.useState(!1),
        { gradientStyle: v, gradientClassname: I } = (0, l.Icv)({
            primaryColor: null == _ ? void 0 : _.primaryColor,
            secondaryColor: null == _ ? void 0 : _.secondaryColor,
            tertiaryColor: null == _ ? void 0 : _.tertiaryColor,
            roleStyle: 'username',
            animateGradient: y
        }),
        S = i.useCallback(
            (e) => {
                O(!0), null == g || g(e);
            },
            [O, g]
        ),
        T = i.useCallback(
            (e) => {
                O(!1), null == E || E(e);
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
            p(f({}, b), {
                innerRef: t,
                tag: 'span',
                className: a()(o, {
                    [u.wrapper]: !0,
                    interactive: b.onClick
                }),
                onMouseEnter: S,
                onMouseLeave: T,
                style: A,
                tabIndex: null != b.onClick ? 0 : -1,
                children:
                    null != m
                        ? (0, r.jsx)(c.Z, {
                              iconType: m,
                              children: n
                          })
                        : null != _
                          ? (0, r.jsx)('span', {
                                style: f({}, v),
                                className: I,
                                children: n
                            })
                          : n
            })
        )
    );
};
