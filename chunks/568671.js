n.d(t, { Z: () => d });
var i = n(255367);
n(73800);
var r = n(481060),
    s = n(626135),
    a = n(292352),
    l = n(981631),
    o = n(916723),
    c = n(388032);
function d() {
    return (0, i.jsx)(r.zxk, {
        icon: r.IkH,
        variant: 'primary',
        text: c.intl.string(o.default.Ta9byc),
        onClick: () => {
            ((0, r.ZDy)(async () => {
                let { default: e } = await Promise.all([n.e('26051'), n.e('90688')]).then(n.bind(n, 978305));
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
                s.default.track(l.rMx.FAMILY_CENTER_ACTION, { action: a.YC.ShowQRCodeModal }));
        }
    });
}
