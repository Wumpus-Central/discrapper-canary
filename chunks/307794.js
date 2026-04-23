t.d(n, { default: () => L });
var a = t(627968);
t(64700);
var s = t(827734),
    i = t(939249),
    l = t(777666),
    r = t(688810),
    c = t(87719),
    o = t(244975),
    d = t(788868),
    _ = t(652215),
    u = t(985018),
    m = t(881808),
    A = t(535192),
    p = t(929103);
function x(e, n) {
    return (0, a.jsx)(l.Lp, { text: e, className: A.Ad, color: s.A.unsafe_rawColors.BRAND_500.css }, n);
}
function L(e) {
    let { guildCount: n, onClose: t, analyticsLocations: s, ...l } = e,
        A = function (e, n) {
            return (0, a.jsx)(
                i.D,
                {
                    className: m.C,
                    tag: "span",
                    onClick: () => {
                        t(), (0, c.e)();
                    },
                    children: e,
                },
                n,
            );
        },
        { analyticsLocations: L } = (0, r.Ay)(s);
    return (0, a.jsx)(r.f5, {
        value: L,
        children: (0, a.jsx)(o.A, {
            artURL: p.A,
            onClose: t,
            type: d.e.GUILD_CAP_MODAL_UPSELL,
            title: u.intl.string(u.t["CoNXB+"]),
            body:
                n < _.qlD
                    ? u.intl.format(u.t["5qLH7B"], { guildCount: n, onAndMore: A, newBadgeHook: x })
                    : u.intl.format(u.t.mk9CS6, { onAndMore: A, newBadgeHook: x }),
            context:
                n < _.qlD ? u.intl.formatToPlainString(u.t["C+Hqzs"], { guildCount: n }) : u.intl.string(u.t.m0xavd),
            glowUp: u.intl.format(u.t["6Dl5X1"], { onAndMore: A }),
            ...l,
        }),
    });
}
