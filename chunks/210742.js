n.d(t, { A: () => y });
var r = n(627968),
    i = n(64700),
    a = n(731738),
    s = n(397927),
    o = n(964486),
    l = n(831062),
    c = n(954571),
    u = n(308645),
    d = n(335891),
    f = n(929770),
    p = n(259960),
    _ = n(257110),
    h = n(366141),
    m = n(224010),
    g = n(652215),
    E = n(985018),
    b = n(589896);
function y() {
    let e = (0, _.A)(),
        t = (0, p.v)(),
        n = (0, d.K)(),
        y = (0, f.b)();
    (0, o.Ay)(() => {
        u.Yn();
    });
    let O = i.useRef(n);
    return (i.useEffect(() => {
        O.current = n;
    }),
    i.useEffect(() => {
        t &&
            (c.default.track(g.HAw.SAFETY_HUB_VIEWED, { account_standing: O.current.state }),
            l.A.increment({ name: a.K.SAFETY_HUB_VIEW }));
    }, [t]),
    e)
        ? (0, r.jsx)(s.y$y, {})
        : null != y
          ? (0, r.jsxs)(s.$Td, {
                color: s.Hv$.DANGER,
                className: b.aL,
                children: [
                    E.intl.string(E.t.TDRvqs),
                    (0, r.jsx)(s.zr9, {
                        onClick: () => u.Yn(),
                        children: E.intl.string(E.t.R1AN4F),
                    }),
                ],
            })
          : (0, r.jsxs)("div", {
                className: b.kL,
                children: [(0, r.jsx)(h.A, {}), (0, r.jsx)(m.q, {})],
            });
}
