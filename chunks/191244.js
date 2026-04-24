n.d(t, { A: () => _ });
var a = n(627968),
    i = n(17928),
    l = n(967198),
    r = n(676279),
    o = n(453771),
    s = n(975571),
    c = n(831318),
    d = n(652215),
    u = n(985018);
let _ = (e) => {
    let { handleLearnMore: t, ...n } = e,
        _ = (0, i.bG)([l.A], () => l.A.getGuildId()),
        p = (0, o.Iu)({
            guildId: _,
            onClick: () => {
                window.open(s.A.getArticleURL(d.MVz.NITRO_FAQ), "_blank");
            },
        }),
        f = (0, r.TM)()
            ? "https://cdn.discordapp.com/assets/content/951fb14c4f181e23caa1730b070ffd1b04bf13850e686221fc596c3d7fd7b234.mov"
            : "https://cdn.discordapp.com/assets/content/cedc17f03dee621e55eb1b301c68372f08ac64f32ce656ac5b9cbc0fc0d149f0.webm";
    return (0, a.jsx)(c.A, {
        title: u.intl.string(u.t["9C+41g"]),
        subtitle: p,
        graphic: { type: "video", src: f, loop: !0, loopAt: 2.1 },
        secondaryCTA: u.intl.string(u.t.ZnqyZ2),
        onSecondaryClick: t,
        ...n,
    });
};
