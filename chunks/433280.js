n.d(t, { Z: () => m });
var r = n(951288);
n(647438);
var i = n(990547),
    l = n(399606),
    a = n(213609),
    o = n(434404),
    s = n(970731),
    c = n(601964),
    u = n(430824),
    d = n(594174),
    p = n(981631),
    f = n(388032),
    h = n(813249),
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
                is_owner: m,
            },
        }),
        (0, r.jsx)("div", {
            className: h.container,
            children: (0, r.jsx)(s.ZP, {
                header: f.intl.string(f.t.C0m4ra),
                content: f.intl.string(f.t.zOHfER),
                asset: (0, r.jsx)("div", {
                    className: h.image,
                    children: (0, r.jsx)("img", {
                        alt: f.intl.string(f.t.xad4wc),
                        src: g,
                        className: h.image,
                    }),
                }),
                buttonCTA: f.intl.string(f.t.OgQQbG),
                onClick: () => {
                    o.Z.open(t, p.pNK.ROLE_SUBSCRIPTIONS);
                },
                secondaryButtonCTA: f.intl.string(f.t.WAI6xs),
                markAsDismissed: n,
            }),
        })
    );
}
