n.d(t, { Z: () => g });
var i = n(200651);
n(192379);
var l = n(990547),
    r = n(399606),
    a = n(213609),
    s = n(434404),
    o = n(970731),
    c = n(430824),
    d = n(594174),
    u = n(981631),
    h = n(388032),
    m = n(710825),
    p = n(968153);
function g(e) {
    let { guildId: t, markAsDismissed: n } = e,
        g = (0, r.e7)([c.Z, d.default], () => {
            let e = d.default.getCurrentUser(),
                n = c.Z.getGuild(t);
            return (null == n ? void 0 : n.isOwner(e)) === !0;
        });
    return (
        (0, a.Z)({
            type: l.ImpressionTypes.POPOUT,
            name: l.ImpressionNames.ENABLE_CREATOR_MONETIZATION_GUILD_HEADER_UPSELL,
            properties: {
                guild_id: t,
                is_owner: g
            }
        }),
        (0, i.jsx)('div', {
            className: m.container,
            children: (0, i.jsx)(o.ZP, {
                header: h.intl.string(h.t.C0m4ra),
                content: h.intl.string(h.t.zOHfER),
                asset: (0, i.jsx)('div', {
                    className: m.image,
                    children: (0, i.jsx)('img', {
                        alt: h.intl.string(h.t.xad4wc),
                        src: p,
                        className: m.image
                    })
                }),
                buttonCTA: h.intl.string(h.t.OgQQbG),
                onClick: () => {
                    s.Z.open(t, u.pNK.ROLE_SUBSCRIPTIONS);
                },
                secondaryButtonCTA: h.intl.string(h.t.WAI6xs),
                markAsDismissed: n
            })
        })
    );
}
