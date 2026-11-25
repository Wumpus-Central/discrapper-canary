s.r(t);
var r = s(477900),
    c = s(582128),
    u = s(806163),
    n = s(855986),
    l = s(534514),
    a = s(289873),
    d = s(976860),
    i = s(200789),
    o = s(235216),
    j = s(404373),
    f = s(227007),
    h = s(398773),
    p = s(751841),
    k = s(374523),
    g = s(233470),
    A = s(260498),
    E = s(313537),
    G = s(465080),
    b = s(390924),
    v = s(425853),
    x = s(191850),
    P = s(792996),
    y = s(892715);
function m(e) {
    let { guildId: t, projectId: s } = e,
        { project: b, settled: v } = (0, k.A)(s),
        m = (0, n.bG)([A.Ay], () => "success" === A.Ay.getGuildProjectsFetchState(t) && (0, g.GG)(s), [t, s]),
        C = (0, u.zy)(),
        S = null != b && (0, E.fL)(b) !== t,
        w = C.state;
    (c.useEffect(() => {
        S && (0, d.bG)({ pathname: (0, E.z$)(s), state: w });
    }, [S, s, w]),
        c.useEffect(() => {
            "unattempted" === A.Ay.getGuildProjectsFetchState(t) && (0, g.listProjects)(t);
        }, [t]),
        c.useEffect(() => {
            (0, h.jQ)(s, { inServer: !0 });
        }, [s]),
        c.useEffect(() => h.mE, []),
        c.useEffect(() => ((0, G.k3)(s, !0), () => (0, G.k3)(s, !1)), [s]),
        (0, j.wB)(s),
        (0, i.r)(S || w?.conjureOpenTracked === !0 ? null : s, w?.conjureEntryPoint));
    let B = c.useCallback(() => (0, d.bG)((0, p.EB)(t)), [t]);
    return S || (null == b && !v)
        ? (0, r.jsx)("div", {
              className: y.l,
              children:
                  !S && m
                      ? (0, r.jsx)(l.D, { variant: "heading-lg/semibold", children: P.intl.string(x.default.Y2sGrh) })
                      : (0, r.jsx)(a.y, {}),
          })
        : (0, r.jsx)(f.A.Provider, {
              value: s,
              children: (0, r.jsx)(o.A, { project: b, projectsLoaded: v, onBack: B, guildId: t }),
          });
}
s.d(
    t,
    {},
    {
        default: function (e) {
            let { guildId: t, projectId: s } = e;
            return (0, b.A)(t, "ConjureServerProjectPage")
                ? (0, r.jsx)(m, { guildId: t, projectId: s }, s)
                : (0, r.jsx)(v.A, {});
        },
    },
);
