n.d(t, {
    A: () => _,
});
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(253018),
    l = n(711371),
    c = n(562650);

function u(e, t, n) {
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

function d(e) {
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

function p(e, t) {
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

function _(e, t) {
    let { attributes: n, children: i, element: a } = t;
    return "gameMentionInput" === a.type
        ? (0, r.jsx)(h, {
              attributes: n,
              element: a,
              children: i,
          })
        : null;
}
let h = (e) => {
    let { element: t, attributes: n, children: a } = e,
        u = (0, o.f7)(),
        f = (0, o.zL)(),
        _ = (0, o.RV)(),
        h = s()(c.S0, c.xP, c.lB, {
            [c.t$]: f && u,
            [c.$2]: t.error,
        }),
        m = i.useCallback(() => {
            l.VW.isVoid(_, t);
        }, [_, t]),
        g = (0, r.jsx)("span", {
            className: c._K,
            children: a,
        });
    return (0, r.jsxs)(
        "span",
        p(d({}, n), {
            className: h,
            children: [
                (0, r.jsxs)("span", {
                    className: c.gA,
                    contentEditable: !1,
                    onClick: m,
                    children: ["@game", "​"],
                }),
                g,
                (0, r.jsx)("span", {
                    contentEditable: !1,
                    children: "​",
                }),
            ],
        }),
    );
};
