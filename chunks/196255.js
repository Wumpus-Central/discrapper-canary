n.d(t, { Z: () => d });
var l = n(951288);
n(647438);
var a = n(120356),
    s = n.n(a),
    r = n(481060),
    i = n(942951),
    o = n(456269),
    c = n(388032),
    u = n(423046);
let d = (e) => {
    var t, n;
    let { message: a, channel: d, renderColon: m, hasUnreads: h } = e,
        { user: g, author: f } = (0, o.AJ)(d),
        x = null != (n = null != (t = null == f ? void 0 : f.nick) ? t : null == g ? void 0 : g.username) ? n : "",
        j = (0, i.l)({
            user: null == a ? void 0 : a.author,
            channelId: d.id,
            guildId: d.guild_id,
            messageId: null == a ? void 0 : a.id,
            stopPropagation: !0,
            ariaLabel: c.intl.formatToPlainString(c.t.CSIeU1, { name: x }),
        })(null != f ? f : void 0)(x, d.id);
    return (0, l.jsxs)(r.Text, {
        tag: "span",
        className: s()(u.author, { [u.hasUnreads]: h }),
        variant: "text-sm/semibold",
        children: [j, !0 === m ? ": " : null],
    });
};
