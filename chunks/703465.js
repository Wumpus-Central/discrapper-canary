(r.r(t), r.d(t, { default: () => P }));
var c = r(477900),
    s = r(582128),
    u = r(806163),
    a = r(289873),
    n = r(976860),
    l = r(200789),
    d = r(643421),
    o = r(404373),
    i = r(227007),
    j = r(398773),
    p = r(751841),
    f = r(374523),
    h = r(371169),
    k = r(260498),
    E = r(313537),
    v = r(390924),
    b = r(425853),
    x = r(892715);
function A(e) {
    let { guildId: t, projectId: r } = e,
        { project: v, settled: b } = (0, f.A)(r),
        A = (0, u.zy)(),
        P = null != v && (0, E.fL)(v) !== t,
        B = A.state;
    (s.useEffect(() => {
        P && (0, n.bG)({ pathname: (0, E.z$)(r), state: B });
    }, [P, r, B]),
        s.useEffect(() => {
            "unattempted" === k.Ay.getGuildProjectsFetchState(t) && (0, h.listProjects)(t);
        }, [t]),
        s.useEffect(() => {
            (0, j.jQ)(r, { inServer: !0 });
        }, [r]),
        s.useEffect(() => j.mE, []),
        (0, o.wB)(r),
        (0, l.r)(P || B?.conjureOpenTracked === !0 ? null : r, B?.conjureEntryPoint));
    let C = s.useCallback(() => (0, n.bG)((0, p.EB)(t)), [t]),
        g = s.useCallback(() => (0, n.pX)((0, p.EB)(t)), [t]);
    return P || (null == v && !b)
        ? (0, c.jsx)("div", { className: x.l, children: (0, c.jsx)(a.y, {}) })
        : (0, c.jsx)(i.A.Provider, {
              value: r,
              children: (0, c.jsx)(d.A, { project: v, projectsLoaded: b, onBack: C, guildId: t, onBackToServer: g }),
          });
}
function P(e) {
    let { guildId: t, projectId: r } = e;
    return (0, v.A)(t, "ConjureServerProjectPage")
        ? (0, c.jsx)(A, { guildId: t, projectId: r }, r)
        : (0, c.jsx)(b.A, {});
}
