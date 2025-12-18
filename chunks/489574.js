n.d(t, { k: () => g });
var r = n(54381),
    i = n(481060),
    a = n(782568),
    o = n(690221),
    s = n(63063),
    l = n(22189),
    c = n(282793),
    u = n(981631),
    d = n(353149),
    f = n(388032),
    p = n(261778);
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
function m(e) {
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
let h = () => {
        (0, a.Z)(s.Z.getArticleURL(u.BhN.PREMIUM_GROUP_ABOUT));
    },
    g = () => ({
        name: l.I.PREMIUM_GROUP,
        title: f.intl.string(d.default.YkvksF),
        subtitle: f.intl.formatToPlainString(d.default.JlyGQj, {
            totalSeats: c.Q5,
            premiumGroupProductName: (0, c.sO)(),
        }),
        description: (0, r.jsx)(o.Z, {
            onClick: h,
            children: f.intl.string(d.default.yYyGJH),
        }),
        descriptionCta: f.intl.string(f.t.jVcuVY),
        pillText: f.intl.string(f.t.oW0eUd).toLocaleUpperCase(),
        perkImage: p,
        onCtaClick: () => {
            (0, i.ZDy)(async () => {
                let { default: e } = await n.e("33638").then(n.bind(n, 837244));
                return (t) => (0, r.jsx)(e, m({}, t));
            });
        },
    });
