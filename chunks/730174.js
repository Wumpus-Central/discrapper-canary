n.d(t, {
    A: () => _,
}),
    n(896048);
var r = n(627968);
n(64700);
var i = n(503698),
    a = n.n(i),
    s = n(397927),
    o = n(871751),
    l = n(46054),
    c = n(888675),
    u = n(819744),
    d = n(652215),
    f = n(985018),
    p = n(272076);

function _(e) {
    let { message: t, channel: i, compact: o } = e,
        l = null != t.embeds && t.embeds.length > 0;
    return (0, r.jsxs)("div", {
        children: [
            (0, r.jsx)(c.A, {
                className: a()(p.rs, {
                    [p.oE]: o,
                }),
                icon: n(394803),
                compact: o,
                children: (0, r.jsx)("div", {
                    className: a()(p.__invalid_content, {
                        [p.oE]: o,
                    }),
                    children: (0, r.jsx)("div", {
                        className: a()(p.__invalid_messageContent, {
                            [p.oE]: o,
                        }),
                        children: t.content,
                    }),
                }),
            }),
            (0, r.jsx)("div", {
                className: a()(p.__invalid_embedContent, {
                    [p.oE]: o,
                }),
                children: (0, r.jsx)(h, {
                    message: t,
                }),
            }),
            (0, r.jsx)("div", {
                className: p.o1,
                children: (0, r.jsx)(s.Button, {
                    variant: "secondary",
                    text: f.intl.string(f.t.zdBCIv),
                    onClick: () => {
                        l ? (0, u.Iz)(t) : (0, u.yg)(i.guild_id, i.id, t.id);
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
    let a = (e, t) =>
            l.A.parseEmbedTitle(t, !0, {
                channelId: n.channel_id,
            }),
        s = (e, t, r) =>
            l.A.parse(t, !0, {
                channelId: n.channel_id,
            });
    return (0, r.jsx)(o.Ay, {
        className: p.E6,
        embed: i,
        renderTitle: a,
        renderDescription: s,
        autoPlayGif: !1,
        renderImageComponent: d.FXj,
        renderVideoComponent: d.FXj,
        renderLinkComponent: d.FXj,
    });
}
