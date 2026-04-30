n.d(t, { A: () => E });
var i = n(627968),
    a = n(17928),
    r = n(967198),
    s = n(676279),
    l = n(453771),
    o = n(975571),
    d = n(831318),
    c = n(652215),
    _ = n(985018);
let E = (e) => {
    let { handleLearnMore: t, ...n } = e,
        E = (0, a.bG)([r.A], () => r.A.getGuildId()),
        u = (0, l.Iu)({
            guildId: E,
            onClick: () => {
                window.open(o.A.getArticleURL(c.MVz.NITRO_FAQ), "_blank");
            },
        }),
        A = (0, s.TM)()
            ? "https://cdn.discordapp.com/assets/content/951fb14c4f181e23caa1730b070ffd1b04bf13850e686221fc596c3d7fd7b234.mov"
            : "https://cdn.discordapp.com/assets/content/cedc17f03dee621e55eb1b301c68372f08ac64f32ce656ac5b9cbc0fc0d149f0.webm";
    return (0, i.jsx)(d.A, {
        title: _.intl.string(_.t["9C+41g"]),
        subtitle: u,
        graphic: { type: "video", src: A, loop: !0, loopAt: 2.1 },
        secondaryCTA: _.intl.string(_.t.ZnqyZ2),
        onSecondaryClick: t,
        ...n,
    });
};
