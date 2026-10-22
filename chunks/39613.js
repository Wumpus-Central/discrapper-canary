a.d(n, { default: () => h });
var e = a(477900);
a(582128);
var r = a(939249),
    s = a(62010),
    i = a(688810),
    o = a(87719),
    d = a(84960),
    c = a(202541),
    l = a(652215),
    p = a(105292),
    f = a(6287),
    u = a(777133);
function m(t, n) {
    return (0, e.jsx)("span", { className: u.Ad, children: (0, e.jsx)(s.E, { type: "new", variant: "primary" }) }, n);
}
function h(t) {
    let { guildCount: n, onClose: a, analyticsLocations: s, ...u } = t,
        h = function (t, n) {
            return (0, e.jsx)(
                r.D,
                {
                    className: f.C,
                    tag: "span",
                    onClick: () => {
                        (a(), (0, o.e)());
                    },
                    children: t,
                },
                n,
            );
        },
        { analyticsLocations: C } = (0, i.Ay)(s);
    return (0, e.jsx)(i.f5, {
        value: C,
        children: (0, e.jsx)(d.A, {
            artURL: "https://cdn.discordapp.com/assets/content/e79d4cfdd618a7a39abcd4d48afd7b216dab54ca862f39d293270af910e517e7.png",
            onClose: a,
            type: c.e.GUILD_CAP_MODAL_UPSELL,
            title: p.intl.string(p.t["CoNXB+"]),
            body:
                n < l.qlD
                    ? p.intl.format(p.t["5qLH7B"], { guildCount: n, onAndMore: h, newBadgeHook: m })
                    : p.intl.format(p.t.mk9CS6, { onAndMore: h, newBadgeHook: m }),
            context:
                n < l.qlD ? p.intl.formatToPlainString(p.t["C+Hqzs"], { guildCount: n }) : p.intl.string(p.t.m0xavd),
            glowUp: p.intl.format(p.t["6Dl5X1"], { onAndMore: h }),
            ...u,
        }),
    });
}
