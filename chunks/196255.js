n.d(t, { Z: () => d });
var i = n(200651);
n(192379);
var o = n(120356),
    r = n.n(o),
    a = n(481060),
    s = n(942951),
    l = n(456269),
    c = n(388032),
    u = n(629615);
let d = (e) => {
    var t, n;
    let { message: o, channel: d, renderColon: h, hasUnreads: p } = e,
        { user: m, author: f } = (0, l.AJ)(d),
        g = null !== (n = null !== (t = null == f ? void 0 : f.nick) && void 0 !== t ? t : null == m ? void 0 : m.username) && void 0 !== n ? n : '',
        b = (0, s.l)({
            user: null == o ? void 0 : o.author,
            channelId: d.id,
            guildId: d.guild_id,
            messageId: null == o ? void 0 : o.id,
            stopPropagation: !0,
            ariaLabel: c.NW.formatToPlainString(c.t.CSIeU1, { name: g })
        })(null != f ? f : void 0)(g, d.id);
    return (0, i.jsxs)(a.Text, {
        tag: 'span',
        className: r()(u.author, { [u.hasUnreads]: p }),
        variant: 'text-sm/semibold',
        children: [b, !0 === h ? ': ' : null]
    });
};
