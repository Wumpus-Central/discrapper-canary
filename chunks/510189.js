(n.r(t), n.d(t, { default: () => K }));
var s = n(477900),
    l = n(582128),
    r = n(806163),
    a = n(97005),
    i = n(16619),
    c = n(751841),
    o = n(381991),
    d = n(503698),
    u = n.n(d),
    j = n(17928),
    x = n(297264),
    m = n(866665),
    h = n(408278),
    p = n(366605),
    k = n(364522),
    g = n(683438),
    f = n(939249),
    v = n(152367),
    C = n(834730),
    b = n(525113),
    A = n(441935),
    N = n(821609),
    P = n(289873),
    y = n(371169),
    I = n(260498),
    w = n(281091),
    D = n(186340),
    E = n(87501),
    S = n(105292),
    _ = n(655074);
function z(e) {
    let t,
        n,
        r,
        a,
        {
            onSelect: i,
            query: c = "",
            selectedProjectId: o = null,
            renderProjectActions: d,
            onProjectContextMenu: u,
        } = e,
        x =
            ((t = (0, w.A)()),
            (n = (0, j.bG)([I.Ay], () => I.Ay.getOwnedProjectsFetchState())),
            (r = c.trim().toLocaleLowerCase()),
            (a = l.useMemo(() => ("" === r ? t : t.filter((e) => e.name.toLocaleLowerCase().includes(r))), [t, r]))
                .length > 0
                ? { kind: "projects", projects: a }
                : t.length > 0
                  ? { kind: "no_match" }
                  : "error" === n
                    ? { kind: "error" }
                    : "success" !== n
                      ? { kind: "loading" }
                      : { kind: "empty" });
    return "projects" === x.kind
        ? (0, s.jsx)(D.A, {
              projects: x.projects,
              onSelect: i,
              selectedProjectId: o,
              renderProjectActions: d,
              onProjectContextMenu: u,
          })
        : "no_match" === x.kind
          ? (0, s.jsx)(C.E, {
                variant: "text-sm/normal",
                color: "text-subtle",
                className: _.I,
                children: S.intl.string(E.default.X37fkR),
            })
          : "error" === x.kind
            ? (0, s.jsxs)("div", {
                  className: _.E,
                  children: [
                      (0, s.jsx)(C.E, {
                          variant: "text-sm/normal",
                          color: "text-muted",
                          children: S.intl.string(E.default.DJAPMO),
                      }),
                      (0, s.jsx)(N.$, {
                          variant: "secondary",
                          size: "sm",
                          text: S.intl.string(E.default["WFJ/vb"]),
                          onClick: () => (0, y.listProjects)(),
                      }),
                  ],
              })
            : "loading" === x.kind
              ? (0, s.jsx)("div", { className: _.E, children: (0, s.jsx)(P.y, {}) })
              : (0, s.jsx)(C.E, {
                    variant: "text-sm/normal",
                    color: "text-subtle",
                    className: _.I,
                    children: S.intl.string(E.default["9/5sLV"]),
                });
}
var L = n(380654),
    W = n(919485),
    G = n(434279),
    J = n(972013),
    M = n(927731),
    X = n(111582),
    q = n(101766),
    U = n(5127);
function $(e) {
    let { selectedProjectId: t, workspaceGuildId: n, onNavigate: r } = e,
        [a, i] = l.useState(""),
        c = (0, q.A)("sidebar"),
        o = l.useCallback((e) => r(e.id), [r]),
        d = l.useCallback(
            (e) => {
                let t = (0, G.wu)(e) ?? n;
                return null != t ? (0, s.jsx)(L.S, { project: e, guildId: t }) : null;
            },
            [n],
        ),
        N = l.useCallback(
            (e, t) => {
                let s = (0, G.wu)(t) ?? n;
                null != s && (0, L.V)(e, t, s);
            },
            [n],
        ),
        P = (0, X.A)(n, r),
        y = (0, j.bG)([J.A], () => J.A.isPinned()),
        I = S.intl.string(E.default["DE7U+m"]),
        w = null == t;
    return (0, s.jsxs)("nav", {
        className: U.pz,
        "aria-label": S.intl.string(E.default.uk6jhJ),
        children: [
            (0, s.jsxs)("header", {
                className: U.wx,
                children: [
                    (0, s.jsxs)("div", {
                        className: U.DD,
                        children: [
                            (0, s.jsx)(x.D, {
                                variant: "display-sm",
                                color: "text-strong",
                                className: U.Ss,
                                children: S.intl.string(E.default.uk6jhJ),
                            }),
                            (0, s.jsx)(b.A, { className: U.vr }),
                        ],
                    }),
                    (0, s.jsxs)("div", {
                        className: U.$s,
                        children: [
                            (0, s.jsx)(A.A, { importing: P.importing, disabled: null == n, onClick: P.open }),
                            y
                                ? null
                                : (0, s.jsx)(m.m, {
                                      text: I,
                                      position: "bottom",
                                      asContainer: !0,
                                      ariaHidden: !0,
                                      children: (0, s.jsx)(h.K, {
                                          icon: p.t,
                                          variant: "icon-only",
                                          size: "sm",
                                          "aria-label": I,
                                          onClick: M._,
                                      }),
                                  }),
                            P.input,
                        ],
                    }),
                ],
            }),
            (0, s.jsxs)(k.Ip, {
                ref: c,
                className: U.XG,
                fade: !0,
                children: [
                    (0, s.jsx)("div", {
                        className: U.$P,
                        children: (0, s.jsx)(g.I, {
                            query: a,
                            onChange: i,
                            onClear: () => i(""),
                            size: "sm",
                            placeholder: S.intl.string(E.default["2y8sUh"]),
                            "aria-label": S.intl.string(E.default.u0kEN9),
                        }),
                    }),
                    (0, s.jsxs)(f.D, {
                        className: u()(U.ap, U.QI, { [U.Xw]: w }),
                        "aria-current": w ? "page" : void 0,
                        onClick: () => r(null),
                        children: [
                            (0, s.jsx)("span", {
                                className: U.DW,
                                children: (0, s.jsx)(v.D, { size: "md", color: "currentColor" }),
                            }),
                            (0, s.jsx)(C.E, {
                                variant: "text-md/medium",
                                color: "none",
                                children: S.intl.string(E.default.koUZKY),
                            }),
                        ],
                    }),
                    (0, s.jsx)(W.A, {
                        title: S.intl.string(E.default.lqroiy),
                        className: U.uW,
                        children: (0, s.jsx)(z, {
                            query: a,
                            onSelect: o,
                            selectedProjectId: t,
                            renderProjectActions: d,
                            onProjectContextMenu: N,
                        }),
                    }),
                ],
            }),
        ],
    });
}
function F() {
    let e = (0, r.W5)({ path: c._g, exact: !0 }),
        t = (0, i.rX)("ConjureAppSidebar");
    return (0, s.jsx)($, { selectedProjectId: e?.params.projectId ?? null, workspaceGuildId: t, onNavigate: o.A });
}
function K() {
    return (0, a.TW)("ConjureAppSidebar") ? (0, s.jsx)(F, {}) : null;
}
