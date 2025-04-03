n.d(t, { Z: () => g });
var r = n(200651);
n(192379);
var i = n(990547),
    l = n(399606),
    a = n(213609),
    o = n(434404),
    s = n(970731),
    c = n(430824),
    u = n(594174),
    d = n(981631),
    p = n(388032),
    h = n(644909),
    f = n(968153);
function g(e) {
    let { guildId: t, markAsDismissed: n } = e,
        g = (0, l.e7)([c.Z, u.default], () => {
            let e = u.default.getCurrentUser(),
                n = c.Z.getGuild(t);
            return (null == n ? void 0 : n.isOwner(e)) === !0;
        });
    return (
        (0, a.Z)({
            type: i.ImpressionTypes.POPOUT,
            name: i.ImpressionNames.ENABLE_CREATOR_MONETIZATION_GUILD_HEADER_UPSELL,
            properties: {
                guild_id: t,
                is_owner: g
            }
        }),
        (0, r.jsx)('div', {
            className: h.container,
            children: (0, r.jsx)(s.ZP, {
                header: p.NW.string(p.t.C0m4ra),
                content: p.NW.string(p.t.zOHfER),
                asset: (0, r.jsx)('div', {
                    className: h.image,
                    children: (0, r.jsx)('img', {
                        alt: p.NW.string(p.t.xad4wc),
                        src: f,
                        className: h.image
                    })
                }),
                buttonCTA: p.NW.string(p.t.OgQQbG),
                onClick: () => {
                    o.Z.open(t, d.pNK.ROLE_SUBSCRIPTIONS);
                },
                secondaryButtonCTA: p.NW.string(p.t.WAI6xs),
                markAsDismissed: n
            })
        })
    );
}
