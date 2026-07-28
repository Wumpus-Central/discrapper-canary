n.d(t, { A: () => u });
var s = n(477900);
n(582128);
var l = n(503698),
    a = n.n(l),
    i = n(834730),
    r = n(447215),
    c = n(435470),
    o = n(375708),
    d = n(496947);
let u = function (e) {
    let { message: t, channel: n, renderColon: l, hasUnreads: u } = e,
        { user: h, author: m } = (0, c.kn)(n),
        g = m?.nick ?? h?.username ?? "",
        x = (0, r.P)({
            user: t?.author,
            channelId: n.id,
            guildId: n.guild_id,
            messageId: t?.id,
            stopPropagation: !0,
            ariaLabel: o.intl.formatToPlainString(o.t.CSIeU1, { name: g }),
        })(m ?? void 0)(g, n.id);
    return (0, s.jsxs)(i.E, {
        tag: "span",
        className: a()(d.c, { [d.p]: u }),
        variant: "text-sm/semibold",
        children: [x, !0 === l ? ": " : null],
    });
};
