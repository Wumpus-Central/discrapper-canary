"use strict";
n.d(t, { A: () => g });
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
    p = n(70461);
function g(e) {
    let t,
        { channelId: g } = e;
    s.useEffect(() => {
        c.A.loadThread(g);
    });
    let m = (0, r.bG)([u.A], () => u.A.getGuildId()) === h.YYv,
        _ = (0, r.bG)([d.A], () => d.A.theme);
    return (
        (t = m
            ? (0, i.jsx)(a.SGT, { note: A.intl.string(A.t["D5SN5/"]), children: A.intl.string(A.t.xVTAdb) })
            : null != g
              ? (0, i.jsx)(a.y$y, { type: a.y$y.Type.SPINNING_CIRCLE })
              : (0, i.jsx)(a.SGT, { note: A.intl.string(A.t["LTr+x9"]), children: A.intl.string(A.t.ai6Lbr) })),
        (0, i.jsxs)("div", {
            className: p.j,
            children: [
                l.Fr && (0, i.jsx)(o.Ay, { children: null }),
                (0, i.jsxs)(a.ppr, {
                    theme: _,
                    children: [
                        (0, i.jsx)(a.G8R, {
                            darkSrc: m ? n(556708) : n(355937),
                            lightSrc: m ? n(828140) : n(332327),
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
