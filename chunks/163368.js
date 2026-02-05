i.d(n, { default: () => _ });
var l = i(627968);
i(64700);
var a = i(311907),
    e = i(397927),
    r = i(442433),
    d = i(587895),
    c = i(646938),
    A = i(189081),
    s = i(81766),
    u = i(568163),
    o = i(541202),
    b = i(288677),
    h = i(186171),
    p = i(343322),
    I = i(123065),
    g = i(282592),
    f = i(399289),
    T = i(652215),
    D = i(985018);
function L(t) {
    let { application: n, libraryApplication: i, analyticsContext: a, onSelect: d } = t,
        c = { ...(null != a ? a.location : null), object: T.ZSU.CONTEXT_MENU },
        A = (0, b.A)(i, c),
        L = (0, h.A)(i),
        _ = (0, I.A)(i),
        v = (0, f.A)(i),
        E = (0, g.A)(i),
        x = (0, o.A)(i, n),
        S = (0, p.A)(i, n),
        y = (0, s.A)(i, n),
        C = (0, u.A)(n);
    return (0, l.jsxs)(e.W1t, {
        "data-menu-migrated": !0,
        navId: "game-context",
        onClose: r.Z_,
        "aria-label": D.intl.string(D.t.tKobzb),
        onSelect: d,
        children: [A, L, _, v, E, x, S, (0, l.jsx)(e.rXV, { children: y }), (0, l.jsx)(e.rXV, { children: C })],
    });
}
function _(t) {
    let { applicationId: n, branchId: i } = t,
        e = (0, a.bG)([d.A], () => d.A.getApplication(n), [n]),
        r = (0, a.bG)([A.A], () => (null != i ? A.A.getLibraryApplication(n, i) : A.A.getActiveLibraryApplication(n)), [
            n,
            i,
        ]);
    return null == e || null == r
        ? (0, l.jsx)(c.default, { ...t, id: n, label: D.intl.string(D.t["FfCL+6"]) })
        : (0, l.jsx)(L, { ...t, application: e, libraryApplication: r });
}
