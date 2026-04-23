"use strict";
n.d(t, { A: () => p });
var r = n(627968),
    i = n(311907),
    s = n(967198),
    a = n(676279),
    o = n(453771),
    l = n(975571),
    u = n(831318),
    c = n(652215),
    d = n(985018),
    _ = n(206433),
    f = n(323454);
let p = (e) => {
    let { handleLearnMore: t, ...n } = e,
        p = (0, i.bG)([s.A], () => s.A.getGuildId()),
        h = (0, o.Iu)({
            guildId: p,
            onClick: () => {
                window.open(l.A.getArticleURL(c.MVz.NITRO_FAQ), "_blank");
            },
        }),
        E = (0, a.TM)() ? _.A : f.A;
    return (0, r.jsx)(u.A, {
        title: d.intl.string(d.t["9C+41g"]),
        subtitle: h,
        graphic: { type: "video", src: E, loop: !0, loopAt: 2.1 },
        secondaryCTA: d.intl.string(d.t.ZnqyZ2),
        onSecondaryClick: t,
        ...n,
    });
};
