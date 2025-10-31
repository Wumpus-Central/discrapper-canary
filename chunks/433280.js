n.d(t, { Z: () => g });
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
    m = n(388032),
    h = n(217110);
function g(e) {
    let { guildId: t, markAsDismissed: n, targetElementRef: g } = e,
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
            targetElementRef: g,
            title: m.intl.string(m.t.C0m4rQ),
            body: m.intl.string(m.t.zOHfEX),
            graphic: {
                type: "image",
                src: h,
            },
            actions: [
                {
                    text: m.intl.string(m.t.OgQQbG),
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
