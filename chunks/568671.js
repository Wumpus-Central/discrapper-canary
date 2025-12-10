n.d(t, { Z: () => p });
var r = n(54381);
n(473749);
var i = n(481060),
    a = n(626135),
    o = n(546791),
    s = n(292352),
    l = n(981631),
    c = n(225753),
    u = n(388032);
function d(e, t, n) {
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
function f(e) {
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
                d(e, t, n[t]);
            });
    }
    return e;
}
function p() {
    let e = (0, o.nE)(u.intl.string(c.default.Ta9byS), u.intl.string(c.default["8SLtqb"])),
        t = () => {
            (0, i.ZDy)(async () => {
                let { default: e } = await Promise.all([n.e("97012"), n.e("48168")]).then(n.bind(n, 978305));
                return (t) => (0, r.jsx)(e, f({}, t));
            }),
                a.default.track(l.rMx.FAMILY_CENTER_ACTION, { action: s.YC.ShowQRCodeModal });
        };
    return (0, r.jsx)(i.Button, {
        icon: i.IkH,
        variant: "primary",
        text: e,
        onClick: t,
    });
}
