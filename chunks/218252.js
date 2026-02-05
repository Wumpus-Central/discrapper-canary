"use strict";
n.d(t, { A: () => h });
var r = n(627968),
    i = n(311907),
    a = n(967198),
    s = n(676279),
    o = n(453771),
    l = n(975571),
    u = n(831318),
    c = n(652215),
    d = n(985018),
    _ = n(206433),
    f = n(323454);
let p = 2.1,
    h = (e) => {
        let { handleLearnMore: t, ...n } = e,
            h = (0, i.bG)([a.A], () => a.A.getGuildId()),
            m = (0, o.Iu)({
                guildId: h,
                onClick: () => {
                    window.open(l.A.getArticleURL(c.MVz.NITRO_FAQ), "_blank");
                },
            }),
            g = (0, s.TM)() ? _.A : f.A;
        return (0, r.jsx)(u.A, {
            gradientColor: "nitro-pink",
            title: d.intl.string(d.t["9C+41g"]),
            subtitle: m,
            videoSrc: g,
            loopAt: p,
            onSecondaryClick: t,
            ...n,
        });
    };
