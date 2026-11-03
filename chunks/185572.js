(n.r(l), n.d(l, { default: () => L }));
var t = n(477900),
    u = n(582128),
    s = n(806163),
    r = n(834730),
    c = n(289873),
    d = n(976860),
    a = n(200789),
    i = n(847056),
    j = n(404373),
    o = n(97005),
    f = n(944996),
    x = n(371169),
    h = n(434279),
    p = n(260498),
    m = n(16619),
    E = n(313537),
    k = n(390924),
    v = n(425853),
    A = n(227007),
    w = n(398773),
    P = n(751841),
    g = n(374523),
    I = n(809526),
    b = n(105292),
    y = n(159308);
let B = "ConjurePage";
function C() {
    return (0, t.jsx)("div", {
        className: y.l,
        children: (0, t.jsx)(r.E, {
            variant: "text-md/normal",
            color: "text-muted",
            children: b.intl.string(I.default.BGh3xB),
        }),
    });
}
function G() {
    (0, d.bG)((0, P.hU)(null));
}
function N(e) {
    let { projectId: l, workspaceGuildId: n } = e,
        { project: r, settled: o } = (0, g.A)(l);
    (0, j.wB)(l);
    let f = (null != r ? (0, h.wu)(r) : null) ?? n,
        x = (0, s.zy)().state,
        p = (0, E.fL)(r),
        m = (0, k.A)(p, B),
        I = (0, a.r)(null == p ? l : null, x?.conjureEntryPoint),
        b = null != p || (null == r && !o);
    return (u.useEffect(() => {
        (0, w.jQ)(l, { inServer: b });
    }, [l, b]),
    u.useEffect(() => {
        null != p && m && (0, d.bG)({ pathname: (0, P.Oj)(p, l), state: { ...x, conjureOpenTracked: I(l) } });
    }, [p, m, l, x, I]),
    null == p || m)
        ? null == p && (null != r || o)
            ? null == f
                ? (0, t.jsx)(C, {})
                : (0, t.jsx)(A.A.Provider, {
                      value: l,
                      children: (0, t.jsx)(i.A, { project: r, projectsLoaded: o, onBack: G, guildId: f }),
                  })
            : (0, t.jsx)("div", { className: y.l, children: (0, t.jsx)(c.y, {}) })
        : (0, t.jsx)(v.A, {});
}
function O(e) {
    let { projectId: l } = e,
        n = (0, m.rX)(B);
    return (u.useEffect(() => {
        p.Ay.hasFetchedOwnedProjects() || (0, x.listProjects)();
    }, []),
    u.useEffect(() => {
        null == l && (0, w.jQ)(null);
    }, [l]),
    u.useEffect(() => w.mE, []),
    null == l)
        ? (0, t.jsx)("div", {
              className: y.i,
              children: null == n ? (0, t.jsx)(C, {}) : (0, t.jsx)(f.A, { guildId: n, onConjurePage: !0 }),
          })
        : (0, t.jsx)(N, { projectId: l, workspaceGuildId: n }, l);
}
function L(e) {
    let { projectId: l } = e;
    return (0, o.TW)(B) ? (0, t.jsx)(O, { projectId: l }) : null;
}
