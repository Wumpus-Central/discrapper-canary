n.d(t, {
    E: () => a,
});
var i = n(627968);
n(64700);
var s = n(158954),
    r = n(397927),
    l = n(985018);

function o(e) {
    let { transitionState: t, title: n, body: r, onClose: o } = e;
    return (0, i.jsx)(s.Modal, {
        title: n,
        actions: [
            {
                text: l.intl.string(l.t["NX+WJN"]),
                onClick: o,
            },
        ],
        transitionState: t,
        onClose: o,
        subtitle: r,
    });
}

function a(e) {
    (0, r.qfG)((t) =>
        (0, i.jsx)(
            o,
            (function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        i = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols &&
                        (i = i.concat(
                            Object.getOwnPropertySymbols(n).filter(function (e) {
                                return Object.getOwnPropertyDescriptor(n, e).enumerable;
                            }),
                        )),
                        i.forEach(function (t) {
                            var i;
                            (i = n[t]),
                                t in e
                                    ? Object.defineProperty(e, t, {
                                          value: i,
                                          enumerable: !0,
                                          configurable: !0,
                                          writable: !0,
                                      })
                                    : (e[t] = i);
                        });
                }
                return e;
            })({}, t, e),
        ),
    );
}
