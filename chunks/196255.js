n.d(t, { Z: () => u });
var i = n(200651);
n(192379);
var a = n(120356),
    o = n.n(a),
    s = n(481060),
    l = n(942951),
    r = n(456269),
    c = n(388032),
    d = n(25999);
let u = (e) => {
    var t, n;
    let { message: a, channel: u, renderColon: h, hasUnreads: m } = e,
        { user: p, author: g } = (0, r.AJ)(u),
        f = null !== (n = null !== (t = null == g ? void 0 : g.nick) && void 0 !== t ? t : null == p ? void 0 : p.username) && void 0 !== n ? n : '',
        v = (0, l.l)({
            user: null == a ? void 0 : a.author,
            channelId: u.id,
            guildId: u.guild_id,
            messageId: null == a ? void 0 : a.id,
            stopPropagation: !0,
            ariaLabel: c.intl.formatToPlainString(c.t.CSIeU1, { name: f })
        })(null != g ? g : void 0)((0, i.jsx)(i.Fragment, { children: f }), u.id);
    return (0, i.jsxs)(s.Text, {
        tag: 'span',
        className: o()(d.author, { [d.hasUnreads]: m }),
        variant: 'text-sm/semibold',
        children: [v, !0 === h ? ': ' : null]
    });
};
