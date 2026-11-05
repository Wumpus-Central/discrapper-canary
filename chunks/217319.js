(t.r(n), t.d(n, { default: () => V }));
var l = t(477900),
    s = t(582128),
    r = t(806163),
    a = t(499466),
    i = t(16619),
    o = t(751841),
    c = t(381991),
    d = t(503698),
    u = t.n(d),
    j = t(855986),
    m = t(534514),
    x = t(866665),
    h = t(408278),
    p = t(366605),
    g = t(95362),
    k = t(683438),
    C = t(939249),
    b = t(152367),
    f = t(834730),
    A = t(525113),
    v = t(441935),
    y = t(615890),
    N = t(260498);
function P(e) {
    let n = (0, y.Ay)(),
        t = (0, j.bG)([N.Ay], () => N.Ay.getOwnedProjectsFetchState()),
        l = e.trim().toLocaleLowerCase(),
        r = s.useMemo(() => ("" === l ? n : n.filter((e) => e.name.toLocaleLowerCase().includes(l))), [n, l]);
    return r.length > 0
        ? { kind: "projects", projects: r }
        : n.length > 0
          ? { kind: "no_match" }
          : "error" === t
            ? { kind: "error" }
            : "success" !== t
              ? { kind: "loading" }
              : { kind: "empty" };
}
var w = t(821609),
    I = t(289873),
    S = t(233470),
    L = t(685105),
    W = t(191850),
    D = t(792996),
    E = t(655074);
function M(e) {
    let {
            onSelect: n,
            query: t = "",
            selectedProjectId: s = null,
            renderProjectActions: r,
            onProjectContextMenu: a,
        } = e,
        i = P(t);
    return "projects" === i.kind
        ? (0, l.jsx)(L.A, {
              projects: i.projects,
              onSelect: n,
              selectedProjectId: s,
              renderProjectActions: r,
              onProjectContextMenu: a,
          })
        : "no_match" === i.kind
          ? (0, l.jsx)(f.E, {
                variant: "body-sm/normal",
                color: "text-subtle",
                className: E.I,
                children: D.intl.string(W.default.X37fkR),
            })
          : "error" === i.kind
            ? (0, l.jsxs)("div", {
                  className: E.E,
                  children: [
                      (0, l.jsx)(f.E, {
                          variant: "body-sm/normal",
                          color: "text-muted",
                          children: D.intl.string(W.default.DJAPMO),
                      }),
                      (0, l.jsx)(w.$, {
                          variant: "secondary",
                          size: "sm",
                          text: D.intl.string(W.default["WFJ/vb"]),
                          onClick: () => (0, S.listProjects)(),
                      }),
                  ],
              })
            : "loading" === i.kind
              ? (0, l.jsx)("div", { className: E.E, children: (0, l.jsx)(I.y, {}) })
              : null;
}
var _ = t(602991),
    z = t(919485),
    J = t(588359),
    U = t(434279),
    G = t(972013),
    X = t(927731),
    $ = t(111582),
    q = t(101766),
    F = t(5127);
function K(e) {
    let { selectedProjectId: n, workspaceGuildId: t, onNavigate: r } = e,
        [a, i] = s.useState(""),
        o = (0, q.A)("sidebar"),
        c = (0, y.$x)(),
        d = a.trim().toLocaleLowerCase(),
        N = s.useMemo(() => c.filter((e) => e.name.toLocaleLowerCase().includes(d)), [c, d]),
        w = "empty" === P(a).kind && 0 === c.length,
        I = s.useCallback((e) => r(e.id, "project_list"), [r]),
        S = s.useCallback(
            (e) => {
                let n = (0, U.wu)(e) ?? t;
                return null != n ? (0, l.jsx)(_.S, { project: e, guildId: n }) : null;
            },
            [t],
        ),
        E = s.useCallback(
            (e, n) => {
                let l = (0, U.wu)(n) ?? t;
                null != l && (0, _.V)(e, n, l);
            },
            [t],
        ),
        K = s.useCallback((e) => r(e, "create"), [r]),
        O = (0, $.A)(t, K),
        V = (0, j.bG)([G.A], () => G.A.isPinned()),
        H = D.intl.string(W.default["DE7U+m"]),
        Q = null == n;
    return (0, l.jsxs)("nav", {
        className: F.pz,
        "aria-label": D.intl.string(W.default.uk6jhJ),
        children: [
            (0, l.jsxs)("header", {
                className: F.wx,
                children: [
                    (0, l.jsxs)("div", {
                        className: F.DD,
                        children: [
                            (0, l.jsx)(m.D, {
                                variant: "body-md/semibold",
                                color: "text-strong",
                                lineClamp: 1,
                                className: F.UU,
                                children: D.intl.string(W.default.uk6jhJ),
                            }),
                            (0, l.jsx)(A.A, { className: F.vr }),
                        ],
                    }),
                    (0, l.jsxs)("div", {
                        className: F.$s,
                        children: [
                            (0, l.jsx)(v.A, { importing: O.importing, disabled: null == t, onClick: O.open }),
                            V
                                ? null
                                : (0, l.jsx)(x.m, {
                                      text: H,
                                      position: "bottom",
                                      asContainer: !0,
                                      ariaHidden: !0,
                                      children: (0, l.jsx)(h.K, {
                                          icon: p.PinIcon,
                                          variant: "icon-only",
                                          size: "sm",
                                          "aria-label": H,
                                          onClick: X._,
                                      }),
                                  }),
                            O.input,
                        ],
                    }),
                ],
            }),
            (0, l.jsxs)(g.Ip, {
                ref: o,
                className: F.XG,
                fade: !0,
                children: [
                    (0, l.jsx)("div", {
                        className: F.$P,
                        children: (0, l.jsx)(k.I, {
                            query: a,
                            onChange: i,
                            onClear: () => i(""),
                            size: "sm",
                            placeholder: D.intl.string(W.default["2y8sUh"]),
                            "aria-label": D.intl.string(W.default.u0kEN9),
                        }),
                    }),
                    (0, l.jsxs)(C.D, {
                        className: u()(F.ap, F.QI, { [F.Xw]: Q }),
                        "aria-current": Q ? "page" : void 0,
                        onClick: () => r(null),
                        children: [
                            (0, l.jsx)("span", {
                                className: F.DW,
                                children: (0, l.jsx)(b.MagicWandIcon, { size: "md", color: "currentColor" }),
                            }),
                            (0, l.jsx)(f.E, {
                                variant: "body-md/medium",
                                color: "none",
                                children: D.intl.string(W.default.koUZKY),
                            }),
                        ],
                    }),
                    (0, l.jsx)(z.A, {
                        title: D.intl.string(W.default.lqroiy),
                        className: F.uW,
                        children: (0, l.jsx)(M, {
                            query: a,
                            onSelect: I,
                            selectedProjectId: n,
                            renderProjectActions: S,
                            onProjectContextMenu: E,
                        }),
                    }),
                    N.length > 0
                        ? (0, l.jsx)(z.A, {
                              title: D.intl.string(W.default.ygVWuJ),
                              className: F.uW,
                              children: (0, l.jsx)(L.A, {
                                  projects: N,
                                  onSelect: I,
                                  selectedProjectId: n,
                                  renderProjectActions: S,
                                  onProjectContextMenu: E,
                                  showServer: !0,
                              }),
                          })
                        : null,
                ],
            }),
            w ? (0, l.jsx)(J.A, {}) : null,
        ],
    });
}
function O() {
    let e = (0, r.W5)({ path: o._g, exact: !0 }),
        n = (0, i.rX)("ConjureAppSidebar");
    return (0, l.jsx)(K, { selectedProjectId: e?.params.projectId ?? null, workspaceGuildId: n, onNavigate: c.A });
}
function V() {
    return (0, a.TW)("ConjureAppSidebar") ? (0, l.jsx)(O, {}) : null;
}
