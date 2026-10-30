(t.r(n), t.d(n, { default: () => H }));
var l = t(477900),
    s = t(582128),
    r = t(806163),
    i = t(97005),
    a = t(16619),
    c = t(751841),
    o = t(381991),
    d = t(503698),
    u = t.n(d),
    j = t(17928),
    m = t(297264),
    x = t(866665),
    p = t(408278),
    h = t(366605),
    k = t(364522),
    g = t(683438),
    f = t(939249),
    C = t(152367),
    v = t(834730),
    b = t(525113),
    A = t(441935),
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
    E = t(186340),
    S = t(809526),
    _ = t(105292),
    z = t(655074);
function U(e) {
    let {
            onSelect: n,
            query: t = "",
            selectedProjectId: s = null,
            renderProjectActions: r,
            onProjectContextMenu: i,
        } = e,
        a = P(t);
    return "projects" === a.kind
        ? (0, l.jsx)(E.A, {
              projects: a.projects,
              onSelect: n,
              selectedProjectId: s,
              renderProjectActions: r,
              onProjectContextMenu: i,
          })
        : "no_match" === a.kind
          ? (0, l.jsx)(v.E, {
                variant: "text-sm/normal",
                color: "text-subtle",
                className: z.I,
                children: _.intl.string(S.default.X37fkR),
            })
          : "error" === a.kind
            ? (0, l.jsxs)("div", {
                  className: z.E,
                  children: [
                      (0, l.jsx)(v.E, {
                          variant: "text-sm/normal",
                          color: "text-muted",
                          children: _.intl.string(S.default.DJAPMO),
                      }),
                      (0, l.jsx)(w.$, {
                          variant: "secondary",
                          size: "sm",
                          text: _.intl.string(S.default["WFJ/vb"]),
                          onClick: () => (0, D.listProjects)(),
                      }),
                  ],
              })
            : "loading" === a.kind
              ? (0, l.jsx)("div", { className: z.E, children: (0, l.jsx)(I.y, {}) })
              : null;
}
var W = t(602991),
    G = t(919485),
    J = t(588359),
    L = t(434279),
    M = t(972013),
    X = t(927731),
    q = t(111582),
    $ = t(101766),
    F = t(5127);
function K(e) {
    let { selectedProjectId: n, workspaceGuildId: t, onNavigate: r } = e,
        [i, a] = s.useState(""),
        c = (0, $.A)("sidebar"),
        o = "empty" === P(i).kind,
        d = s.useCallback((e) => r(e.id), [r]),
        N = s.useCallback(
            (e) => {
                let n = (0, L.wu)(e) ?? t;
                return null != n ? (0, l.jsx)(W.S, { project: e, guildId: n }) : null;
            },
            [t],
        ),
        y = s.useCallback(
            (e, n) => {
                let l = (0, L.wu)(n) ?? t;
                null != l && (0, W.V)(e, n, l);
            },
            [t],
        ),
        w = (0, q.A)(t, r),
        I = (0, j.bG)([M.A], () => M.A.isPinned()),
        D = _.intl.string(S.default["DE7U+m"]),
        E = null == n;
    return (0, l.jsxs)("nav", {
        className: F.pz,
        "aria-label": _.intl.string(S.default.uk6jhJ),
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
                                children: _.intl.string(S.default.uk6jhJ),
                            }),
                            (0, l.jsx)(b.A, { className: F.vr }),
                        ],
                    }),
                    (0, l.jsxs)("div", {
                        className: F.$s,
                        children: [
                            (0, l.jsx)(A.A, { importing: w.importing, disabled: null == t, onClick: w.open }),
                            I
                                ? null
                                : (0, l.jsx)(x.m, {
                                      text: D,
                                      position: "bottom",
                                      asContainer: !0,
                                      ariaHidden: !0,
                                      children: (0, l.jsx)(p.K, {
                                          icon: h.t,
                                          variant: "icon-only",
                                          size: "sm",
                                          "aria-label": D,
                                          onClick: X._,
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
                            query: i,
                            onChange: a,
                            onClear: () => a(""),
                            size: "sm",
                            placeholder: _.intl.string(S.default["2y8sUh"]),
                            "aria-label": _.intl.string(S.default.u0kEN9),
                        }),
                    }),
                    (0, l.jsxs)(f.D, {
                        className: u()(F.ap, F.QI, { [F.Xw]: E }),
                        "aria-current": E ? "page" : void 0,
                        onClick: () => r(null),
                        children: [
                            (0, l.jsx)("span", {
                                className: F.DW,
                                children: (0, l.jsx)(C.D, { size: "md", color: "currentColor" }),
                            }),
                            (0, l.jsx)(v.E, {
                                variant: "text-md/medium",
                                color: "none",
                                children: _.intl.string(S.default.koUZKY),
                            }),
                        ],
                    }),
                    (0, l.jsx)(G.A, {
                        title: _.intl.string(S.default.lqroiy),
                        className: F.uW,
                        children: (0, l.jsx)(U, {
                            query: i,
                            onSelect: d,
                            selectedProjectId: n,
                            renderProjectActions: N,
                            onProjectContextMenu: y,
                        }),
                    }),
                ],
            }),
            o ? (0, l.jsx)(J.A, {}) : null,
        ],
    });
}
function O() {
    let e = (0, r.W5)({ path: c._g, exact: !0 }),
        n = (0, a.rX)("ConjureAppSidebar");
    return (0, l.jsx)(K, { selectedProjectId: e?.params.projectId ?? null, workspaceGuildId: n, onNavigate: o.Ay });
}
function H() {
    return (0, i.TW)("ConjureAppSidebar") ? (0, l.jsx)(O, {}) : null;
}
