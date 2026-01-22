n.d(t, {
    k: () => _,
});
var r = n(627968);
n(64700);
var i = n(224640),
    a = n(696208),
    s = n(430993),
    o = n(20742);

function l(e, t, n) {
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

function c(e) {
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
                l(e, t, n[t]);
            });
    }
    return e;
}

function u(e, t) {
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

function d(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : u(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}

function f(e, t) {
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
    if (((a = p(e, t)), Object.getOwnPropertySymbols))
        for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++)
            (r = n[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a;
}

function p(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.getOwnPropertyNames(e);
    for (r = 0; r < a.length; r++)
        (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    return i;
}

function _(e) {
    let {
            size: t = "md",
            gradientColor: n = "purple",
            graphic: l,
            badge: u,
            title: p,
            subtitle: _,
            actionBarInput: h,
            actions: m,
            children: g,
        } = e,
        E = f(e, [
            "size",
            "gradientColor",
            "graphic",
            "badge",
            "title",
            "subtitle",
            "actionBarInput",
            "actions",
            "children",
        ]);
    return (0, r.jsxs)(
        i.d,
        d(c({}, E), {
            size: t,
            paddingSize: "lg",
            children: [
                (0, r.jsx)(o.V6, {
                    gradientColor: n,
                    graphic: l,
                    badge: u,
                    title: p,
                    subtitle: _,
                }),
                (0, r.jsx)(s.c, {
                    children: g,
                }),
                (0, r.jsx)(a.H, {
                    leading: h,
                    actions: m,
                    actionsFullWidth: null == h,
                }),
            ],
        }),
    );
}
