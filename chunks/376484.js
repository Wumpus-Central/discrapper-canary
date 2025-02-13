n.d(t, { Z: () => h }), n(47120);
var i = n(200651);
n(192379);
var l = n(120356),
    a = n.n(l),
    r = n(481060),
    s = n(446411),
    o = n(454585),
    c = n(834129),
    d = n(553385),
    u = n(981631),
    m = n(388032),
    _ = n(436289);
function h(e) {
    let { message: t, channel: l, compact: s } = e,
        o = null != t.embeds && t.embeds.length > 0;
    return (0, i.jsxs)('div', {
        children: [
            (0, i.jsx)(c.Z, {
                className: a()(_.mainContainer, { [_.compact]: s }),
                icon: n(570111),
                compact: s,
                children: (0, i.jsx)('div', {
                    className: a()(_.__invalid_content, { [_.compact]: s }),
                    children: (0, i.jsx)('div', {
                        className: a()(_.__invalid_messageContent, { [_.compact]: s }),
                        children: t.content
                    })
                })
            }),
            (0, i.jsx)('div', {
                className: a()(_.__invalid_embedContent, { [_.compact]: s }),
                children: (0, i.jsx)(p, { message: t })
            }),
            (0, i.jsx)('div', {
                className: _.actions,
                children: (0, i.jsx)(r.zxk, {
                    color: r.zxk.Colors.PRIMARY,
                    onClick: () => {
                        o ? (0, d.z$)(t) : (0, d.XP)(l.guild_id, l.id, t.id);
                    },
                    children: m.intl.string(m.t.zdBCIi)
                })
            })
        ]
    });
}
function p(e) {
    var t;
    let { message: n } = e,
        [l] = null !== (t = n.embeds) && void 0 !== t ? t : [];
    return null == l
        ? null
        : (0, i.jsx)(s.ZP, {
              className: _.embed,
              embed: l,
              renderTitle: (e, t) => o.Z.parseEmbedTitle(t, !0, { channelId: n.channel_id }),
              renderDescription: (e, t, i) => o.Z.parse(t, !0, { channelId: n.channel_id }),
              autoPlayGif: !1,
              renderImageComponent: u.VqG,
              renderVideoComponent: u.VqG,
              renderLinkComponent: u.VqG
          });
}
