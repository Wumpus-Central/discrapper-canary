r.r(t);
var c = r(477900),
    s = r(582128),
    u = r(806163),
    a = r(289873),
    n = r(976860),
    l = r(200789),
    d = r(475096),
    o = r(404373),
    i = r(227007),
    j = r(398773),
    f = r(751841),
    p = r(374523),
    k = r(233470),
    h = r(260498),
    E = r(313537),
    v = r(465080),
    b = r(390924),
    x = r(425853),
    A = r(892715);
function P(e) {
    let { guildId: t, projectId: r } = e,
        { project: b, settled: x } = (0, p.A)(r),
        P = (0, u.zy)(),
        B = null != b && (0, E.fL)(b) !== t,
        C = P.state;
    (s.useEffect(() => {
        B && (0, n.bG)({ pathname: (0, E.z$)(r), state: C });
    }, [B, r, C]),
        s.useEffect(() => {
            "unattempted" === h.Ay.getGuildProjectsFetchState(t) && (0, k.listProjects)(t);
        }, [t]),
        s.useEffect(() => {
            (0, j.jQ)(r, { inServer: !0 });
        }, [r]),
        s.useEffect(() => j.mE, []),
        s.useEffect(() => ((0, v.k3)(r, !0), () => (0, v.k3)(r, !1)), [r]),
        (0, o.wB)(r),
        (0, l.r)(B || C?.conjureOpenTracked === !0 ? null : r, C?.conjureEntryPoint));
    let g = s.useCallback(() => (0, n.bG)((0, f.EB)(t)), [t]),
        m = s.useCallback(() => (0, n.pX)((0, f.EB)(t)), [t]);
    return B || (null == b && !x)
        ? (0, c.jsx)("div", { className: A.l, children: (0, c.jsx)(a.y, {}) })
        : (0, c.jsx)(i.A.Provider, {
              value: r,
              children: (0, c.jsx)(d.A, { project: b, projectsLoaded: x, onBack: g, guildId: t, onBackToServer: m }),
          });
}
r.d(
    t,
    {},
    {
        default: function (e) {
            let { guildId: t, projectId: r } = e;
            return (0, b.A)(t, "ConjureServerProjectPage")
                ? (0, c.jsx)(P, { guildId: t, projectId: r }, r)
                : (0, c.jsx)(x.A, {});
        },
    },
);
