var i = n(200651);
n(192379);
var o = n(120356),
    a = n.n(o),
    s = n(481060),
    l = n(942951),
    r = n(456269),
    c = n(388032),
    d = n(25999);
t.Z = (e) => {
    var t, n;
    let { message: o, channel: u, renderColon: h, hasUnreads: m } = e,
        { user: p, author: f } = (0, r.AJ)(u),
        g = null !== (n = null !== (t = null == f ? void 0 : f.nick) && void 0 !== t ? t : null == p ? void 0 : p.username) && void 0 !== n ? n : '',
        v = (0, l.l)({
            user: null == o ? void 0 : o.author,
            channelId: u.id,
            guildId: u.guild_id,
            messageId: null == o ? void 0 : o.id,
            stopPropagation: !0,
            ariaLabel: c.intl.formatToPlainString(c.t.CSIeU1, { name: g })
        })(null != f ? f : void 0)((0, i.jsx)(i.Fragment, { children: g }), u.id);
    return (0, i.jsxs)(s.Text, {
        tag: 'span',
        className: a()(d.author, { [d.hasUnreads]: m }),
        variant: 'text-sm/semibold',
        children: [v, !0 === h ? ': ' : null]
    });
};
