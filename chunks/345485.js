n.d(t, { A: () => p });
var i = n(627968);
n(64700);
var r = n(110259),
    a = n(417597),
    l = n(342494),
    s = n(139286),
    o = n(997509),
    d = n(260509),
    c = n(71393),
    u = n(287809),
    A = n(652215),
    h = n(49999),
    _ = n(985018),
    m = n(330766);
function p(e) {
    let { guildId: t, markAsDismissed: n, targetElementRef: p } = e,
        g = (0, a.bG)([c.A, u.default], () => {
            let e = u.default.getCurrentUser(),
                n = c.A.getGuild(t);
            return null != n && (0, d.bM)(n, e);
        });
    return (
        (0, s.A)({
            type: r.ImpressionTypes.POPOUT,
            name: r.ImpressionNames.ENABLE_CREATOR_MONETIZATION_GUILD_HEADER_UPSELL,
            properties: { guild_id: t, is_owner: g },
        }),
        (0, i.jsx)(l.AM, {
            targetElementRef: p,
            title: _.intl.string(_.t.C0m4rQ),
            body: _.intl.string(_.t.zOHfEX),
            graphic: { type: "image", src: m },
            actions: [
                {
                    text: _.intl.string(_.t.OgQQbG),
                    variant: "primary",
                    onClick: () => {
                        o.A.open(t, A.BEX.ROLE_SUBSCRIPTIONS);
                    },
                },
            ],
            onRequestClose: () => n(h.i.USER_DISMISS),
            position: "bottom",
            caretConfig: { align: "center" },
        })
    );
}
