i.d(t, { default: () => v });
var l = i(627968);
i(64700);
var a = i(311907),
    e = i(861672),
    r = i(477782),
    d = i(442433),
    c = i(587895),
    A = i(646938),
    s = i(189081),
    u = i(81766),
    o = i(123401),
    b = i(541202),
    h = i(288677),
    I = i(186171),
    p = i(343322),
    g = i(123065),
    f = i(282592),
    T = i(399289),
    L = i(652215),
    D = i(985018);
function _(n) {
    let { application: t, libraryApplication: i, analyticsContext: a, onSelect: c } = n,
        A = { ...(null != a ? a.location : null), object: L.ZSU.CONTEXT_MENU },
        s = (0, h.A)(i, A),
        _ = (0, I.A)(i),
        v = (0, g.A)(i),
        E = (0, T.A)(i),
        y = (0, f.A)(i),
        x = (0, b.A)(i, t),
        S = (0, p.A)(i, t),
        C = (0, u.A)(i, t),
        N = (0, o.A)(t);
    return (0, l.jsxs)(e.W, {
        "data-menu-migrated": !0,
        navId: "game-context",
        onClose: d.Z_,
        "aria-label": D.intl.string(D.t.tKobzb),
        onSelect: c,
        children: [s, _, v, E, y, x, S, (0, l.jsx)(r.rX, { children: C }), (0, l.jsx)(r.rX, { children: N })],
    });
}
function v(n) {
    let { applicationId: t, branchId: i } = n,
        e = (0, a.bG)([c.A], () => c.A.getApplication(t), [t]),
        r = (0, a.bG)([s.A], () => (null != i ? s.A.getLibraryApplication(t, i) : s.A.getActiveLibraryApplication(t)), [
            t,
            i,
        ]);
    return null == e || null == r
        ? (0, l.jsx)(A.default, { ...n, id: t, label: D.intl.string(D.t["FfCL+6"]) })
        : (0, l.jsx)(_, { ...n, application: e, libraryApplication: r });
}
