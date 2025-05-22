n.d(t, {
    n: () => m,
    q: () => g
});
var r = n(255367);
n(73800);
var i = n(481060),
    o = n(833062),
    a = n(292814),
    s = n(388032),
    l = n(188394);
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
function _(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = p(e, t);
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        for (r = 0; r < o.length; r++) (n = o[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function p(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        o = Object.keys(e);
    for (r = 0; r < o.length; r++) (n = o[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
function h(e) {
    return (0, r.jsx)(o.Z, { application: e }, e.id);
}
function m(e) {
    var { userId: t, variant: n = 'text-xs/normal', color: o = 'text-normal' } = e,
        s = _(e, ['userId', 'variant', 'color']);
    let l = (0, a.e)({
        userId: t,
        renderApplicationName: h
    });
    return (0, r.jsx)(
        i.Text,
        f(
            u(
                {
                    variant: n,
                    color: o
                },
                s
            ),
            { children: l }
        )
    );
}
function g(e) {
    let { userId: t } = e;
    return (0, r.jsxs)(i.Zbd, {
        className: l.channelHeader,
        children: [
            (0, r.jsxs)('div', {
                className: l.header,
                children: [
                    (0, r.jsx)(i.X6q, {
                        variant: 'text-md/semibold',
                        color: 'text-normal',
                        children: s.intl.string(s.t.Iyka0d)
                    }),
                    (0, r.jsx)(i.P4T, {
                        size: 'xs',
                        className: l.icon
                    })
                ]
            }),
            (0, r.jsx)(m, {
                userId: t,
                variant: 'text-md/normal'
            })
        ]
    });
}
