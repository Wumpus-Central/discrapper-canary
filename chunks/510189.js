(t.r(n), t.d(n, { default: () => H }));
var l = t(477900),
    s = t(582128),
    r = t(806163),
    a = t(97005),
    i = t(16619),
    c = t(751841),
    o = t(381991),
    d = t(503698),
    u = t.n(d),
    j = t(17928),
    x = t(297264),
    m = t(866665),
    p = t(408278),
    h = t(366605),
    k = t(364522),
    g = t(683438),
    f = t(939249),
    v = t(152367),
    C = t(834730),
    A = t(525113),
    b = t(441935),
    N = t(260498),
    y = t(741907);
function P(e) {
    let n = (0, y.A)(),
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
    D = t(371169),
    S = t(186340),
    E = t(87501),
    _ = t(105292),
    z = t(655074);
function W(e) {
    let {
            onSelect: n,
            query: t = "",
            selectedProjectId: s = null,
            renderProjectActions: r,
            onProjectContextMenu: a,
        } = e,
        i = P(t);
    return "projects" === i.kind
        ? (0, l.jsx)(S.A, {
              projects: i.projects,
              onSelect: n,
              selectedProjectId: s,
              renderProjectActions: r,
              onProjectContextMenu: a,
          })
        : "no_match" === i.kind
          ? (0, l.jsx)(C.E, {
                variant: "text-sm/normal",
                color: "text-subtle",
                className: z.I,
                children: _.intl.string(E.default.X37fkR),
            })
          : "error" === i.kind
            ? (0, l.jsxs)("div", {
                  className: z.E,
                  children: [
                      (0, l.jsx)(C.E, {
                          variant: "text-sm/normal",
                          color: "text-muted",
                          children: _.intl.string(E.default.DJAPMO),
                      }),
                      (0, l.jsx)(w.$, {
                          variant: "secondary",
                          size: "sm",
                          text: _.intl.string(E.default["WFJ/vb"]),
                          onClick: () => (0, D.listProjects)(),
                      }),
                  ],
              })
            : "loading" === i.kind
              ? (0, l.jsx)("div", { className: z.E, children: (0, l.jsx)(I.y, {}) })
              : null;
}
var G = t(602991),
    J = t(919485),
    L = t(588359),
    M = t(434279),
    X = t(972013),
    q = t(927731),
    U = t(111582),
    $ = t(101766),
    F = t(5127);
function K(e) {
    let { selectedProjectId: n, workspaceGuildId: t, onNavigate: r } = e,
        [a, i] = s.useState(""),
        c = (0, $.A)("sidebar"),
        o = "empty" === P(a).kind,
        d = s.useCallback((e) => r(e.id), [r]),
        N = s.useCallback(
            (e) => {
                let n = (0, M.wu)(e) ?? t;
                return null != n ? (0, l.jsx)(G.S, { project: e, guildId: n }) : null;
            },
            [t],
        ),
        y = s.useCallback(
            (e, n) => {
                let l = (0, M.wu)(n) ?? t;
                null != l && (0, G.V)(e, n, l);
            },
            [t],
        ),
        w = (0, U.A)(t, r),
        I = (0, j.bG)([X.A], () => X.A.isPinned()),
        D = _.intl.string(E.default["DE7U+m"]),
        S = null == n;
    return (0, l.jsxs)("nav", {
        className: F.pz,
        "aria-label": _.intl.string(E.default.uk6jhJ),
        children: [
            (0, l.jsxs)("header", {
                className: F.wx,
                children: [
                    (0, l.jsxs)("div", {
                        className: F.DD,
                        children: [
                            (0, l.jsx)(x.D, {
                                variant: "display-sm",
                                color: "text-strong",
                                className: F.Ss,
                                children: _.intl.string(E.default.uk6jhJ),
                            }),
                            (0, l.jsx)(A.A, { className: F.vr }),
                        ],
                    }),
                    (0, l.jsxs)("div", {
                        className: F.$s,
                        children: [
                            (0, l.jsx)(b.A, { importing: w.importing, disabled: null == t, onClick: w.open }),
                            I
                                ? null
                                : (0, l.jsx)(m.m, {
                                      text: D,
                                      position: "bottom",
                                      asContainer: !0,
                                      ariaHidden: !0,
                                      children: (0, l.jsx)(p.K, {
                                          icon: h.t,
                                          variant: "icon-only",
                                          size: "sm",
                                          "aria-label": D,
                                          onClick: q._,
                                      }),
                                  }),
                            w.input,
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
                            placeholder: _.intl.string(E.default["2y8sUh"]),
                            "aria-label": _.intl.string(E.default.u0kEN9),
                        }),
                    }),
                    (0, l.jsxs)(f.D, {
                        className: u()(F.ap, F.QI, { [F.Xw]: S }),
                        "aria-current": S ? "page" : void 0,
                        onClick: () => r(null),
                        children: [
                            (0, l.jsx)("span", {
                                className: F.DW,
                                children: (0, l.jsx)(v.D, { size: "md", color: "currentColor" }),
                            }),
                            (0, l.jsx)(C.E, {
                                variant: "text-md/medium",
                                color: "none",
                                children: _.intl.string(E.default.koUZKY),
                            }),
                        ],
                    }),
                    (0, l.jsx)(J.A, {
                        title: _.intl.string(E.default.lqroiy),
                        className: F.uW,
                        children: (0, l.jsx)(W, {
                            query: a,
                            onSelect: d,
                            selectedProjectId: n,
                            renderProjectActions: N,
                            onProjectContextMenu: y,
                        }),
                    }),
                ],
            }),
            o ? (0, l.jsx)(L.A, {}) : null,
        ],
    });
}
function O() {
    let e = (0, r.W5)({ path: c._g, exact: !0 }),
        n = (0, i.rX)("ConjureAppSidebar");
    return (0, l.jsx)(K, { selectedProjectId: e?.params.projectId ?? null, workspaceGuildId: n, onNavigate: o.Ay });
}
function H() {
    return (0, a.TW)("ConjureAppSidebar") ? (0, l.jsx)(O, {}) : null;
}
