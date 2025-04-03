n.d(t, { Z: () => f }), n(47120);
var r = n(200651);
n(192379);
var i = n(120356),
    a = n.n(i),
    l = n(481060),
    o = n(446411),
    s = n(454585),
    c = n(834129),
    u = n(553385),
    d = n(981631),
    p = n(388032),
    m = n(257590);
function f(e) {
    let { message: t, channel: i, compact: o } = e,
        s = null != t.embeds && t.embeds.length > 0;
    return (0, r.jsxs)('div', {
        children: [
            (0, r.jsx)(c.Z, {
                className: a()(m.mainContainer, { [m.compact]: o }),
                icon: n(570111),
                compact: o,
                children: (0, r.jsx)('div', {
                    className: a()(m.__invalid_content, { [m.compact]: o }),
                    children: (0, r.jsx)('div', {
                        className: a()(m.__invalid_messageContent, { [m.compact]: o }),
                        children: t.content
                    })
                })
            }),
            (0, r.jsx)('div', {
                className: a()(m.__invalid_embedContent, { [m.compact]: o }),
                children: (0, r.jsx)(h, { message: t })
            }),
            (0, r.jsx)('div', {
                className: m.actions,
                children: (0, r.jsx)(l.zxk, {
                    color: l.zxk.Colors.PRIMARY,
                    onClick: () => {
                        s ? (0, u.z$)(t) : (0, u.XP)(i.guild_id, i.id, t.id);
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
        [i] = null != (t = n.embeds) ? t : [];
    return null == i
        ? null
        : (0, r.jsx)(o.ZP, {
              className: m.embed,
              embed: i,
              renderTitle: (e, t) => s.Z.parseEmbedTitle(t, !0, { channelId: n.channel_id }),
              renderDescription: (e, t, r) => s.Z.parse(t, !0, { channelId: n.channel_id }),
              autoPlayGif: !1,
              renderImageComponent: d.VqG,
              renderVideoComponent: d.VqG,
              renderLinkComponent: d.VqG
          });
}
