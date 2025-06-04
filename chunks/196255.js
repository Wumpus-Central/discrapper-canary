n.d(t, { Z: () => d });
var i = n(255367);
n(73800);
var r = n(120356),
    o = n.n(r),
    l = n(481060),
    a = n(942951),
    s = n(456269),
    c = n(388032),
    u = n(794168);
let d = (e) => {
    var t, n;
    let { message: r, channel: d, renderColon: h, hasUnreads: p } = e,
        { user: m, author: f } = (0, s.AJ)(d),
        g = null != (n = null != (t = null == f ? void 0 : f.nick) ? t : null == m ? void 0 : m.username) ? n : '',
        b = (0, a.l)({
            user: null == r ? void 0 : r.author,
            channelId: d.id,
            guildId: d.guild_id,
            messageId: null == r ? void 0 : r.id,
            stopPropagation: !0,
            ariaLabel: c.intl.formatToPlainString(c.t.CSIeU1, { name: g })
        })(null != f ? f : void 0)(g, d.id);
    return (0, i.jsxs)(l.Text, {
        tag: 'span',
        className: o()(u.author, { [u.hasUnreads]: p }),
        variant: 'text-sm/semibold',
        children: [b, !0 === h ? ': ' : null]
    });
};
