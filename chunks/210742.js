s.d(e, { A: () => E });
var i = s(627968),
    a = s(64700),
    l = s(731738),
    n = s(397927),
    r = s(964486),
    c = s(831062),
    d = s(954571),
    o = s(308645),
    m = s(335891),
    x = s(929770),
    h = s(259960),
    u = s(257110),
    g = s(366141),
    N = s(224010),
    j = s(652215),
    v = s(985018),
    f = s(589896);
function E() {
    let t = (0, u.A)(),
        e = (0, h.v)(),
        s = (0, m.K)(),
        E = (0, x.b)();
    (0, r.Ay)(() => {
        o.Yn();
    });
    let T = a.useRef(s);
    return (a.useEffect(() => {
        T.current = s;
    }),
    a.useEffect(() => {
        e &&
            (d.default.track(j.HAw.SAFETY_HUB_VIEWED, { account_standing: T.current.state }),
            c.A.increment({ name: l.K.SAFETY_HUB_VIEW }));
    }, [e]),
    t)
        ? (0, i.jsx)(n.y$y, {})
        : null != E
          ? (0, i.jsxs)(n.$Td, {
                color: n.Hv$.DANGER,
                className: f.aL,
                children: [
                    v.intl.string(v.t.TDRvqs),
                    (0, i.jsx)(n.zr9, { onClick: () => o.Yn(), children: v.intl.string(v.t.R1AN4F) }),
                ],
            })
          : (0, i.jsxs)("div", { className: f.kL, children: [(0, i.jsx)(g.A, {}), (0, i.jsx)(N.q, {})] });
}
