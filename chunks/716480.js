a.d(n, { default: () => m });
var e = a(477900);
a(582128);
var r = a(939249),
    s = a(805251),
    i = a(688810),
    o = a(87719),
    d = a(945240),
    c = a(682901);
a(652215);
var l = a(792996),
    p = a(6287),
    f = a(777133);
function u(t, n) {
    return (0, e.jsx)("span", { className: f.Ad, children: (0, e.jsx)(s.E, { type: "new", variant: "primary" }) }, n);
}
function m(t) {
    let { guildCount: n, onClose: a, analyticsLocations: s, ...f } = t,
        m = function (t, n) {
            return (0, e.jsx)(
                r.D,
                {
                    className: p.C,
                    tag: "span",
                    onClick: () => {
                        (a(), (0, o.e)());
                    },
                    children: t,
                },
                n,
            );
        },
        { analyticsLocations: h } = (0, i.Ay)(s);
    return (0, e.jsx)(i.f5, {
        value: h,
        children: (0, e.jsx)(d.A, {
            artURL: "https://cdn.discordapp.com/assets/content/e79d4cfdd618a7a39abcd4d48afd7b216dab54ca862f39d293270af910e517e7.png",
            onClose: a,
            type: c.e.GUILD_CAP_MODAL_UPSELL,
            title: l.intl.string(l.t["CoNXB+"]),
            body:
                n < 100
                    ? l.intl.format(l.t["5qLH7B"], { guildCount: n, onAndMore: m, newBadgeHook: u })
                    : l.intl.format(l.t.mk9CS6, { onAndMore: m, newBadgeHook: u }),
            context: n < 100 ? l.intl.formatToPlainString(l.t["C+Hqzs"], { guildCount: n }) : l.intl.string(l.t.m0xavd),
            glowUp: l.intl.format(l.t["6Dl5X1"], { onAndMore: m }),
            ...f,
        }),
    });
}
