n.d(t, { Z: () => m });
var r = n(54381);
n(473749);
var i = n(990547),
    l = n(399606),
    a = n(907862),
    o = n(213609),
    s = n(434404),
    c = n(601964),
    u = n(430824),
    d = n(594174),
    p = n(981631),
    f = n(921944),
    g = n(388032),
    h = n(217110);
function m(e) {
    let { guildId: t, markAsDismissed: n, targetElementRef: m } = e,
        b = (0, l.e7)([u.Z, d.default], () => {
            let e = d.default.getCurrentUser(),
                n = u.Z.getGuild(t);
            return null != n && (0, c.eM)(n, e);
        });
    return (
        (0, o.Z)({
            type: i.ImpressionTypes.POPOUT,
            name: i.ImpressionNames.ENABLE_CREATOR_MONETIZATION_GUILD_HEADER_UPSELL,
            properties: {
                guild_id: t,
                is_owner: b,
            },
        }),
        (0, r.jsx)(a.J2, {
            targetElementRef: m,
            title: g.intl.string(g.t.C0m4rQ),
            body: g.intl.string(g.t.zOHfEX),
            graphic: {
                type: "image",
                src: h,
            },
            actions: [
                {
                    text: g.intl.string(g.t.OgQQbG),
                    variant: "primary",
                    onClick: () => {
                        s.Z.open(t, p.pNK.ROLE_SUBSCRIPTIONS);
                    },
                },
            ],
            onRequestClose: () => n(f.L.USER_DISMISS),
            position: "bottom",
            caretConfig: { align: "center" },
        })
    );
}
