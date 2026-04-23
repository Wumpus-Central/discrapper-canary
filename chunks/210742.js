s.d(e, { A: () => j });
var n = s(627968),
    i = s(64700),
    r = s(731738),
    a = s(289873),
    l = s(417098),
    c = s(964486),
    o = s(831062),
    d = s(954571),
    u = s(308645),
    N = s(335891),
    m = s(929770),
    h = s(259960),
    E = s(257110),
    g = s(588522),
    x = s(224010),
    A = s(652215),
    I = s(985018),
    _ = s(746631);
function j() {
    let t = (0, E.A)(),
        e = (0, h.v)(),
        s = (0, N.K)(),
        j = (0, m.b)();
    (0, c.Ay)(() => {
        u.Yn();
    });
    let D = i.useRef(s);
    return (i.useEffect(() => {
        D.current = s;
    }),
    i.useEffect(() => {
        e &&
            (d.default.track(A.HAw.SAFETY_HUB_VIEWED, { account_standing: D.current.state }),
            o.A.increment({ name: r.K.SAFETY_HUB_VIEW }));
    }, [e]),
    t)
        ? (0, n.jsx)(a.y, {})
        : null != j
          ? (0, n.jsxs)(l.$T, {
                color: l.Hv.DANGER,
                className: _.aL,
                children: [
                    I.intl.string(I.t.TDRvqs),
                    (0, n.jsx)(l.zr, { onClick: () => u.Yn(), children: I.intl.string(I.t.R1AN4F) }),
                ],
            })
          : (0, n.jsxs)("div", { className: _.kL, children: [(0, n.jsx)(g.A, {}), (0, n.jsx)(x.q, {})] });
}
