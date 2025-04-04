n.d(t, { x: () => b }), n(977457);
var r = n(200651),
    i = n(192379),
    o = n(803997),
    a = n.n(o),
    s = n(696689),
    l = n.n(s),
    c = n(692547),
    u = n(39300),
    d = n(954292);
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
let E = Object.fromEntries(Object.keys(c.Z.colors).map((e) => [l()(e), e])),
    b = i.forwardRef(function (e, t) {
        let n;
        var i,
            { variant: o, tag: s = 'div', selectable: l = !1, className: f, lineClamp: p, color: g, tabularNumbers: b = !1, scaleFontToUserSetting: y = !1 } = e,
            v = m(e, ['variant', 'tag', 'selectable', 'className', 'lineClamp', 'color', 'tabularNumbers', 'scaleFontToUserSetting']);
        let O = s,
            I = '',
            S = {};
        if (
            (null != p &&
                (1 === p
                    ? (I = u.lineClamp1)
                    : ((I = u.lineClamp2Plus),
                      (S = {
                          lineClamp: p,
                          WebkitLineClamp: p
                      }))),
            void 0 !== g)
        )
            switch (g) {
                case 'currentColor':
                    n = 'currentColor';
                    break;
                case 'none':
                    n = void 0;
                    break;
                case 'always-white':
                    n = 'white';
                    break;
                default:
                    n = null == (i = c.Z.colors[E[g]]) ? void 0 : i.css;
            }
        let T = _({ color: n }, S, v.style);
        return (0, r.jsx)(
            O,
            h(
                _(
                    {
                        ref: t,
                        className: a()(
                            {
                                [u.defaultColor]: void 0 === g,
                                [u.selectable]: l,
                                [u.tabularNumbers]: b,
                                [d.fontScaling]: y
                            },
                            I,
                            d[o],
                            f
                        )
                    },
                    v
                ),
                {
                    style: Object.values(T).filter(Boolean).length > 0 ? T : void 0,
                    'data-text-variant': o
                }
            )
        );
    });
