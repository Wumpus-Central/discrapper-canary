n.d(t, { Z: () => b });
var r = n(200651),
    i = n(120356),
    a = n.n(i),
    o = n(442837),
    s = n(481060),
    l = n(287734),
    c = n(933557),
    u = n(359110),
    d = n(769654),
    f = n(922482),
    _ = n(496675),
    p = n(373826),
    h = n(788858),
    m = n(231338),
    g = n(388032),
    E = n(227832);
function b(e) {
    let { channel: t, guild: n, onAction: i, onClose: b } = e,
        y = (0, c.ZP)(t),
        v = (0, o.e7)([_.Z], () => t.isPrivate() || _.Z.can(m.Pl.CONNECT, t)),
        O = () => {
            if (!v) return y;
            let e = (e) => {
                e.stopPropagation(), t.isGuildStageVoice() ? (0, f.Cq)(t) : (l.default.selectVoiceChannel(t.id), (0, u.Kh)(t.id)), null == i || i({ action: 'OPEN_VOICE_CHANNEL' }), null == b || b();
            };
            return (0, r.jsx)(s.P3F, {
                className: a()(E.clickableText, E.inline),
                onClick: e,
                children: y
            });
        },
        I = () => {
            if (null == n) return null;
            let e = (e) => {
                e.stopPropagation(), (0, d.X)(n.id), null == i || i({ action: 'OPEN_VOICE_GUILD' }), null == b || b();
            };
            return (0, r.jsx)(p.Z, {
                variant: 'text-xs/normal',
                text: g.intl.formatToPlainString(g.t['hq/Qzc'], { guildName: n.name }),
                onClick: e
            });
        };
    return (0, r.jsxs)('div', {
        children: [
            (0, r.jsxs)(s.X6q, {
                variant: 'heading-sm/semibold',
                color: 'text-normal',
                className: E.voiceChannelHeading,
                children: [
                    (0, r.jsx)(h.Z, {
                        channel: t,
                        size: 'xxs',
                        color: s.TVs.colors.TEXT_NORMAL,
                        className: E.voiceIcon
                    }),
                    O()
                ]
            }),
            I()
        ]
    });
}
