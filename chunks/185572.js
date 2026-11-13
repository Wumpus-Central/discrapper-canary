n.r(e);
var u = n(477900),
    t = n(582128),
    s = n(806163),
    r = n(834730),
    c = n(289873),
    d = n(976860),
    a = n(200789),
    i = n(532667),
    o = n(404373),
    j = n(499466),
    f = n(712236),
    h = n(233470),
    x = n(434279),
    p = n(260498),
    m = n(16619),
    E = n(313537),
    k = n(390924),
    v = n(425853),
    A = n(227007),
    w = n(398773),
    P = n(751841),
    b = n(374523),
    g = n(191850),
    y = n(792996),
    I = n(159308);
let B = "ConjurePage";
function C() {
    return (0, u.jsx)("div", {
        className: I.l,
        children: (0, u.jsx)(r.E, {
            variant: "body-md/normal",
            color: "text-muted",
            children: y.intl.string(g.default.BGh3xB),
        }),
    });
}
function G() {
    (0, d.bG)((0, P.hU)(null));
}
function N(l) {
    let { projectId: e, workspaceGuildId: n } = l,
        { project: r, settled: j } = (0, b.A)(e);
    (0, o.wB)(e);
    let f = (null != r ? (0, x.wu)(r) : null) ?? n,
        h = (0, s.zy)().state,
        p = (0, E.fL)(r),
        m = (0, k.A)(p, B),
        g = (0, a.r)(null == p ? e : null, h?.conjureEntryPoint),
        y = null != p || (null == r && !j);
    return (t.useEffect(() => {
        (0, w.jQ)(e, { inServer: y });
    }, [e, y]),
    t.useEffect(() => {
        null != p && m && (0, d.bG)({ pathname: (0, P.Oj)(p, e), state: { ...h, conjureOpenTracked: g(e) } });
    }, [p, m, e, h, g]),
    null == p || m)
        ? null == p && (null != r || j)
            ? null == f
                ? (0, u.jsx)(C, {})
                : (0, u.jsx)(A.A.Provider, {
                      value: e,
                      children: (0, u.jsx)(i.A, { project: r, projectsLoaded: j, onBack: G, guildId: f }),
                  })
            : (0, u.jsx)("div", { className: I.l, children: (0, u.jsx)(c.y, {}) })
        : (0, u.jsx)(v.A, {});
}
function O(l) {
    let { projectId: e } = l,
        n = (0, m.rX)(B);
    return (t.useEffect(() => {
        p.Ay.hasFetchedOwnedProjects() || (0, h.listProjects)();
    }, []),
    t.useEffect(() => {
        null == e && (0, w.jQ)(null);
    }, [e]),
    t.useEffect(() => w.mE, []),
    null == e)
        ? (0, u.jsx)("div", {
              className: I.i,
              children: null == n ? (0, u.jsx)(C, {}) : (0, u.jsx)(f.A, { guildId: n, onConjurePage: !0 }),
          })
        : (0, u.jsx)(N, { projectId: e, workspaceGuildId: n }, e);
}
n.d(
    e,
    {},
    {
        default: function (l) {
            let { projectId: e } = l;
            return (0, j.TW)(B) ? (0, u.jsx)(O, { projectId: e }) : null;
        },
    },
);
