i.d(t, { Z: () => u });
var n = i(200651);
i(192379);
var a = i(120356),
    o = i.n(a),
    s = i(481060),
    l = i(942951),
    r = i(456269),
    c = i(388032),
    d = i(25999);
let u = (e) => {
    var t, i;
    let { message: a, channel: u, renderColon: h, hasUnreads: m } = e,
        { user: p, author: g } = (0, r.AJ)(u),
        f = null !== (i = null !== (t = null == g ? void 0 : g.nick) && void 0 !== t ? t : null == p ? void 0 : p.username) && void 0 !== i ? i : '',
        v = (0, l.l)({
            user: null == a ? void 0 : a.author,
            channelId: u.id,
            guildId: u.guild_id,
            messageId: null == a ? void 0 : a.id,
            stopPropagation: !0,
            ariaLabel: c.intl.formatToPlainString(c.t.CSIeU1, { name: f })
        })(null != g ? g : void 0)((0, n.jsx)(n.Fragment, { children: f }), u.id);
    return (0, n.jsxs)(s.Text, {
        tag: 'span',
        className: o()(d.author, { [d.hasUnreads]: m }),
        variant: 'text-sm/semibold',
        children: [v, !0 === h ? ': ' : null]
    });
};
