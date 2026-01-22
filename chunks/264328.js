n.d(t, {
    A: () => u,
});
var r = n(627968);
n(64700);
var i = n(397927),
    l = n(64983),
    a = n(652215),
    s = n(49999),
    o = n(985018),
    c = n(360567);

function u(e) {
    let { guild: t, markAsDismissed: u } = e;
    return (0, r.jsx)(l.A, {
        guild: t,
        onDismissed: () => u(s.i.UNKNOWN),
        onClick: function () {
            (0, i.mMO)(async () => {
                let { default: e } = await Promise.all([n.e("98363"), n.e("4543")]).then(n.bind(n, 780086));
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
        trackingSource: a.kZU.HUB_LINK_NOTICE,
        type: a.n5X.HUB_LINK,
        image: c,
    });
}
