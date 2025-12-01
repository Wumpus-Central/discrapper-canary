t.d(n, { Z: () => d });
var s = t(54381);
t(473749);
var l = t(120356),
    a = t.n(l),
    r = t(481060),
    i = t(942951),
    o = t(456269),
    c = t(388032),
    u = t(423046);
let d = (e) => {
    var n, t;
    let { message: l, channel: d, renderColon: m, hasUnreads: h } = e,
        { user: g, author: f } = (0, o.AJ)(d),
        x = null != (t = null != (n = null == f ? void 0 : f.nick) ? n : null == g ? void 0 : g.username) ? t : "",
        j = (0, i.l)({
            user: null == l ? void 0 : l.author,
            channelId: d.id,
            guildId: d.guild_id,
            messageId: null == l ? void 0 : l.id,
            stopPropagation: !0,
            ariaLabel: c.intl.formatToPlainString(c.t.CSIeU1, { name: x }),
        })(null != f ? f : void 0)(x, d.id);
    return (0, s.jsxs)(r.Text, {
        tag: "span",
        className: a()(u.author, { [u.hasUnreads]: h }),
        variant: "text-sm/semibold",
        children: [j, !0 === m ? ": " : null],
    });
};
