n.d(t, { A: () => g });
var r = n(627968);
n(64700);
var i = n(110259),
    l = n(417597),
    a = n(342494),
    s = n(139286),
    o = n(997509),
    c = n(260509),
    u = n(71393),
    d = n(287809),
    p = n(652215),
    f = n(49999),
    h = n(985018),
    A = n(330766);
function g(e) {
    let { guildId: t, markAsDismissed: n, targetElementRef: g } = e,
        m = (0, l.bG)([u.A, d.default], () => {
            let e = d.default.getCurrentUser(),
                n = u.A.getGuild(t);
            return null != n && (0, c.bM)(n, e);
        });
    return (
        (0, s.A)({
            type: i.ImpressionTypes.POPOUT,
            name: i.ImpressionNames.ENABLE_CREATOR_MONETIZATION_GUILD_HEADER_UPSELL,
            properties: {
                guild_id: t,
                is_owner: m,
            },
        }),
        (0, r.jsx)(a.AM, {
            targetElementRef: g,
            title: h.intl.string(h.t.C0m4rQ),
            body: h.intl.string(h.t.zOHfEX),
            graphic: {
                type: "image",
                src: A,
            },
            actions: [
                {
                    text: h.intl.string(h.t.OgQQbG),
                    variant: "primary",
                    onClick: () => {
                        o.A.open(t, p.BEX.ROLE_SUBSCRIPTIONS);
                    },
                },
            ],
            onRequestClose: () => n(f.i.USER_DISMISS),
            position: "bottom",
            caretConfig: { align: "center" },
        })
    );
}
