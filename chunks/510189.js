(n.r(t), n.d(t, { default: () => V }));
var l = n(477900),
    s = n(582128),
    r = n(806163),
    a = n(97005),
    i = n(16619),
    c = n(751841),
    o = n(381991),
    d = n(503698),
    u = n.n(d),
    j = n(17928),
    m = n(534514),
    x = n(866665),
    h = n(408278),
    p = n(366605),
    k = n(364522),
    g = n(683438),
    C = n(939249),
    f = n(152367),
    A = n(834730),
    v = n(525113),
    b = n(441935),
    N = n(741907),
    P = n(260498);
function w(e) {
    let t = (0, N.Ay)(),
        n = (0, j.bG)([P.Ay], () => P.Ay.getOwnedProjectsFetchState()),
        l = e.trim().toLocaleLowerCase(),
        r = s.useMemo(() => ("" === l ? t : t.filter((e) => e.name.toLocaleLowerCase().includes(l))), [t, l]);
    return r.length > 0
        ? { kind: "projects", projects: r }
        : t.length > 0
          ? { kind: "no_match" }
          : "error" === n
            ? { kind: "error" }
            : "success" !== n
              ? { kind: "loading" }
              : { kind: "empty" };
}
var y = n(821609),
    I = n(289873),
    S = n(371169),
    D = n(186340),
    L = n(809526),
    E = n(105292),
    W = n(655074);
function _(e) {
    let {
            onSelect: t,
            query: n = "",
            selectedProjectId: s = null,
            renderProjectActions: r,
            onProjectContextMenu: a,
        } = e,
        i = w(n);
    return "projects" === i.kind
        ? (0, l.jsx)(D.A, {
              projects: i.projects,
              onSelect: t,
              selectedProjectId: s,
              renderProjectActions: r,
              onProjectContextMenu: a,
          })
        : "no_match" === i.kind
          ? (0, l.jsx)(A.E, {
                variant: "text-sm/normal",
                color: "text-subtle",
                className: W.I,
                children: E.intl.string(L.default.X37fkR),
            })
          : "error" === i.kind
            ? (0, l.jsxs)("div", {
                  className: W.E,
                  children: [
                      (0, l.jsx)(A.E, {
                          variant: "text-sm/normal",
                          color: "text-muted",
                          children: E.intl.string(L.default.DJAPMO),
                      }),
                      (0, l.jsx)(y.$, {
                          variant: "secondary",
                          size: "sm",
                          text: E.intl.string(L.default["WFJ/vb"]),
                          onClick: () => (0, S.listProjects)(),
                      }),
                  ],
              })
            : "loading" === i.kind
              ? (0, l.jsx)("div", { className: W.E, children: (0, l.jsx)(I.y, {}) })
              : null;
}
var M = n(602991),
    z = n(919485),
    J = n(588359),
    U = n(434279),
    G = n(972013),
    X = n(927731),
    $ = n(111582),
    q = n(101766),
    F = n(5127);
function K(e) {
    let { selectedProjectId: t, workspaceGuildId: n, onNavigate: r } = e,
        [a, i] = s.useState(""),
        c = (0, q.A)("sidebar"),
        o = (0, N.$x)(),
        d = a.trim().toLocaleLowerCase(),
        P = s.useMemo(() => o.filter((e) => e.name.toLocaleLowerCase().includes(d)), [o, d]),
        y = "empty" === w(a).kind && 0 === o.length,
        I = s.useCallback((e) => r(e.id, "project_list"), [r]),
        S = s.useCallback(
            (e) => {
                let t = (0, U.wu)(e) ?? n;
                return null != t ? (0, l.jsx)(M.S, { project: e, guildId: t }) : null;
            },
            [n],
        ),
        W = s.useCallback(
            (e, t) => {
                let l = (0, U.wu)(t) ?? n;
                null != l && (0, M.V)(e, t, l);
            },
            [n],
        ),
        K = s.useCallback((e) => r(e, "create"), [r]),
        O = (0, $.A)(n, K),
        V = (0, j.bG)([G.A], () => G.A.isPinned()),
        H = E.intl.string(L.default["DE7U+m"]),
        Q = null == t;
    return (0, l.jsxs)("nav", {
        className: F.pz,
        "aria-label": E.intl.string(L.default.uk6jhJ),
        children: [
            (0, l.jsxs)("header", {
                className: F.wx,
                children: [
                    (0, l.jsxs)("div", {
                        className: F.DD,
                        children: [
                            (0, l.jsx)(m.D, {
                                variant: "text-md/semibold",
                                color: "text-strong",
                                lineClamp: 1,
                                className: F.UU,
                                children: E.intl.string(L.default.uk6jhJ),
                            }),
                            (0, l.jsx)(v.A, { className: F.vr }),
                        ],
                    }),
                    (0, l.jsxs)("div", {
                        className: F.$s,
                        children: [
                            (0, l.jsx)(b.A, { importing: O.importing, disabled: null == n, onClick: O.open }),
                            V
                                ? null
                                : (0, l.jsx)(x.m, {
                                      text: H,
                                      position: "bottom",
                                      asContainer: !0,
                                      ariaHidden: !0,
                                      children: (0, l.jsx)(h.K, {
                                          icon: p.t,
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
            (0, l.jsxs)(k.Ip, {
                ref: c,
                className: F.XG,
                fade: !0,
                children: [
                    (0, l.jsx)("div", {
                        className: F.$P,
                        children: (0, l.jsx)(g.I, {
                            query: a,
                            onChange: i,
                            onClear: () => i(""),
                            size: "sm",
                            placeholder: E.intl.string(L.default["2y8sUh"]),
                            "aria-label": E.intl.string(L.default.u0kEN9),
                        }),
                    }),
                    (0, l.jsxs)(C.D, {
                        className: u()(F.ap, F.QI, { [F.Xw]: Q }),
                        "aria-current": Q ? "page" : void 0,
                        onClick: () => r(null),
                        children: [
                            (0, l.jsx)("span", {
                                className: F.DW,
                                children: (0, l.jsx)(f.D, { size: "md", color: "currentColor" }),
                            }),
                            (0, l.jsx)(A.E, {
                                variant: "text-md/medium",
                                color: "none",
                                children: E.intl.string(L.default.koUZKY),
                            }),
                        ],
                    }),
                    (0, l.jsx)(z.A, {
                        title: E.intl.string(L.default.lqroiy),
                        className: F.uW,
                        children: (0, l.jsx)(_, {
                            query: a,
                            onSelect: I,
                            selectedProjectId: t,
                            renderProjectActions: S,
                            onProjectContextMenu: W,
                        }),
                    }),
                    P.length > 0
                        ? (0, l.jsx)(z.A, {
                              title: E.intl.string(L.default.ygVWuJ),
                              className: F.uW,
                              children: (0, l.jsx)(D.A, {
                                  projects: P,
                                  onSelect: I,
                                  selectedProjectId: t,
                                  renderProjectActions: S,
                                  onProjectContextMenu: W,
                                  showServer: !0,
                              }),
                          })
                        : null,
                ],
            }),
            y ? (0, l.jsx)(J.A, {}) : null,
        ],
    });
}
function O() {
    let e = (0, r.W5)({ path: c._g, exact: !0 }),
        t = (0, i.rX)("ConjureAppSidebar");
    return (0, l.jsx)(K, { selectedProjectId: e?.params.projectId ?? null, workspaceGuildId: t, onNavigate: o.A });
}
function V() {
    return (0, a.TW)("ConjureAppSidebar") ? (0, l.jsx)(O, {}) : null;
}
