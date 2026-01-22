n.d(t, { a: () => c });
var r = n(627968);
n(64700);
var i = n(342393),
    a = n(71532),
    s = n(714126);
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
let c = (e) => {
    let { errorLabel: t, children: n, elementOptions: o } = e,
        c = Date.now();
    return (0, r.jsx)(
        s.W,
        {
            label: t,
            children: (0, r.jsx)(i.Elements, {
                stripe: (0, a.Cv)(),
                options: l(
                    {
                        mode: "setup",
                        currency: "usd",
                        setup_future_usage: "off_session",
                    },
                    o,
                ),
                children: n,
            }),
        },
        c,
    );
};
