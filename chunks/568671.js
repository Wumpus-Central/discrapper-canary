n.d(t, { Z: () => m });
var i = n(200651);
n(192379);
var r = n(481060),
    s = n(626135),
    l = n(503899),
    a = n(292352),
    o = n(981631),
    c = n(332495),
    d = n(388032),
    u = n(289581);
function m() {
    return (0, i.jsxs)(r.zxk, {
        innerClassName: u.qrCodeButtonContent,
        size: r.zxk.Sizes.LARGE,
        onClick: () => {
            (0, r.ZDy)(async () => {
                let { default: e } = await Promise.all([n.e('57543'), n.e('90688')]).then(n.bind(n, 978305));
                return (t) =>
                    (0, i.jsx)(
                        e,
                        (function (e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var n = null != arguments[t] ? arguments[t] : {},
                                    i = Object.keys(n);
                                'function' == typeof Object.getOwnPropertySymbols &&
                                    (i = i.concat(
                                        Object.getOwnPropertySymbols(n).filter(function (e) {
                                            return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                        })
                                    )),
                                    i.forEach(function (t) {
                                        var i;
                                        (i = n[t]),
                                            t in e
                                                ? Object.defineProperty(e, t, {
                                                      value: i,
                                                      enumerable: !0,
                                                      configurable: !0,
                                                      writable: !0
                                                  })
                                                : (e[t] = i);
                                    });
                            }
                            return e;
                        })({}, t)
                    );
            }),
                s.default.track(o.rMx.FAMILY_CENTER_ACTION, { action: a.YC.ShowQRCodeModal });
        },
        children: [(0, i.jsx)(l.Z, {}), d.intl.string(c.default.Ta9byc)]
    });
}
