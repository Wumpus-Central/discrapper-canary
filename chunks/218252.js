n.d(t, { A: () => g });
var a = n(627968),
    r = n(311907),
    l = n(967198),
    i = n(676279),
    o = n(453771),
    s = n(975571),
    c = n(831318),
    u = n(652215),
    d = n(985018),
    p = n(206433),
    A = n(323454);
let g = (e) => {
    let { handleLearnMore: t, ...n } = e,
        g = (0, r.bG)([l.A], () => l.A.getGuildId()),
        _ = (0, o.Iu)({
            guildId: g,
            onClick: () => {
                window.open(s.A.getArticleURL(u.MVz.NITRO_FAQ), "_blank");
            },
        }),
        v = (0, i.TM)() ? p.A : A.A;
    return (0, a.jsx)(c.A, {
        title: d.intl.string(d.t["9C+41g"]),
        subtitle: _,
        graphic: { type: "video", src: v, loop: !0, loopAt: 2.1 },
        secondaryCTA: d.intl.string(d.t.ZnqyZ2),
        onSecondaryClick: t,
        ...n,
    });
};
