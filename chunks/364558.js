n.d(t, {
    u: () => g,
});
var r = n(627968),
    i = n(397927),
    l = n(975807),
    s = n(95035),
    a = n(975571),
    o = n(975662),
    c = n(88001),
    d = n(652215),
    u = n(519412),
    _ = n(985018),
    p = n(817577);
let m = () => {
        (0, l.A)(a.A.getArticleURL(d.MVz.PREMIUM_GROUP_ABOUT));
    },
    g = () => ({
        name: o.U.PREMIUM_GROUP,
        title: _.intl.string(u.default.YkvksF),
        subtitle: _.intl.formatToPlainString(u.default.JlyGQj, {
            totalSeats: c.aw,
            premiumGroupProductName: (0, c.DP)(),
        }),
        description: (0, r.jsx)(s.A, {
            onClick: m,
            children: _.intl.string(u.default.yYyGJH),
        }),
        descriptionCta: _.intl.string(_.t.jVcuVY),
        pillText: _.intl.string(_.t.oW0eUd).toLocaleUpperCase(),
        perkImage: p,
        onCtaClick: () => {
            (0, i.mMO)(async () => {
                let { default: e } = await n.e("69595").then(n.bind(n, 526710));
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
    });
