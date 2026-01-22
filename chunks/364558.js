n.d(t, { u: () => g });
var r = n(627968),
    i = n(397927),
    a = n(975807),
    s = n(95035),
    o = n(975571),
    l = n(975662),
    c = n(88001),
    u = n(652215),
    d = n(519412),
    f = n(985018),
    p = n(817577);
function _(e, t, n) {
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
function h(e) {
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
                _(e, t, n[t]);
            });
    }
    return e;
}
let m = () => {
        (0, a.A)(o.A.getArticleURL(u.MVz.PREMIUM_GROUP_ABOUT));
    },
    g = () => ({
        name: l.U.PREMIUM_GROUP,
        title: f.intl.string(d.default.YkvksF),
        subtitle: f.intl.formatToPlainString(d.default.JlyGQj, {
            totalSeats: c.aw,
            premiumGroupProductName: (0, c.DP)(),
        }),
        description: (0, r.jsx)(s.A, {
            onClick: m,
            children: f.intl.string(d.default.yYyGJH),
        }),
        descriptionCta: f.intl.string(f.t.jVcuVY),
        pillText: f.intl.string(f.t.oW0eUd).toLocaleUpperCase(),
        perkImage: p,
        onCtaClick: () => {
            (0, i.mMO)(async () => {
                let { default: e } = await n.e("69595").then(n.bind(n, 526710));
                return (t) => (0, r.jsx)(e, h({}, t));
            });
        },
    });
