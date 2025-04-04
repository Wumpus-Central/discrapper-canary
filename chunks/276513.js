n.d(t, { Q: () => b });
var r = n(200651),
    i = n(120356),
    o = n.n(i),
    a = n(257182),
    s = n(84735),
    l = n(766646),
    c = n(993365),
    u = n(685747),
    d = n(388032),
    f = n(938647);
function _(e, t, n) {
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
function p(e) {
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
                _(e, t, n[t]);
            });
    }
    return e;
}
function h(e, t) {
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
function m(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : h(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function g(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = E(e, t);
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        for (r = 0; r < o.length; r++) (n = o[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function E(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        o = Object.keys(e);
    for (r = 0; r < o.length; r++) (n = o[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
function b(e) {
    var { role: t = 'button', variant: n = 'default', textVariant: i = 'text-sm/medium', lineClamp: _ = 1, text: h, icon: E, iconPosition: b = 'end', external: y, focusProps: v } = e,
        O = g(e, ['role', 'variant', 'textVariant', 'lineClamp', 'text', 'icon', 'iconPosition', 'external', 'focusProps']);
    function I() {
        if (null == E) return;
        let e = 'text-lg/medium' === i ? 'md' : 'sm';
        return (0, r.jsx)(E, {
            color: 'currentColor',
            size: e
        });
    }
    return (
        y && (E = a.G),
        (0, r.jsx)(
            s.t,
            m(p({}, v), {
                children: (0, r.jsxs)(
                    'button',
                    m(
                        p(
                            {
                                role: t,
                                className: o()(f.linkButton, f[n])
                            },
                            O
                        ),
                        {
                            children: [
                                null != E && 'start' === b && (0, r.jsx)(I, {}),
                                (0, r.jsx)(c.x, {
                                    tag: 'span',
                                    variant: i,
                                    color: 'none',
                                    lineClamp: _,
                                    className: f.text,
                                    children: h
                                }),
                                null != E && 'end' === b && (0, r.jsx)(I, {}),
                                y && (0, r.jsx)(l.n, { children: d.NW.string(u.Z.cgdAs7) })
                            ]
                        }
                    )
                )
            })
        )
    );
}
