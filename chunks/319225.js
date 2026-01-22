n.d(t, {
    E: () => u,
});
var r = n(627968);
n(64700);
var i = n(158954),
    a = n(397927),
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

function c(e) {
    let { transitionState: t, title: n, body: a, onClose: o } = e;
    return (0, r.jsx)(i.Modal, {
        title: n,
        actions: [
            {
                text: s.intl.string(s.t["NX+WJN"]),
                onClick: o,
            },
        ],
        transitionState: t,
        onClose: o,
        subtitle: a,
    });
}

function u(e) {
    (0, a.qfG)((t) => (0, r.jsx)(c, l({}, t, e)));
}
