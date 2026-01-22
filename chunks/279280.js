n.d(t, {
    A: () => o,
});
var r = n(627968);
n(64700);
var i = n(397927);

function a(e, t, n) {
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

function s(e) {
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
                a(e, t, n[t]);
            });
    }
    return e;
}
let o = {
    open: function (e, t) {
        (0, i.mMO)(async () => {
            let { default: i } = await n.e("34138").then(n.bind(n, 206049));
            return (n) =>
                (0, r.jsx)(
                    i,
                    s(
                        {
                            payment: e,
                            paymentSource: t,
                        },
                        n,
                    ),
                );
        });
    },
};
