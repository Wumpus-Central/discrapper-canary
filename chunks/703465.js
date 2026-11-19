r.r(t);
var c = r(477900),
    s = r(582128),
    u = r(806163),
    n = r(289873),
    a = r(976860),
    l = r(200789),
    d = r(235039),
    i = r(404373),
    o = r(227007),
    j = r(398773),
    f = r(751841),
    p = r(374523),
    h = r(233470),
    k = r(260498),
    E = r(313537),
    v = r(465080),
    x = r(390924),
    A = r(425853),
    P = r(892715);
function b(e) {
    let { guildId: t, projectId: r } = e,
        { project: x, settled: A } = (0, p.A)(r),
        b = (0, u.zy)(),
        g = null != x && (0, E.fL)(x) !== t,
        m = b.state;
    (s.useEffect(() => {
        g && (0, a.bG)({ pathname: (0, E.z$)(r), state: m });
    }, [g, r, m]),
        s.useEffect(() => {
            "unattempted" === k.Ay.getGuildProjectsFetchState(t) && (0, h.listProjects)(t);
        }, [t]),
        s.useEffect(() => {
            (0, j.jQ)(r, { inServer: !0 });
        }, [r]),
        s.useEffect(() => j.mE, []),
        s.useEffect(() => ((0, v.k3)(r, !0), () => (0, v.k3)(r, !1)), [r]),
        (0, i.wB)(r),
        (0, l.r)(g || m?.conjureOpenTracked === !0 ? null : r, m?.conjureEntryPoint));
    let y = s.useCallback(() => (0, a.bG)((0, f.EB)(t)), [t]);
    return g || (null == x && !A)
        ? (0, c.jsx)("div", { className: P.l, children: (0, c.jsx)(n.y, {}) })
        : (0, c.jsx)(o.A.Provider, {
              value: r,
              children: (0, c.jsx)(d.A, { project: x, projectsLoaded: A, onBack: y, guildId: t, inServer: !0 }),
          });
}
r.d(
    t,
    {},
    {
        default: function (e) {
            let { guildId: t, projectId: r } = e;
            return (0, x.A)(t, "ConjureServerProjectPage")
                ? (0, c.jsx)(b, { guildId: t, projectId: r }, r)
                : (0, c.jsx)(A.A, {});
        },
    },
);
