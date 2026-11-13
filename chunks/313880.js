var s = t(477900);
t(582128);
var l = t(503698),
    a = t.n(l),
    i = t(834730),
    r = t(447215),
    c = t(435470),
    d = t(792996),
    o = t(422256);
t.d(
    n,
    {},
    {
        A: function (e) {
            let { message: n, channel: t, renderColon: l, hasUnreads: u } = e,
                { user: h, author: m } = (0, c.kn)(t),
                x = m?.nick ?? h?.username ?? "",
                g = (0, r.P)({
                    user: n?.author,
                    channelId: t.id,
                    guildId: t.guild_id,
                    messageId: n?.id,
                    stopPropagation: !0,
                    ariaLabel: d.intl.formatToPlainString(d.t.CSIeU1, { name: x }),
                })(m ?? void 0)(x, t.id);
            return (0, s.jsxs)(i.E, {
                tag: "span",
                className: a()(o.c, { [o.p]: u }),
                variant: "body-sm/semibold",
                children: [g, !0 === l ? ": " : null],
            });
        },
    },
);
