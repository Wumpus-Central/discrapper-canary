var s = t(477900);
t(582128);
var l = t(503698),
    i = t.n(l),
    a = t(834730),
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
                g = m?.nick ?? h?.username ?? "",
                x = (0, r.P)({
                    user: n?.author,
                    channelId: t.id,
                    guildId: t.guild_id,
                    messageId: n?.id,
                    stopPropagation: !0,
                    ariaLabel: d.intl.formatToPlainString(d.t.CSIeU1, { name: g }),
                })(m ?? void 0)(g, t.id);
            return (0, s.jsxs)(a.E, {
                tag: "span",
                className: i()(o.c, { [o.p]: u }),
                variant: "body-sm/semibold",
                children: [x, !0 === l ? ": " : null],
            });
        },
    },
);
