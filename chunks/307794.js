a.d(n, { default: () => k });
var o = a(627968);
a(64700);
var e = a(827734),
    r = a(397927),
    s = a(688810),
    d = a(87719),
    i = a(244975),
    c = a(788868),
    l = a(652215),
    p = a(985018),
    f = a(266811),
    u = a(49729),
    A = a(929103);
function C(t, n) {
    return (0, o.jsx)(r.LpS, { text: t, className: u.Ad, color: e.A.unsafe_rawColors.BRAND_500.css }, n);
}
function k(t) {
    let { guildCount: n, onClose: a, analyticsLocations: e, ...u } = t,
        k = function (t, n) {
            return (0, o.jsx)(
                r.DUT,
                {
                    className: f.C,
                    tag: "span",
                    onClick: () => {
                        a(), (0, d.e)();
                    },
                    children: t,
                },
                n,
            );
        },
        { analyticsLocations: m } = (0, s.Ay)(e);
    return (0, o.jsx)(s.f5, {
        value: m,
        children: (0, o.jsx)(i.A, {
            artURL: A.A,
            onClose: a,
            type: c.e.GUILD_CAP_MODAL_UPSELL,
            title: p.intl.string(p.t["CoNXB+"]),
            secondaryCTA: p.intl.string(p.t["13/7kX"]),
            onSecondaryClick: a,
            body:
                n < l.qlD
                    ? p.intl.format(p.t["5qLH7B"], { guildCount: n, onAndMore: k, newBadgeHook: C })
                    : p.intl.format(p.t.mk9CS6, { onAndMore: k, newBadgeHook: C }),
            context:
                n < l.qlD ? p.intl.formatToPlainString(p.t["C+Hqzs"], { guildCount: n }) : p.intl.string(p.t.m0xavd),
            glowUp: p.intl.format(p.t["6Dl5X1"], { onAndMore: k }),
            ...u,
        }),
    });
}
