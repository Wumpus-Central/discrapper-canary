n.d(t, { Z: () => f }), n(47120);
var r = n(200651);
n(192379);
var i = n(120356),
    a = n.n(i),
    o = n(481060),
    l = n(446411),
    s = n(454585),
    c = n(834129),
    d = n(553385),
    u = n(981631),
    p = n(388032),
    m = n(768562);
function f(e) {
    let { message: t, channel: i, compact: l } = e,
        s = null != t.embeds && t.embeds.length > 0;
    return (0, r.jsxs)('div', {
        children: [
            (0, r.jsx)(c.Z, {
                className: a()(m.mainContainer, { [m.compact]: l }),
                icon: n(570111),
                compact: l,
                children: (0, r.jsx)('div', {
                    className: a()(m.__invalid_content, { [m.compact]: l }),
                    children: (0, r.jsx)('div', {
                        className: a()(m.__invalid_messageContent, { [m.compact]: l }),
                        children: t.content
                    })
                })
            }),
            (0, r.jsx)('div', {
                className: a()(m.__invalid_embedContent, { [m.compact]: l }),
                children: (0, r.jsx)(h, { message: t })
            }),
            (0, r.jsx)('div', {
                className: m.actions,
                children: (0, r.jsx)(o.zxk, {
                    color: o.zxk.Colors.PRIMARY,
                    onClick: () => {
                        s ? (0, d.z$)(t) : (0, d.XP)(i.guild_id, i.id, t.id);
                    },
                    children: p.NW.string(p.t.zdBCIi)
                })
            })
        ]
    });
}
function h(e) {
    var t;
    let { message: n } = e,
        [i] = null !== (t = n.embeds) && void 0 !== t ? t : [];
    return null == i
        ? null
        : (0, r.jsx)(l.ZP, {
              className: m.embed,
              embed: i,
              renderTitle: (e, t) => s.Z.parseEmbedTitle(t, !0, { channelId: n.channel_id }),
              renderDescription: (e, t, r) => s.Z.parse(t, !0, { channelId: n.channel_id }),
              autoPlayGif: !1,
              renderImageComponent: u.VqG,
              renderVideoComponent: u.VqG,
              renderLinkComponent: u.VqG
          });
}
