n.d(t, { Z: () => m });
var r = n(255367);
n(73800);
var i = n(990547),
    l = n(399606),
    a = n(213609),
    o = n(434404),
    s = n(970731),
    c = n(601964),
    u = n(430824),
    d = n(594174),
    p = n(981631),
    h = n(388032),
    f = n(644909),
    g = n(217110);
function m(e) {
    let { guildId: t, markAsDismissed: n } = e,
        m = (0, l.e7)([u.Z, d.default], () => {
            let e = d.default.getCurrentUser(),
                n = u.Z.getGuild(t);
            return null != n && (0, c.eM)(n, e);
        });
    return (
        (0, a.Z)({
            type: i.ImpressionTypes.POPOUT,
            name: i.ImpressionNames.ENABLE_CREATOR_MONETIZATION_GUILD_HEADER_UPSELL,
            properties: {
                guild_id: t,
                is_owner: m
            }
        }),
        (0, r.jsx)('div', {
            className: f.container,
            children: (0, r.jsx)(s.ZP, {
                header: h.intl.string(h.t.C0m4ra),
                content: h.intl.string(h.t.zOHfER),
                asset: (0, r.jsx)('div', {
                    className: f.image,
                    children: (0, r.jsx)('img', {
                        alt: h.intl.string(h.t.xad4wc),
                        src: g,
                        className: f.image
                    })
                }),
                buttonCTA: h.intl.string(h.t.OgQQbG),
                onClick: () => {
                    o.Z.open(t, p.pNK.ROLE_SUBSCRIPTIONS);
                },
                secondaryButtonCTA: h.intl.string(h.t.WAI6xs),
                markAsDismissed: n
            })
        })
    );
}
