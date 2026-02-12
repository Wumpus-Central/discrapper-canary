n.d(t, { A: () => p });
var i = n(627968),
    l = n(64700),
    s = n(607399),
    a = n(311907),
    r = n(397927),
    o = n(58736),
    d = n(353202),
    c = n(544028),
    u = n(967198),
    h = n(652215),
    A = n(985018),
    m = n(70461);
function p(e) {
    let t,
        { channelId: p } = e;
    l.useEffect(() => {
        d.A.loadThread(p);
    });
    let g = (0, a.bG)([u.A], () => u.A.getGuildId()) === h.YYv,
        _ = (0, a.bG)([c.A], () => c.A.theme);
    return (
        (t = g
            ? (0, i.jsx)(r.SGT, { note: A.intl.string(A.t["D5SN5/"]), children: A.intl.string(A.t.xVTAdb) })
            : null != p
              ? (0, i.jsx)(r.y$y, { type: r.y$y.Type.SPINNING_CIRCLE })
              : (0, i.jsx)(r.SGT, { note: A.intl.string(A.t["LTr+x9"]), children: A.intl.string(A.t.ai6Lbr) })),
        (0, i.jsxs)("div", {
            className: m.j,
            children: [
                s.Fr && (0, i.jsx)(o.Ay, { children: null }),
                (0, i.jsxs)(r.ppr, {
                    theme: _,
                    children: [
                        (0, i.jsx)(r.G8R, {
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
