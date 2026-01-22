n.d(t, {
    A: () => f,
});
var r = n(627968);
n(64700);
var i = n(416696),
    a = n(709562),
    s = n(985018);

function o(e, t, n) {
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

function l(e) {
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
                o(e, t, n[t]);
            });
    }
    return e;
}

function c(e, t) {
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
    if (((a = u(e, t)), Object.getOwnPropertySymbols))
        for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++)
            (r = n[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a;
}

function u(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.getOwnPropertyNames(e);
    for (r = 0; r < a.length; r++)
        (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    return i;
}

function d(e) {
    return e ? s.intl.string(s.t.S5anIc) : s.intl.string(s.t.q3O3J8);
}

function f(e) {
    let { isSelfStream: t, centerButton: n = !1, onMouseEnter: s, onMouseLeave: o } = e,
        u = c(e, ["isSelfStream", "centerButton", "onMouseEnter", "onMouseLeave"]),
        f = n ? a.l : a.A,
        { Component: p, events: _ } = (0, i.c)("disable");
    return (0, r.jsx)(
        f,
        l(
            {
                label: d(t),
                isTrayButton: !1,
                iconComponent: p,
                onMouseEnter: (e) => {
                    null == s || s(e), _.onMouseEnter();
                },
                onMouseLeave: (e) => {
                    null == o || o(e), _.onMouseLeave();
                },
            },
            u,
        ),
    );
}
