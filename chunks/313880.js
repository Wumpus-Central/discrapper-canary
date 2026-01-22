n.d(t, {
    A: () => u,
});
var i = n(627968);
n(64700);
var s = n(503698),
    r = n.n(s),
    l = n(397927),
    a = n(447215),
    o = n(435470),
    c = n(985018),
    d = n(834502);
let u = (e) => {
    var t, n;
    let { message: s, channel: u, renderColon: h, hasUnreads: g } = e,
        { user: m, author: p } = (0, o.kn)(u),
        f = null != (t = null != (n = null == p ? void 0 : p.nick) ? n : null == m ? void 0 : m.username) ? t : "",
        v = (0, a.P)({
            user: null == s ? void 0 : s.author,
            channelId: u.id,
            guildId: u.guild_id,
            messageId: null == s ? void 0 : s.id,
            stopPropagation: !0,
            ariaLabel: c.intl.formatToPlainString(c.t.CSIeU1, {
                name: f,
            }),
        })(null != p ? p : void 0)(f, u.id);
    return (0, i.jsxs)(l.Text, {
        tag: "span",
        className: r()(d.c, {
            [d.p]: g,
        }),
        variant: "text-sm/semibold",
        children: [v, !0 === h ? ": " : null],
    });
};
