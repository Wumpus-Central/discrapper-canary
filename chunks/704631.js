n.d(t, { Z: () => u });
var r = n(951288);
n(647438);
var i = n(481060),
    l = n(82950),
    a = n(981631),
    s = n(921944),
    o = n(388032),
    c = n(524094);
function u(e) {
    let { guild: t, markAsDismissed: u } = e;
    return (0, r.jsx)(l.Z, {
        guild: t,
        onDismissed: () => u(s.L.UNKNOWN),
        onClick: function () {
            (0, i.ZDy)(async () => {
                let { default: e } = await Promise.all([n.e("7082"), n.e("60903")]).then(n.bind(n, 650233));
                return (t) =>
                    (0, r.jsx)(
                        e,
                        (function (e) {
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
                                        var r;
                                        (r = n[t]),
                                            t in e
                                                ? Object.defineProperty(e, t, {
                                                      value: r,
                                                      enumerable: !0,
                                                      configurable: !0,
                                                      writable: !0,
                                                  })
                                                : (e[t] = r);
                                    });
                            }
                            return e;
                        })({}, t),
                    );
            });
        },
        message: o.intl.string(o.t["1+hiP6"]),
        cta: o.intl.string(o.t.hvVgAZ),
        trackingSource: a.PsQ.HUB_LINK_NOTICE,
        type: a.vID.HUB_LINK,
        image: c,
    });
}
