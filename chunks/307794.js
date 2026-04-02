a.d(n, { default: () => m });
var o = a(627968);
a(64700);
var e = a(827734),
    s = a(397927),
    r = a(688810),
    d = a(87719),
    i = a(244975),
    l = a(788868),
    c = a(652215),
    p = a(985018),
    f = a(266811),
    u = a(49729),
    A = a(929103);
function C(t, n) {
    return (0, o.jsx)(s.LpS, { text: t, className: u.Ad, color: e.A.unsafe_rawColors.BRAND_500.css }, n);
}
function m(t) {
    let { guildCount: n, onClose: a, analyticsLocations: e, ...u } = t,
        m = function (t, n) {
            return (0, o.jsx)(
                s.DUT,
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
        { analyticsLocations: L } = (0, r.Ay)(e);
    return (0, o.jsx)(r.f5, {
        value: L,
        children: (0, o.jsx)(i.A, {
            artURL: A.A,
            onClose: a,
            type: l.e.GUILD_CAP_MODAL_UPSELL,
            title: p.intl.string(p.t["CoNXB+"]),
            body:
                n < c.qlD
                    ? p.intl.format(p.t["5qLH7B"], { guildCount: n, onAndMore: m, newBadgeHook: C })
                    : p.intl.format(p.t.mk9CS6, { onAndMore: m, newBadgeHook: C }),
            context:
                n < c.qlD ? p.intl.formatToPlainString(p.t["C+Hqzs"], { guildCount: n }) : p.intl.string(p.t.m0xavd),
            glowUp: p.intl.format(p.t["6Dl5X1"], { onAndMore: m }),
            ...u,
        }),
    });
}
