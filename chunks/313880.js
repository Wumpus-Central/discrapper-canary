s.d(t, { A: () => u });
var n = s(627968);
s(64700);
var l = s(503698),
    a = s.n(l),
    i = s(397927),
    r = s(447215),
    o = s(435470),
    d = s(985018),
    c = s(834502);
let u = (e) => {
    let { message: t, channel: s, renderColon: l, hasUnreads: u } = e,
        { user: h, author: m } = (0, o.kn)(s),
        g = m?.nick ?? h?.username ?? "",
        x = (0, r.P)({
            user: t?.author,
            channelId: s.id,
            guildId: s.guild_id,
            messageId: t?.id,
            stopPropagation: !0,
            ariaLabel: d.intl.formatToPlainString(d.t.CSIeU1, { name: g }),
        })(m ?? void 0)(g, s.id);
    return (0, n.jsxs)(i.Text, {
        tag: "span",
        className: a()(c.c, { [c.p]: u }),
        variant: "text-sm/semibold",
        children: [x, !0 === l ? ": " : null],
    });
};
