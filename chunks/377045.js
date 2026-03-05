"use strict";
n.d(t, { A: () => p });
var i = n(627968),
    s = n(64700),
    l = n(607399),
    r = n(311907),
    a = n(397927),
    o = n(58736),
    c = n(353202),
    d = n(544028),
    u = n(967198),
    h = n(652215),
    A = n(985018),
    m = n(985531);
function p(e) {
    let t,
        { channelId: p } = e;
    s.useEffect(() => {
        c.A.loadThread(p);
    });
    let g = (0, r.bG)([u.A], () => u.A.getGuildId()) === h.YYv,
        _ = (0, r.bG)([d.A], () => d.A.theme);
    return (
        (t = g
            ? (0, i.jsx)(a.SGT, { note: A.intl.string(A.t["D5SN5/"]), children: A.intl.string(A.t.xVTAdb) })
            : null != p
              ? (0, i.jsx)(a.y$y, { type: a.y$y.Type.SPINNING_CIRCLE })
              : (0, i.jsx)(a.SGT, { note: A.intl.string(A.t["LTr+x9"]), children: A.intl.string(A.t.ai6Lbr) })),
        (0, i.jsxs)("div", {
            className: m.j,
            children: [
                l.Fr && (0, i.jsx)(o.Ay, { children: null }),
                (0, i.jsxs)(a.ppr, {
                    theme: _,
                    children: [
                        (0, i.jsx)(a.G8R, {
                            darkSrc: g ? n(556708) : n(355937),
                            lightSrc: g ? n(828140) : n(332327),
                            width: 272,
                            height: 222,
                        }),
                        t,
                    ],
                }),
            ],
        })
    );
}
