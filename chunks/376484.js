n.d(t, {
    Z: function () {
        return f;
    }
}),
    n(47120);
var i = n(200651);
n(192379);
var r = n(120356),
    l = n.n(r),
    a = n(481060),
    o = n(446411),
    s = n(454585),
    c = n(834129),
    d = n(553385),
    u = n(981631),
    m = n(388032),
    h = n(188312);
function f(e) {
    let { message: t, channel: r, compact: o } = e,
        s = null != t.embeds && t.embeds.length > 0;
    return (0, i.jsxs)('div', {
        children: [
            (0, i.jsx)(c.Z, {
                className: l()(h.mainContainer, { [h.compact]: o }),
                icon: n(570111),
                compact: o,
                children: (0, i.jsx)('div', {
                    className: l()(h.__invalid_content, { [h.compact]: o }),
                    children: (0, i.jsx)('div', {
                        className: l()(h.__invalid_messageContent, { [h.compact]: o }),
                        children: t.content
                    })
                })
            }),
            (0, i.jsx)('div', {
                className: l()(h.__invalid_embedContent, { [h.compact]: o }),
                children: (0, i.jsx)(p, { message: t })
            }),
            (0, i.jsx)('div', {
                className: h.actions,
                children: (0, i.jsx)(a.Button, {
                    color: a.Button.Colors.PRIMARY,
                    onClick: () => {
                        s ? (0, d.z$)(t) : (0, d.XP)(r.guild_id, r.id, t.id);
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
        [r] = null !== (t = n.embeds) && void 0 !== t ? t : [];
    return null == r
        ? null
        : (0, i.jsx)(o.ZP, {
              className: h.embed,
              embed: r,
              renderTitle: (e, t) => s.Z.parseEmbedTitle(t, !0, { channelId: n.channel_id }),
              renderDescription: (e, t, i) => s.Z.parse(t, !0, { channelId: n.channel_id }),
              autoPlayGif: !1,
              renderImageComponent: u.VqG,
              renderVideoComponent: u.VqG,
              renderLinkComponent: u.VqG
          });
}
