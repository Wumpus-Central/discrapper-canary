n.d(t, { D: () => c });
var r = n(54381);
n(473749);
var i = n(575053),
    a = n(622999),
    o = n(966895);
function s(e, t, n) {
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
                s(e, t, n[t]);
            });
    }
    return e;
}
let c = (e) => {
    let { errorLabel: t, children: n, elementOptions: s } = e,
        c = Date.now();
    return (0, r.jsx)(
        o.k,
        {
            label: t,
            children: (0, r.jsx)(i.Elements, {
                stripe: (0, a.d2)(),
                options: l(
                    {
                        mode: "setup",
                        currency: "usd",
                        setup_future_usage: "off_session",
                    },
                    s,
                ),
                children: n,
            }),
        },
        c,
    );
};
