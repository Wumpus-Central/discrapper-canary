n.d(t, {
    T: () => m,
    Y: () => g,
});
var r = n(627968);
n(64700);
var i = n(397927),
    a = n(102876),
    s = n(906547),
    o = n(985018),
    l = n(764152);

function c(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}

function u(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
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
        i,
        a = {};
    if ("u" > typeof Reflect && Reflect.ownKeys) {
        for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++)
            (r = n[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
        return a;
    }
    if (((a = _(e, t)), Object.getOwnPropertySymbols))
        for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++)
            (r = n[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a;
}

function _(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.getOwnPropertyNames(e);
    for (r = 0; r < a.length; r++)
        (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    return i;
}

function h(e) {
    return (0, r.jsx)(
        a.A,
        {
            application: e,
        },
        e.id,
    );
}

function m(e) {
    let { userId: t, variant: n = "text-xs/normal", color: a = "text-default" } = e,
        o = p(e, ["userId", "variant", "color"]),
        l = (0, s.P)({
            userId: t,
            renderApplicationName: h,
        });
    return (0, r.jsx)(
        i.Text,
        f(
            u(
                {
                    variant: n,
                    color: a,
                },
                o,
            ),
            {
                children: l,
            },
        ),
    );
}

function g(e) {
    let { userId: t } = e;
    return (0, r.jsxs)(i.ZpM, {
        className: l.ZO,
        children: [
            (0, r.jsxs)("div", {
                className: l.wx,
                children: [
                    (0, r.jsx)(i.Heading, {
                        variant: "text-md/semibold",
                        color: "text-default",
                        children: o.intl.string(o.t.Iyka0U),
                    }),
                    (0, r.jsx)(i.EpV, {
                        size: "xs",
                        className: l.Kk,
                    }),
                ],
            }),
            (0, r.jsx)(m, {
                userId: t,
                variant: "text-md/normal",
            }),
        ],
    });
}
