n.d(t, { Z: () => p }), n(388685);
var r = n(54381);
n(473749);
var i = n(120356),
    a = n.n(i),
    o = n(481060),
    s = n(446411),
    l = n(454585),
    c = n(834129),
    u = n(553385),
    d = n(981631),
    f = n(388032),
    _ = n(981059);
function p(e) {
    let { message: t, channel: i, compact: s } = e,
        l = null != t.embeds && t.embeds.length > 0;
    return (0, r.jsxs)("div", {
        children: [
            (0, r.jsx)(c.Z, {
                className: a()(_.mainContainer, { [_.compact]: s }),
                icon: n(570111),
                compact: s,
                children: (0, r.jsx)("div", {
                    className: a()(_.__invalid_content, { [_.compact]: s }),
                    children: (0, r.jsx)("div", {
                        className: a()(_.__invalid_messageContent, { [_.compact]: s }),
                        children: t.content,
                    }),
                }),
            }),
            (0, r.jsx)("div", {
                className: a()(_.__invalid_embedContent, { [_.compact]: s }),
                children: (0, r.jsx)(h, { message: t }),
            }),
            (0, r.jsx)("div", {
                className: _.actions,
                children: (0, r.jsx)(o.Button, {
                    variant: "secondary",
                    text: f.intl.string(f.t.zdBCIv),
                    onClick: () => {
                        l ? (0, u.z$)(t) : (0, u.XP)(i.guild_id, i.id, t.id);
                    },
                }),
            }),
        ],
    });
}
function h(e) {
    var t;
    let { message: n } = e,
        [i] = null != (t = n.embeds) ? t : [];
    if (null == i) return null;
    let a = (e, t) => l.Z.parseEmbedTitle(t, !0, { channelId: n.channel_id }),
        o = (e, t, r) => l.Z.parse(t, !0, { channelId: n.channel_id });
    return (0, r.jsx)(s.ZP, {
        className: _.embed,
        embed: i,
        renderTitle: a,
        renderDescription: o,
        autoPlayGif: !1,
        renderImageComponent: d.VqG,
        renderVideoComponent: d.VqG,
        renderLinkComponent: d.VqG,
    });
}
