n.d(t, { A: () => h });
var i = n(627968),
    r = n(64700),
    l = n(342494),
    a = n(397927),
    s = n(58149),
    o = n(954571),
    d = n(975571),
    c = n(652215),
    u = n(49999),
    A = n(985018);
function h(e) {
    let { guildId: t, markAsDismissed: h, renderTargetElement: _ } = e,
        m = {
            text: A.intl.string(A.t.JzJpg4),
            onClick: () => {
                o.default.track(c.HAw.MEDIA_CHANNEL_UPSELL_CLICKED, { ...(0, s.H$)(t) }),
                    h(u.i.PRIMARY),
                    (0, a.mMO)(async () => {
                        let { default: e } = await Promise.all([n.e("64233"), n.e("10923")]).then(n.bind(n, 409200));
                        return (n) => (0, i.jsx)(e, { ...n, channelType: c.rbe.GUILD_MEDIA, guildId: t });
                    });
            },
            variant: "primary",
        },
        p = r.useRef(null);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)("div", { ref: p, children: _() }),
            (0, i.jsx)(l.HZ, {
                title: A.intl.string(A.t.fW7UqM),
                body: A.intl.string(A.t["yQ0X+T"]),
                position: "bottom",
                caretConfig: { align: "center" },
                assetUrl: "https://cdn.discordapp.com/assets/media_channel/media_channel_upsell_demo.mp4",
                action: m,
                textLink: {
                    link: d.A.getCreatorSupportArticleURL(c.MVz.MEDIA_CHANNEL),
                    text: A.intl.string(A.t.w4DutA),
                },
                targetElementRef: p,
                onRequestClose: () => h(u.i.DISMISS),
            }),
        ],
    });
}
