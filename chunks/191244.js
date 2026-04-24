"use strict";
n.d(t, { A: () => _ });
var a = n(627968),
    r = n(17928),
    i = n(967198),
    l = n(676279),
    s = n(453771),
    o = n(975571),
    c = n(831318),
    d = n(652215),
    u = n(985018);
let _ = (e) => {
    let { handleLearnMore: t, ...n } = e,
        _ = (0, r.bG)([i.A], () => i.A.getGuildId()),
        p = (0, s.Iu)({
            guildId: _,
            onClick: () => {
                window.open(o.A.getArticleURL(d.MVz.NITRO_FAQ), "_blank");
            },
        }),
        m = (0, l.TM)()
            ? "https://cdn.discordapp.com/assets/content/951fb14c4f181e23caa1730b070ffd1b04bf13850e686221fc596c3d7fd7b234.mov"
            : "https://cdn.discordapp.com/assets/content/cedc17f03dee621e55eb1b301c68372f08ac64f32ce656ac5b9cbc0fc0d149f0.webm";
    return (0, a.jsx)(c.A, {
        title: u.intl.string(u.t["9C+41g"]),
        subtitle: p,
        graphic: { type: "video", src: m, loop: !0, loopAt: 2.1 },
        secondaryCTA: u.intl.string(u.t.ZnqyZ2),
        onSecondaryClick: t,
        ...n,
    });
};
