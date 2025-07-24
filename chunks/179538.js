n.d(t, { A: () => h });
var r = n(255367);
n(73800);
var i = n(120356),
    a = n.n(i),
    o = n(84735),
    s = n(993365),
    l = n(550762);
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
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                c(e, t, n[t]);
            }));
    }
    return e;
}
function d(e, t) {
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
function _(e, t) {
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
function f(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = p(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++) ((n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]));
    }
    return i;
}
function p(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) ((n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]));
    return i;
}
function h(e) {
    var { role: t = 'button', text: n, focusProps: i, variant: c = 'primary', textVariant: d = 'text-md/medium', lineClamp: p = 1, className: h, style: m } = e,
        g = f(e, ['role', 'text', 'focusProps', 'variant', 'textVariant', 'lineClamp', 'className', 'style']);
    return (0, r.jsx)(
        o.t,
        _(u({}, i), {
            children: (0, r.jsx)(
                'button',
                _(
                    u(
                        {
                            'data-mana-component': 'text-button',
                            role: t,
                            className: a()(l.textButton, l[c])
                        },
                        g
                    ),
                    {
                        children: (0, r.jsx)(s.x, {
                            tag: 'span',
                            variant: d,
                            color: 'none',
                            lineClamp: p,
                            className: l.text,
                            children: n
                        })
                    }
                )
            )
        })
    );
}
