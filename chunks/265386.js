n.d(t, { Z: () => b });
var r = n(54381),
    i = n(120356),
    a = n.n(i),
    o = n(442837),
    s = n(481060),
    l = n(287734),
    c = n(933557),
    u = n(359110),
    d = n(769654),
    f = n(922482),
    p = n(496675),
    _ = n(373826),
    m = n(788858),
    h = n(231338),
    g = n(388032),
    E = n(704543);
function b(e) {
    let { channel: t, guild: n, onAction: i, onClose: b } = e,
        y = (0, c.ZP)(t),
        O = (0, o.e7)([p.Z], () => t.isPrivate() || p.Z.can(h.Pl.CONNECT, t)),
        v = () => {
            if (!O) return y;
            let e = (e) => {
                e.stopPropagation(),
                    t.isGuildStageVoice() ? (0, f.Cq)(t) : (l.default.selectVoiceChannel(t.id), (0, u.Kh)(t.id)),
                    null == i || i({ action: "OPEN_VOICE_CHANNEL" }),
                    null == b || b();
            };
            return (0, r.jsx)(s.P3F, {
                className: a()(E.clickableText, E.inline),
                onClick: e,
                children: y,
            });
        },
        S = () => {
            if (null == n) return null;
            let e = (e) => {
                e.stopPropagation(), (0, d.X)(n.id), null == i || i({ action: "OPEN_VOICE_GUILD" }), null == b || b();
            };
            return (0, r.jsx)(_.Z, {
                variant: "text-xs/normal",
                text: g.intl.formatToPlainString(g.t["hq/Qze"], { guildName: n.name }),
                onClick: e,
            });
        };
    return (0, r.jsxs)("div", {
        children: [
            (0, r.jsxs)(s.Heading, {
                variant: "heading-sm/semibold",
                color: "text-default",
                className: E.voiceChannelHeading,
                children: [
                    (0, r.jsx)(m.Z, {
                        channel: t,
                        size: "xxs",
                        color: s.TVs.colors.TEXT_DEFAULT,
                        className: E.voiceIcon,
                    }),
                    v(),
                ],
            }),
            S(),
        ],
    });
}
