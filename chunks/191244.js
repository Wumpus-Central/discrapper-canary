a.d(t, { A: () => h });
var r = a(627968),
    n = a(17928),
    l = a(967198),
    i = a(676279),
    s = a(453771),
    o = a(975571),
    c = a(831318),
    d = a(652215),
    u = a(985018);
let h = (e) => {
    let { handleLearnMore: t, ...a } = e,
        h = (0, n.bG)([l.A], () => l.A.getGuildId()),
        p = (0, s.Iu)({
            guildId: h,
            onClick: () => {
                window.open(o.A.getArticleURL(d.MVz.NITRO_FAQ), "_blank");
            },
        }),
        m = (0, i.TM)()
            ? "https://cdn.discordapp.com/assets/content/951fb14c4f181e23caa1730b070ffd1b04bf13850e686221fc596c3d7fd7b234.mov"
            : "https://cdn.discordapp.com/assets/content/cedc17f03dee621e55eb1b301c68372f08ac64f32ce656ac5b9cbc0fc0d149f0.webm";
    return (0, r.jsx)(c.A, {
        title: u.intl.string(u.t["9C+41g"]),
        subtitle: p,
        graphic: { type: "video", src: m, loop: !0, loopAt: 2.1 },
        secondaryCTA: u.intl.string(u.t.ZnqyZ2),
        onSecondaryClick: t,
        ...a,
    });
};
