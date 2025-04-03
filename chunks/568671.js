n.d(t, { Z: () => m });
var r = n(200651);
n(192379);
var i = n(481060),
    s = n(626135),
    a = n(503899),
    l = n(292352),
    o = n(981631),
    c = n(332495),
    d = n(388032),
    u = n(289581);
function m() {
    return (0, r.jsxs)(i.zxk, {
        innerClassName: u.qrCodeButtonContent,
        size: i.zxk.Sizes.LARGE,
        onClick: () => {
            (0, i.ZDy)(async () => {
                let { default: e } = await Promise.all([n.e('53419'), n.e('90688')]).then(n.bind(n, 978305));
                return (t) =>
                    (0, r.jsx)(
                        e,
                        (function (e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var n = null != arguments[t] ? arguments[t] : {},
                                    r = Object.keys(n);
                                'function' == typeof Object.getOwnPropertySymbols &&
                                    (r = r.concat(
                                        Object.getOwnPropertySymbols(n).filter(function (e) {
                                            return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                        })
                                    )),
                                    r.forEach(function (t) {
                                        var r;
                                        (r = n[t]),
                                            t in e
                                                ? Object.defineProperty(e, t, {
                                                      value: r,
                                                      enumerable: !0,
                                                      configurable: !0,
                                                      writable: !0
                                                  })
                                                : (e[t] = r);
                                    });
                            }
                            return e;
                        })({}, t)
                    );
            }),
                s.default.track(o.rMx.FAMILY_CENTER_ACTION, { action: l.YC.ShowQRCodeModal });
        },
        children: [(0, r.jsx)(a.Z, {}), d.NW.string(c.Z.Ta9byc)]
    });
}
