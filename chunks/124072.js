n.d(t, { Z: () => E }), n(388685);
var r = n(200651),
    i = n(192379),
    o = n(120356),
    a = n.n(o),
    s = n(866442),
    l = n(481060),
    c = n(142375),
    u = n(779699),
    d = n(477524);
function f(e, t, n) {
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
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                f(e, t, n[t]);
            });
    }
    return e;
}
function p(e, t) {
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
function h(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : p(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function m(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = g(e, t);
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        for (r = 0; r < o.length; r++) (n = o[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function g(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        o = Object.keys(e);
    for (r = 0; r < o.length; r++) (n = o[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
let E = (e) => {
    var { children: t, className: n, color: o, roleColors: f, iconType: p, onMouseEnter: g, onMouseLeave: E } = e,
        b = m(e, ['children', 'className', 'color', 'roleColors', 'iconType', 'onMouseEnter', 'onMouseLeave']);
    let [y, v] = i.useState(!1),
        { text: O, gradient: I } = (0, c.N)(null == f ? void 0 : f.primaryColor, null == f ? void 0 : f.secondaryColor, null == f ? void 0 : f.tertiaryColor),
        S = i.useCallback(
            (e) => {
                v(!0), null == g || g(e);
            },
            [v, g]
        ),
        T = i.useCallback(
            (e) => {
                v(!1), null == E || E(e);
            },
            [v, E]
        ),
        N = {};
    return (
        null != o &&
            (N = {
                color: (0, s.Rf)(o),
                backgroundColor: y ? (0, s.br)(o, 0.3) : (0, s.br)(o, 0.1)
            }),
        (0, r.jsx)(
            l.P3F,
            h(_({}, b), {
                tag: 'span',
                className: a()(n, {
                    [d.wrapper]: !0,
                    interactive: b.onClick
                }),
                onMouseEnter: S,
                onMouseLeave: T,
                style: N,
                tabIndex: null != b.onClick ? 0 : -1,
                children:
                    null != p
                        ? (0, r.jsx)(u.Z, {
                              iconType: p,
                              children: t
                          })
                        : null != f
                          ? (0, r.jsx)('span', {
                                style: _({}, O.gradientStyle),
                                className: I.gradientClassName,
                                children: t
                            })
                          : t
            })
        )
    );
};
