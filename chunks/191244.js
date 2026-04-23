n.d(t, { A: () => c });
var i = n(627968),
    r = n(17928),
    a = n(967198),
    s = n(676279),
    _ = n(453771),
    l = n(975571),
    o = n(831318),
    E = n(652215),
    d = n(985018);
let c = (e) => {
    let { handleLearnMore: t, ...n } = e,
        c = (0, r.bG)([a.A], () => a.A.getGuildId()),
        u = (0, _.Iu)({
            guildId: c,
            onClick: () => {
                window.open(l.A.getArticleURL(E.MVz.NITRO_FAQ), "_blank");
            },
        }),
        I = (0, s.TM)()
            ? "https://cdn.discordapp.com/assets/content/951fb14c4f181e23caa1730b070ffd1b04bf13850e686221fc596c3d7fd7b234.mov"
            : "https://cdn.discordapp.com/assets/content/cedc17f03dee621e55eb1b301c68372f08ac64f32ce656ac5b9cbc0fc0d149f0.webm";
    return (0, i.jsx)(o.A, {
        title: d.intl.string(d.t["9C+41g"]),
        subtitle: u,
        graphic: { type: "video", src: I, loop: !0, loopAt: 2.1 },
        secondaryCTA: d.intl.string(d.t.ZnqyZ2),
        onSecondaryClick: t,
        ...n,
    });
};
