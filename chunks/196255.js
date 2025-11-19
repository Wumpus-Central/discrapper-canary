n.d(t, { Z: () => d });
var a = n(54381);
n(473749);
var l = n(120356),
    s = n.n(l),
    r = n(481060),
    i = n(942951),
    o = n(456269),
    c = n(388032),
    u = n(355743);
let d = (e) => {
    var t, n;
    let { message: l, channel: d, renderColon: m, hasUnreads: h } = e,
        { user: g, author: f } = (0, o.AJ)(d),
        x = null != (n = null != (t = null == f ? void 0 : f.nick) ? t : null == g ? void 0 : g.username) ? n : "",
        j = (0, i.l)({
            user: null == l ? void 0 : l.author,
            channelId: d.id,
            guildId: d.guild_id,
            messageId: null == l ? void 0 : l.id,
            stopPropagation: !0,
            ariaLabel: c.intl.formatToPlainString(c.t.CSIeU1, { name: x }),
        })(null != f ? f : void 0)(x, d.id);
    return (0, a.jsxs)(r.Text, {
        tag: "span",
        className: s()(u.author, { [u.hasUnreads]: h }),
        variant: "text-sm/semibold",
        children: [j, !0 === m ? ": " : null],
    });
};
