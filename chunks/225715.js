n.d(t, {
    CW: () => m,
    G9: () => y,
    K9: () => b,
    q$: () => v,
    r0: () => g,
    s$: () => E
}),
    n(266796);
var r = n(200651);
n(192379);
var i = n(120356),
    o = n.n(i),
    a = n(481060),
    s = n(41959),
    l = n(245561),
    c = n(890515);
function u(e, t, n) {
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
function d(e) {
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
                u(e, t, n[t]);
            });
    }
    return e;
}
function f(e, t) {
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
function _(e, t) {
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
function p(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = h(e, t);
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        for (r = 0; r < o.length; r++) (n = o[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function h(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        o = Object.keys(e);
    for (r = 0; r < o.length; r++) (n = o[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
let m = (e) => {
        var { application: t, asset: n, className: i } = e,
            o = p(e, ['application', 'asset', 'className']);
        return (0, r.jsx)(
            s.Z,
            d(
                {
                    application: t,
                    size: s.H.MEDIUM,
                    asset: n,
                    className: i
                },
                o
            )
        );
    },
    g = (e) => {
        var { children: t, className: n, id: i } = e,
            s = p(e, ['children', 'className', 'id']);
        return (0, r.jsx)(
            a.X6q,
            _(
                d(
                    {
                        className: o()(c.header, n),
                        variant: 'heading-xl/extrabold',
                        id: i
                    },
                    s
                ),
                { children: t }
            )
        );
    };
function E() {
    return (0, r.jsx)('hr', { className: c.divider });
}
let b = (e) => {
        var { className: t, title: n, description: i } = e,
            o = p(e, ['className', 'title', 'description']);
        return (0, r.jsxs)(
            'div',
            _(d({ className: t }, o), {
                children: [
                    (0, r.jsx)(a.X6q, {
                        variant: 'heading-md/bold',
                        color: 'header-primary',
                        children: n
                    }),
                    (0, r.jsx)(a.X6q, {
                        variant: 'heading-sm/normal',
                        color: 'header-secondary',
                        children: i
                    })
                ]
            })
        );
    },
    y = (e) => {
        var { applicationId: t, storeListingBenefits: n, skuBenefits: i, className: a } = e,
            s = p(e, ['applicationId', 'storeListingBenefits', 'skuBenefits', 'className']);
        return (0, r.jsx)(
            'div',
            _(d({ className: o()(c.benefitsContainer, a) }, s), {
                children: (0, r.jsx)(l.GU, {
                    applicationId: t,
                    storeListingBenefits: n,
                    skuBenefits: i,
                    className: c.benefit
                })
            })
        );
    },
    v = (e) => {
        var { children: t, className: n } = e,
            i = p(e, ['children', 'className']);
        return (0, r.jsx)('div', _(d({ className: o()(c.container, n) }, i), { children: t }));
    };
