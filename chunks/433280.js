n.d(t, { Z: () => m });
var r = n(951288);
n(647438);
var i = n(990547),
    l = n(399606),
    a = n(907862),
    s = n(213609),
    o = n(434404),
    c = n(601964),
    u = n(430824),
    d = n(594174),
    p = n(981631),
    f = n(921944),
    h = n(388032),
    g = n(217110);
function m(e) {
    let { guildId: t, markAsDismissed: n, targetElementRef: m } = e,
        _ = (0, l.e7)([u.Z, d.default], () => {
            let e = d.default.getCurrentUser(),
                n = u.Z.getGuild(t);
            return null != n && (0, c.eM)(n, e);
        });
    return (
        (0, s.Z)({
            type: i.ImpressionTypes.POPOUT,
            name: i.ImpressionNames.ENABLE_CREATOR_MONETIZATION_GUILD_HEADER_UPSELL,
            properties: {
                guild_id: t,
                is_owner: _,
            },
        }),
        (0, r.jsx)(a.J2, {
            targetElementRef: m,
            title: h.intl.string(h.t.C0m4rQ),
            body: h.intl.string(h.t.zOHfEX),
            graphic: {
                type: "image",
                src: g,
            },
            actions: [
                {
                    text: h.intl.string(h.t.OgQQbG),
                    variant: "primary",
                    onClick: () => {
                        o.Z.open(t, p.pNK.ROLE_SUBSCRIPTIONS);
                    },
                },
            ],
            onRequestClose: () => n(f.L.USER_DISMISS),
            position: "bottom",
            caretConfig: { align: "center" },
        })
    );
}
