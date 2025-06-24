n.d(t, { Z: () => d });
var r = n(255367);
n(73800);
var s = n(120356),
    l = n.n(s),
    a = n(481060),
    i = n(942951),
    o = n(456269),
    c = n(388032),
    u = n(794168);
let d = (e) => {
    var t, n;
    let { message: s, channel: d, renderColon: m, hasUnreads: h } = e,
        { user: g, author: f } = (0, o.AJ)(d),
        b = null != (n = null != (t = null == f ? void 0 : f.nick) ? t : null == g ? void 0 : g.username) ? n : '',
        p = (0, i.l)({
            user: null == s ? void 0 : s.author,
            channelId: d.id,
            guildId: d.guild_id,
            messageId: null == s ? void 0 : s.id,
            stopPropagation: !0,
            ariaLabel: c.intl.formatToPlainString(c.t.CSIeU1, { name: b })
        })(null != f ? f : void 0)(b, d.id);
    return (0, r.jsxs)(a.Text, {
        tag: 'span',
        className: l()(u.author, { [u.hasUnreads]: h }),
        variant: 'text-sm/semibold',
        children: [p, !0 === m ? ': ' : null]
    });
};
