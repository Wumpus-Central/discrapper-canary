"use strict";
r.d(t, { A: () => _ });
var n = r(627968),
    i = r(17928),
    a = r(967198),
    s = r(676279),
    l = r(453771),
    o = r(975571),
    c = r(831318),
    d = r(652215),
    u = r(985018);
let _ = (e) => {
    let { handleLearnMore: t, ...r } = e,
        _ = (0, i.bG)([a.A], () => a.A.getGuildId()),
        p = (0, l.Iu)({
            guildId: _,
            onClick: () => {
                window.open(o.A.getArticleURL(d.MVz.NITRO_FAQ), "_blank");
            },
        }),
        f = (0, s.TM)()
            ? "https://cdn.discordapp.com/assets/content/951fb14c4f181e23caa1730b070ffd1b04bf13850e686221fc596c3d7fd7b234.mov"
            : "https://cdn.discordapp.com/assets/content/cedc17f03dee621e55eb1b301c68372f08ac64f32ce656ac5b9cbc0fc0d149f0.webm";
    return (0, n.jsx)(c.A, {
        title: u.intl.string(u.t["9C+41g"]),
        subtitle: p,
        graphic: { type: "video", src: f, loop: !0, loopAt: 2.1 },
        secondaryCTA: u.intl.string(u.t.ZnqyZ2),
        onSecondaryClick: t,
        ...r,
    });
};
