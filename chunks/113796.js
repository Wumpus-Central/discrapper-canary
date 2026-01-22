n.d(t, {
    A: () => f,
});
var r = n(627968);
n(64700);
var i = n(503698),
    a = n.n(i),
    s = n(253018),
    o = n(562650);

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
    let { attributes: n, children: i, element: a } = t;
    return "timestampMentionInput" === a.type
        ? (0, r.jsx)(p, {
              attributes: n,
              element: a,
              children: i,
          })
        : null;
}
let p = (e) => {
    let { element: t, attributes: n, children: i } = e,
        l = (0, s.f7)(),
        u = (0, s.zL)(),
        f = a()(o.S0, o.xP, o.FF, {
            [o.t$]: u && l,
            [o.$2]: t.error,
        }),
        p = (0, r.jsx)("span", {
            className: o._K,
            children: i,
        });
    return (0, r.jsxs)(
        "span",
        d(c({}, n), {
            className: f,
            children: [
                (0, r.jsxs)("span", {
                    className: o.gA,
                    contentEditable: !1,
                    children: ["@time", "​"],
                }),
                p,
                (0, r.jsx)("span", {
                    contentEditable: !1,
                    children: "​",
                }),
            ],
        }),
    );
};
