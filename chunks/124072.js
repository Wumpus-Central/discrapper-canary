n.d(t, { Z: () => g }), n(47120);
var r = n(200651),
    i = n(192379),
    o = n(120356),
    a = n.n(o),
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
    var { children: t, className: n, color: o, iconType: d, onMouseEnter: _, onMouseLeave: m } = e,
        g = h(e, ['children', 'className', 'color', 'iconType', 'onMouseEnter', 'onMouseLeave']);
    let [E, b] = i.useState(!1),
        y = i.useCallback(
            (e) => {
                b(!0), null == _ || _(e);
            },
            [b, _]
        ),
        v = i.useCallback(
            (e) => {
                b(!1), null == m || m(e);
            },
            [b, m]
        ),
        O = {};
    return (
        null != o &&
            (O = {
                color: (0, s.Rf)(o),
                backgroundColor: E ? (0, s.br)(o, 0.3) : (0, s.br)(o, 0.1)
            }),
        (0, r.jsx)(
            l.P3F,
            p(f({}, g), {
                tag: 'span',
                className: a()(n, {
                    [u.wrapper]: !0,
                    interactive: g.onClick
                }),
                onMouseEnter: y,
                onMouseLeave: v,
                style: O,
                tabIndex: null != g.onClick ? 0 : -1,
                children:
                    null != d
                        ? (0, r.jsx)(c.Z, {
                              iconType: d,
                              children: t
                          })
                        : t
            })
        )
    );
};
