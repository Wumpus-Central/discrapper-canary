n.d(t, {
    A: () => b,
});
var r = n(627968),
    i = n(503698),
    a = n.n(i),
    s = n(311907),
    o = n(397927),
    l = n(956793),
    c = n(47167),
    u = n(378570),
    d = n(345942),
    f = n(323443),
    p = n(576705),
    _ = n(531648),
    h = n(10862),
    m = n(818348),
    g = n(985018),
    E = n(380297);

function b(e) {
    let { channel: t, guild: n, onAction: i, onClose: b } = e,
        y = (0, c.Ay)(t),
        O = (0, s.bG)([p.A], () => t.isPrivate() || p.A.can(m.xB.CONNECT, t)),
        A = () => {
            if (!O) return y;
            let e = (e) => {
                e.stopPropagation(),
                    t.isGuildStageVoice() ? (0, f.av)(t) : (l.default.selectVoiceChannel(t.id), (0, u.iN)(t.id)),
                    null == i ||
                        i({
                            action: "OPEN_VOICE_CHANNEL",
                        }),
                    null == b || b();
            };
            return (0, r.jsx)(o.DUT, {
                className: a()(E.sd, E.mG),
                onClick: e,
                children: y,
            });
        },
        v = () => {
            if (null == n) return null;
            let e = (e) => {
                e.stopPropagation(),
                    (0, d.u)(n.id),
                    null == i ||
                        i({
                            action: "OPEN_VOICE_GUILD",
                        }),
                    null == b || b();
            };
            return (0, r.jsx)(_.A, {
                variant: "text-xs/normal",
                text: g.intl.formatToPlainString(g.t["hq/Qze"], {
                    guildName: n.name,
                }),
                onClick: e,
            });
        };
    return (0, r.jsxs)("div", {
        children: [
            (0, r.jsxs)(o.Heading, {
                variant: "heading-sm/semibold",
                color: "text-default",
                className: E.CT,
                children: [
                    (0, r.jsx)(h.A, {
                        channel: t,
                        size: "xxs",
                        color: o.LU0.colors.TEXT_DEFAULT,
                        className: E.Ow,
                    }),
                    A(),
                ],
            }),
            v(),
        ],
    });
}
