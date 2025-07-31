n.d(t, { Z: () => p });
var i = n(255367);
n(73800);
var r = n(755721),
    s = n(481060),
    a = n(626135),
    l = n(503899),
    o = n(292352),
    c = n(981631),
    d = n(916723),
    u = n(388032),
    m = n(289581);
function p() {
    return (0, i.jsxs)(r.zx, {
        innerClassName: m.qrCodeButtonContent,
        size: r.zx.Sizes.LARGE,
        onClick: () => {
            ((0, s.ZDy)(async () => {
                let { default: e } = await Promise.all([n.e('56349'), n.e('90688')]).then(n.bind(n, 978305));
                return (t) =>
                    (0, i.jsx)(
                        e,
                        (function (e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var n = null != arguments[t] ? arguments[t] : {},
                                    i = Object.keys(n);
                                ('function' == typeof Object.getOwnPropertySymbols &&
                                    (i = i.concat(
                                        Object.getOwnPropertySymbols(n).filter(function (e) {
                                            return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                        })
                                    )),
                                    i.forEach(function (t) {
                                        var i;
                                        ((i = n[t]),
                                            t in e
                                                ? Object.defineProperty(e, t, {
                                                      value: i,
                                                      enumerable: !0,
                                                      configurable: !0,
                                                      writable: !0
                                                  })
                                                : (e[t] = i));
                                    }));
                            }
                            return e;
                        })({}, t)
                    );
            }),
                a.default.track(c.rMx.FAMILY_CENTER_ACTION, { action: o.YC.ShowQRCodeModal }));
        },
        children: [(0, i.jsx)(l.Z, {}), u.intl.string(d.default.Ta9byc)]
    });
}
