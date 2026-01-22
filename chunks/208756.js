n.d(t, {
    Z: () => u,
});
var r = n(627968);
n(64700);
var i = n(503698),
    a = n.n(i),
    s = n(732955),
    o = n(248789);

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

function u(e) {
    let { actions: t, className: n } = e;
    return (0, r.jsx)("div", {
        className: a()(o.actionBar, n),
        children: (0, r.jsx)(s.e2v, {
            size: "sm",
            fullWidth: !0,
            direction: "vertical",
            children: t.map((e, t) => (0, r.jsx)(s.$nd, c({}, e), t)),
        }),
    });
}
