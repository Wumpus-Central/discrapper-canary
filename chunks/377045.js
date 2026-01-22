n.d(t, {
    A: () => b,
});
var r = n(627968),
    l = n(64700),
    i = n(607399),
    a = n(311907),
    s = n(397927),
    o = n(58736),
    c = n(353202),
    u = n(544028),
    d = n(967198),
    f = n(652215),
    p = n(985018),
    h = n(70461);

function b(e) {
    let t,
        { channelId: b } = e;
    l.useEffect(() => {
        c.A.loadThread(b);
    });
    let g = (0, a.bG)([d.A], () => d.A.getGuildId()) === f.YYv,
        m = (0, a.bG)([u.A], () => u.A.theme);
    return (
        (t = g
            ? (0, r.jsx)(s.SGT, {
                  note: p.intl.string(p.t["D5SN5/"]),
                  children: p.intl.string(p.t.xVTAdb),
              })
            : null != b
              ? (0, r.jsx)(s.y$y, {
                    type: s.y$y.Type.SPINNING_CIRCLE,
                })
              : (0, r.jsx)(s.SGT, {
                    note: p.intl.string(p.t["LTr+x9"]),
                    children: p.intl.string(p.t.ai6Lbr),
                })),
        (0, r.jsxs)("div", {
            className: h.j,
            children: [
                i.Fr &&
                    (0, r.jsx)(o.Ay, {
                        children: null,
                    }),
                (0, r.jsxs)(s.ppr, {
                    theme: m,
                    children: [
                        (0, r.jsx)(s.G8R, {
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
