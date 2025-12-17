n.d(t, { Z: () => s });
var a = n(54381);
n(473749);
var r = n(481060),
    i = n(739566),
    l = n(942951);
let s = (e) => {
    var t, n;
    let { message: s, originalAuthor: o, channel: c } = e,
        d = (0, i.Sw)(o, c),
        u = null != (n = null != (t = null == d ? void 0 : d.nick) ? t : null == o ? void 0 : o.username) ? n : "",
        m = (0, l.l)({
            user: null != o ? o : void 0,
            channelId: c.id,
            guildId: c.guild_id,
            messageId: null == s ? void 0 : s.id,
            stopPropagation: !0,
        })(null != d ? d : void 0)(u, c.id);
    return (0, a.jsx)(r.Text, {
        variant: "text-md/semibold",
        children: m,
    });
};
